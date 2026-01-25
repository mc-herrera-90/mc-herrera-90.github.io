---
title: "Netlify: Implementar autenticación con Netlify Identity"
categories: [Netlify, "Netlify-Auth"]
badge: netlify
scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js
---

Los sitios estáticos no están limitados únicamente a contenido público. Gracias a **Netlify Identity**, es posible agregar **autenticación de usuarios** (login, registro y manejo de sesiones) sin necesidad de montar un backend.

En este artículo veremos qué es Netlify Identity y cómo implementarlo paso a paso.

## ¿Qué es Netlify Identity?

**Netlify Identity** es un servicio de autenticación integrado en la plataforma de Netlify que permite:

* Registrar usuarios
* Iniciar y cerrar sesión
* Gestionar sesiones activas
* Proteger contenido
* Integrarse con funciones serverless

Todo esto pensado especialmente para **sitios estáticos**.

> Internamente, Netlify Identity se basa en [**GoTrue**](https://github.com/netlify/gotrue){:target='_blank'}, un sistema de autenticación que maneja usuarios mediante tokens JWT.
{:.prompt-info}

Es ideal en escenarios como:

* Blogs con contenido privado
* Paneles de administración simples
* Dashboards internos
* Formularios protegidos

---

## Requisitos previos

Antes de comenzar, necesitas:

- [x] Un sitio desplegado en Netlify
- [x] Conocimientos básicos de HTML y JavaScript

---

## Paso 1: Activar Netlify Identity

1. Ingresa al **panel de Netlify**
2. Selecciona tu sitio
3. Ve a **Identity**
4. Haz clic en **Enable Identity**

![Habilitar Netlify Identity](netlify/habilitar-netlify-identity-dark.webp){:.dark}
![Habilitar Netlify Identity](netlify/habilitar-netlify-identity-light.webp){:.light}

Una vez activado, Netlify habilitará automáticamente el sistema de usuarios para tu sitio.

---

## Paso 2: Configuración básica y proveedores externos

Dentro de **Identity → Settings**, revisa lo siguiente:

- __Registration:__
  * Habilita **Enable registration**
  * Decide si los usuarios deben confirmar su email

- __External providers__ (opcional):
  * Puedes habilitar login con GitHub, Google, etc.
  * Requiere configuración adicional (no obligatorio para empezar)

![Seleccionar el proveedor externo para OAuth](netlify/seleccionar-proveedor-externo-oauth-light.webp){:.light}
![Seleccionar el proveedor externo para OAuth](netlify/seleccionar-proveedor-externo-oauth-dark.webp){:.dark}

Para este ejemplo, vamos a seleccionar GitHub.

![Seleccionar configuración por defecto](netlify/oauth-habilitar-github-default-config-light.webp){:.light}
![Seleccionar configuración por defecto](netlify/oauth-habilitar-github-default-config-dark.webp){:.dark}

En esta ventana, Netlify solicita confirmar cómo se gestionará la autenticación con **GitHub** al habilitar Netlify Identity.
Al seleccionar **Use default configuration**, Netlify utiliza su propia aplicación __OAuth__ para gestionar el inicio de sesión, lo que simplifica la configuración y evita crear credenciales adicionales en GitHub.

> La alternativa, **Let me use my own OAuth app credentials**, está pensada para casos avanzados donde se requiere mayor control o personalización del flujo de autenticación.
{: .prompt-info }

Al confirmar con **Enable GitHub**, el proveedor queda habilitado y los usuarios podrán registrarse o iniciar sesión usando su cuenta de GitHub.

---

## Paso 3: Agregar Netlify Identity al frontend

Netlify provee un widget listo para usar.

### Incluir el script

Agrega este script antes de cerrar el `<body>`:

```html
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
```
{:.nolineno .typing}


### Mostrar el widget de login

Puedes abrir el modal de autenticación con JavaScript:

```html
<button onclick="netlifyIdentity.open()">Iniciar sesión</button>
```
{:.nolineno .typing}

Esto mostrará automáticamente el login.

---

## Detectar el estado del usuario

Para saber si un usuario está autenticado:

```html
<script>
  if (window.netlifyIdentity) {
    netlifyIdentity.on("init", user => {
      if (user) {
        console.log("Usuario autenticado:", user.email);
      } else {
        console.log("Usuario no autenticado");
      }
    });
  }
</script>
```
{:.nolineno .typing}

Esto es clave para:

* Mostrar u ocultar contenido
* Redirigir usuarios
* Proteger secciones

---

## Cerrar sesión

```html
<button onclick="netlifyIdentity.logout()">Cerrar sesión</button>
```
{:.nolineno .typing}


---

## Proteger contenido básico

Un ejemplo simple para mostrar contenido solo a usuarios logueados:

```html
<div id="private-content" style="display:none;">
  Contenido privado
</div>

<script>
  netlifyIdentity.on("login", user => {
    document.getElementById("private-content").style.display = "block";
  });
</script>
```
{:.nolineno .typing}


---

## ¿Dónde se almacenan los usuarios?

Los usuarios se gestionan desde:

**Project configuration → Identity → Users**

![Revisar usuarios](netlify/revisar-usuarios-registrados-light.webp){:.light}
![Revisar usuarios](netlify/revisar-usuarios-registrados-dark.webp){:.dark}

Ahí puedes:

* Ver usuarios registrados
* Deshabilitarlos
* Eliminarlos

{% include circle-line.html %}

Netlify Identity permite agregar **autenticación real** a sitios estáticos sin complicar la arquitectura. Con pocos pasos, puedes tener login, registro y sesiones funcionando para tu sitio web.
