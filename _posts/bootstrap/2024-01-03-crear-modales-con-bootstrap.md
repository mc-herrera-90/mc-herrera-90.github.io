---
title: Bootstrap - Modal
categories: [Bootstrap, Bootstrap-Componentes]
badge: bootstrap
---

Las **modales** son uno de los componentes más utilizados en interfaces web modernas. Permiten mostrar contenido contextual sin necesidad de cambiar de página, lo que __mejora la experiencia de usuario__ en acciones como confirmaciones, formularios, avisos o vistas rápidas de información.

En este artículo veremos:

* Qué es una modal en Bootstrap
* Qué necesitas para que funcione correctamente
* Cómo crear una modal paso a paso
* Consideraciones importantes según la versión de Bootstrap


## ¿Qué es una modal?

Una **modal** es una ventana superpuesta que se muestra sobre el contenido principal de la página. Mientras está activa, el usuario debe interactuar con ella antes de continuar con el resto de la interfaz.

![Modal de ejemplo](bootstrap/modal-light.webp){:.light}
![Modal de ejemplo](bootstrap/modal-dark.webp){:.dark}

Bootstrap proporciona un componente de modal que incluye:

* Estructura HTML
* Estilos CSS
* Comportamiento JavaScript (abrir, cerrar, animaciones, accesibilidad)


## Requisitos para que una modal funcione

Antes de crear una modal, es importante verificar que el proyecto cumpla con los requisitos mínimos:

### 1. Bootstrap CSS

Necesario para el diseño visual de la modal.

### 2. Bootstrap JavaScript

Necesario para:

* Abrir y cerrar la modal
* Manejar el backdrop (fondo oscuro)
* Accesibilidad (focus, teclado, etc.)

> **Desde Bootstrap 5, jQuery ya no es necesario**. Todo el comportamiento está implementado en JavaScript nativo.
{: .prompt-warning}

### Inclusión básica de Bootstrap 5

Ejemplo usando CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
```
{: .nolineno }

> Es importante usar `bootstrap.bundle.min.js`, ya que incluye Popper, requerido para varios componentes.
{:.prompt-info}


## Estructura básica de una modal

Una modal en Bootstrap tiene tres partes principales:

* `.modal` → contenedor principal
* `.modal-dialog` → define el tamaño y alineación
* `.modal-content` → contenido real de la modal

![Ejemplo contenedores del modal](bootstrap/modal-containers-light.webp){:.light}
![Ejemplo contenedores del modal](bootstrap/modal-containers-dark.webp){:.dark}


### Ejemplo en Codepen

<iframe height="410" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/Marco-Contreras-Herrera/embed/VYjwbep?default-tab=&theme-id=dark&editors=1000" frameborder="no" loading="lazy" allowtransparency="true">
      See the Pen <a href="https://codepen.io/Marco-Contreras-Herrera/pen/VYjwbep">
  Untitled</a> by Marco Contreras Herrera (<a href="https://codepen.io/Marco-Contreras-Herrera">@Marco-Contreras-Herrera</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
    
## Cómo se abre la modal

Bootstrap permite abrir modales de dos formas:

### 1. Usando atributos `data-*` (recomendado)

```html
<button
  data-bs-toggle="modal"
  data-bs-target="#exampleModal">
  Abrir modal
</button>
```
{: .nolineno }

- [x] No requiere JavaScript adicional
- [x] Ideal para casos simples

---

### 2. Usando JavaScript

```html
<button id="openModal" class="btn btn-primary">
  Abrir modal
</button>
```

```js
const modal = new bootstrap.Modal('#exampleModal');
document.getElementById('openModal').addEventListener('click', () => {
  modal.show();
});
```

- [x] Útil cuando necesitas lógica personalizada

## Tamaños de modal

Bootstrap ofrece tamaños predefinidos:

```html
<div class="modal-dialog modal-sm">...</div>
<div class="modal-dialog modal-lg">...</div>
<div class="modal-dialog modal-xl">...</div>
```
{: .nolineno }

También puedes usar `modal-dialog-centered` para centrarla verticalmente.


## Cerrar la modal

Una modal puede cerrarse de varias formas:

* Botón con `data-bs-dismiss="modal"`
* Click fuera de la modal (backdrop)
* Tecla <kbd>Esc</kbd>
* Llamando a `modal.hide()` desde JavaScript


## Consideraciones importantes según la versión

> <div class="fs-3 text-center fw-bold">Bootstrap 4 vs Bootstrap 5</div>
>
> | Característica        | Bootstrap 4    | Bootstrap 5       |
> | --------------------- | -------------- | ----------------- |
> | Dependencia de jQuery | Sí             | No                |
> | Atributos             | `data-toggle`  | `data-bs-toggle`  |
> | Cerrar modal          | `data-dismiss` | `data-bs-dismiss` |
> | Bundle con Popper     | Opcional       | Recomendado       |
>
> **Uno de los errores más comunes** es mezclar:
>
> * Bootstrap 5 con atributos de Bootstrap 4
> * Bootstrap JS sin el bundle
>
> Esto provoca que la modal no se abra o no se cierre correctamente.
{:.prompt-warning }

{% include circle-line.html %}

Las modales en Bootstrap son un componente potente y fácil de implementar si se respetan su estructura y requisitos. Entender cómo funcionan internamente y las diferencias entre versiones evita errores comunes y facilita su integración en nuevos proyectos.

En próximos pasos, puedes:

* Cargar contenido dinámico dentro de la modal
* Integrarla con formularios
* Controlarla completamente desde JavaScript
