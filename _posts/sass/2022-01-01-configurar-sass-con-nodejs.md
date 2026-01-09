---
title: "Sass: Configuración con Node.js"
badge: sass
description: "Guía para configurar Sass usando Node.js y dejarlo funcionando correctamente."
categories: [Sass, Sass-Configuracion]
---

En este artículo aprenderás **cómo configurar Sass en un proyecto usando Node.js** y dejarlo compilando correctamente a CSS.

## Requisitos previos

Antes de comenzar, asegúrate de tener:

- **Node.js** instalado (versión LTS recomendada)
- **npm** (se instala junto con Node.js)
- Conocimientos básicos de línea de comandos y HTML/CSS

Verifica la instalación de Node.js y npm con:

```terminal
node -v
npm -v
```

## Extensiones recomendadas

{% tabs ext_recommend %}
{% tab ext_recommend <i class='icon-vscode'></i> VsCode %}
{% include vscode-extension.html name='Sass (.sass only)' url='https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented' logo='https://syler.gallerycdn.vsassets.io/extensions/syler/sass-indented/1.8.33/1739551724362/Microsoft.VisualStudio.Services.Icons.Default' description='Resaltado de la sintaxis y autocompletado' %}
{% endtab %}
{% tab ext_recommend <i class='icon-st4'></i> SublimeText %}
El paquete [Sass](https://packagecontrol.io/packages/Sass){:target='_blank'} permite resaltar sintaxis en archivos `.sass` o `.scss`.

La forma más fácil de instalarlo es usando **Package Control**. Aparece listado como **Sass**.

1. Abre la **Paleta de Comandos** usando <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>
2. Selecciona **Package Control: Install Package**
3. Busca **Sass** y presiona <kbd>Enter</kbd>
{% endtab %}
{% endtabs %}

## Paso 1: Inicializar el proyecto

En la carpeta raíz de tu proyecto:

```terminal
npm init -y
```

Esto crea un `package.json` donde se guardarán las dependencias y scripts.

## Paso 2: Instalar Sass

Instala Sass como dependencia de desarrollo:

```terminal
npm install sass --save-dev
```

## Paso 3: Crear la estructura de carpetas

Organiza tu proyecto de manera simple:

```
project/
├── index.html
├── scss/
│   └── main.scss
├── css/
│   └── main.css
└── package.json
```
{:.noheader .rounded-0}

> `main.scss` será el archivo principal que compilaremos.
{:.prompt-info}

## Paso 4: Configurar scripts de compilación

En el `package.json`, añade un script para **desarrollo**:

```json
"scripts": {
  "sass": "sass --watch scss/main.scss css/main.css"
}
```
{:file='package.json'}

Esto permite que Sass observe los cambios en `main.scss` y los compile automáticamente a `css/main.css`.

Si quieres generar **CSS comprimido** para producción, añade otro script:

```json
"scripts": {
  "sass": "sass --watch scss/main.scss css/main.css",
  "sass:prod": "sass --style=compressed scss/main.scss css/main.css"
}
```
{:file='package.json'}

* `--style=compressed` genera un CSS minificado listo para producción.
* Ejecuta `npm run sass:prod` para compilar tu CSS comprimido.

## Paso 5: Ejecutar Sass

En la terminal, ejecuta para desarrollo:

```terminal
npm run sass
```

Para producción (minificado):

```terminal
npm run sass:prod
```

Sass comenzará a observar `main.scss` y generará `main.css` en la carpeta `css`.

## Paso 6: Enlazar CSS en tu HTML

En tu archivo `index.html`, enlaza el CSS compilado:

```html
<link rel="stylesheet" href="css/main.css">
```
{:file='index.html' .nolineno}

> Nunca enlaces el archivo `.scss` directamente.
{:.prompt-warning}

Con esto, **Sass ya está configurado y funcionando en tu proyecto**. Cada cambio en `main.scss` se reflejará automáticamente en `main.css` durante el desarrollo, y podrás generar CSS comprimido para producción con un solo comando.

## Demostración

En el siguiente video, puedes ver aplicados los pasos descritos anteriormente:

{% include embed/video.html src='sass/configurar-sass.webm' %}

