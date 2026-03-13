---
title: "Bootstrap: Utilizar la validación de formularios en Bootstrap 5"
categories: [Bootstrap, Bootstrap_03-Formularios]
badge: bootstrap
---

## 1. Validación básica con HTML5

Bootstrap no implementa un sistema de validación propio desde cero. En realidad se apoya en las validaciones nativas de HTML5 y simplemente **aplica estilos visuales** para indicar si un campo es válido o inválido.

Un ejemplo simple sería:

{% capture ej_1 %}
<form>
  <div class="mb-3">
    <label for="nombre" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="nombre" required>
  </div>

  <button class="btn btn-primary">Enviar</button>
</form>
{% endcapture %}

```html
{{ ej_1 | rstrip }}
```
{: .nolineno .typing .typing-fast }

{% include embed/iframe-doc.html content=ej_1 allow=true %}

- `required`: indica que el campo es obligatorio.

Sin embargo, para que Bootstrap muestre correctamente los estilos de validación necesitamos usar una pequeña configuración adicional.


## 2. Activar validación en Bootstrap

Bootstrap recomienda añadir la clase `needs-validation` y desactivar la validación automática del navegador con `novalidate`.

Ejemplo completo:

{% capture ej_2 %}
<form class="needs-validation" novalidate>

  <div class="mb-3">
    <label for="email" class="form-label">Correo electrónico</label>
    <input type="email" class="form-control" id="email" required>
    <div class="invalid-feedback">Introduce un correo válido</div>
  </div>

  <button class="btn btn-primary" type="submit">Enviar</button>

</form>
{% endcapture %}

```html
{{ ej_2 | rstrip }}
```
{: .nolineno .typing .typing-fast }

{% include embed/iframe-doc.html content=ej_2 allow=true %}

> Esto __desactiva la validación nativa de HTML5__ del navegador, que normalmente mostraría sus propios mensajes de error.
>
> Sin embargo, esto __no significa que ya tengamos un sistema de validación funcionando__. Lo único que hemos hecho hasta ahora es preparar el formulario para usar la validación personalizada de Bootstrap.
{:.prompt-info}


## 3. Mensajes de error con __invalid-feedback__

Bootstrap permite mostrar mensajes de error utilizando la clase `invalid-feedback`.

Ejemplo:

```html
<div class="invalid-feedback">
  Este campo es obligatorio
</div>
```
{: .nolineno .typing .typing-fast }

Este mensaje se mostrará automáticamente cuando el campo tenga el estado inválido con la clase `is-invalid` o cuando el formulario detecte que el campo no cumple las reglas definidas.

## 4. Mensajes de éxito con __valid-feedback__

También podemos mostrar mensajes positivos cuando los datos son correctos.

```html
<div class="valid-feedback">
  Todo correcto
</div>
```
{: .nolineno .typing .typing-fast }

Ejemplo completo:

```html
<div class="mb-3">

  <label for="usuario" class="form-label">Usuario</label>
  <input type="text" class="form-control" id="usuario" required>

  <div class="valid-feedback">Nombre válido</div>

  <div class="invalid-feedback">Este campo es obligatorio</div>

</div>
```
{: .nolineno .typing .typing-fast }

# 5. Validación con JavaScript

Para activar el sistema de validación de Bootstrap debemos usar un pequeño script.

Este código es el que recomienda la documentación oficial de Bootstrap:

```javascript
(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {

      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')

    }, false)
  })
})();
```
{: .nolineno .typing .typing-fast }

Este script hace tres cosas:

1. Detecta todos los formularios con la clase `needs-validation`
2. Comprueba si los campos son válidos
3. Añade la clase `was-validated` para mostrar los estilos visuales

## 6. Ejemplo completo

A continuación tienes un ejemplo funcional de validación con varios campos.

{% capture ej_6 %}
<form class="needs-validation" novalidate>

  <div class="mb-3">
    <label class="form-label">Nombre</label>
    <input type="text" class="form-control" required>
    <div class="invalid-feedback">El nombre es obligatorio</div>
  </div>

  <div class="mb-3">
    <label class="form-label">Correo</label>
    <input type="email" class="form-control" required>
    <div class="invalid-feedback">Introduce un correo válido</div>
  </div>

  <div class="mb-3">
    <label class="form-label">Contraseña</label>
    <input type="password" class="form-control" minlength="6" required>
    <div class="invalid-feedback">La contraseña debe tener al menos 6 caracteres</div>
  </div>

  <button class="btn btn-primary" type="submit">Crear cuenta</button>
</form>
<script>
(() => {
  'use strict'
  
  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {

      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')

    }, false)
  })
})();
</script>
{% endcapture %}

```html
{{ ej_6 | rstrip }}
```
{: .nolineno }

{% include embed/iframe-doc.html content=ej_6 allow=true %}

## 7. Buenas prácticas

Para crear formularios de forma profesional es recomendable seguir algunas prácticas:

### Usar validación del lado del servidor

La validación en el navegador mejora la experiencia del usuario, pero **nunca debe reemplazar la validación en el servidor**.

### Mensajes claros

Los mensajes deben explicar exactamente qué ocurre:

```
La contraseña debe tener al menos 8 caracteres
```
{: .noheader }

Evita mensajes como:

```
Error en el campo
```
{: .noheader }

### Validar mientras el usuario escribe

Una buena práctica moderna es validar los campos **mientras el usuario escribe**, en lugar de esperar al envío del formulario.

Esto mejora mucho la experiencia de uso.

{% capture ej_7 %}
<form class="needs-validation" novalidate>

  <div class="mb-3">
    <label for="email" class="form-label">Correo electrónico</label>
    <input type="email" class="form-control" id="email" required>
    <div class="invalid-feedback">Introduce un correo válido</div>
  </div>

  <button type="submit" class="btn btn-primary">Enviar</button>
</form>

<script>
(() => {
  const form = document.querySelector('.needs-validation');
  const email = form.querySelector('#email');

  // Validación al escribir
  email.addEventListener('input', () => {
    if (email.checkValidity()) {
      email.classList.remove('is-invalid');
      email.classList.add('is-valid');
    } else {
      email.classList.remove('is-valid');
      email.classList.add('is-invalid');
    }
  });

  // Validación al enviar
  form.addEventListener('submit', e => {
    if (!form.checkValidity()) e.preventDefault();
    form.classList.add('was-validated');
  });
})();
</script>
{% endcapture %}

```html
{{ ej_7 | rstrip }}
```
{: .nolineno }

{% include embed/iframe-doc.html content=ej_7 allow=true %}