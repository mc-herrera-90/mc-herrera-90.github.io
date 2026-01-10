---
title: "Jekyll: Desplegar en GitHub Pages"
description: Desplegar en GitHub Pages (sin GitHub Actions)
categories: [Jekyll, Jekyll-Deploy]
badge: jekyll
scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js
---

GitHub Pages permite publicar sitios estáticos directamente desde un repositorio. Jekyll está soportado de forma nativa, por lo que **no es necesario usar GitHub Actions** si seguimos la estructura y configuración correcta.

En este post veremos el flujo más simple y estable para dejar un sitio Jekyll en línea usando únicamente GitHub Pages.

## 1. Crear el repositorio

Crea un repositorio en GitHub. Puede ser público o privado (con cuenta Pro).

![Crear nuevo repositorio](github/crear-nuevo-repositorio-dark.webp){:.dark}
![Crear nuevo repositorio](github/crear-nuevo-repositorio-light.webp){:.light}

Opciones comunes:

* `usuario.github.io`: sitio principal
* `nombre-del-proyecto`: sitio de proyecto

En esta pantalla, completamos el campo **Repository Name**. El campo **Description** es opcional y dejamos el repositorio como **Public** (las páginas de GitHub no se habilitan para su visualización en repositorios privados). A continuación, hacemos clic en el botón verde <kbd class='bg-success text-light'>Create repository</kbd>, ubicado en la parte inferior de la pantalla.

Ejemplo:

![Demo nombre y descripción del repositorio](github/demo-nombre-repositorio-y-descripcion-light.webp){:.light}
![Demo nombre y descripción del repositorio](github/demo-nombre-repositorio-y-descripcion-dark.webp){:.dark}
_Nombre y descripción del repositorio_

![Configuración repositorio](github/demo-configuracion-repositorio-jekyll-deploy-light.webp){:.light}
![Configuración repositorio](github/demo-configuracion-repositorio-jekyll-deploy-dark.webp){:.dark}
_Configuración repositorio_

## 2. Clonar el repositorio e inicializar el entorno de desarrollo

Una vez creado el repositorio en GitHub, seguimos estos pasos para preparar el entorno local y configurar las dependencias necesarias para trabajar con Jekyll y GitHub Pages.

### 2.1 Copia la url del repositorio

En la página del respositorio copia la URL para clonar luego. Ejemplo:

![Copiar URL del repositorio](github/copiar-url-repositorio-demo-jekyll-light.webp){:.light}
![Copiar URL del repositorio](github/copiar-url-repositorio-demo-jekyll-dark.webp){:.dark}

### 2.2 Clona el repositorio en tu máquina

Ejecuta el comando `git clone` y pega la URL del repositorio. Ejemplo:

```terminal
git clone url-del-repositorio.git
```

Durante el proceso, se enumeran y reciben todos los objetos del repositorio para crear una copia exacta local.

### 2.3 Entrar al directorio del proyecto

Con el comando `cd` accede al directorio del proyecto clonado. Ejemplo:

```terminal
cd nombre-del-proyecto
```

### 2.4. Crear un Gemfile

Para gestionar las dependencias de Ruby y Jekyll, inicializamos Bundler. Ejemplo:

```terminal
bundle init
```

* Este comando genera un archivo `Gemfile` vacío en el directorio actual.
* El `Gemfile` es donde se definirán las gemas necesarias para el proyecto.

### 2.5 Agregar la gema github-pages

Añadimos la gema oficial de GitHub Pages en el grupo `jekyll_plugins`, que incluye Jekyll y sus dependencias compatibles. Ejemplo:

```terminal
bundle add github-pages --group "jekyll_plugins"
```

* Esta gema asegura que el entorno local use las mismas versiones de Jekyll y plugins que GitHub Pages utiliza en producción.
* Agruparla en `jekyll_plugins` garantiza que solo se cargue cuando se ejecuten comandos relacionados con Jekyll, optimizando el entorno.

### 2.6 Instalar las dependencias

Finalmente, instalamos las gemas indicadas en el `Gemfile`. Ejemplo

```terminal
bundle install
```

