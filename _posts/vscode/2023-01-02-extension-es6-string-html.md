---
title: "ES6 String HTML: HTML legible dentro de template strings"
categories: ["Visual Studio Code", "Extensiones"]
badge: vscode 
---

Cuando se escribe HTML dentro de *template strings* en JavaScript, el editor suele tratarlo como texto plano.
La extensión **ES6 String HTML** en Visual Studio Code añade **resaltado de sintaxis HTML real** dentro de strings ES6, mejorando la legibilidad del código.

## Instalación

1. Abre Visual Studio Code
2. Cambia a Extensiones
3. Busca: `es6-string-html` (autor: Tobermory)

![Instalar es6](vscode/instalar-es6-string-html.webp)

O puedes abrir su página en el Marketplace y añadirlo:

{% include vscode-extension.html logo="https://tobermory.gallerycdn.vsassets.io/extensions/tobermory/es6-string-html/2.17.0/1733307395603/Microsoft.VisualStudio.Services.Icons.Default" name="ES6 String HTM" description="Agrega soporte para resaltar sintaxis para código, ubicado en cadenas multilínea es6" url="https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html" %}

## Cuándo usarla

Para que la extensión ES6 String HTML detecte el contenido como HTML, se debe anteponer el comentario `/*html*/` justo antes del template string.

__Ejemplo__:

![Usando extensión](vscode/uso-extension-es6-string-html.webp)

{% include circle-line.html %}

**ES6 String HTML** es una extensión pequeña pero muy útil si trabajas con HTML dentro de JavaScript.
Aporta claridad inmediata sin cambiar tu flujo de trabajo.
