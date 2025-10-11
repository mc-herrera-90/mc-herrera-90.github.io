---
title: "Introducción a Webpack"
categories: ["Web", "Webpack"]
setup:
  - name: "src/index.js"
    language: "javascript"
    content_file: |
      console.log("Webpack funcionando correctamente 👋");


  - name: "dist/index.html"
    language: "html"
    content_file: |
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Mi Proyecto Webpack</title>
        </head>
        <body>
          <h1>Hola desde Webpack</h1>
          <script src="main.js"><\/script>
        </body>
      </html>

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


En el desarrollo moderno de aplicaciones web, los proyectos suelen incluir numerosos archivos JavaScript, hojas de estilo, imágenes y librerías externas. Organizar y optimizar todos estos recursos manualmente sería una tarea compleja y propensa a errores.
Ahí es donde entra Webpack, una potente herramienta que automatiza este proceso, permitiendo empaquetar, transformar y optimizar el código para que las aplicaciones sean más rápidas y fáciles de mantener.

## ¿Qué es Webpack?

[**Webpack**](https://webpack.js.org/){:target='_blank'} es un empaquetador ( {% include tooltip.html word="bundler" description="Es una herramienta que toma todos los archivos y módulos de un proyecto y los combina en uno o varios archivos optimizados para cargar más fácilmente" %} ) de módulos. Webpack no solo empaqueta archivos, sino que también permite realizar tareas de transformación y optimización de esos archivos, como la transpilación de JavaScript con Babel, la minificación de código y la inyección de recursos estáticos como imágenes y fuentes.

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

Una vez que tengas instalado Node.js y npm, podemos continuar con la instalación de Webpack y su configuración inicial.

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
: Es el archivo principal que Webpack utiliza para comenzar a construir el gráfico de dependencias. Generalmente, es un archivo javaScript principal, como `index.js`.

Modules
: En Webpack, cualquier archivo que puedas importar o requerir en tu aplicación es considerado un módulo (archivo JS, CSS, imágenes, etc).

Loaders
: Son transformaciones que Webpack aplica a los módulos antes de empaquetarlos. Por ejemplo, un *loader* puede transpilar código TypeScript a JavaScript, o convertir archivos Sass en CSS.

Plugins
: Son herramientas más poderosas que Webpack usa para realizar tareas más complejas como la optimización de recursos, la generación de HTML, la minificación de código y la definición de variables de entorno.

Output
: Es donde Webpack coloca los archivos finales después de haberlos empaquetado. Puedes especificar el nombre y la estructura de los archivos de salida.

### Configuración de Webpack

Creamos un archivo `webpack.config.js` en el directorio raíz del proyecto. Este archivo contiene todas las reglas y configuraciones para que Webpack pueda empaquetar los archivos de la manera que necesites.

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

En este ejemplo, Webpack tomará el archivo `index.js` en la carpeta `src`, lo procesará y generará un archivo `bundle.js` en la carpeta `dist`. Además, usa un *loader* para procesar archivos `CSS`.

### Ejecutar Webpack

Podemos ejecutar Webpack, abriendo la terminal y ejecutar el siguiente comando:

```terminal
npx webpack --config webpack.config.js
```

Para facilitar la ejecución de Webpack desde la terminal, podemos agregar algunos scripts útiles en nuestro archivo `package.json`:

```js
"scripts": {
  "build": "webpack --mode production",
  "dev": "webpack serve --mode development"
},
```
{: .nolineno file="package.json" }

### Loaders

Podemos usar cargadores *loaders* para indicarle a webpack que cargue archivos CSS, primero debemos instalar el cargador que necesitamos:

```terminal
npm i -D css-loader style-loader
```
Cuando usamos `style-loader` en combinación de `css-loader`, Webpack primero procesa el archivo CSS con `css-loader` (que resuelve las importaciones y las dependencias CSS), y luego utiliza `style-loader` para inyectar ese CSS procesado dentro de la etiqueta `<style>` del documento HTML en tiempo de ejecución.

Explicado lo anterior, es importante saber que los cargadores se evalúan de derecha a izquierda. En el siguiente ejemplo, la ejecución comienza con `css-loader` y termina con `style-loader`, lo que tiene lógica ya que primero se debe **procesar** y luego **inyectar** los estilos.

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
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

> `style-loader` es útil principalmente durante el desarrollo, ya que facilita la recarga dinámica de los estilos sin tener que recargar la página.
{: .prompt-info }

Desde Webpack 5, no necesitas instalar un loader para archivos estáticos, ya que la configuración de los **assets modules** permite manejar imágenes, fuentes y otros recursos estáticos de manera más sencilla.

Un ejemplo de configuración de Webpack con **assets modules**:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg?g|gif|svg)$/i,
        type: 'asset/resource', // Le indicamos que use assets module
      }
    ]
  }
}
```
{: .nolineno file="webpack.config.js" }


### Plugins

Los plugins permiten realizar tareas avanzadas como optimización del código, inyección de archivos HTML, etc. Un plugin común en Webpack es el [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin){: target='_blank' }, lo que hace es crear un archivo `index.html` y lo vincula al archivo `bundle.js`:

```terminal
npm install -D html-webpack-plugin
```

Y luego para agregar su configuración en el `webpack.config.js`:

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}
```
{: .nolineno file="webpack.config.js"}