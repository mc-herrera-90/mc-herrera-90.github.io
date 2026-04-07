---
title: "Bootstrap: Qué son y cómo crear Popover en Bootstrap 5"
categories: [Bootstrap, Bootstrap_04-Extras]
badge: bootstrap
---

En Bootstrap 5, un popover es un pequeño __cuadro emergente que aparece al hacer clic__ o __pasar el mouse sobre un elemento__, mostrando información adicional.

## 1. Incluir Bootstrap 5

Para crear y usar los Popover, asegúrate de tener el CSS y JS (incluye Popper, que es necesario para los popovers):

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
```
{:.nolineno}


---

## 2. Crear un botón con popover

```html
<button type="button"
        class="btn btn-primary"
        data-bs-toggle="popover"
        data-bs-title="Título del popover"
        data-bs-content="Este es el contenido del popover">
    Haz clic
</button>
```
{:.nolineno}

---

### 3. Activar los popovers (paso importante)

Bootstrap no los activa automáticamente, debes incializarlos con JS:

```html
<script>
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
</script>
```
{:.nolineno}

---

### 4. Opciones útiles

__Cambiar el tipo de evento__:


```js
data-bs-trigger="hover"
```
{:.nolineno .language-html}

También puedes usar:

- `click` (por defecto)
- `hover`
- `focus`
- combinaciones: `"hover focus"`


__Posición del popover__:

```js
data-bs-placement="top"
```
{:.nolineno .language-html}

También puedes usar las opciones:

- `top`
- `bottom`
- `left`
- `right`

__Permitir HTML dentro del contenido__:

```js
data-bs-html="true"
data-bs-content="<b>Texto en negrita</b>"
```
{:.nolineno .language-html}