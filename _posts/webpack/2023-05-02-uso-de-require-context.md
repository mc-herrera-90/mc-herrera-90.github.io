---
title: "Cargar archivos dinámicamente"
categories: ["Desarrollo Web", "Webpack"]
icon: icon/webpack.svg
---

En ocasiones, cuando necesitamos importar varios archivos de una carpeta (por ejemplo, imágenes, íconos o módulos), resulta poco práctico tener que importarlos uno por uno. Para resolverlo, Webpack nos ofrece la función `require.context`, una herramienta poderosa, ya que permite crear contexto dinámico de importación para todos los archivos dentro de una carpeta específica, sin necesidad de importarlos uno por uno.

## ¿Qué hace require.context?

En Webpack `require.context` es una función que permite crear un "contexto dinámico" para importar múltiples módulos a la vez desde de una carpeta o directorio específico (incluso dentro de subcarpetas). A diferencia de las importaciones estáticas de {% include tooltip.html word="(ES6)" description="ES6, también conocido como ECMAScript 2015, es la sexta versión del estándar ECMAScript, en el cual se basa el lenguaje de programación JavaScript" %}, que requiren que declares explícitamente cada archivo.

**Sintaxis Básica**:

```js
require.context(
  directory,      // ¿Dónde buscar?
  recursive,      // ¿Buscar en subcarpetas?
  pattern         // ¿Qué archivos buscar?
);
```
{: .nolineno }

- `directory`: La ruta relativa a la carpeta donde Webpack debe buscar los archivos.
- `recursive`: Un valor booleano (`true` o `false`) que indica si Webpack debe buscar en las subcarpetas dentro de `directory`.
- `pattern`: Una expresión regular que define los archivos que deben ser incluidos (por ejemplo, `\.js$` para todos los archivos JavaScript).

## Iniciar con el starter template

Para explorar el uso de `require.context`, vamos a utilizar un __template preconfigurado__ que incluye toda la configuración básica necesaria de webpack:  

<a href="https://github.com/new?template_name=webpack5-starter-template&template_owner=mc-herrera-90" class="border-0" target="_blank">
  <kbd style="background: green; color: white;">Usa este template</kbd>
</a>

![New starter template](webpack/new-starter-template-light.webp){:.light}
![New starter template](webpack/new-starter-template-dark.webp){:.dark}

Una vez creado el nuevo repositorio, clónalo en tu equipo local y luego instala las dependencias necesarias para el proyecto:

```terminal
npm install
```

Finalizada la instalación, corremos el servidor de desarrollo:

```terminal
npm run dev
```

A continuación, puedes reproducir el video y revisar cómo configurar el starter template:

{% include embed/video.html src="webpack/clonar-starter-template.mp4" %}

## Casos prácticos para require.context

### 1. Galería de imágenes

Lo primero es abrir el proyecto con VS Code, o con el editor de tu preferencia. Al hacerlo, notarás que dentro de la carpeta `src` existe una subcarpeta llamada `assets`. Ahí es donde puedes agregar las imágenes que desees utilizar para la galería.

> En la carpeta `config/` se encuentra el archivo `webpack.common.js` y verás que tenemos configurado el Asset Module tanto para el entorno de desarrollo como para producción. Esto es necesario para poder cargar imágenes correctamente en el proyecto.
![configuración de asset module](webpack/config-asset-modules-dark.webp){:.dark}
![configuración de asset module](webpack/config-asset-modules-light.webp){:.light}
{: .prompt-info }


Si quieres usar las mismas imágenes que se muestran en este ejemplo, puedes descargarlas directamente desde el siguiente enlace y colocarlas dentro de `src/assets/tech-logos`:

[<i class="fa-solid fa-file-zipper"></i> Descargar imágenes (.zip)](https://github.com/mc-herrera-90/webpack5-starter-template/archive/refs/heads/assets.zip)

Una vez que tengas las imágenes en tu proyecto, asegúrate de que la estructura de carpetas quede así:

![assets para la galería](webpack/webpack-asset-gallery-dark.webp){:.dark}
![assets para la galería](webpack/webpack-asset-gallery-light.webp){:.light}

Ahora que tenemos las imágenes de los logos en la carpeta `src/assets/tech-logos-svg`. El siguiente paso será crear una función que importe automáticamente esos archivos sin tener que escribir una importación por cada archivo. Dentro de la carpeta `src`, crea un nuevo archivo llamado `gallery.js` y escribe o copia el siguiente código

```js
export function Gallery() {
  // Creamos el contenedor donde mostraremos las imágenes
  const galleryContainer = document.createElement('div');

  /**
   * require.context(directorio, incluirSubdirectorios, expresiónRegular)
   * 
   * - directorio: ruta relativa desde el archivo actual
   * - incluirSubdirectorios: si se deben explorar carpetas dentro de la ruta
   * - expresiónRegular: patrón para coincidir con los archivos deseados
   */
  const logosContext = require.context('./assets/tech-logos-svg', false, /\.svg$/);

  // Obtenemos un array con las rutas procesadas por Webpack
  const logos = logosContext.keys().map(logosContext);

  // Recorremos cada imagen y la insertamos en el contenedor
  logos.forEach(src => {
    const img = document.createElement('img');
    img.src = src;              // Ruta de la imagen procesada por Webpack
    img.alt = 'Tech logo';      // Texto alternativo para accesibilidad
    img.style.width = '100px';
    img.style.margin = '10px';
    img.style.objectFit = 'contain';
    img.style.transition = 'transform 0.2s ease';

    // Efecto visual simple al pasar el mouse
    img.addEventListener('mouseenter', () => img.style.transform = 'scale(1.1)');
    img.addEventListener('mouseleave', () => img.style.transform = 'scale(1)');

    galleryContainer.appendChild(img);
  });

  return galleryContainer;
}
```
{: .nolineno file="src/gallery.js" }


El resultado puede variar según los estilos que tengas definidos, pero lo importante es que ya contamos con la **funcionalidad completa**:
las imágenes se cargan automáticamente desde la carpeta `assets/tech-logos-svg` gracias a `require.context`, sin necesidad de escribir código adicional o modificar rutas manualmente cada vez que se agregan nuevos archivos.

![assets para la galería](webpack/gallery-preview.webp)

### 2. Generador de sitio estático

Supongamos que estás escribiendo un generador de sitios estáticos simple, donde el contenido se organiza en archivos Markdown. La idea es poder cargar automáticamente todos los archivos `.md` de una carpeta y convertirlos en secciones HTML, sin tener que importar cada archivo manualmente.

Podrías modelar el contenido de tu sitio dentro de una estructura de directorios, creando un directorio `.pages/` que contenga los archivos Markdown.

```plaintext
src/
 ├─ assets/
 ├─ pages/
 │   ├─ intro.md
 │   ├─ webpack-tips.md
 │   └─ about.md
 ├─ index.js
 └─ markdownLoader.js
```
{: .nolineno }

Antes de continuar, es necesario que instalemos y configuremos otros 2 loaders:

```terminal
npm install --save-dev html-loader markdown-loader
```

- `markdown-loader`: convierte Markdown en HTML.
- `html-loader`: permite que Webpack importe HTML como módulos JS.

Y ahora añadimos la siguiente regla:

> Siguiendo con la estructura del starter template, añadelo en `config/webpack.common.js` que corresponde a las configuraciones que comparten ambos entornos.
{: .prompt-info }

```js
{
  test: /\.md$/,
  use: [
    { loader: 'html-loader' },
    { loader: 'markdown-loader' }
  ]
}
```
{: file="config/webpack.common.js" .nolineno }

Cada uno de estos archivos tendría un {% include tooltip.html word="(front matter)" description="Sección de metadatos que aparece al principio de un archivo" %} para sus metadatos. La URL de cada página podría determinarse a partir del nombre del archivo y mapearse. Para modelar la idea usando `require.context`, se podría considerar el siguiente código:

```js
// Procesar páginas mediante `yaml-frontmatter-loader` y `json-loader`
// El primero extrae el frontmatter y el cuerpo, y el segundo lo convierte en una estructura JSON
// para su uso posterior. Markdown
// aún no se ha procesado.
const req = require.context(
  "json-loader!yaml-frontmatter-loader!./pages",
  true, // Cargar archivos recursivamente.
  /^\.\/.*\.md$/ // MHacer match con archivos que terminan con la extensión .md.
);
```
{: .nolineno }

> La definición del cargador se puede enviar a la configuración de webpack en el archivo `webpack.config.js`. El formato en línea `"json-loader!yaml-frontmatter-loader!"` se utiliza para minimizar el ejemplo.
{: .prompt-info }

`require.context` devuelve una función que permite realizar solicitudes de importación (*require*) en un contexto específico. Esta función conoce la identificación de su módulo y proporciona un método `keys()` para determinar el contenido del contexto. Para una mejor comprensión, considere el siguiente ejemplo:

```js
req.keys(); // ["./demo.md", "./another-demo.md"]
req.id; // 42

// {title: "Demo", body: "# Demo page\nDemo content\n\n"}
const demoPage = req("./demo.md");
```
{: .nolineno }


Esta técnica también puede ser útil para otros fines, como probar o incluir archivos que Webpack debe vigilar. Para ello, se configuraría un `require.context` apuntando a la carpeta de interés, y luego se referenciaría a este contexto desde un archivo de entrada (`entry`) de Webpack.

En resumen `require.context()` permite:

1. **Buscar archivos en una carpeta**: Puedes especificar una carpeta en la que se deben buscar archivos.
2. **Filtrar archivos por extensión o nombre**: Puedes aplicar filtros para que solo se incluyan los archivos que coincidan con un patrón determinado (por ejemplo solo archivos `.svg` o `.json`).
3. **Obtener una lista de archivos**: Devuelve una lista de archivos que coinciden con el patrón y te permite hacer un procesamiento dinámico de esos archivos.


Para resumir:

* `require.context` es una característica avanzada que a menudo está oculta tras bastidores. Úsala si necesitas realizar búsquedas entre un gran número de archivos.
* Una importación dinámica escrita de cierta forma genera una llamada a `require.context`. En este caso, el código se lee un poco mejor.
* Estas técnicas funcionan únicamente sobre el sistema de archivos. Si necesitas operar sobre URLs, deberías considerar soluciones del lado del cliente.