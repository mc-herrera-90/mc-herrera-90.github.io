---
title: "Introducción a Webpack"
categories: ["Web", "Webpack"]
image:
    path: poster/webpack-introduccion.webp
    lqip: data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAADQAwCdASoUAAsAPzmGulOvKKWisAgB4CcJagCdMoR8eCKfc/7SmQAA/NS7TyntEsUoQ6mm9DDWtz4sVzgvk7+eS2yeHroW23Z9+SJkH8WZ2JUBgP8xEg1WNclv/1+5C6kgAA==
setup:
  - name: "src/index.js"
    language: "javascript"
    content_file: |
      console.log("Webpack funcionando correctamente 👋");

  - name: "package.json"
    language: "json"
    content_file: |
      {
        "name": "01-intro-webpack",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1"
        },
        "keywords": [],
        "author": "",
        "license": "ISC",
        "devDependencies": {
          "webpack": "^5.102.1",
          "webpack-cli": "^6.0.1"
        }
      }

scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js
---

{% capture tooltip_loaders %}{% include tooltip.html 
    word="(Loaders)" 
    description="Permiten a Webpack procesar archivos que no son de JavaScript, como CSS, imágenes o Sass" %}{% endcapture %}

En el desarrollo moderno de aplicaciones web, los proyectos suelen incluir numerosos archivos JavaScript, hojas de estilo, imágenes y librerías externas. Organizar y optimizar todos estos recursos manualmente sería una tarea compleja y propensa a errores.
Ahí es donde entra Webpack, una potente herramienta que automatiza este proceso, permitiendo empaquetar, transformar y optimizar el código para que las aplicaciones sean más rápidas y fáciles de mantener.

## ¿Qué es Webpack?

