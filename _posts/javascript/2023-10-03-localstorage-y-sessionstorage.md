---
title: "JavaScript: localStorage y sessionStorage"
description: "Web Storage API: Almacenamiento persistente en el navegador"
categories: ["JavaScript", "JavaScript-Web API"]
badge: javascript
tags: [javascript, apis]
---

Los navegadores modernos ofrecen mecanismos para almacenar datos del lado del cliente sin necesidad de bases de datos o cookies tradicionales.  
Dentro de estas soluciones se encuentra la **Web Storage API**, que incluye dos interfaces principales:

- `localStorage`
- `sessionStorage`

Ambas permiten almacenar pares `clave–valor` de forma persistente o temporal, dependiendo del caso de uso.

## ¿Qué es Web Storage API?

La Web Storage API permite almacenar información en el navegador del usuario de forma simple y sincrónica.

Características principales:

- Almacenamiento en pares clave–valor
- Solo admite strings
- Acceso mediante JavaScript
- No se envía automáticamente al servidor
- Capacidad aproximada de 5MB por dominio

Las dos implementaciones son:

- `localStorage`: persistente
- `sessionStorage`: dependiente de la sesión

## ¿Qué es localStorage?


`localStorage` almacena datos **de forma persistente**.  
La información se mantiene incluso si el usuario:

- Cierra el navegador
- Reinicia el sistema
- Vuelve días después

Los datos solo se eliminan si:

- El usuario limpia el almacenamiento
- Se elimina explícitamente con JavaScript

### Uso básico

```js
localStorage.setItem("theme", "dark");
```
{:.nolineno}

```js
const theme = localStorage.getItem("theme");
```
{:.nolineno}


```js
localStorage.removeItem("theme");
```
{:.nolineno}

```js
localStorage.clear();
```
{:.nolineno}


### Ejemplo práctico

Guardar preferencias del usuario:

```js
function saveTheme(theme) {
  localStorage.setItem("theme", theme);
}

function loadTheme() {
  return localStorage.getItem("theme") || "light";
}
```
{:file="index.js"}


## ¿Qué es sessionStorage?

`sessionStorage` almacena datos **solo durante la sesión actual del navegador**.

La sesión termina cuando:

* Se cierra la pestaña
* Se cierra la ventana

Características clave:

* Cada pestaña tiene su propio `sessionStorage`
* No se comparte entre pestañas
* Ideal para estados temporales

---

### Uso básico

```js
sessionStorage.setItem("step", "2");
```
{:.nolineno}

```js
const step = sessionStorage.getItem("step");
```
{:.nolineno}

```js
sessionStorage.removeItem("step");
```
{:.nolineno}

```js
sessionStorage.clear();
```
{:.nolineno}


### Ejemplo práctico

Guardar progreso temporal de un formulario:

```js
function saveStep(step) {
  sessionStorage.setItem("formStep", step);
}

function loadStep() {
  return sessionStorage.getItem("formStep");
}
```
{:file="index.js"}


## Diferencias entre localStorage y sessionStorage

| Característica            | localStorage        | sessionStorage     |
| ------------------------- | ------------------- | ------------------ |
| Persistencia              | Permanente          | Solo sesión        |
| Cierre de pestaña         | No borra datos      | Borra datos        |
| Compartido entre pestañas | Sí                  | No                 |
| Capacidad                 | ~5MB                | ~5MB               |
| Uso típico                | Preferencias, caché | Estados temporales |

## Almacenamiento de objetos

Web Storage solo admite strings.
Para almacenar objetos es necesario usar JSON.

### Guardar objeto

```js
const user = {
  id: 1,
  name: "Marco",
  role: "admin"
};

localStorage.setItem("user", JSON.stringify(user));
```
{:.nolineno }

### Leer objeto

```js
const user = JSON.parse(localStorage.getItem("user"));
```
{:.nolineno }

## Eventos de sincronización (storage)

Cuando `localStorage` cambia en una pestaña, otras pestañas del mismo dominio reciben el evento `storage`.

```js
window.addEventListener("storage", (event) => {
  console.log(event.key);
  console.log(event.newValue);
});
```
{:.nolineno}

Notas importantes:

* No se dispara en la misma pestaña
* Solo funciona con `localStorage`
* Útil para sincronizar sesiones

## Limitaciones importantes

### 1. Sincrónico

Todas las operaciones bloquean el hilo principal:

```js
localStorage.setItem("bigData", hugeString); // puede causar jank
```
{:.nolineno}

No es recomendable para grandes volúmenes de datos.

### 2. Seguridad

Nunca almacenar:

* Tokens JWT
* Contraseñas
* Datos sensibles

`localStorage` es accesible por cualquier script que se ejecute en la página, lo que lo hace vulnerable a ataques XSS.

### 3. No reemplaza una base de datos

Web Storage es útil para:

* Caché
* Estado UI
* Preferencias

No para:

* Datos críticos
* Información confidencial
* Lógica de negocio

## Buenas prácticas

* Usar prefijos de clave:

```js
app.theme
app.user.settings
```
{:.nolineno}  

* Validar datos al leer
* Manejar errores de `JSON.parse`
* Limpiar datos obsoletos
* No abusar del almacenamiento

Ejemplo seguro:

```js
function getJSON(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return null;
  }
}
```
{:.nolineno}

## ¿Cuándo usar cada uno?

### Usa localStorage cuando:

* Necesitas persistencia
* Guardas preferencias
* Implementas caché simple

### Usa sessionStorage cuando:

* El estado es temporal
* Depende de una pestaña
* No debe persistir

## Soporte y más recursos

{% include browser-support.html api="Window.localStorage" %}
{% include browser-support.html api="Window.sessionStorage" %}

* [MDN Web Docs – Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API){:target='_blank'}
* [OWASP Client-Side Storage Guidelines](https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/11-Client_Side_Testing/12-Testing_Browser_Storage){:target='_blank'}


