---
title: "Cargar archivos dinámicamente"
categories: ["Desarrollo Web", "Webpack"]
icon: icon/webpack.svg
---

En ocasiones, cuando trabajamos con múltiples módulos, imágenes o componentes dentro de su carpeta, resulta poco práctico tener que importarlos uno por uno.

Para resolverlo, Webpack nos ofrece la función `require.context`, una herramienta poderosa, ya que permite crear contexto dinámico de importación para todos los archivos dentro de una carpeta específica, sin necesidad de importarlos uno por uno.

## ¿Qué hace require.context?

En Webpack la función `require.context()` permite importar cualquier archivo dentro de una carpeta, o incluso dentro de subcarpetas. A diferencia de las importaciones estáticas de ES6, que requiren que declares explícitamente cada archivo.

**Sintaxis Básica**:

```js
require.context(directory, recursive, pattern);
```
{: .nolineno }

- `directory`: La ruta relativa a la carpeta donde Webpack debe buscar los archivos.
- `recursive`: Un valor booleano (`true` o `false`) que indica si Webpack debe buscar en las subcarpetas dentro de `directory`.
- `pattern`: Una expresión regular que define los archivos que deben ser incluidos (por ejemplo, `\.js$` para todos los archivos JavaScript).

## Uso práctico

Para ello, vamos utilizar un template que ya tengo preparado con la configuración básica de webpack: <a href="https://github.com/new?template_name=webpack5-starter-template&template_owner=mc-herrera-90" class="border-0" target="_blank">
  <kbd style="background: green; color: white;">Usa este template</kbd>
</a>

Una vez creado el nuevo repositorio, clónalo en tu equipo local y luego instala las dependencias necesarias para el proyecto:

```terminal
npm install
```

Finalizada la instalación, corremos el servidor de desarrollo:

```terminal
npm run dev
```

En el template, dentro de la carpeta `src`, encontrarás la carpeta `assets`, donde puedes agregar las imágenes que desees utilizar en el proyecto.

Cargar las imágenes con require context:

```js
const imageContext = require.context(
  './assets/images', // 👈 ruta de la carpeta que contiene los archivos
  false, // 👈 le indicamos que no haga búsqueda recursiva
  /\.(png|jpe?g|svg)$/ // 👈 expresión regular para el filtro
);

console.log(imageContext.keys()) // Devuelve un array con las rutas de los archivos

imageContext.keys().forEach((imagePath) => {
  const img = document.createElement("img");
  img.src = imagePath;
  imageContainer.appendChild(img);
})
```
{: .nolineno file="src/index.js" }


En resumen `require.context()` permite:

1. **Buscar archivos en una carpeta**: Puedes especificar una carpeta en la que se deben buscar archivos.
2. **Filtrar archivos por extensión o nombre**: Puedes aplicar filtros para que solo se incluyan los archivos que coincidan con un patrón determinado (por ejemplo solo archivos `.svg` o `.json`).
3. **Obtener una lista de archivos**: Devuelve una lista de archivos que coinciden con el patrón y te permite hacer un procesamiento dinámico de esos archivos.