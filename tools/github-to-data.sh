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
# Headers para GitHub API
# =========================
CURL_HEADERS=(
  -H "Accept: application/vnd.github+json"
  -H "X-GitHub-Api-Version: 2022-11-28"
)

# Si existe GITHUB_TOKEN, autenticar las peticiones.
if [[ -n "$GITHUB_TOKEN" ]]; then
  CURL_HEADERS+=(
    -H "Authorization: Bearer $GITHUB_TOKEN"
  )
else
  echo "⚠️  GITHUB_TOKEN no está definido."
  echo "   Las peticiones se harán sin autenticación."
  echo ""
fi

# =========================
# VALIDACIÓN DE ARGUMENTOS
# =========================
if [[ -z "$1" ]]; then
  echo "❌ Uso: github-to-data.sh usuario/repo [subpath]"
  echo ""
  echo "Ejemplos:"
  echo "  github-to-data.sh mcherrera-dev/template-jekyll-blank"
  echo "  github-to-data.sh mcherrera-dev/template-jekyll-blank assets"
  exit 1
fi

REPO_FULL="$1"
TARGET_PATH="$2"

OWNER="${REPO_FULL%%/*}"
REPO="${REPO_FULL##*/}"

# Validar formato owner/repo
if [[ "$OWNER" == "$REPO_FULL" || -z "$OWNER" || -z "$REPO" ]]; then
  echo "❌ El repositorio debe tener el formato:"
  echo "   usuario/repo"
  exit 1
fi

OUT_DIR="_data/generated"
OUT_FILE="$OUT_DIR/repo-${REPO}.yml"

IMAGE_EXTENSIONS="png|jpg|jpeg|gif|webp|svg|avif|ico"

mkdir -p "$OUT_DIR"

echo "▶ Generando data desde $OWNER/$REPO..."
echo "files:" > "$OUT_FILE"

# =========================
# 1️⃣ Obtener información del repositorio
# =========================
REPO_API="https://api.github.com/repos/$OWNER/$REPO"

echo "▶ Consultando repositorio..."

REPO_RESPONSE=$(curl -sS \
  -w '\n%{http_code}' \
  "${CURL_HEADERS[@]}" \
  "$REPO_API")

HTTP_CODE="${REPO_RESPONSE##*$'\n'}"
REPO_JSON="${REPO_RESPONSE%$'\n'*}"

if [[ "$HTTP_CODE" != "200" ]]; then
  echo "❌ GitHub respondió con HTTP $HTTP_CODE"
  echo ""

  if command -v jq >/dev/null 2>&1; then
    echo "$REPO_JSON" | jq .
  else
    echo "$REPO_JSON"
  fi

  exit 1
fi

# =========================
# 2️⃣ Branch por defecto
# =========================
DEFAULT_BRANCH=$(echo "$REPO_JSON" | jq -r '.default_branch // empty')

if [[ -z "$DEFAULT_BRANCH" ]]; then
  echo "❌ GitHub no devolvió el branch por defecto."
  echo "$REPO_JSON" | jq .
  exit 1
fi

echo "✔ Branch por defecto: $DEFAULT_BRANCH"

# =========================
# 3️⃣ SHA del branch
# =========================
BRANCH_API="https://api.github.com/repos/$OWNER/$REPO/branches/$DEFAULT_BRANCH"

BRANCH_RESPONSE=$(curl -sS \
  -w '\n%{http_code}' \
  "${CURL_HEADERS[@]}" \
  "$BRANCH_API")

HTTP_CODE="${BRANCH_RESPONSE##*$'\n'}"
BRANCH_JSON="${BRANCH_RESPONSE%$'\n'*}"

if [[ "$HTTP_CODE" != "200" ]]; then
  echo "❌ No se pudo obtener el branch '$DEFAULT_BRANCH' (HTTP $HTTP_CODE)"
  echo ""

  if command -v jq >/dev/null 2>&1; then
    echo "$BRANCH_JSON" | jq .
  else
    echo "$BRANCH_JSON"
  fi

  exit 1
fi

SHA=$(echo "$BRANCH_JSON" | jq -r '.commit.sha // empty')

if [[ -z "$SHA" ]]; then
  echo "❌ No se pudo obtener el SHA del branch '$DEFAULT_BRANCH'."
  echo "$BRANCH_JSON" | jq .
  exit 1
