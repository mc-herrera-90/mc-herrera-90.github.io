---
title: "GitHub: Cambiar nombre de usuario y ajustes necesarios"
categories: [GitHub, "Github_01-Configuración"]
badge: github
---

Cambiar tu __username en GitHub__ es algo bastante sencillo, pero tiene algunos efectos importantes que conviene conocer antes de hacerlo.

## Cambiar el username en GitHub

Cambiar el **username** en GitHub es un proceso simple, sigue las indicaciones: 

### Indicaciones

1. Inicia sesión en GitHub.
2. Ve a **Settings** \> **Account** o ingresa directo a [https://github.com/settings/admin](https://github.com/settings/admin){:target='_blank'}
3. En la sección **Change username**, presiona el botón __"change username"__.

![Botón cambiar username](github/github-boton-cambiar-username-light.webp){:.light}
![Botón cambiar username](github/github-boton-cambiar-username-dark.webp){:.dark}

{:start="4"}
4. Aceptar el mensaje de notificación (sobre las acciones que este acto implica).

![Aceptar mensaje emergente](github/github-aceptar-mensaje-de-cambio-de-nombre-dark.webp){:.dark}
![Aceptar mensaje emergente](github/github-aceptar-mensaje-de-cambio-de-nombre-light.webp){:.light}

{:start="5"}
5. Debes elegir un nombre válido que esté disponible.

![Nombre válido](github/github-username-valido-dark.webp){:.dark}
![Nombre válido](github/github-username-valido-light.webp){:.light}

Finalmente, esperamos a que termine el proceso, lo cual puede tardar según la cantidad de repositorios y configuraciones de tu cuenta.

![Esperar el cambio](github/github-esperar-el-cambio-de-nombre-light.webp){:.light}
![Esperar el cambio](github/github-esperar-el-cambio-de-nombre-dark.webp){:.dark}


## Qué cosas se ven afectadas

Al cambiar el **username**, la plataforma realiza varias acciones automáticas para reducir el impacto del cambio. Durante un tiempo, GitHub se encarga de mantener la continuidad de tu cuenta:

### Cambios en los repositorios

* Los repositorios públicos y privados se redirigen automáticamente al nuevo username.
* Las estrellas, seguidores y contribuciones se mantienen sin cambios.
* Los enlaces antiguos al perfil redirigen al nuevo.
* Los links a issues, pull requests y commits siguen funcionando.
* Los repositorios ya clonados deben actualizar manualmente la URL del remote.
* El username antiguo queda disponible y puede ser tomado por otro usuario.

### Cambios en GitHub Pages

Si tienes repositorios configurados para usar **GitHub Pages**, cambiar tu nombre de usuario de GitHub **afecta directamente las URLs públicas** de tus sitios.

Cuando cambias el *username*, la URL base también cambia, por ejemplo:

**Antes**

https://__<usuario-antiguo\>__.github.io/mi-proyecto

**Después**

https://__<usuario-nuevo\>__.github.io/mi-proyecto

Esto significa que:

* Los enlaces antiguos **dejan de funcionar**
* Marcadores, documentación o referencias externas quedan rotas

Además, es necesario **actualizar la configuración de GitHub Pages** en cada repositorio. Por ejemplo, proyectos con **Jekyll** que usan `baseurl` o `url`.

__Antes__ (username antiguo):

```yml
url: "https://usuario-antiguo.github.io"
baseurl: "/mi-sitio"
```
{:file="_config.yml" .nolineno .typing}

__Después__ (username nuevo)

```yml
url: "https://usuario-nuevo.github.io"
baseurl: "/mi-sitio"
```
{:file="_config.yml" .nolineno .typing}