* Esto deja el entorno listo para construir y servir el sitio localmente.

A continuación, se puede observar los comandos explicados anteriormente:

![Comandos iniciales de configuración](jekyll/demo-deploy-jekyll-gh-pages-comandos-iniciales-light.webp){:.light}
![Comandos iniciales de configuración](jekyll/demo-deploy-jekyll-gh-pages-comandos-iniciales-dark.webp){:.dark}

### 2.7 Ignorar Gemfile.lock

Antes de continuar, es importante realizar una acción previa que consiste en añadir el archivo `Gemfile.lock` a los archivos ignorados en el `.gitignore`. Por ejemplo:

![Agregar Gemfile.lock al .gitignore](jekyll/demo-deploy-jekyll-gh-pages-ignorar-gemfile-lock-light.webp){:.light}
![Agregar Gemfile.lock al .gitignore](jekyll/demo-deploy-jekyll-gh-pages-ignorar-gemfile-lock-dark.webp){:.dark}

Puedes **añadir `Gemfile.lock` al `.gitignore`** de forma rápida y directa desde la terminal, aquí tienes los comandos listos para copiar:

```terminal
# Abrir (o crear) el .gitignore y añadir Gemfile.lock
echo "Gemfile.lock" >> .gitignore

# Quitar Gemfile.lock del control de versiones (sin borrarlo localmente)
git rm --cached Gemfile.lock

# Agregar los cambios al staging (incluye .gitignore modificado)
git add .gitignore

# Confirmar cambios
git status

# Hacer commit del cambio
git commit -m "chore: ignorar Gemfile.lock para GitHub Pages"
```

## 3. Estructura mínima del proyecto

El proyecto Jekyll debe tener, como mínimo los siguientes archivos:

- <i class="fa-regular fa-file-code"></i> `_config.yml`
- <i class="fa-regular fa-file-code"></i> `index.md`   (o `index.html`)
- <i class="fa-regular fa-folder"></i> `_posts/` (opcional)
   - <i class="fa-regular fa-file-code"></i> `YYYY-MM-DD-nombre-post.md`
- <i class="fa-regular fa-folder"></i> `assets/`(opcional)
{:.list-unstyled}

Ejemplo de los archivos que vamos a subir para el despliegue:

{% include file-viewer.html files=site.data.codes.jekyll.demo-deploy-gh-pages %}

El archivo `_config.yml` es clave para que GitHub Pages genere el sitio correctamente.

Ejemplo básico:

```yml
title: Mi sitio hecho con Jekyll
description: Descripción de ejemplo para el sitio
baseurl: "/nombre-del-proyecto" # si NO es usuario.github.io
url: "https://tu-usuario.github.io"
```
{:file='_config.yml'}

>**Importante**
>
>* Si el repo es `usuario.github.io`, deja `baseurl` vacío:
>
>  ```yml
>  baseurl: ""
>  ```
> {:.nolineno}
{: .prompt-warning }

## 4. Probar el sitio usando el servidor de desarrollo

Antes de desplegar tu sitio, es recomendable **verificar que todo funciona localmente** usando el servidor de desarrollo que incluye Jekyll. Esto te permite revisar posts, estilos y enlaces antes de subirlos a GitHub Pages.

### 4.1 Iniciar el servidor

Desde la raíz de tu proyecto, ejecuta:

```terminal
bundle exec jekyll serve --port 3000
```

**Explicación:**

* `bundle exec` asegura que se usan las gems definidas en tu `Gemfile`.
* `jekyll serve` inicia un servidor local.
* `--port 3000` indica que el sitio estará disponible en `http://localhost:3000`.

> Si omites `--port`, Jekyll usará el puerto 4000 por defecto.
{:.prompt-info}

### 4.2 Ver el sitio en el navegador

