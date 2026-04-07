---
title: "Jekyll: Configurar el tema Chirpy en Jekyll"
categories: [Jekyll, Jekyll_03-Temas]
badge: jekyll
---

[Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy){:target='_blank'} es un tema elegante y rico en funciones para Jekyll, ideal para blogs personales y páginas alojadas en GitHub Pages. En esta guía, te mostraré cómo configurarlo desde cero.

[![Devices Mockup](https://chirpy-img.netlify.app/commons/devices-mockup.png)][demo]{:target='_blank'}

## 1. Requisitos previos

Antes de empezar, asegúrate de tener:

- [x] **Git**
- [x] **Ruby** (preferiblemente ≥ 2.7)
- [x] **Bundler** (`gem install bundler`)
- [x] **Jekyll** (`gem install jekyll`)
- [x] **Node.js** y **Yarn** (necesarios para los activos como JS/CSS)

## 2. Configuración Local

### Paso 1: Clonar el repsotorio del tema Chirpy

Clona el repositorio oficial de Chirpy:

```terminal
git clone https://github.com/cotes2020/jekyll-theme-chirpy.git my_blog
cd my_blog
```

### Paso 2: Ejecutar el script inicializador __init.sh__

Ejecuta el script `init.sh` (esto limpia cosas del tema demo y te da un punto limpio):

```terminal
bash tools/init.sh
```

Este script:

* Elimina el historial de git del tema original
* Cambia algunas configuraciones básicas
* Inicializa tu propio repositorio

![run script init](jekyll/init-theme-chirpy.webp){:.rounded}

> Asegúrate de darle permisos de ejecución si no lo tiene: `chmod +x tools/init.sh`
{:.prompt-info }

### Paso 3: Instalar dependencias

Después de ejecutar `init.sh`, instala las dependencias:

```terminal
bundle install
```

![Bundle install](jekyll/chirpy-bundle-install.webp){:.rounded}

### Paso 4: Servir localmente

Ya con todo listo, puedes correr el servidor local de Jekyll:

```terminal
bash tools/run.sh
```

Abre en tu navegador: [http://localhost:4000](http://localhost:4000)

![Bundle install](jekyll/chirpy-run-script.webp)

Puedes ver que el tema está correctamente configurado y se presenta de forma limpia y listo para trabajar:

{% include embed/video.html src="jekyll/iniciando-tema-chirpy.webm" %}

## 3. Configuraciones Extras

### Configurar opciones en el __config.yml__

Revisa y edita `_config.yml` según tus necesidades. Algunos cambios útiles:

```yml
title: Tu Blog
tagline: Una frase corta
url: "https://tu-usuario.github.io"
baseurl: "" # si lo estás sirviendo desde la raíz
```
{:file="_config.yml" .nolineno}

Por ejemplo, a continuación cambiamos el `title`, `tagline` y el idioma `lang`:

![Cambiar titulo y tagline](jekyll/cambiar-titulo-y-tagline-chirpy.webp){:.rounded}

> __Recuerda__ que cada vez que realices cambios en el archivo `_config.yml` debes reiniciar el servidor para que se apliquen correctamente.
{:.prompt-info}

Más abajo en el archivo encontrarás la opción para cambiar el avatar del sidebar.

```yml
avatar: "assets/tu-avatar.png" # igual puede ser una imagen remota
```
{:file="_config.yml" .nolineno}

![Cambiar avatar](jekyll/cambiar-avatar-tema-chirpy.webp){:.rounded}

### Cambiar los favicons

El tema Chirpy ya está preparado para funcionar como una PWA, por lo que es importante reemplazar los favicons e íconos por los tuyos. Estos son visibles tanto al instalar el sitio como al compartir enlaces, mejorando la apariencia y la identidad de tu página.

> Para generar los *favicons* de forma más cómoda, puedes usar la herramienta [Real Favicon Generator](https://realfavicongenerator.net){:target='_blank'}. Solo necesitas subir un logo en alta resolución, y la plataforma generará automáticamente un archivo `.zip` con todos los íconos en distintos tamaños y formatos, además del código listo para integrarlos.
{:.prompt-tip}

![Arrastrar logo](extras/arrastrar-logo-a-rfg.webp){:.rounded}
_Arrastrar imagen a la herramienta Real Favicon Generator_

Una vez generados los _favicons_, reemplaza únicamente los archivos de imágenes en el directorio:

<i class="fa-regular fa-folder"></i> `assets/img/favicons`{:.filepath}

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
