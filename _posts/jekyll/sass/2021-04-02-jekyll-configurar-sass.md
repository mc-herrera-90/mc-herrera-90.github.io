---
title: "Jekyll: Configuración moderna con Dart Sass usando jekyll-sass-converter y sass-embedded en Jekyll"
categories: [Jekyll, Jekyll-Integraciones]
image: poster/jekyll-sass.avif
tags: [jekyll]
scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js
---

Jekyll tiene soporte nativo para Sass, por lo que no necesitas configurar un procesador de Sass por separado. Al instalar Jekyll, las dependencias necesarias para procesar hojas de estilo Sass forman parte de su ecosistema.

> Jekyll delega la conversión de Sass en la gema `jekyll-sass-converter`, que se encarga de transformar archivos `.sass` y `.scss` en CSS durante el proceso de build.
{:.prompt-info}

Las principales gemas involucradas en esta cadena, junto con sus versiones vigentes al momento de publicar o actualizar este post **(consultadas en RubyGems)**, son:

{% include resource-version/gem-version.html gem="jekyll" %}
{% include resource-version/gem-version.html gem="jekyll-sass-converter" %}
{% include resource-version/gem-version.html gem="sass-embedded" %}

## 1. Estructura y configuración del proyecto

Para crear la estructura mínima de un proyecto y comenzar con las pruebas, podemos generarla desde la línea de comandos, siempre que tengamos instalada la gema `jekyll` y pasarle el parámetro `--blank` que evita crear scaffolding innecesario de archivos:

```bash
jekyll new --blank <nombre-proyecto>
```
{: .typing .nolineno }

Si no tienes la gema instalada, puedes clonar este proyecto, que contiene la misma base y estructura mínima de archivos.

{% include repo/github-card.html owner="mc-herrera-90" repo="template-jekyll-blank" branch="main" %}

Al abrir el proyecto debes tener al menos, los siguientes archivos:

{% include file-viewer.html files=site.data.generated.repo-template-jekyll-blank.files name="repo" %}

Luego, creamos un archivo `Gemfile` para gestionar las dependencias del proyecto. Por ejemplo:

```ruby
# frozen_string_literal: true

source "https://rubygems.org"

gem "jekyll", "~> 4.3"
```
{: file="Gemfile" }

> Asegúrate de especificar una versión de Jekyll igual o superior a la `4.3`, ya que las versiones antiguas pueden no implementar correctamente las reglas y características modernas de Sass.
{: .prompt-tip .d-inline-block }

Después, instala las dependencias con **Bundler** (Gestor de dependencias):

```bash
bundle install
```
{: .typing .nolineno }

De esta forma, **Bundler se encargará de instalar Jekyll junto con todas las gemas y dependencias necesarias para ejecutar el proyecto**, resolviendo automáticamente las dependencias entre ellas y dejando las versiones utilizadas registradas en `Gemfile.lock`.

<img src="jekyll/declarar-jekyll-en-gemfile.webp" alt="ilustración 01" width="90%" class="rounded border mx-auto"/>

Por último, puedes ejecutar el servidor de desarrollo usando el comando:

```bash
bundle exec jekyll serve
```
{: .typing .nolineno }

## 2. Organizar los parciales y el archivo principal de Sass

La carpeta `_sass` es para organizar los parciales. Por ejemplo:

* <i class="fa-regular fa-folder"></i> `_sass/`

  * <i class="fa-regular fa-file-code"></i> `_variables.scss`
  * <i class="fa-regular fa-file-code"></i> `_mixins.scss`
  * <i class="fa-regular fa-file-code"></i> `_base.scss`
{:.list-unstyled .p-2 .rounded .d-inline-block .mx-auto .me-3}


Por defecto, Jekyll procesa los archivos Sass que tengan **Front Matter** y estén dentro del directorio fuente del sitio. El lugar que se suele utilizar es el siguiente:

