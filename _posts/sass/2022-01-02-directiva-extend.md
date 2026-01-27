---
title: "Sass: Directiva @extend"
badge: sass
categories: [Sass, Sass-Directivas]
---

La directiva `@extend` permite que un selector **herede todos los estilos de otro selector**. Esto evita repetir código y hace que tu CSS sea más mantenible.

**Sintaxis básica:**

```scss
.selector-nuevo {
  @extend .selector-existente;
}
```
{:.nolineno .typing}

Esto hace que `.selector-nuevo` tenga los mismos estilos que `.selector-existente`.


## Ejemplo práctico 1: Reutilizando botones

Supongamos que tienes un botón base y quieres crear variantes:

```scss
// Botón base
.btn {
  padding: 10px 20px;
  border-radius: 5px;
  background-color: blue;
  color: white;
  font-weight: bold;
  border: none;
}

// Botón secundario usando @extend
.btn-secondary {
  @extend .btn;
  background-color: gray;
}
```
{:.nolineno}

**CSS compilado resultante:**

```css
.btn, .btn-secondary {
  padding: 10px 20px;
  border-radius: 5px;
  background-color: blue;
  color: white;
  font-weight: bold;
  border: none;
}

.btn-secondary {
  background-color: gray;
}
```
{:.nolineno}

Observa que `.btn-secondary` **hereda todos los estilos de `.btn`** y luego sobrescribe solo el color de fondo.


## Ejemplo práctico 2: Tarjetas con estilos compartidos

Imagina que tienes diferentes tipos de tarjetas:

```scss
.card {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  background-color: white;
}

/* Tarjeta de alerta */
.card-alert {
  @extend .card;
  border-left: 5px solid red;
}

/* Tarjeta de éxito */
.card-success {
  @extend .card;
  border-left: 5px solid green;
}
```

**CSS compilado:**

```css
.card, .card-alert, .card-success {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  background-color: white;
}

.card-alert {
  border-left: 5px solid red;
}

.card-success {
  border-left: 5px solid green;
}
```

## Buenas prácticas con @extend

### 1 Usar con selectores “placeholder”

Sass permite definir **placeholders** con `%` para no generar CSS directamente:

```scss
%btn-base {
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  border: none;
}

.btn-primary {
  @extend %btn-base;
  background-color: blue;
  color: white;
}

.btn-secondary {
  @extend %btn-base;
  background-color: gray;
  color: black;
}
```

* `%btn-base` **no genera CSS por sí mismo**, solo sirve para extender.
* Esto evita generar selectores innecesarios en el CSS final.

### 2. Evitar abusar de @extend

* Extender selectores demasiado específicos puede generar **combinaciones complejas de CSS**.
* Para estilos muy distintos, usa **mixins** (`@mixin`) en lugar de `@extend`.

## Resumen

* `@extend` permite **heredar estilos de otro selector**.
* Útil para **componentes con estilos similares**, como botones, tarjetas o listas.
* Mejor usar con **placeholders** (`%`) para un CSS limpio.
* Para casos más complejos, considera **mixins**.

{% include circle-line.html %}

Con esto, puedes empezar a **reutilizar estilos en tus proyectos Sass de manera eficiente** y mantener tu CSS limpio y organizado.


