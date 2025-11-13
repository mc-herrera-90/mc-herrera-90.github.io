---
title: "Presentaciones con Reveal.js"
categories: [Tutoriales, Productividad]
---

[Reveal.js](https://revealjs.com/){:target="_blank"} es un framework de presentación HTML de código abierto. Fue creado por [Hakin EL Hattab](https://hakim.se/){:target="_blank"} aprovechando toda la capacidad del ecosistema web. En la actualidad el repositorio «open source»  tiene más de 69.8K estrellas en GitHub, y es mantenido por un equipo de 300 personas.

![reveal.js](https://socialify.git.ci/hakimel/reveal.js/image?description=1&font=Jost&forks=1&name=1&owner=1&pattern=Transparent&stargazers=1&theme=Auto)

> Otro punto fuerte de reveal.js, es que permite añadir código JavaScript para cada «slide», de este modo se pueden integrar recursos propios y de terceros, como por ejemplo gráficos 3D.
{: .prompt-tip }

Esto significa que todo lo que puedes hacer en la web, puedes hacerlo en tu presentación. Cambiar estilos con __CSS__, incluir páginas externas usando etiquetas `<a>` o `<iframe>` o añadir comportamiento personalizado por medio de la [API de JavaScript](https://revealjs.com/api/){:target="_blank"}

## Instalación

Reveal.js puede usarse de distintas formas:


### 1. Usar CDN (la forma más rápida)

{% tabs demo_cdn %}
{% tab demo_cdn Código %}
```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Mi Presentación con Reveal.js</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js/dist/reveal.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js/dist/theme/black.css">
  </head>
  <body>
    <div class="reveal">
      <div class="slides">
        <section>👋 ¡Bienvenidos a mi presentación!</section>
        <section>📊 Reveal.js facilita crear presentaciones con HTML.</section>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/reveal.js/dist/reveal.js"></script>
    <script>
      Reveal.initialize();
    </script>
  </body>
</html>
```
{% endtab %}
{% tab demo_cdn CodePen %}
<p class="codepen" data-theme-id="dark" data-height="500" data-default-tab="result" data-slug-hash="OPMeoGg" data-pen-title="demo-reveal.js-cdn" data-user="Marco-Contreras-Herrera" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
      <span>See the Pen <a href="https://codepen.io/Marco-Contreras-Herrera/pen/OPMeoGg">
  demo-reveal.js-cdn</a> by Marco Contreras Herrera (<a href="https://codepen.io/Marco-Contreras-Herrera">@Marco-Contreras-Herrera</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
      </p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>
{% endtab %}
{% endtabs %}


### 2. Instalación local

Si quieres trabajar con Reveal.js en tu propio equipo, tienes dos formas de instalación local:

{% tabs instalacion_local %}
{% tab instalacion_local Clonar repositorio de GitHub %}
1. Clona el repositorio oficial de reveal.js
```terminal
git clone https://github.com/hakimel/reveal.js.git <nombre-carpeta>
```
Esto descargará todo el código fuente de Reveal.js en la carpeta con el nombre indicado en `<nombre-carpeta>`.
2. Ingresa a esa carpeta e instala las dependencias:
```terminal
cd <nombre-carpeta>
npm install
```
3. Por último, lanza el servidor de desarrollo:
```terminal
npm start
```
Esto abrirá tu presentación base en <http://localhost:8000>.
{% endtab %}
{% tab instalacion_local Instalación local con npm %}
1. Crea una carpeta para tu proyecto:
```terminal
mkdir mi-presentacion
cd mi-presentacion
```
2. Crea un archivo `package.json` donde se registran tus dependencias:
```terminal
npm init -y
```
3. Instala Reveal.js como dependencia:
```terminal
npm install reveal.js
```
4. Crea un archivo `index.html` y añade lo siguiente:

    ```html
    <!doctype html>
    <html lang="es">
      <head>
        <meta charset="utf-8">
        <title>Mi Presentación</title>
        <link rel="stylesheet" href="node_modules/reveal.js/dist/reveal.css">
        <link rel="stylesheet" href="node_modules/reveal.js/dist/theme/black.css">
      </head>
      <body>
        <div class="reveal">
          <div class="slides">
            <section>👋 Bienvenido a Reveal.js</section>
            <section>📊 Instalado con npm</section>
          </div>
        </div>

        <script src="node_modules/reveal.js/dist/reveal.js"></script>
        <script>
          Reveal.initialize();
        </script>
      </body>
    </html>
    ```
    {:file="index.html" }

{% endtab %}
{% endtabs %}

> Puedes abrir el archivo `demo.html` desde `node_modules/reveal.js/` o desde la raíz si clonaste el repositorio, para ver cómo están estructuradas las presentaciones originales, los ejemplos de __transiciones__, __fragmentos__ y __configuraciones__. Sirve como ejemplo de presentación y te ayudará a entender cómo está estructurado un proyecto con Reveal.js.
{:.prompt-tip}

A continuación, puedes interactuar con la presentación de demostración para explorar sus funciones y animaciones:

{% include embed/iframe.html src="https://revealjs.com/demo" target="true" %}

## Crear Diapositivas

Llegados a este punto, es momento de generar el contenido de la presentación. En **Reveal.js**, la jerarquía de marcado de la presentación debe seguir el siguiente orden `.reveal` > `.slides` > `section` donde cada `section` representa una diapositiva.

De este modo, la estructura más sencilla que se puede generar respondería a la siguiente maqueta HTML.

```html
<div class="reveal">
  <div class="slides">
    <section>Slide 1</section>
    <section>Slide 2</section>
  </div>
</div>
```
{: file="index.html" .nolineno }

{% include embed/iframe.html src="/documents/revealjs/slides-demo.html" target="true" %}

### Diapositivas verticales

Una característica interesante, es que se pueden enmarcar otras etiquetas `<section>` anidadas dentro de una sección para generar __diapositivas en vertical__.

```html
<div class="reveal">
  <div class="slides">
    <section>
      Slide 1
    </section>
    <section>
      <!-- Slides Verticales-->
      <section>
        Slide 2
      </section>
      <section>
        Slide 2.1
      </section>
       <section>
        Slide 2.2
      </section>
      <!-- Fin -->
    </section>
    <section>Slide 3</section>
  </div>
</div>
```
{:file="index.html" .nolineno }

{% include embed/iframe.html src="/documents/revealjs/slides-demo-verticales.html" target="true" %}

## Personalizar la presentación

### 1. Elegir un tema CSS existente

Reveal.js viene con un conjunto de archivos CSS para que las presentaciones luzcan profesionales.

Por un lado, es necesario importar el __CSS base__ que se encarga de posicionar correctamente todos los elementos de forma «responsive».

```html
<!-- Vía NPM -->
<link rel="stylesheet" href="node_modules/reveal.js/dist/reveal.css">
<!-- Vía repositorio clonado -->
<link rel="stylesheet" href="dist/reveal.css">
<!-- Vía CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js/dist/reveal.css">
```
{: .nolineno }

Por otro lado, Reveal.js incluye varios temas CSS en `dist/theme/`, por ejemplo:

```
📂 theme
├── beige.css
├── black-contrast.css
├── black.css
├── blood.css
├── dracula.css
├── league.css
├── moon.css
├── night.css
├── serif.css
├── simple.css
├── sky.css
├── solarized.css
├── white-contrast.css
├── white.css
└── white_contrast_compact_verbatim_headers.css
```
{: .noheader .fit-content }

Por ejemplo, seleccionamos el tema `sky.css`:

```html
<!-- Vía NPM -->
<link rel="stylesheet" href="node_modules/reveal.js/dist/theme/sky.css">
<!-- Vía repositorio clonado -->
<link rel="stylesheet" href="dist/theme/sky.css">
<!-- Vía CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js/dist/theme/sky.css">
```
{: .nolineno }


{% include embed/iframe.html src="/documents/html/themes-revealjs.html" target="true" %}


### 2. Cambiar colores de fondos

Se admiten todos los formatos de colores CSS, incluidos los valores hexadecimales, las palabras clave `rgba()`o `hsl()`.

```html
<section data-background-color="aquamarine">
  <h2>Color con nombre</h2>
  <p>Esta diapositiva usa un color de fondo definido por nombre: <code>aquamarine</code>.</p>
</section>

<section data-background-color="rgb(70, 70, 255)">
  <h2>Color en formato RGB</h2>
  <p>En esta usamos el formato <code>rgb(70, 70, 255)</code> para un tono azul intenso.</p>
</section>

<section data-background-color="#ffcc00">
  <h2>Color en formato HEX</h2>
  <p>Aquí aplicamos un color de fondo usando código hexadecimal: <code>#ffcc00</code>.</p>
</section>
```
{: .nolineno }

{% include embed/iframe.html src="/documents/html/background-reveal.html" %}

### 3. Estados personalizados

Reveal.js permite asociar estados personalizados a diapositivas mediante el atributo `data-state`. Por ejemplo:

```html
<section data-state="make-it-pop">
  <h2>Animación personalizada</h2>
</section>
```
{: .nolineno file="index.html" }

Cuando esta diapositiva entra en pantalla, Reveal.js dispara un evento que agrega una clase con el nombre del estado al elemento `<body>`, de esta forma puedes aplicar estilos o animaciones únicas a esa diapositiva.

Por ejemplo:

{% tabs data_state %}
{% tab data_state HTML %}
```html
<section>
  Slide 1
</section>
<section data-state="make-it-pop">
  <h2>Animación personalizada</h2>
</section>
<section>
  Slide 3
</section>
```
{: .nolineno file="index.html" }
{% endtab %}
{% tab data_state CSS %}
```css
.make-it-pop h2 {
  animation: popIn 0.6s ease-in-out;
  color: #ff0066;
}

@keyframes popIn {
  from { transform: scale(0.5); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
```
{: .nolineno file="estilos.css" }
{% endtab %}
{% endtabs %}

{% include embed/iframe.html src="/documents/revealjs/slides-data-state.html" %}

> Además, puedes escuchar los eventos de estado con JavaScript:
> ```js
> Reveal.on('make-it-pop', () => {
>  console.log('¡Diapositiva especial activada!');
> });
> ```
> {: .nolineno }
{: .prompt-info }

## Usar Plugins

Reveal.js cuenta con un **sistema de plugins** que amplía sus funcionalidades sin necesidad de modificar el núcleo.
Un plugin es simplemente un módulo JavaScript que se integra durante la inicialización de la presentación.

Para usar un plugin, se requiere hacer dos cosas:

1. Incluya el script del plugin en el documento. (Algunos plugins también pueden requerir estilos).
2. Indicarle a Reveal.js la existencia del plugin incluyéndolo en el `array` de plugins al inicializarlo.

Por ejemplo:

```html
<script src="https://cdn.jsdelivr.net/npm/reveal.js/dist/reveal.js"></script>
<!-- Plugins -->
<script src="https://cdn.jsdelivr.net/npm/reveal.js/plugin/markdown/markdown.js"></script>
<script src="https://cdn.jsdelivr.net/npm/reveal.js/plugin/highlight/highlight.js"></script>

<script>
  Reveal.initialize({
    plugins: [ RevealMarkdown, RevealHighlight ],
  });
</script>
```
{: .nolineno file="index.html" }

Si utilizas módulos ES, también puedes realizar exportaciones de módulos para todos los plugins integrados:

```html
<script type="module">
  import Reveal from 'dist/reveal.esm.js';
  import Markdown from 'plugin/markdown/markdown.esm.js';
  Reveal.initialize({
    plugins: [Markdown],
  });
</script>
```
{: .nolineno file="index.html" }


> Los plugins se cargan de forma modular, por lo que puedes **activar solo los que realmente necesitas**. Esto mejora el **rendimiento y tiempo de carga** de la presentación, algo importante si planeas publicarla en GitHub Pages o en línea.
{: .prompt-tip }

Reveal.js incluye varios plugins oficiales como:

| Plugin        | Descripción                                                                |
| ------------- | -------------------------------------------------------------------------- |
| **Math**      | Permite mostrar fórmulas matemáticas usando KaTeX o MathJax.               |
| **Markdown**  | Permite escribir las diapositivas directamente en formato Markdown.        |
| **Highlight** | Resalta el código fuente con colores según la sintaxis del lenguaje.       |
| **Notes**     | Muestra notas del presentador en una vista separada durante la exposición. |

### Plugins personalizados

También puedes crear tus propios plugins.
Un plugin es básicamente un objeto con un nombre y una función `init()`:

```js
const MyPlugin = {
  id: 'MyPlugin',
  init: (deck) => {
    console.log('Plugin cargado correctamente');
  }
};

Reveal.initialize({
  plugins: [ MyPlugin ]
});
```
{: .nolineno }


