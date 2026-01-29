---
title: "Bootstrap: Componente Offcanvas (panel lateral)"
categories: [Bootstrap, Bootstrap_02-Componentes]
badge: bootstrap
---

El componente **Offcanvas** de **Bootstrap** permite mostrar contenido oculto fuera del viewport que se despliega desde un borde de la pantalla. Es especialmente útil para menús laterales, paneles de configuración, filtros o vistas secundarias.

A diferencia de un modal, el offcanvas **no bloquea completamente la interacción** y está pensado para interfaces más fluidas, especialmente en móviles.

## ¿Qué es un Offcanvas?

Un offcanvas es un contenedor oculto que puede aparecer desde:

- Izquierda (`start`)
- Derecha (`end`)
- Arriba (`top`)
- Abajo (`bottom`)

{% include embed/iframe.html src="https://demo-bs5-offcanvas.netlify.app/" %}

Bootstrap lo implementa como un componente JavaScript que manipula clases CSS y atributos ARIA para accesibilidad.

## Estructura básica

```html
<button class="btn btn-primary"
        data-bs-toggle="offcanvas"
        data-bs-target="#menuLateral">
  Abrir menú
</button>

<div class="offcanvas offcanvas-start" id="menuLateral">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Menú</h5>
    <button type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"></button>
  </div>

  <div class="offcanvas-body">
    Contenido del panel
  </div>
</div>
````
{:.nolineno}

### Clases importantes

* `.offcanvas` → contenedor principal
* `.offcanvas-start | end | top | bottom` → dirección
* `.offcanvas-header` → encabezado
* `.offcanvas-body` → contenido
* `.btn-close` → cierre accesible

## Cómo funciona internamente

Bootstrap maneja el offcanvas mediante:

1. **Eventos JavaScript**

   * `show.bs.offcanvas`
   * `shown.bs.offcanvas`
   * `hide.bs.offcanvas`
   * `hidden.bs.offcanvas`

2. **Clases dinámicas**

   * `.show`
   * `.showing`
   * `.hiding`

3. **Backdrop**

   * Se crea dinámicamente
   * Puede deshabilitarse

4. **Atributos ARIA**

   * `aria-labelledby`
   * `aria-modal`

Esto lo hace accesible sin configuración adicional.


## Control mediante JavaScript

```html
<script>
  const offcanvasEl = document.getElementById('menuLateral');
  const offcanvas = new bootstrap.Offcanvas(offcanvasEl);

  offcanvas.show();
</script>
```
{:.nolineno}


También puedes escuchar eventos:

```js
offcanvasEl.addEventListener('shown.bs.offcanvas', () => {
  console.log('Offcanvas abierto');
});
```
{:.nolineno}


## Cambios entre versiones de Bootstrap

### Bootstrap 4 ❌

* **No existe Offcanvas nativo**
* Se simulaba con:

  * Modales modificados
  * Clases personalizadas
  * Plugins externos


### Bootstrap 5.0 ✅ 

* Offcanvas se introduce oficialmente
* Soporte básico:

  * Posiciones laterales
  * Backdrop
  * Eventos
* JavaScript obligatorio
* Sin integración profunda con navbar


### Bootstrap 5.1 – 5.2

* Mejoras en accesibilidad
* Integración con `.navbar`
* Mejor manejo de focus
* Mejor comportamiento en móviles

Ejemplo con navbar:

```html
<nav class="navbar navbar-light bg-light">
  <button class="btn"
          data-bs-toggle="offcanvas"
          data-bs-target="#navMenu">
    ☰
  </button>
</nav>
```
{:.nolineno}


### Bootstrap 5.3 (actual)

* Soporte completo para:

  * Modo oscuro (`data-bs-theme`)
  * Mejoras de transición
  * Variables CSS
* Mayor control visual sin JS adicional

Ejemplo:

```html
<div class="offcanvas offcanvas-end"
     data-bs-theme="dark">
```

## Backdrop y scroll

Por defecto:

* Se bloquea el scroll del body
* Se muestra backdrop

Configuración personalizada:

```html
<div class="offcanvas offcanvas-start"
     data-bs-backdrop="false"
     data-bs-scroll="true">
```

Esto es útil para paneles tipo editor o dashboards.

## Offcanvas vs Modal

| Característica   | Offcanvas      | Modal                |
| ---------------- | -------------- | -------------------- |
| Bloquea interfaz | No (opcional)  | Sí                   |
| Uso típico       | Menús, paneles | Alertas, formularios |
| Posición         | Bordes         | Centro               |
| UX móvil         | Excelente      | Regular              |


## Buenas prácticas

* Usar offcanvas para **contenido secundario**
* No sobrecargarlo de formularios complejos
* Evitar anidar offcanvas
* Usar `data-bs-scroll="true"` en layouts largos
* Integrarlo con navbar en móviles

## Errores comunes

* Olvidar incluir `bootstrap.bundle.js`
* Reutilizar IDs
* Usar offcanvas como modal
* No considerar accesibilidad del foco


{% include circle-line.html %}

El componente Offcanvas es una de las mejores adiciones de Bootstrap 5. Reemplaza soluciones improvisadas y ofrece una alternativa moderna, accesible y flexible a los menús laterales tradicionales.

Bien usado, mejora notablemente la experiencia móvil y mantiene interfaces limpias y ordenadas.
