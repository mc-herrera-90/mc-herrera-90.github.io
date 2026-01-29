---
title: "Bootstrap: Componente Navbar (barra de navegación)"
categories: [Bootstrap, Bootstrap_02-Componentes]
badge: bootstrap
scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js
---

La barra de navegación (__navbar__) es uno de los componentes más usados en Bootstrap.

Permite crear menús responsive, adaptándose automáticamente a móviles, tablets y escritorio sin escribir CSS extra.

## Estructura base de un Navbar

Toda barra de navegación parte con este contenedor principal:

```html
<nav class="navbar navbar-expand-lg">
  ...
</nav>
```
{:.nolineno .typing}

`.navbar`
: Define el elemento como una barra de navegación de Bootstrap.

`.navbar-expand-lg`
:  Controla desde qué tamaño de pantalla el menú se muestra completo.

## El colapso responsive<br/>&nbsp;__navbar-expand__

Bootstrap define distintos puntos de quiebre (**breakpoints**):

| Clase               | Se expande desde |
| ------------------- | ---------------- |
| `navbar-expand-sm`  | 576px            |
| `navbar-expand-md`  | 768px            |
| `navbar-expand-lg`  | 992px            |
| `navbar-expand-xl`  | 1200px           |
| `navbar-expand-xxl` | 1400px           |

## Contenedor interno<br/>&nbsp;__container__ o __container-fluid__

Una vez ya definimos la barra de navegación, define un contenedor para los elementos al interior. Por ejemplo

```html
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    ...
  </div>
</nav>
```
{:.nolineno .typing}

* `container-fluid` ocupa todo el ancho de la pantalla
* `container` ancho centrado con márgenes

Aquí se agrupa todo el contenido del navbar.


## Marca o logo<br/>&nbsp;__navbar-brand__

```html
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    ...
  </div>
</nav>
```
{:.nolineno .typing}

* Representa el logo o nombre del sitio
* Normalmente enlaza a la página principal

![Navbar brand](bootstrap/navbar.-brand-light.webp)

Bootstrap lo posiciona automáticamente dentro del navbar.

## Botón hamburguesa<br/>&nbsp;__navbar-toggler__

```html
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    ...
    <button class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#myNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
```
{:.nolineno .typing}

Este botón aparece **solo cuando el menú está colapsado**.

### Qué hace cada parte

* `navbar-toggler` define el botón
* `data-bs-toggle="collapse"` activa el colapso
* `data-bs-target="#myNavbar"` indica qué menú abrir/cerrar
* `navbar-toggler-icon` ícono hamburguesa

![Botón hamburguesa](bootstrap/navbar-mobile-icon.webp)

> No necesitas JavaScript adicional: Bootstrap lo maneja solo en su fuente del bundle.
{: .prompt-info }

## Contenedor colapsable<br/>&nbsp;__collapse navbar-collapse__

```html
<div class="collapse navbar-collapse" id="myNavbar">
  ...
</div>
```
{:.nolineno .typing}

Aquí va el contenido real del menú (**links**, **botones**, **formularios**).

* `collapse` permite ocultar/mostrar el contenido
* `navbar-collapse` aplica estilos propios del navbar
* `id="myNavbar"` debe coincidir con el `data-bs-target`

## Contenido del menú

Dentro de este contenedor normalmente se agregan los elementos del menú:

```html
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    ...
    <div class="collapse navbar-collapse" id="myNavbar">

      <!-- Aquí se agrupan los ítems del menú -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Item 1</a>
        </li>
        ...
      </ul>
    
    </div>
  </div>
</nav>
```
{:.nolineno .typing}

* `navbar-nav` lista del menú
* `nav-item` ítem individual
* `nav-link` enlace

![Items del menú](bootstrap/bootstrap-navbar-items-menu.webp)

Bootstrap se encarga del espaciado y alineación.

## Estilos y colores

Además de definir la estructura y el comportamiento responsive, el navbar puede personalizarse visualmente usando __clases de utilidades de Bootstrap__, las mismas que se usan en otros componentes. Por ejemplo:


```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  ...
</nav>
```
{:.nolineno .typing}

* `bg-*` color de fondo
* Puedes combinar con:

  * `navbar-light`
  * `navbar-dark`

Ejemplo común:

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  ...
</nav>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  ...
</nav>
```
{:.nolineno .typing}

## Demostración final

Como vemos, la barra de navegación requiere clases adicionales para ajustar su comportamiento:

- `.navbar` define la barra
- `.navbar-expand{-sm|-md|-lg|-xl|-xxl}` para un colapso responsive.
- `navbar-toggler` botón hamburguesa
- `collapse navbar-collapse` menú colapsable

Bootstrap trabaja con un enfoque *mobile-first*. Esto significa que la barra de navegación **parte colapsada por defecto** y solo se expande cuando la pantalla alcanza el tamaño indicado por la clase `navbar-expand`. Por ejemplo, revisemos el siguiente código:

{% include file-viewer.html files=site.data.codes.bootstrap.demo-navbar id="demo-navbar" %}

> Recuerda:  
> `navbar-expand-lg`
> : Esta clase le dice a Bootstrap cuándo mostrar el menú completo.
> : Con `navbar-expand-lg`, el navbar solo se expande desde los 992px hacia arriba.
{: .prompt-info }

En pantallas más chicas (tablets y móviles), el menú **se colapsa automáticamente** y se muestra como botón hamburguesa para ahorrar espacio como se puede observa la siguiente demostración.

{% include embed/video.html src="bootstrap/bootstrap--navbar.webm" %}

> Gracias a esto, no necesitas escribir media queries manuales: Bootstrap se encarga del comportamiento responsive del menú gracias a sus __breakpoints__.
{:.prompt-tip}