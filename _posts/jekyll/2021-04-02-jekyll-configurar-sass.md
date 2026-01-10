---
title: "Jekyll: Configurar Sass"
description: Cómo configurar un proyecto correctamente para usar Sass
categories: [Jekyll, Jekyll-Integraciones]
badge: jekyll
---

Jekyll tiene **soporte nativo para Sass**, por lo que no necesitas instalar loaders, bundlers ni herramientas externas.
Solo debes respetar una estructura y algunas reglas clave.

## 1. Estructura básica del proyecto

La forma recomendada es usar la carpeta `_sass` para los parciales y `assets` para el archivo principal.

* <i class="fa-regular fa-file-code"></i> `_config.yml`
* <i class="fa-regular fa-file-code"></i> `index.md` (o `index.html`)
* <i class="fa-regular fa-folder"></i> `_layouts/`

  * <i class="fa-regular fa-file-code"></i> `default.html`
* <i class="fa-regular fa-folder"></i> `_sass/`

  * <i class="fa-regular fa-file-code"></i> `_variables.scss`
  * <i class="fa-regular fa-file-code"></i> `_mixins.scss`
  * <i class="fa-regular fa-file-code"></i> `_base.scss`
* <i class="fa-regular fa-folder"></i> `assets/`

  * <i class="fa-regular fa-folder"></i> `css/`

    * <i class="fa-regular fa-file-code"></i> `main.scss`
* <i class="fa-regular fa-folder"></i> `_posts/` (opcional)

  * <i class="fa-regular fa-file-code"></i> `YYYY-MM-DD-nombre-post.md`
{:.list-unstyled .p-2 .rounded .d-inline-block .mx-auto style='background: var(--highlight-bg-color, #ccc)'}


## 2. Crear el archivo principal main.scss

Este archivo **sí se compila a CSS**, por eso va en `assets/css/`.

```scss
---
---
@use "variables";
@use "mixins";
@use "base";

body {
  font-family: system-ui, sans-serif;
}
```
{:file='assets/css/main.scss'}

> Las tres líneas `---` son obligatorias.  
> Le indican a Jekyll que debe procesar el archivo.
{: .prompt-warning .d-inline-block }

## 3. Usar parciales Sass

Ejemplo: `_sass/_variables.scss`

```scss
$primary-color: #0d6efd;
$text-color: #222;
```
{:file='_sass/_variables.scss'}

Ejemplo: `_sass/_base.scss`

```scss
body {
  color: $text-color;
}

a {
  color: $primary-color;
}
```
{:file='_sass/_base.scss'}

Jekyll detecta automáticamente la carpeta `_sass`.

## 4. Configurar Sass en _config.yml

Configuración mínima recomendada:

```yml
sass:
  style: compressed
```

Opciones disponibles:

* `compressed` → producción
* `expanded` → desarrollo


## 5. Incluir el CSS en el layout

En tu layout (`_layouts/default.html` por ejemplo):

```html
<link rel="stylesheet" href="{{ '/assets/css/main.css' | relative_url }}">
```
{:.nolineno file='default.html'}

Jekyll compila automáticamente:

```
main.scss → main.css
```


## 6. Usar Sass moderno @use

Jekyll soporta **Sass moderno**, así que evita `@import`.

❌ No recomendado:

```scss
@import "variables";
```

✅ Recomendado:

```scss
@use "variables";
```
{:.nolineno}


Y para usar variables:

```scss
color: variables.$primary-color;
```
{:.nolineno}

## 7. Variables según entorno (opcional)

Puedes cambiar estilos según entorno:

```scss
$env: "{{ jekyll.environment }}";

@if $env == "production" {
  body {
    background: white;
  }
}
```
{:.nolineno}

Ejecutar en producción:

```bash
JEKYLL_ENV=production bundle exec jekyll build
```


## 8. Errores comunes

### ❌ El CSS no se genera

* Falta el front matter (`---`)
* El archivo no está en `assets`
* El nombre empieza con `_`

---

### ❌ Los parciales no se encuentran

* Deben estar en `_sass`
* No incluyas la extensión `.scss`


## 9. Ventajas de usar Sass en Jekyll

* Sin dependencias extra
* Ideal para proyectos minimalistas
* Compatible con GitHub Pages
* Fácil de mantener

## Resumen rápido

1. Usa `_sass` para parciales
2. Usa `assets/css/main.scss` como entrada
3. Agrega front matter
4. Configura `sass` en `_config.yml`
5. Incluye el CSS en el layout
