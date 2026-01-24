---
title: "Netlify: Desplegar un sitio Jekyll desde GitHub"
categories: [Netlify, "Netlify-Deploy"]
badge: netlify
scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js
---

## Requisitos previos

Antes de comenzar, necesitamos:

- Un sitio Jekyll funcionando correctamente en local.
- El proyecto versionado en un repositorio de GitHub.

- Un archivo `Gemfile` (obligatorio).

## Paso 1:  Crear un proyecto

Vamos a comenzar creando un sitio en blanco:

```terminal
jekyll new mi-blog-jekyll --blank
```
{:.typing }


Al tratarse de un proyecto en blanco (`--blank`), el proceso de creación es inmediato y los mensajes se muestran casi al instante.

```
New jekyll site installed in /home/marco/workspace/mi-blog-jekyll.
```
{:.noheader}

---

## Paso 2: Añadir Jekyll al proyecto

Una vez dentro del proyecto, desde la terminal inicializamos **Bundler** para generar el archivo `Gemfile`, el cual se utilizará para gestionar las dependencias del proyecto.


```terminal
bundle init
```
{:.typing}

Posteriormente, agregamos **Jekyll** como dependencia principal.

```terminal
bundle add jekyll
```
{:.typing}

Al concluir nos muestra los mensajes en la consola.

```terminal
Writing new Gemfile to /home/marco/workspace/jekyll/mi-blog-jekyll/Gemfile
Fetching gem metadata from https://rubygems.org/...........
Resolving dependencies...
Fetching gem metadata from https://rubygems.org/..........
Resolving dependencies...
Fetching listen 3.10.0
Fetching google-protobuf 4.33.4 (x86_64-linux-gnu)
Fetching kramdown 2.5.2
Installing listen 3.10.0
Installing kramdown 2.5.2
Installing google-protobuf 4.33.4 (x86_64-linux-gnu)
Fetching sass-embedded 1.97.3 (x86_64-linux-gnu)
Installing sass-embedded 1.97.3 (x86_64-linux-gnu)
```
{:.noheader}

Podemos probar el sitio en local, usando el comando:

```terminal
bundle exec jekyll serve
```
{:.typing}

Nuevamente veremos mensajes en la consola. En este caso, es un aviso común relacionado con el uso **deprecado** de la directiva `@import` en **Sass**. Aunque se recomienda migrar a `@use`, este warning no afecta el funcionamiento del proyecto ni el proceso de compilación, por lo que podemos dejarlo tal cual por ahora.


{% capture msg_server %}
Configuration file: /home/marco/workspace/jekyll/mi-blog-jekyll/_config.yml
            Source: /home/marco/workspace/jekyll/mi-blog-jekyll
       Destination: /home/marco/workspace/jekyll/mi-blog-jekyll/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
Deprecation Warning [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.

More info and automated migrator: https://sass-lang.com/d/import

  ╷
1 │ <span class="hl">@import "base";</span>
  │         ^^^^^^
  ╵
    /home/marco/workspace/jekyll/mi-blog-jekyll/assets/css/main.scss 1:9  root stylesheet
                    done in 0.044 seconds.
 Auto-regeneration: enabled for '/home/marco/workspace/jekyll/mi-blog-jekyll'
    <span class="hl">Server address: http://127.0.0.1:4000/</span>
  Server running... press ctrl-c to stop.
{% endcapture %}

{% include terminal-wrapper.html content=msg_server %}{:.noheader}

* **No es necesario instalar Jekyll como gema global**
* Jekyll se ejecutará **siempre** a través de Bundler
* Netlify detecta automáticamente el `Gemfile` y ejecuta `bundle install`

Entonces estamos listos para continuar.

---

## Paso 3: Subir el proyecto a GitHub

En este punto, ya puedes subir el proyecto a GitHub de la forma que te resulte más cómoda. Este flujo ya lo vimos en el artículo sobre **desplegar sitios web desde un repositorio**, así que aquí nos limitaremos a repasar **los comandos básicos necesarios** para dejar el proyecto versionado y disponible de forma remota.

Primero, inicializa el repositorio Git dentro del proyecto:

```terminal
git init
```
{:.typing}

Luego, agrega todos los archivos al área de *staging*:

```terminal
git add .
```
{:.typing}

Confirma los cambios creando el primer *commit*:

```terminal
git commit -m "first commit"
```
{:.typing}

A continuación, agrega el repositorio remoto (que previamente debiste haber creado en GitHub). En este ejemplo:

```terminal
git remote add origin https://github.com/mcherrera-dev/mi-blog-jekyll.git
```
{:.typing}

Finalmente, sube el contenido del proyecto al repositorio remoto utilizando *push*:

```terminal
git push origin main
```
{:.typing}


A continuación, puedes observar los archivos que vamos a subir a Netlify. Para este ejemplo, se han añadido algunos **posts de prueba** y **estilos mínimos** con el fin de ilustrar la estructura del proyecto.

{% include file-viewer.html
    name="mi-blog-jekyll"
    files=site.data.generated.repo-mi-blog-jekyll.files
%}

---

## Paso 4: Seleccionar el repo y configurar el build

En este punto, ya sabemos que debemos crear un nuevo sitio a partir de un repositorio, __utilizando GitHub como proveedor de código__. Para ello, seleccionamos GitHub, autorizamos el acceso si es necesario y luego elegimos el repositorio que queremos desplegar.

![Seleccionar repositorio](netlify/seleccionar-repo-miblog-jekyll-light.webp){:.light}
![Seleccionar repositorio](netlify/seleccionar-repo-miblog-jekyll-dark.webp){:.dark}

A continuación, asignamos un **nombre al proyecto**, el cual se utilizará para generar la **URL pública** con la que el sitio quedará disponible una vez finalizado el despliegue.

![Asignar nombre a la URL](netlify/asignar-nombre-mi-blog-jekyll-light.webp){:.light}
![Asignar nombre a la URL](netlify/asignar-nombre-mi-blog-jekyll-dark.webp){:.dark}

La configuración del _build_ debe definirse exactamente como se muestra a continuación, ya que Netlify utiliza estos valores para saber cómo construir el proyecto y qué directorio publicar.

![Configuración del build](netlify/configuracion-del-build-jekyll-light.webp){:.light}
![Configuración del build](netlify/configuracion-del-build-jekyll-dark.webp){:.dark}

Como se puede observar, Netlify detecta automáticamente la rama principal (`main`), define el comando de _build_ y reconoce la carpeta de salida que debe publicarse; en el caso de Jekyll, `_site`.

Finalmente, bajamos hasta el botón para desplegar el sitio.

![Desplegar el sitio](netlify/desplegar-sitio-de-jekyll-dark.webp){:.dark}
![Desplegar el sitio](netlify/desplegar-sitio-de-jekyll-light.webp){:.light}

Y ahora, es cosa de esperar a que finalice el proceso y poder visitar el sitio.

![Sitio desplegado](netlify/sitio-jekyll-desplegado-light.webp){:.light}
![Sitio desplegado](netlify/sitio-jekyll-desplegado-dark.webp){:.dark}

> [https://mi-blog-jekyll.netlify.app/](https://mi-blog-jekyll.netlify.app/){:target='_blank'}

{% include circle-line.html %}

Desplegar un sitio Jekyll en Netlify desde GitHub es un proceso sencillo **si se entiende cómo funciona Bundler y la configuración de entornos**.
