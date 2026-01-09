---
title: "Sass: Directiva @use"
badge: sass
categories: [Sass, Sass-Directivas]
---

En este artículo aprenderás **cómo usar la directiva `@use` de Sass** para **importar archivos de manera modular y segura**, evitando problemas de nombres duplicados y manteniendo tu código organizado.

`@use` reemplaza a la antigua directiva `@import` y permite:

- Importar **archivos Sass parciales** (`_archivo.scss`).  
- Mantener un **namespace** para evitar conflictos de nombres.  
- Compartir **variables, mixins y funciones** de forma controlada.

**Sintaxis básica:**

```scss
@use 'ruta/del/archivo';
```
{:.nolineno}

* Todo lo importado estará disponible con **el namespace del archivo**.
* Por ejemplo, si tu archivo se llama `_colores.scss`, su namespace por defecto será `colores`.

## Ejemplo práctico 1: Importar variables

Supongamos que tienes un archivo de variables `_colores.scss`:

```scss
$primary: blue;
$secondary: gray;
$danger: red;
```
{:file='_colores.scss'}

En tu archivo principal `main.scss`:

```scss
@use 'colores';

body {
  background-color: colores.$primary;
  color: colores.$secondary;
}
```
{:file='main.scss'}

**CSS compilado:**

```css
body {
  background-color: blue;
  color: gray;
}
```

Observa que **necesitas usar el namespace `colores.`** antes de las variables.


## Ejemplo práctico 2: Renombrar el namespace

Si el namespace por defecto es muy largo, puedes renombrarlo con `as`:

```scss
@use 'colores' as c;

h1 {
  color: c.$danger;
}
```
{:.nolineno}

**CSS compilado:**

```css
h1 {
  color: red;
}
```

## Ejemplo práctico 3: Compartir mixins y funciones

Archivo `_mixins.scss`:

```scss
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@function double($n) {
  @return $n * 2;
}
```
{:file='_mixins.scss'}

En tu `main.scss`:

```scss
@use 'mixins';

.container {
  @include mixins.center;
  width: mixins.double(50px);
}
```
{:file='main.scss'}

**CSS compilado:**

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
}
```

## Ejemplo práctico 4: Importar todo sin namespace (opcional)

Si quieres usar variables o mixins **sin el namespace**, puedes hacerlo con `*`:

```scss
@use 'colores' as *;

p {
  color: $primary;
}
```
{:.nolineno}

> Esta opción **elimina la protección de namespace**, así que úsala con precaución para evitar conflictos.
{:prompt-warning}

## Ventajas de @use sobre @import

| Característica             | `@import` | `@use`                |
| -------------------------- | --------- | --------------------- |
| Namespace                  | No        | Sí (evita conflictos) |
| Importaciones repetidas    | Sí        | No (una sola vez)     |
| Modularidad                | Limitada  | Completa              |
| Mejores prácticas actuales | ❌         | ✅                     |


## Buenas prácticas

1. **Usa nombres claros de namespace** para tus archivos.
2. **Evita `as *`** salvo que sea necesario.
3. **Divide tu proyecto en parciales** (`_variables.scss`, `_mixins.scss`, `_colores.scss`) y usa `@use` en un archivo principal.
4. Mantén tus variables y mixins **centralizados** para un CSS más limpio y mantenible.


{% include circle-line.html %}

Con esto, ahora puedes **modularizar tu código Sass con `@use`** de manera profesional, evitando problemas de nombres y haciendo tu CSS más organizado y escalable.