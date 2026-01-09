---
title: "Sass: Directiva @forward"
categories: [Sass, Sass-Directivas]
badge: sass
mermaid: true
scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js
style: |
  span.err {
    background: var(--main-bg) !important;
    color: var(--text-color) !important;
  }
---

La directiva `@forward` sirve para **reexportar** variables, mixins y funciones desde un archivo Sass hacia otros.
No genera CSS por sí sola y **no aplica estilos automáticamente**.

## El problema que resuelve

Antes, con `@import`, todo se cargaba de forma global.
Eso causaba:

* nombres pisados
* dependencias ocultas
* archivos difíciles de mantener

`@forward` evita eso haciendo que **todo sea explícito**.

## Ejemplo básico

Para la siguiente estructura de archivos:

{% include file-viewer.html files=site.data.codes.sass.fordward.one name="base" %}

### Uso desde otro archivo

{% include file-viewer.html files=site.data.codes.sass.fordward.two name="uso_desde_afuera" %}

## @forward no es @use

* `@use` es para consumir cosas
* `@forward` es para exponer cosas

Normalmente:

* `@forward` se usa en archivos `index.scss`
* `@use` se usa en los estilos reales

## Controlar qué se expone

__Mostrar solo lo necesario__:

```scss
@forward "colors" show $primary;
```

Solo `$primary` queda disponible.


__Ocultar cosas internas__:

```scss
@forward "colors" hide $secondary;
```
  
Todo menos `$secondary`.

## Regla importante

`@forward` **no hace que puedas usar las cosas dentro del mismo archivo**. Su propósito principal es **reexportar variables, mixins o funciones para que otros archivos puedan usarlas sin necesidad de importar cada archivo por separado**.

Por eso, **su uso está especialmente pensado para archivos `_index.scss`**, donde solo se reexportan cosas y no se añaden reglas adicionales. Así, otros archivos pueden usar todo lo que reexporta `_index.scss` con un solo `@use`.

## Patrón recomendado

```scss
@forward "colors";
@forward "typography";
@forward "spacing";
```
{:file='styles/_index.scss'}

```scss
@use "styles";
```
{:file='main.scss'}

Un solo punto de entrada, ordenado y mantenible.

```mermaid
---
title: 'Esquema visual de @forward'
---
flowchart TD
    subgraph Styles["<font size='4'>📁 Carpeta styles</font>"]
        Colors["fa:fa-file-code _colors.scss"]
        Spacing["fa:fa-file-code _spacing.scss"]
        Typography["fa:fa-file-code _typography.scss"]
        Index["fa:fa-file-code _index.scss<br/><div align='left'>@forward colors<br/>@forward typography<br/>@forward spacing</div>"]
    end

    App["fa:fa-file-code main.scss<br/>@use styles"]

    Colors --> Index
    Typography --> Index
    Spacing --> Index
    Index --> App
```

{% include circle-line.html %}

## Resumen rápido

* `@forward` expone
* `@use` consume
* No hay variables globales
* Todo tiene namespace
* Ideal para librerías y proyectos grandes