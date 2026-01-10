---
title: "Jekyll: Configurar el tema Chirpy"
categories: [Jekyll, Jekyll-Temas]
badge: jekyll
---

[Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy){:target='_blank'} es un tema elegante y rico en funciones para Jekyll, ideal para blogs personales y páginas alojadas en GitHub Pages. En esta guía, te mostraré cómo configurarlo desde cero.

[![Devices Mockup](https://chirpy-img.netlify.app/commons/devices-mockup.png)][demo]{:target='_blank'}

## Requisitos previos

Antes de empezar, asegúrate de tener:

* **Git**
* **Ruby** (preferiblemente ≥ 2.7)
* **Bundler** (`gem install bundler`)
* **Jekyll** (`gem install jekyll`)
* **Node.js** y **Yarn** (necesarios para activos como JS/CSS)

## Configuración Local

### Paso 1: Clonar Chirpy y ejecutar `init.sh`

Clona el repositorio oficial de Chirpy:

```terminal
git clone https://github.com/cotes2020/jekyll-theme-chirpy.git my_blog
cd my_blog
```

Ejecuta el script `init.sh` (esto limpia cosas del tema demo y te da un punto limpio):

```terminal
bash tools/init.sh
```

Este script:

* Elimina el historial de git del tema original
* Cambia algunas configuraciones básicas
* Inicializa tu propio repositorio

![run script init](jekyll/init-theme-chirpy.webp)

> Asegúrate de darle permisos de ejecución si no lo tiene: `chmod +x tools/init.sh`
{:.prompt-info }


### Paso 2: Instalar dependencias

Después de ejecutar `init.sh`, instala las dependencias:

```terminal
bundle install
```

![Bundle install](jekyll/chirpy-bundle-install.webp)


### Paso 3: Servir localmente

Ya con todo listo, puedes correr el servidor local de Jekyll:

```terminal
bash tools/run.sh
```

Abre en tu navegador: [http://localhost:4000](http://localhost:4000)

![Bundle install](jekyll/chirpy-run-script.webp)


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


### Despliegue en GitHub Pages

Crea un nuevo repositorio en GitHub

```terminal
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/tu-usuario/tu-repo.git
git push -u origin main
```

Asegúrate de tener un flujo de despliegue. Chirpy ya incluye uno en `.github/workflows/pages-deploy.yml`. GitHub Actions se encargará de desplegar automáticamente.

En la configuración del repositorio en GitHub, activa **GitHub Pages** en la rama `main` (o en la rama `gh-pages` si decides usar despliegue automático).

[demo]: https://cotes2020.github.io/chirpy-demo/