fi

echo "✔ SHA: $SHA"

# =========================
# 4️⃣ Obtener árbol completo
# =========================
TREE_API="https://api.github.com/repos/$OWNER/$REPO/git/trees/$SHA?recursive=1"

echo "▶ Obteniendo archivos..."

TREE_RESPONSE=$(curl -sS \
  -w '\n%{http_code}' \
  "${CURL_HEADERS[@]}" \
  "$TREE_API")

HTTP_CODE="${TREE_RESPONSE##*$'\n'}"
TREE_JSON="${TREE_RESPONSE%$'\n'*}"

if [[ "$HTTP_CODE" != "200" ]]; then
  echo "❌ No se pudo obtener el árbol del repositorio (HTTP $HTTP_CODE)"
  echo ""

  if command -v jq >/dev/null 2>&1; then
    echo "$TREE_JSON" | jq .
  else
    echo "$TREE_JSON"
  fi

  exit 1
fi

FILES=$(echo "$TREE_JSON" |
  jq -r '.tree[] | select(.type == "blob") | .path')

if [[ -z "$FILES" ]]; then
  echo "❌ No se encontraron archivos en el repositorio."
  exit 1
fi

# =========================
# 5️⃣ Separar carpetas vs raíz
# =========================
DIR_FILES=$(echo "$FILES" | grep '/' | sort || true)
ROOT_FILES=$(echo "$FILES" | grep -v '/' | sort || true)

# =========================
# Compatibilidad con sed UTF-8
# =========================
indent_sed() {
  if sed --version >/dev/null 2>&1; then
    sed 's/^/      /'
  else
    LC_ALL=C.UTF-8 sed 's/^/      /'
  fi
}

# =========================
# Procesar archivo
# =========================
process_file() {
  FILE="$1"

  [[ -z "$FILE" ]] && return

  # Si se especificó un subpath, ignorar archivos fuera de él.
  if [[ -n "$TARGET_PATH" && "$FILE" != "$TARGET_PATH/"* ]]; then
    return
  fi

  EXT="${FILE##*.}"
  EXT_LOWER="$(lowercase "$EXT")"
  BASENAME="$(basename "$FILE")"

  RAW_URL="https://raw.githubusercontent.com/$OWNER/$REPO/$DEFAULT_BRANCH/$FILE"

  # Prefijo del repo
  FULL_NAME="$REPO/$FILE"

  echo "  - name: \"$FULL_NAME\"" >> "$OUT_FILE"

  # =========================
  # Lenguajes especiales
  # =========================
  if [[ "$BASENAME" == ".gitignore" ]]; then
    LANGUAGE=".gitignore"
  elif [[ "$BASENAME" == "Gemfile" ]]; then
    LANGUAGE="ruby"
  elif [[ "$BASENAME" == "Gemfile.lock" ]]; then
    LANGUAGE="json"
  else
    LANGUAGE="$EXT_LOWER"
  fi

  # =========================
  # Imágenes / binarios
  # =========================
  if [[ "$EXT_LOWER" =~ ^($IMAGE_EXTENSIONS)$ ]]; then
    echo "    url_img: \"$RAW_URL\"" >> "$OUT_FILE"
    echo "" >> "$OUT_FILE"
    return
  fi

  # =========================
  # Archivos de texto
  # =========================
  echo "    language: \"$LANGUAGE\"" >> "$OUT_FILE"
  echo "    content_file: |" >> "$OUT_FILE"

  CONTENT=$(curl -sS \
    "${CURL_HEADERS[@]}" \
    "$RAW_URL")

  if [[ -n "$CONTENT" ]]; then
    printf '%s\n' "$CONTENT" | indent_sed >> "$OUT_FILE"
  fi

  echo "" >> "$OUT_FILE"
}

# =========================
# 6️⃣ Carpetas primero
# =========================
echo "$DIR_FILES" | while read -r FILE; do
  process_file "$FILE"
done

# =========================
# 7️⃣ Archivos raíz después
# =========================
echo "$ROOT_FILES" | while read -r FILE; do
  process_file "$FILE"
done

echo ""
echo "✔ Archivo generado en:"
echo "  $OUT_FILE"
echo ""
echo "✔ Branch utilizado: $DEFAULT_BRANCH"
echo "✔ SHA utilizado:    $SHA"
