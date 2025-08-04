---
title: "Cómo configurar el tema Jekyll Chirpy para tu blog"
date: 2025-08-03
categories: [jekyll, chirpy, blog, github-pages]
media_subpath: /assets/img/jekyll
tags: [jekyll, chirpy, blog, github-pages]
---

[Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) es un tema elegante y rico en funciones para Jekyll, ideal para blogs personales y páginas alojadas en GitHub Pages. En esta guía, te mostraré cómo configurarlo desde cero.


## Requisitos previos

Antes de empezar, asegúrate de tener:

* **Git**
* **Ruby** (preferiblemente ≥ 2.7)
* **Bundler** (`gem install bundler`)
* **Jekyll** (`gem install jekyll`)
* **Node.js** y **Yarn** (necesarios para activos como JS/CSS)

## Configuración Local

### Paso 1: Clonar Chirpy y ejecutar `init.sh`

1. Clona el repositorio oficial de Chirpy:

```terminal
git clone https://github.com/cotes2020/jekyll-theme-chirpy.git my_blog
cd my_blog
```

2. Ejecuta el script `init.sh` (esto limpia cosas del tema demo y te da un punto limpio):

```terminal
bash tools/init.sh
```

![run script init](init-theme-chirpy.webp)

Este script:

* Elimina el historial de git del tema original
* Cambia algunas configuraciones básicas
* Inicializa tu propio repositorio

> Asegúrate de darle permisos de ejecución si no lo tiene: `chmod +x tools/init.sh`
{:.prompt-info }

---

### Paso 2: Instalar dependencias

Después de ejecutar `init.sh`, instala las dependencias:

```terminal
bundle install
```

![Bundle install](chirpy-bundle-install.webp)

---

### Paso 3: Servir localmente

Ya con todo listo, puedes correr el servidor local de Jekyll:

```bash
bash tools/run.sh
```

Abre en tu navegador: [http://localhost:4000](http://localhost:4000)

![Bundle install](chirpy-run-script.webp)

---

## Configuraciones Extras

### Configura `_config.yml`

Revisa y edita `_config.yml` según tus necesidades. Algunos cambios útiles:

```yml
title: Tu Blog
description: Tu descripción
url: "https://tu-usuario.github.io"
baseurl: "" # si lo estás sirviendo desde la raíz
```
{:file="_config.yml"}

Y en `site.*`, ajusta tus datos personales, redes sociales, etc.

---

### Despliegue en GitHub Pages

1. Crea un nuevo repositorio en GitHub

```terminal
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/tu-usuario/tu-repo.git
git push -u origin main
```

{:start="2"}
2. Asegúrate de tener un flujo de despliegue. Chirpy ya incluye uno en `.github/workflows/pages-deploy.yml`. GitHub Actions se encargará de desplegar automáticamente.

En la configuración del repositorio en GitHub, activa **GitHub Pages** en la rama `main` (o en la rama `gh-pages` si decides usar despliegue automático).

## Recomendaciones

Puedes cambiar colores, fuentes y otras configuraciones en `_sass/addon/variables.scss` y `_data/`.