* <i class="fa-regular fa-folder"></i> `assets/`

  * <i class="fa-regular fa-folder"></i> `css/`

    * <i class="fa-regular fa-file-code"></i> `main.scss`
{:.list-unstyled .p-2 .rounded .d-inline-block .mx-auto}


Este archivo **sí se compila a CSS**, por eso va en `assets/css/` y se usa para cargar otros archivos. Por ejemplo:

```css
---
---

@use "base";
```
{:file='assets/css/main.scss'}

> Las tres líneas `---` son obligatorias porque le indican a Jekyll que debe procesar el archivo.
{: .prompt-warning .d-inline-block }

En la siguiente ilustración se pueden observar los **archivos parciales de Sass** y el **archivo principal que actúa como punto de entrada** para Jekyll.

<img src="jekyll/uso-de-parciales-y-punto-de-entrada.webp" alt="ilustración 02" width="90%" class="rounded border mx-auto"/>

Se puede usar `@use` siempre que la versión de `jekyll-sass-converter` sea relativamente moderna y lo permita. A partir de `jekyll-sass-converter` 3.0, Jekyll utiliza `sass-embedded` que implementa Dart Sass, y esta versión está disponible con Jekyll 4.3+.

> <a href="https://jekyllrb.com/news/2022/12/21/jekyll-sass-converter-3.0-released" target="_blank">https://jekyllrb.com/news/2022/12/21/jekyll-sass-converter-3.0-released</a>
{: .prompt-info .d-inline-block }

Siempre podemos comprobarlo abriendo el archivo `Gemfile.lock` o ejecutando el comando `bundle info` seguido del nombre de la gema. Por ejemplo:

```bash
bundle info jekyll-sass-converter
bundle info sass-embedded
```
{: .nolineno .typing}

A continuación, puedes observar la salida de los comandos y ver rápidamente las versiones instaladas;

<img src="jekyll/revisar-gema-sass-embedded.webp" alt="ilustración 03" width="90%" class="rounded border mx-auto"/>

Si el proyecto utiliza una versión antigua de `jekyll-sass-converter`, deberíamos utilizar la sintaxis tradicional con `@import`.

Por ejemplo, nuestro `main.scss` quedaría:

```css
---
---

@import "base";
```
{:file='assets/css/main.scss'}

Y en `_base.scss` podríamos importar los demás archivos:

```scss
@import "variables";
@import "mixins";

body {
  margin: 0;

  font-family: $font-family-base;
  color: $text-color;
  background: $background-color;
}
```
{:file='_sass/_base.scss'}


> `@import` y `@use` no funcionan exactamente igual. `@use` utiliza módulos y namespaces, mientras que `@import` comparte variables y funciones globalmente. La diferencia entre ambos sistemas es un tema más amplio y no es el objetivo principal de este artículo, pero es importante conocerla si trabajas con proyectos antiguos.
{:.prompt-info}

## 3. Incluir el CSS en el layout

En tu layout `_layouts/default.html`, o en cualquier otro layout donde quieras utilizar estos estilos, debes incluir el archivo CSS generado por Jekyll:

```html
<link rel="stylesheet" href="{{ '/assets/css/main.css' | relative_url }}">
```
{:.nolineno file='_layouts/default.html'}

> Solo asegúrate de que, aunque el archivo se llame `main.scss`, lo incluyas como `main.css`, ya que **Jekyll lo compilará automáticamente a CSS**.
{:.prompt-info}

## 4. Comprimir el CSS generado

Una práctica muy recomendable es generar nuestro CSS de forma minificada, es decir, optimizando el archivo para reducir su tamaño final. En Jekyll, esto es muy sencillo, ya que solo necesitamos incluir la siguiente configuración en el archivo `_config.yml`:

```yml
sass:
  style: compressed
```
{:file="_config.yml" .nolineno }

Opciones disponibles:

* `compressed`
* `expanded` (por defecto)

Ya con eso, pasamos de tener un archivo lleno de espacios y saltos de líneas a un archivo comprimido de una sola línea:

![ilustración 04](jekyll/demo-comprimir-sass.webp)
