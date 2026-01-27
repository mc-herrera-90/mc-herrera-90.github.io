#!/usr/bin/env bash
set -e

# =========================
# Compatibilidad con Bash 3.2
# =========================
lowercase() {
  if [[ "${BASH_VERSINFO[0]}" -ge 4 ]]; then
    echo "${1,,}"
  else
    echo "$1" | tr '[:upper:]' '[:lower:]'
  fi
}

# =========================
# VALIDACIÓN DE ARGUMENTOS
# =========================
if [[ -z "$1" ]]; then
  echo "❌ Uso: github-to-data.sh usuario/repo [subpath]"
  exit 1
fi

REPO_FULL="$1"            # ej: mcherrera-dev/mis-certificados
TARGET_PATH="$2"          # opcional
OWNER="${REPO_FULL%%/*}"
REPO="${REPO_FULL##*/}"

OUT_DIR="_data/generated"
OUT_FILE="$OUT_DIR/repo-${REPO}.yml"

IMAGE_EXTENSIONS="png|jpg|jpeg|gif|webp|svg|avif|ico"

mkdir -p "$OUT_DIR"

echo "▶ Generando data desde $OWNER/$REPO..."
echo "files:" > "$OUT_FILE"

# =========================
# 1️⃣ Branch por defecto
# =========================
REPO_API="https://api.github.com/repos/$OWNER/$REPO"
DEFAULT_BRANCH=$(curl -s "$REPO_API" | jq -r '.default_branch')

if [[ "$DEFAULT_BRANCH" == "null" || -z "$DEFAULT_BRANCH" ]]; then
  echo "❌ No se pudo obtener el branch por defecto"
  exit 1
fi

# =========================
# 2️⃣ SHA del branch
# =========================
BRANCH_API="https://api.github.com/repos/$OWNER/$REPO/branches/$DEFAULT_BRANCH"
SHA=$(curl -s "$BRANCH_API" | jq -r '.commit.sha')

if [[ "$SHA" == "null" || -z "$SHA" ]]; then
  echo "❌ No se pudo obtener el SHA"
  exit 1
fi

# =========================
# 3️⃣ Árbol completo
# =========================
TREE_API="https://api.github.com/repos/$OWNER/$REPO/git/trees/$SHA?recursive=1"
FILES=$(curl -s "$TREE_API" | jq -r '.tree[] | select(.type=="blob") | .path')

# =========================
# 🔹 Separar carpetas vs raíz
# =========================
DIR_FILES=$(echo "$FILES" | grep '/' | sort)
ROOT_FILES=$(echo "$FILES" | grep -v '/' | sort)

# =========================
# Compatibilidad con sed UTF-8
# =========================
indent_sed() {
  # Si es GNU sed (Linux) no hace falta nada especial
  if sed --version >/dev/null 2>&1; then
    sed 's/^/      /'
  else
    # BSD sed (macOS) con UTF-8
    LC_ALL=C.UTF-8 sed 's/^/      /'
  fi
}

process_file() {
  FILE="$1"

  if [[ -n "$TARGET_PATH" && "$FILE" != $TARGET_PATH/* ]]; then
    return
  fi

  EXT="${FILE##*.}"
  EXT_LOWER="$(lowercase "$EXT")"
  BASENAME="$(basename "$FILE")"
  RAW_URL="https://raw.githubusercontent.com/$OWNER/$REPO/$DEFAULT_BRANCH/$FILE"

  # 🔑 PREFIJO DEL REPO
  FULL_NAME="$REPO/$FILE"

  echo "  - name: \"$FULL_NAME\"" >> "$OUT_FILE"

  # Lenguajes especiales
  if [[ "$BASENAME" == ".gitignore" ]]; then
    LANGUAGE=".gitignore"
  elif [[ "$BASENAME" == "Gemfile" ]]; then
    LANGUAGE="ruby"
  elif [[ "$BASENAME" == "Gemfile.lock" ]]; then
    LANGUAGE="json"
  else
    LANGUAGE="$EXT_LOWER"
  fi

  # Imágenes / binarios (incluye favicon.ico)
  if [[ "$EXT_LOWER" =~ ^($IMAGE_EXTENSIONS)$ ]]; then
    echo "    url_img: \"$RAW_URL\"" >> "$OUT_FILE"
    echo "" >> "$OUT_FILE"
    return
  fi

  # Texto
  echo "    language: \"$LANGUAGE\"" >> "$OUT_FILE"
  echo "    content_file: |" >> "$OUT_FILE"
  curl -s "$RAW_URL" | indent_sed >> "$OUT_FILE"
  echo "" >> "$OUT_FILE"
}

# =========================
# 4️⃣ Carpetas primero
# =========================
echo "$DIR_FILES" | while read -r FILE; do
  process_file "$FILE"
done

# =========================
# 5️⃣ Archivos raíz después
# =========================
echo "$ROOT_FILES" | while read -r FILE; do
  process_file "$FILE"
done

echo "✔ Archivo generado en $OUT_FILE"