[**Webpack**](https://webpack.js.org/){:target='_blank'} es un empaquetador {% include tooltip.html word="(Bundler)" description="Es una herramienta que toma todos los archivos y módulos de un proyecto y los combina en uno o varios archivos optimizados para cargar más fácilmente" %} de módulos. Webpack no solo empaqueta archivos, sino que también permite realizar tareas de transformación y optimización de esos archivos, como la transpilación de JavaScript con Babel, la minificación de código y la inyección de recursos estáticos como imágenes y fuentes.

{% include assets/bundler.svg %}

> En términos sencillos, es una herramienta que toma todos los recursos de una aplicación web (JavaScript, CSS, Imágenes, etc.) y los agrupa en un solo archivo (o varios archivos optimizados) para ser usados en el navegador
{: .prompt-info }

## Preparando nuestro entorno

Antes de comenzar a trabajar con Webpack, es importante tener instalado el entorno básico que permitirá ejecutar y administrar los paquetes de tu proyecto.
Webpack se ejecuta sobre __Node.js__, por lo que necesitarás tener tanto Node.js como su gestor de paquetes npm (o yarn) instalados en tu sistema.

- [Node.js](https://nodejs.org/en/){:target='_blank'}: Se recomienda la versión Node.js 16 o superior.
* [npm](https://www.npmjs.com/){:target='_blank'}: Incluido automáticamente al instalar Node.js. Se recomienda la versión **9 o superior**.
* [Editor de código](https://code.visualstudio.com/){:target='_blank'}: Cualquier editor moderno funcionará, pero **Visual Studio Code** es la opción más utilizada.
* [Terminal o consola de comandos](https://learn.microsoft.com/es-es/windows/terminal/){:target='_blank'}: Necesaria para ejecutar los comandos de instalación y compilación.

Una vez que tengas instalado Node.js y npm, podemos continuar con la instalación de Webpack.

1\. Crear el directorio del proyecto
: Primero, crea una carpeta para tu proyecto y accede a ella desde la terminal:

```terminal
mkdir 01-intro-webpack
cd 01-intro-webpack
```

2\. Inicializar el proyecto con npm
: Inicializa tu proyecto con un archivo `package.json`, que contendrá la información y dependencias del mismo:

```terminal
npm init -y
```

3\. Instalar Webpack y Webpack CLI
: Ejecuta el siguiente comando para instalar Webpack y su interfaz de línea de comandos como dependencias de desarrollo:

```terminal
npm install webpack webpack-cli --save-dev
```

4\. Crear la estructura inicial del proyecto
: Crea los directorios principales de trabajo:

{% include file-viewer.html files=page.setup name="demo1" %}

## Conceptos Básicos de Webpack

Para entender cómo funciona Webpack, hay varios conceptos clave que debemos conocer:

Entrypoint
: Es el archivo principal que Webpack utiliza para comenzar a construir el gráfico de dependencias. Generalmente, es un archivo JavaScript principal, como `index.js`.

Modules
: En Webpack, cualquier archivo que puedas importar o requerir en tu aplicación es considerado un módulo (archivo JS, CSS, imágenes, etc).

Loaders
: Son transformaciones que Webpack aplica a los módulos antes de empaquetarlos. Por ejemplo, un *loader* puede transpilar código TypeScript a JavaScript, o convertir archivos Sass en CSS.

Plugins
: Son herramientas más poderosas que Webpack usa para realizar tareas más complejas como la optimización de recursos, la generación de HTML, la minificación de código y la definición de variables de entorno.

Output
: Es donde Webpack coloca los archivos finales después de haberlos empaquetado. Puedes especificar el nombre y la estructura de los archivos de salida.

## Configuración de Webpack

La configuración de Webpack se define en un archivo `webpack.config.js` en el directorio raíz del proyecto. Este archivo contiene un __objeto JavaScript__ con todas las reglas y configuraciones para que Webpack pueda procesar el código, resolviendo dependencias y empaquetar los archivos de la manera que necesites.

La configuración básica se enfoca en los siguientes componentes:

- Punto de entrada {% include tooltip.html word="(Entry)" description="Define el punto de inicio para el procesamiento de dependencias" %}
- La salida {% include tooltip.html word="(Output)" description="Especifica dónde guardar los archivos empaquetados y cómo nombrarlos, por ejemplo, en una carpeta `dist`." %}
- Manejar diferentes tipos de archivos mediante cargadores {{ tooltip_loaders }}.

Un archivo `webpack.config.js` básico puede lucir de la siguiente manera:

```js
const path = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
}
```
{: .nolineno file="webpack.config.js" }

En este ejemplo, Webpack tomará el archivo `index.js` en la carpeta `src`, lo procesará y generará un archivo `bundle.js` en la carpeta `dist`. Además, usa un __loader__ para procesar archivos `CSS`.

## Ejecutar Webpack

Antes de ejecutar Webpack y generar el _build_ del proyecto, dejaremos la siguiente configuración mínima:

```js
const path = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```
{: .nolineno file="webpack.config.js" }

Ahora, abre una terminal y ejecuta directamente Webpack:

```terminal
npx webpack --config webpack.config.js
```

En este caso, le indicamos explícitamente a Webpack cuál archivo de configuración que debe usar. Sin embargo, esto no es obligatorio, ya que Webpack detecta automáticamente el archivo `webpack.config.js` si se encuentra en el directorio raíz del proyecto.

> Para llevar diferentes configuraciones (por ejemplo, `webpack.prod.config.js` o `webpack.dev.js`), puedes cargarlo igualmente especificando su ruta con la opción `--config`, tal como se muestra en el comando anterior.
{: .prompt-tip }

Como resultado, nos debería haber creado la carpeta `dist` y el archivo `bundle.js`:

```
📦 01-intro-webpack/
├── 📂 dist/
│   └── bundle.js
├── 📁 node_modules/
├── 📂 src/
│   └── index.js
├── package.json
└── webpack.config.js
```
{: .noheader }

### Modos de desarrollo y producción

Webpack puede ser ejecutado de dos modos diferentes, `development` y `production`.

Modo development
: - __Enfoque__: Rápido de compilar y optimizado para la depuración.
  - __Características__:
    - No realiza minimización del código.
    - Proporciona mensajes de error más detallados y útiles. 

Modo production
: - __Enfoque__: Optimización del código para un rendimiento máximo.
  - __Características__:
    - Minimiza automáticamente el código JavaScript y otros recursos.
    - Aplica optimizaciones integradas (como la minificación con terser-webpack-plugin).
    - Establece la variable de entorno `process.env.NODE_ENV` a `production`, lo que permite a las bibliotecas ejecutar su lógica específica para producción.
    - Genera un archivo de menor tamaño, aunque puede tardar más en compilar. 

> El modo `development` prioriza la velocidad de compilación y una experiencia de depuración mejorada. El modo `production` optimiza el paquete final para un mejor rendimiento web.
{: .prompt-info } 

Para establecer el modo en el archivo `webpack.config.js` del proyecto, agregalo de la siguiente manera:

```js
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development' // 👈 cambia entre ( production | development )
}
```
{: file="webpack.config.js" .nolineno  }

## Instalación de webpack-dev-server

Hasta ahora, cada vez que realices cambios en el proyecto se debe ejecutar el comando `npx webpack` manualmente. Esto funciona, pero relentiza el desarrollo.

Contar con un __servidor de desarrollo__ nos vendrá de gran ayuda, porque nos permite:

- Aplicar los cambios __al instante__ sin ejecutar comandos cada vez.
- Recargar automáticamente la página en el navegador (_live reload_).

Webpack pone esto a tu alcance con `webpack-dev-server`, lo instalamos con el siguiente comando:

```terminal
npm install webpack-dev-server --save-dev
```

> Se instala como dependencia de desarrollo porque solo se usa durante la creación y pruebas del proyecto, no en producción.
{: .prompt-info }

Para facilitar la ejecución de Webpack desde la terminal, podemos agregar algunos scripts útiles en el archivo `package.json`. De esta forma, evitamos especificar el modo directamente en el archivo `webpack.config.js`:

```js
"scripts": {
  "build": "webpack --mode production",
  "dev": "webpack serve --mode development"
},
```
{: .nolineno file="package.json" }

Ahora podremos ejecutar los comandos con mayor facilidad desde la terminal:

```bash
npm run build   # Compila el proyecto en modo producción
npm run dev     # Inicia el servidor en modo desarrollo
```
{: .nolineno }

Ya contamos con un servidor de desarrollo para recargar cambios al instante. Pero si ejecutamos el servidor probablemente veremos lo siguiente en el navegador:

![Cannot GET](webpack/cannot-get.webp)

¿Y porqué pasa esto?

Hasta ahora solo hemos configurado el `entry` y el `output` de nuestro JavaScript. El servidor genera un `bundle.js`, pero no hay un archivo HTML que lo contenga ni que le indique al navegador qué mostrar.

> En otras palabras, tenemos el motor (`bundle.js`) listo, pero no tenemos el chasis (HTML) que lo haga visible.
>
> Aprende más sobre el _Dev Server_ en la documentación oficial: [https://webpack.js.org/configuration/dev-server/](https://webpack.js.org/configuration/dev-server/){: target='_blank' }
{: .prompt-tip }

## Inyectando el JavaScript en el HTML

Para poder visualizar la aplicación correctamente en el navegador, necesitamos de un HTML base. En lugar de hacerlo manualmente, vamos a usar y configurar nuestro primer plugin que se encargará de:

- Crear un archivo HTML en la carpeta de salida `dist/`.
- Inserta automáticamente el `<script>` que carga nuestro __bundle__.
- Lo mantiene actualizado cada vez que cambiemos nuestro código, listo para el servidor de desarrollo.

De esta forma, nuestro flujo de trabajo será mucho más fluido y práctico, y podremos concentrarnos en escribir código sin preocuparnos de actualizar manualmente el HTML.

Para comenzar, instalamos el plugin desde la terminal:

```terminal
npm install html-webpack-plugin --save-dev
```

Luego, abrimos el archivo `webpack.config.js` y añadimos la siguiente configuración:

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Limpia la carpeta dist antes de generarlo
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Archivo HTML base
      filename: "index.html", // Nombre del HTML final en "dist"
      inject: "body" // Inyecta el script antes de </body>
    }),
  ],
};
```
{: file="webpack.config.js" .nolineno }

> La propiedad `inject` existe, pero ya no es estrictamente necesaria en la mayoría de los casos. Otros valores posibles:
- `"head"`: inserta los scripts dentro del `<head>`.
- `false`: no inyecta nada automáticamente, útil si quieres colocar los scripts manualmente en el HTML.  
>
> En la mayoría de los casos, no necesitas agregar `inject` explícitamente, ya que el comportamiento por defecto (`inject: 'body'`) es el más conveniente. Si quieres aprender más sobre este plugin, revisa su documentación: [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin){: target='_blank' }
{: .prompt-info }

Antes de avanzar, queremos asegurarnos de que Webpack está compilando y sirviendo correctamente el HTML.

Para eso, crea el archivo en `./src/index.html` y agregamos una estructura básica. Por último ejecutamos nuevamente el servidor con `npm run dev` y deberíamos ver el siguiente resultado:

![Preview plugin HTML](webpack/webpack-html-plugin-preview.webp)

Perfecto, ahora dejamos solo un `<div id="app">`, que actuará como punto de montaje en el HTML. Todo lo que rendericemos desde `index.js` se insertará dentro de ese contenedor. Por ejemplo, añade contenido dinámico desde el `index.js`:

```js
// Seleccionamos el contenedor principal
const app = document.getElementById('app');

// Creamos un elemento principal
const mainContainer = document.createElement('div');
mainContainer.classList.add('main');

// Agregamos un título y un párrafo
const title = document.createElement('h1');
title.textContent = '¡Hola desde JavaScript!';

const description = document.createElement('p');
description.textContent = 'Este contenido fue generado dinámicamente usando Webpack.';

// Insertamos los elementos en el contenedor
mainContainer.appendChild(title);
mainContainer.appendChild(description);
app.appendChild(mainContainer);

console.log('Renderizado dinámico completado');
```
{: file="src/index.js" }

Para ver el código inyectado dinámicamente, ejecutamos nuevamente `npm run dev`:

![Webpack HTML Plugin desde js](webpack/webpack-html-plugin-from-js-preview.webp)

<span class="fs-5">¿Qué logramos con esto?</span>

1\. El HTML ahora es completamente manejado por el JavaScript.
: Esto nos prepara para futuras etapas donde queramos montar vistas o componentes dinámicos.

2\. Validamos que Webpack recompila automáticamente.
: Si tienes corriendo el servidor (`npx webpack serve`), cada cambio en el JS recargará la página automáticamente gracias al __Hot Reloading__.

3\. Nuestro index.html se mantiene limpio.
: Ya no necesitamos agregar etiquetas manualmente, todo se genera desde el _bundle_.

## Inyectando estilos CSS desde JavaScript

Es hora de usar los ya mencionados {{tooltip_loaders}} para indicarle a Webpack que cargue archivos CSS. Para eso, como de costumbre, se debe instalar los paquetes que necesitamos:

```terminal
npm i -D css-loader style-loader
```

- `css-loader`: permite que Webpack entienda los `@import` y `url()` dentro de los archivos CSS.
- `style-loader`: inyecta automáticamente el CSS procesado en el DOM mediante una etiqueta `<style>`.

> Usar `style-loader` en combinación de `css-loader`, le permite a Webpack procesar el archivo CSS con `css-loader` (resuelve las importaciones y las dependencias), y luego utiliza `style-loader` para inyectar ese CSS procesado dentro de la etiqueta `<style>` del documento HTML en tiempo de ejecución.
{: .prompt-info }

Explicado lo anterior, es importante saber que los cargadores se evalúan de derecha a izquierda. En el siguiente ejemplo, la ejecución comienza con `css-loader` y termina con `style-loader`, lo que tiene lógica ya que primero se debe **procesar** y luego **inyectar** los estilos.

```js
module.exports = {
  entry: "./src/index.js",
  output: {...},
  plugins: [...],
  module: {
    rules: [
      {
        test: /\.css$/, // Detecta archivos que terminen en .css
        use: [
          { loader: 'style-loader' }, // 👈 se carga después
          { loader: 'css-loader' } // 👈 se carga primero
        ]
      }
    ]
  }
}
```
{: .nolineno file="webpack.config.js" }

Lo anterior definido en `module` puede reemplazarse por lo siguiente:

```js
module: {
  rules: [
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'] // Se aplican en orden inverso
    }
  ]
}
```
{: .nolineno file="webpack.config.js" }

Ahora, se puede crear un archivo `src/index.css` y agregar algunas reglas de estilos:

```css
body {
  font-family: sans-serif;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

h1 {
  color: #222;
}
```
{:  file="src/index.css" .nolineno }

> Cuidado, si por algún motivo tu `package.json` tiene `"type": "commonjs"` al intentar usar `import` genera error, en ese caso deberías usar `require` o cambiar el valor por `"module"` (recomendado), pero esto nos obliga a cambiar los `require` por `import` en el archivo de configuración.
![Cuidado con el type](webpack/webpack-type-commonjs.webp)
{: .prompt-warning }

Ahora, podemos revisar como nos quedan los archivos al realizar el _build_:

{% include file-viewer.html files=site.data.codes.webpack.build name="build" %}

## Inyectando archivos estáticos

Ya tenemos los estilos funcionando, pero ¿cómo agregamos imágenes, íconos o fuentes a nuestro proyecto?

> En versiones anteriores de Webpack, esto requería instalar un loader adicional (`como file-loader` o `url-loader`).
{: .prompt-info }

Desde Webpack 5, no necesitas instalar un loader para archivos estáticos, ya que la configuración de los [**Asset Modules**](http://webpack.js.org/guides/asset-modules/){:target="_blank"} permite manejar imágenes, fuentes y otros recursos estáticos de manera más sencilla.

Para eso, debemos agregar una nueva regla muy simple como se muestra a continuación:

```js
module.exports = {
  entry: "./src/index.js",
  output: {...},
  plugins: [...],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg?g|gif|svg)$/i,
        type: 'asset/resource', // 👈 Le indicamos que use Asset Modules
      }
    ]
  }
}
```
{: .nolineno file="webpack.config.js" }

Ahora, podemos importar imágenes directamente desde nuestro JavaScript y Webpack se encargará de procesarlas y moverlas a la carpeta final del _build_:

![Importar imagen con Asset Modules](webpack/webpack-import-asset-svg.webp)

Puedes volver a ejecutar `npm run build` y ver como queda el _build_ final, hasta ahora deberíamos tener una estructura de directorios y archivos similar a la siguiente: 

```
📦 01-intro-webpack/
├── 📁 dist/                 # El build generado por Webpack
│   ├── index.html
│   ├── bundle.js
│   └── 588f99f9734880c0b645.svg
│
├── 📁 src/                  # Código fuente del proyecto
│   ├── 📁 assets/
│   │   └── logo.svg          # Imagen usada en index.js
│   ├── index.html            # Plantilla base del proyecto
│   ├── index.js              # Punto de entrada principal
│   └── style.css             # Estilos globales
│
├── 📁 node_modules/          # Dependencias instaladas (creadas por npm)
│
├── package.json              # Configuración del proyecto y scripts npm
├── package-lock.json         # Bloqueo de dependencias
└── webpack.config.js         # Configuración principal de Webpack
```
{: .noheader }

## Conclusión

A lo largo de este artículo, configuramos paso a paso un entorno básico con **Webpack 5**, comprendiendo cómo:

* Empaquetar nuestro código JavaScript.
* Levantar un servidor de desarrollo con recarga en vivo.
* Inyectar JS y CSS de forma automática en el HTML.
* Y manejar archivos estáticos sin necesidad de *loaders* externos.

Con esto, ya cuentas con una base sólida para seguir explorando funcionalidades más avanzadas como **optimización, Babel o módulos dinámicos**, las cuales estaré abordando en próxinos artículos.