1. Abre tu navegador web.
2. Accede a: [http://localhost:3000](http://localhost:3000){:target='_blank'}
3. Navega por tus páginas para asegurarte de que:

   * El contenido se muestra correctamente.
   * Los enlaces internos funcionan.
   * Los estilos CSS y el layout se aplican como esperas.

Ejemplo del sitio que vamos a desplegar:

![Preview del sitio construido en Jekyll](jekyll/demo-deploy-jekyll-gh-pages-preview-dark.webp){:.dark}
![Preview del sitio construido en Jekyll](jekyll/demo-deploy-jekyll-gh-pages-preview-light.webp){:.light}

### 4.3 Cambios automáticos

El servidor de desarrollo de Jekyll **recarga automáticamente** la página cuando guardas cambios en tus archivos:

* Archivos `.md` de posts o páginas.
* Archivos en `_layouts` o `_includes`.
* Archivos CSS/JS en `assets/`.

> Si agregas nuevos archivos, a veces es necesario **reiniciar el servidor**.
{: .prompt-info }

Para correr el servidor con LiveReload, ejecuta el siguiente comando:

```terminal
bundle exec jekyll serve \
  --livereload \
  --livereload-port 35730 \
  --port 3000
```

*  `--livereload` o `-l`: abre **un servidor TCP adicional** para recargar el navegador automáticamente
* `--livereload-port 35730`: usar otro puerto para LiveReload.
* `--port 3000`: tu sitio principal sigue en 3000.

### 4.4 Mensajes frecuentes del servidor

Al iniciar `jekyll serve`, podrías ver advertencias como:

* `GitHub Metadata: No GitHub API authentication could be found.`

  * Esto solo afecta a variables de `site.github`.
  * No impide probar el sitio localmente.

* `Configuration file: none`

  * Significa que no tienes `_config.yml` o Jekyll no lo encuentra.
  * No es crítico si tu sitio funciona con configuración por defecto.

## 5. Subir el proyecto a GitHub

Desde la raíz del proyecto:

```terminal
git add .
git commit -m "feat: initial Jekyll site"
git branch -M main
git push -u origin main
```


Si realizamos el push utilizando el protocolo HTTP, se nos pedirá ingresar nuestras credenciales de GitHub a través del navegador. Por ejemplo:

![Autenticarse a través del navegador](github/autenticarse-con-el-navegador-desde-vs-code-light.webp){:.light}
![Autenticarse a través del navegador](github/autenticarse-con-el-navegador-desde-vs-code-dark.webp){:.dark}


Completado el proceso, se subirán los archivos al repositorio. Por ejemplo:


![Git Push GitHub](jekyll/demo-deploy-jekyll-gh-pages-git-push-dark.webp){:.dark}
![Git Push GitHub](jekyll/demo-deploy-jekyll-gh-pages-git-push-light.webp){:.light}


## 6. Configurar GitHub Pages

En el repositorio:

1. Ve a **Settings → Pages**
2. En **Source** selecciona:

   * **Branch**: `main`
   * **Folder**: `/root`
3. Guarda los cambios

![Activar GitHub Pages](github/activar-github-pages-desde-settings-dark.webp){:.dark}
![Activar GitHub Pages](github/activar-github-pages-desde-settings-light.webp){:.light}

GitHub comenzará a construir el sitio automáticamente usando Jekyll.


## 7. Acceder al sitio

Después de unos segundos:

```
https://tu-usuario.github.io/nombre-de-proyecto/
```
{: .noheader }

Si es un repo tipo `usuario.github.io`:

```
https://tu-usuario.github.io/
```
{:.noheader}

En la demostración de este artículo, el sitio está desplegado y disponible en la siguiente URL:

[https://mcherrera.dev/demo-jekyll-deploy-gh-pages/](https://mcherrera.dev/demo-jekyll-deploy-gh-pages/){:target='_blank'}

## 8. Cosas a tener en cuenta

* GitHub Pages **no ejecuta plugins personalizados** de Jekyll.
* Solo se permiten los plugins incluidos en `github-pages`.
* No necesitas generar `_site/` manualmente.
* Cada `push` a `main` vuelve a desplegar el sitio.

{% include circle-line.html %}


Este método es ideal si:

* Quieres un flujo simple
* No necesitas compilación avanzada
* Prefieres evitar GitHub Actions

Para proyectos educativos, blogs o páginas de retos, **GitHub Pages + Jekyll nativo es más que suficiente** y muy estable.