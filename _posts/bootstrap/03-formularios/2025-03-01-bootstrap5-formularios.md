---
title: "Bootstrap: Formularios en Bootstrap 5 y sus nuevas características"
categories: [Bootstrap, Bootstrap_03-Formularios]
badge: bootstrap
---

Bootstrap 5 introdujo cambios significativos en los formularios, enfocándose en la simplificidad y la eliminación de jQuery.


## Clases utiles

| Clase          | Función                     |
| -------------- | --------------------------- |
| `form-control` | Estiliza inputs y textareas |
| `form-label`   | Estilo para etiquetas       |
| `mb-3`         | Espaciado entre elementos   |
| `btn`          | Estilo para botones         |


{% capture ej_1 %}
<form class="p-2">
  <div class="mb-3">
    <label for="email" class="form-label">Correo electrónico</label>
    <input type="email" class="form-control" id="email">
  </div>

  <div class="mb-3">
    <label for="password" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="password">
  </div>

  <button type="submit" class="btn btn-primary">
    Iniciar sesión
  </button>
</form>
{% endcapture %}

```html
{{ ej_1 | rstrip }}
```
{: .nolineno .typing .typing-fast }

{% include embed/iframe-doc.html content=ej_1 %}

## Input Groups

Los __input groups__ permiten añadir iconos o texto antes o después de un input.

{% capture ej_igroup1 %}
<div class="input-group">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="usuario">
</div>
{% endcapture %}

```html
{{ ej_igroup1 | rstrip }}
```
{: .nolineno .typing .typing-fast }

{% include embed/iframe-doc.html content=ej_igroup1 %}

También se pueden usar para monedas:

{% capture ej_igroup2 %}
<div class="input-group">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control">
</div>
{% endcapture %}

```html
{{ ej_igroup2 | rstrip }}
```
{: .nolineno .typing .typing-fast }

{% include embed/iframe-doc.html content=ej_igroup2 %}

## Validación de formularios

Además, bootstrap incluye estilos para validar campos del formulario:

{% capture ej_valid1 %}
<input type="text" class="form-control is-valid mb-2">
<input type="text" class="form-control is-invalid">
{% endcapture %}

```html
{{ ej_valid1 | rstrip }}
```
{: .nolineno .typing .typing-fast }

{% include embed/iframe-doc.html content=ej_valid1 %}

También se pueden mostrar mensajes:

{% capture ej_valid2 %}
<form class="needs-validation" novalidate>
  <div class="mb-3">
    <label for="nombre" class="form-label">Nombre</label>
    <input type="text" class="form-control is-invalid" id="nombre" required>

    <div class="invalid-feedback">
      Este campo es obligatorio
    </div>
  </div>
</form>
{% endcapture %}

```html
{{ ej_valid2 | rstrip }}
```
{: .nolineno .typing .typing-fast }

{% include embed/iframe-doc.html content=ej_valid2 %}

## Formularios en linea (Grid)

Con el sistema de grilla de bootstrap, puedes organizar los campos del formulario en columnas:

{% capture ej_grid1 %}
<div class="row">
  <div class="col-6">
    <label class="form-label">Nombre</label>
    <input type="text" class="form-control">
  </div>

  <div class="col-6">
    <label class="form-label">Apellido</label>
    <input type="text" class="form-control">
  </div>
</div>
{% endcapture %}

```html
{{ ej_grid1 | rstrip }}
```
{: .nolineno .typing .typing-fast }

{% include embed/iframe-doc.html content=ej_grid1 %}