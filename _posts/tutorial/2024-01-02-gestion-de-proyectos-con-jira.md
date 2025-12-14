---
title: "Gestión de Proyectos con Jira"
description: "Guía rápida para registrarte en Jira y comenzar a usarlo para gestionar tus proyectos."
categories: [DevOps, Jira]
image:
    path: poster/jira.webp
    lqip: data:image/webp;base64,UklGRpoAAABXRUJQVlA4WAoAAAAQAAAAEwAACgAAQUxQSBMAAAABD9D/iAgICQhP/F8pexDR/0wuAFZQOCBgAAAA8AMAnQEqFAALAD85hrpULyklozAIAeAnCWkAAFxHp2A7arn+4J/4wAD+6nsTjTQV9nmgi1KbH57VnV7ic7u0+c07h3KGdskD1oHd2aRptVi3CnrGPTxoWAZ1ktEgAAAA
---

Jira es una herramienta de __gestión de proyectos__ desarrolla por Atlassian. Es ampliamente utilizada por equipos de desarrollo de software, pero también es útil para cualquier grupo que trabaje con metodologías ágiles como Scrum o Kanban.

## Registrar una cuenta

Para empezar a usar Jira, el primer paso es crear una cuenta. Si su organización ya usa Jira, es posible que ya tenga una cuenta. Si no es así, aquí te compartiré los pasos para tener una:

### 1. Ir a la página principal

- Visita el sitio web de Jira: [https://www.atlassian.com/software/jira](https://www.atlassian.com/software/jira){:target='_blank'}
- Haz clic en el botón __"Obtener Gratis"__ o __Get it free__

![get it free](jira/jira-get-free.webp)

> El __plan gratuito__ de Jira __permite hasta 10 usuarios__, lo cual es suficiente para equipos pequeños. Un equipo Scrum típico está compuesto por entre 5 y 9 personas.
{: .prompt-info }

### 2. Registra y verifica tu correo electrónico

- Ahora puedes seleccionar algunas de las opciones de registo. Si tu institución utiliza cuentas corporativas, también puedes iniciar sesión con el correo de tu organización.

![signup](jira/jira-signup.webp)
_Opciones de registro_

- Sigue los pasos para verificar el correo electrónico.

> __Protege tus credenciales__: tu cuenta de Jira puede contener información sensible del proyecto, así que evita compartir tu inicio de sesión, usa contraseñas seguras y es recomendable activar la verificación en dos pasos para mayor seguridad.
{: .prompt-warning }

### 3. Configuración inicial

Antes de empezar a gestionar tu trabajo, Jira nos permite configurar algunas preferencias. Por ejemplo:

- Configura el sitio, aquí puedes poner el nombre de tu organización o producto:

![configurar el sitio](jira/jira-config-site.webp)
_configurar el sitio_

- Selecciona __"Desarrollo de Software"__, ideal para proyectos Scrum:

![Configuración inicial](jira/jira-what-kind-of-work.webp)
_adaptar la experiencia de trabajo_

![Preferencias Jira](jira/preferences-jira.webp)
_ajustar preferencias de trabajo_

> La opción que elijas no es definitiva. Luego puedes agregar otros tipos de __proyectos o productos desde el admin panel__.
{: .prompt-info }

- Una vez terminamos de configurar tus preferencias, podrás comenzar tu primer proyecto de la mano del asistente de Jira.

![Jira primer proyecto](jira/jira-first-project.webp)
_Comenzar tu primer proyecto_

{% include circle-line.html %}

## Añadir miembros al equipo

Previo a gestionar historias y tareas en el Backlog, es necesario incorporar a los miembros del equipo.

![Jira agregar miembros](jira/jira-add-member.webp)
_añadir nuevos miembros_

![Jira enviar invitación](jira/jira-send-invite.webp)
_enviar invitación_

## Estructura Básica

En jira funciona en una jerarquía en el siguiente orden:

```
JIRA (Atlassian)
└── Sitio: miproyecto.atlassian.net
    ├── Producto: Jira Software
    │     ├── Proyecto: Web App
    │     ├── Proyecto: Mobile App
    │     └── Proyecto: DevOps
    └── Producto: Jira Product Discovery
          └── Proyecto: Ideas del Producto
```
{: .noheader }




En Jira, todo gira en torno a los siguientes elementos:

| Elemento               | Descripción                                                                   |
| ---------------------- | ----------------------------------------------------------------------------- |
| **Proyecto**           | Conjunto de tareas con un objetivo común.                                     |
| **Issue (Incidencia)** | Unidad básica de trabajo. Puede ser una tarea, bug, historia de usuario, etc. |
| **Epic**               | Gran bloque de trabajo que agrupa varias tareas o historias.                  |
| **Sprint**             | Ciclo de trabajo (Scrum) con duración fija.                                   |
| **Workflow**           | Flujo de estados por los que pasa un issue (To Do → In Progress → Done).      |

## Estructura de Scrum

Primero tenemos nuestra hoja de ruta, que son __nuestros objetivos de alto nivel__, lo que quiere decir esencialmente es __¿Qué quiero lograr con este proyecto?__.

Entonces, básicamente nuestra __hoja de ruta consiste en un Backlog__, que es una lista cambiante de elementos de trabajo a concretar en un Sprint y su elemento más importante debe estar en la parte superior

### __¿Qué son las épicas en Scrum?__

En Scrum, una __épica (epic)__ es una gran historia de usuario o una funcionalidad grande que no puedo completarse en un solo sprint. Por eso, de __divide en varias historias de usuarios más pequeñas__ (__issues__ o __tareas__) que se pueden estimar, desarrollar y completar más fácilmente.

Un ejemplo de épica podría ser el siguiente; supongamos que estamos trabajando en una aplicación de `e-commerce`. Una épica en Jira podría ser:

- [x] __Épica__: "Proceso de pago seguro para el cliente"
    - [x] __Historia 1__: "Como cliente, quiero agregar productos al carrito para revisar mi compra."
    - [x] __Historia 2__: "Como cliente, quiero paagr con tarjeta de crédito o débido."
    - [x] __Historia 3__: "Como cliente, quiero recibir una confirmación por email después de pagar."
    - [x] __Historia 4__: "Como cliente, quiero porder aplicar cupones de descuento."

- En tablero, habilita el panel de las épicas:

![Crear epica](jira/jira-create-epic.webp)
_Crear épica_

- Dale el nombre a la épica y presiona <kbd>Enter</kbd>:

![Nombrar epica](jira/jira-name-epic.webp)
_Nombre de la épica_

- Creada la épica, podemos abrirla y ver los detalles para completar la información:

![Nombrar epica](jira/jira-epic-detail.webp)
_Añadir descripción de la épica_

- En detalles, puedes asignar a un miembro y establecer las fechas de inicio y fin:

![Asignar épica](jira/jira-epic-detail2.webp)
_Asignar épica, fechas de inicio y fin_

![Añadir elemento a la épica](jira/jira-epic-add-element.webp)
_Adjuntar archivos u otros elementos a la épica_
