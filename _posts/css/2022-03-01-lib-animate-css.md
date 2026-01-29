---
title: "CSS: Animaciones básicas con Animate.css "
categories: [CSS, CSS_02-Animaciones]
animate: true
image:
  path: poster/animate-css.webp
  lqip: data:image/webp;base64,UklGRoIAAABXRUJQVlA4IHYAAAAQBACdASoUAAsAPzmGuVOvKSWisAgB4CcJbACdMoR3ACsBRPnhG2ZewAD+ZqRbrkSVf7Dl8TKT2iHrnv2iAgi4uLBJt5Li6VFFrDG2f1xqQ96DAu0ujSG2pkRgCEtLTW64kujvElxEYXEaxVQCozyquVfqAAAA
---

[Animate.css](https://animate.style/){:target='_blank'} es una librería que ofrece animaciones predefinidas, como `fadeIn`, `bounce`, `zoomIn`, entre otras. Ideal para añadir una mejora visual sin escribir líneas complejas de código o definir manualmente `@keyframes`.

Resulta especialmente útil en páginas de aterrizaje, componentes interactivos como __botones__, __alertas__, __banners__ o cualquier elemento que busque captar la atención de forma sutil y efectiva.

> Usa las animaciones con moderación. Un exceso puede distraer al usuario y afectar la experiencia. Elige animaciones que __refuercen la interfaz__, no que compitan con el contenido.
{: .prompt-warning } 

## Instalación

Antes de comenzar a usar Animate.css, necesitas incluirla en tu proyecto. Puedes hacerlo de distintas formas:

### 1. Vía CDN

Para usar a través de una __CDN__ agrega esto a tu `<head>`:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
```
{: .nolineno .typing}

### 2. Con npm

Para tener la librería instalada en el proyecto, usa __npm__:

```terminal
npm install animate.css --save
```
{: .typing}


Y luego importalo en tu CSS o JavaScript:

```js
import 'animate.css';
```
{:.nolineno .typing }

## Cómo usar las animaciones

Una vez incluida la librería, solo se necesita dos clases:

- `animate__animated` → Clase base (con 2 guiones bajos)
- `animate__NOMBRE_DE_ANIMACIÓN_`  → La animación que quieres usar

{% tabs demo-bounce %}
{% tab demo-bounce html %}
```html
<h1 class="animate__animated animate__bounce">¡Hola mundo!</h1>
```
{: .nolineno}
{% endtab %}
{% tab demo-bounce preview %}
<div class="animate__animated animate__bounce fs-1">¡Hola mundo!</div>
{% endtab %}
{% endtabs %}

También puedes controlar la __velocidad__, __duración__, __repetición__ y __retardo__ con clases adicionales:

{% tabs demo-2 %}
{% tab demo-2 html %}
```html
<p class="animate__animated
  animate__bounce animate__delay-2s
  animate__repeat-2">
    Este texto rebota con retardo.
</p>
```
{: .nolineno }
{% endtab %}
{% tab demo-2 preview %}
<p class="animate__animated animate__bounce animate__delay-2s animate__repeat-2 fs-4">
  Este texto rebota con retardo.
</p>
{% endtab %}
{% endtabs %}

>  Las clases comienzan con `animate__` por convención desde la versión 4.0 de Animate.css. No olvides este prefijo.
{: .prompt-info }

### __Animaciones populares__

| Nombre        | Descripción              |
| ------------- | ------------------------ |
| `fadeIn`      | Aparece suavemente       |
| `bounce`      | Rebota                   |
| `zoomIn`      | Hace zoom al aparecer    |
| `flip`        | Gira en 3D               |
| `slideInLeft` | Entra desde la izquierda |

### __Animar al mostrar un formulario__

Puedes animar un formulario completo cuando se carga la página o cuando aparece (por ejemplo, en un modal).

{% tabs demo-form %}
{% tab demo-form html %}
```html
<form class="animate__animated animate__fadeInUp">
  <label for="email">Correo:</label>
  <input type="email" id="email" name="email" required />

  <label for="password">Contraseña:</label>
  <input type="password" id="password" name="password" required />

  <button type="submit">Iniciar sesión</button>
</form>
```
{% endtab %}
{% tab demo-form preview %}
<form class="animate__animated animate__fadeInUp mb-2">
  <div class="mb-3">
  <label for="email">Correo:</label>
  <input type="email" id="email" name="email" required />
  </div>
  <div class="mb-3">
  <label for="password">Contraseña:</label>
  <input type="password" id="password" name="password" required />
  </div>
  <button type="submit">Iniciar sesión</button>
</form>
{% endtab %}
{% endtabs %}

> __Recomendación__: `fadeInUp`, `slideInDown`, o `zoomIn` son animaciones suaves ideales para formularios.
{: .prompt-tip }

### Reforzar validaciones

También puedes usar las animaciones para __destacar campos con errores__ después de la validación, como un pequeño rebote o sacudida y aplicar esa clase solo si hay un error usando JavaScript:

{% tabs demo-validacion %}
{% tab demo-validacion html %}
```html
<form id="miFormulario">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" />

  <span id="errorNombre"
    class="mensaje-error"
    style="display: none;">
      Este campo es obligatorio
  </span>

  <button type="submit">Enviar</button>
</form>
```
{% endtab %}
{% tab demo-validacion css %}
```css
.mensaje-error {
  color: red;
  font-size: 0.9em;
  margin-top: 4px;
  display: block;
}
```
{: .nolineno }
{% endtab %}
{% tab demo-validacion js %}
```js
const formulario = document.getElementById('miFormulario');
const inputNombre = document.getElementById('nombre');
const errorNombre = document.getElementById('errorNombre');

formulario.addEventListener('submit', function (e) {
  e.preventDefault(); // Evita el envío real
  if (!inputNombre.value.trim()) {
    // Mostrar el mensaje de error
    errorNombre.style.display = 'block';

    // Reiniciar animación si ya se aplicó antes
    inputNombre.classList.remove('animate__animated', 'animate__shakeX');
    void inputNombre.offsetWidth; // Fuerza el reflow
    inputNombre.classList.add('animate__animated', 'animate__shakeX');
  } else {
    errorNombre.style.display = 'none';
    inputNombre.classList.remove('animate__shakeX');
    alert('Formulario enviado correctamente');
  }
});
```
{% endtab %}
{% endtabs %}

Aquí está el resultado. Prueba presionar el botón sin escribir:

<style>
  .mensaje-error {
  color: red;
  font-size: 0.9em;
  margin-top: 4px;
  display: block;
}
</style>
<form id="miForm">
  <div class="mb-3">
  <label for="nom">Nombre:</label>
  <input type="text" id="nom" name="nom" />
  <span id="errorNombre"
    class="mensaje-error"
    style="display: none;">
      Este campo es obligatorio
  </span>
  </div>
  <button type="submit">Enviar</button>
</form>
<script>
const formulario = document.getElementById('miForm');
const inputNombre = document.getElementById('nom');
const errorNombre = document.getElementById('errorNombre');
formulario.addEventListener('submit', function (e) {
   e.preventDefault();
  if (!inputNombre.value.trim()) {
    errorNombre.style.display = 'block';
    inputNombre.classList.remove('animate__animated', 'animate__shakeX');
    void inputNombre.offsetWidth;
    inputNombre.classList.add('animate__animated', 'animate__shakeX');
  } else {
    errorNombre.style.display = 'none';
    inputNombre.classList.remove('animate__shakeX');
    alert('Formulario enviado correctamente');
  }
});
</script>

### Controlar duración, retraso y repetición

Podemos manejar el comportamiento de la animación a través de variables CSS para definir la duración, el retraso y las iteraciones de la animación. Esto hace que Animate.css sea muy flexible y personalizable. Ejemplo:

```css
.custom-timing {
    --animate-duration: 2s;
    --animate-delay: 1s;
    --animate-repeat: 10;
}
```
{: .nolineno }

Luego, la usamos en nuestro elemento HTML:

{% tabs demo-custom-variables %}
{% tab demo-custom-variables html %}
```html
<div class="animate__animated animate__fadeIn custom-timing">
  Cargando...
</div>
```
{: .nolineno }
{% endtab %}
{% tab demo-custom-variables preview %}
<div class="animate__animated animate__fadeIn fs-2" style="animation-delay: 1s; animation-duration: 2s; animation-iteration-count: 10;">Cargando...</div>
{% endtab %}
{% endtabs %}

> Para animar al hacer scroll, combina Animate.css con librerías como [AOS](https://michalsnik.github.io/aos/){:target='_blank'} o usa un `IntersectionObserver` en JavaScript para añadir las clases dinámicamente.
{: .prompt-tip }

Aunque la librería ofrece algunas clases como `animated` para usar las animaciones rápidamente, también podemos usar animaciones a través de clases CSS. Esto proporciona una forma flexible de usar las animaciones de Animate.css, sin tener que refactorizar el html.

Ejemplo:

{% tabs demo-add-animation-inclass %}
{% tab demo-add-animation-inclass html %}
```html
<style>
.mi-clase {
    display: inline-block;
    animation: bounce;
    animation-duration: 2s;
}
</style>
<div class="mi-clase">¡Hola, soy un rebote!</div>
```
{: .nolineno }
{% endtab %}
{% tab demo-add-animation-inclass preview %}
<div class="fs-3" style="animation: bounce; animation-duration: 2s;">¡Hola, soy un rebote!</div>
{% endtab %}
{% endtabs %}

Teniendo en cuenta que algunas animaciones dependen de la propiedad `animation-timing` establecida en la clase de animación.

Para cambiar la duración de una animación simplemente se establece el nuevo valor global o localmente. Ejemplo:

```css
.animate__animated.animate__bounce {
  --animate-duration: 2s;
}
:root {
  --animate-duration: 800ms;
  --animate-delay: 0.95;
}
```
{: .nolineno }

Las propiedades personalizadas también facilitan el cambio sobre la marcha de todas las propiedades, lo que significa que puedes tener un efecto de camara lenta o de lapso de tiempo con una sola línea de JavaScript. Ejemplo:

```js
document.elemento.style.setProperty('--animate-duration', '2s');
document.elemento.style.setProperty('--animate-duration', '5s');
```
{: .nolineno }

## Clases de utilidad

A continuación tienes algunas clases que puedes ir experimentando y sirven para configurar rápido una animación.

```html
<div class="animate__animated animated__bounce animate__delay_2s">
    Ejemplo
</div>
```
__Controlar el tiempo__:

```bash
animate__delay-2s => animate__slow  # 2s   
animate__delay-3s => animate__slower # 3s
animate__delay-4s => animate__fast # 800ms
animate__delay-5s => animate__faster # 500ms v
```
{: .nolineno }


## Accesibilidad con media queries

Siempre considera la accesibilidad. Algunas personas prefieren reducir o desactivar las animaciones. Apóyate en `prefers-reduced-motion` que es una __media query__ de CSS que detecta su el usuario ha activado la opción del sistema para reducir el movimiento.

Con esta media query puedes condicionar tus animaciones para que __se desactiven__, __reduzcan__ o se __remplacen__ cuando el usuario lo solicite.

### 1. Desactivar las animaciones

```css
@media (prefers-reduced-motion: reduce) {
  .animate__animated {
    animation: none !important;
  }
}
```
{: .nolineno }

### 2. Reducir la duración

```css
@media (prefers-reduced-motion: reduce) {
  .animate__animated {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```
{: .nolineno }

En lugar de eliminar la animación, la haces casi instantanéa.

### __Opcion 3 : Aplicar solo si el usuario NO quiere reducir movimiento__

```css
@media (prefers-reduced-motion: no-preference) {
  .mi-elemento {
    animation: fadeIn 1s ease-in-out;
  }
}
```
{: .nolineno }

Esto aplica la lógica inversa. En lugar de desactivar animaciones para quienes quieren menos movimiento, activas animaciones solo si el usuario no ha pedido lo contrario.


## __Repositorio y demostración__

Pasa por el repositorio, ahí encontrarás el código completo por si quieres revisar más cosas sobre Animate.css o clonarlo para experimentar por tu cuenta.

{% include github-repo.html owner="mc-herrera-90" repo="demo-animate-css" %}

🚀 [https://mc-herrera-90.github.io/demo-animate-css/](https://mc-herrera-90.github.io/demo-animate-css/){:target='_blank'}

{% include circle-line.html %}

Animate.css es una librería ligera y sencilla de utilizar para agregar animaciones a tu sitio web con solo unas clases CSS. Personalizable y compatible con cualquier proyecto moderno, es una excelente opción para mejorar la experiencia visual sin complicaciones.
