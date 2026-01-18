---
title: "Introducción a los Componentes"
categories: [Angular, Angular-Componentes]
icon: techs/angular.svg
badge: angular
scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js
---

Uno de los conceptos centrales en el desarrollo usando Angular son los componentes, que son bloques reutilizables que combinan __HTML__, __CSS__ y __TypeScript__ para crear la interfaz de forma más controlada y sencilla.

## ¿Qué es un Componente?

Un componente en Angular es una **unidad independiente** que controla una parte de la interfaz de usuario.

{:.prompt-info}
> Cada componente tiene su propia __lógica__, __estilo__ y __plantilla__, lo que permite separar responsabilidades y mantener el código más organizado.

Por ejemplo:

{% raw %}
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar',
  template: `<img src'ruta/imagen' alt='img' />`,
  styleUrl: './avatar.css'
})
export class Avatar { }
```
{:file="avatar.ts" .typing}
{% endraw %}

El objeto que se pasa a `@Component` se conoce como los **metadatos** del componente. Allí se configuran sus propiedades principales, como:

* `selector`: nombre con el que se utiliza el componente en otros templates.
* `template`: define el contenido que se renderiza.
* `templateUrl`: ruta (relativa) del archivo del template.
* `styles`: estilos CSS locales del componente.
* `stylesUrl`: ruta (relativa) de la hoja de estilos.
* `imports`: módulos, directivas o componentes que este componente necesita.

Existen más propiedades, pero no es necesario conocerlas todas al inicio, se usan según la necesidad del componente.

## Generar componentes con Angular CLI

La CLI de Angular es una herramienta imprescindible. Permite generar componentes con un solo comando:

```terminal
ng generate component nombre-del-componente
# o la forma corta:
ng g c nombre-del-componente
```
{:.typing}

Al ejecutarlo, Angular generará automáticamente:

* Un archivo `.ts` con la clase del componente.
* Un archivo `.html` para la plantilla.
* Un archivo `.css` (o `.scss`) para los estilos.
* Un archivo `.spec.ts` para pruebas unitarias.

Por ejemplo, la siguiente imagen muestra el resultado:

![Generar componente](angular/generar-componente-con-angular-cli.webp)

## Importar componentes

Para usar un componente dentro de otro, agrégalo al arreglo `imports` del decorador `@Component`:

```ts
import { Avatar } from './avatar';

@Component({
  // Importa el componente `Avatar` parala plantilla
  // poder usarlo en la plantilla de este componente.
  imports: [Avatar],
  /* ... */
})
export class App { }
```
{: file="app.ts" .typing }


## Mostrar componente en un template

Ahora que ya está importado, se puede usar en el template llamando a su selector. Por ejemplo, tenemos algo como esto:

{% include file-viewer.html files=site.data.codes.angular.componentes.avatar name="avatar" %}

Bueno, pasa lo siguiente:

1. Se configuró el componente `Avatar`.
2. Se importa el componente en `App`.
3. Se utiliza el selector del componente dentro del template `<app-avatar>`.

En el navegador, el resultado es el siguiente:

![Mostrar componente avatar](angular/mostrando-componente-avatar.webp)

{:.prompt-tip}
> Experimenta creando pequeños componentes y combinándolos. Es la forma más rápida de aprender Angular en su última versión {% include fetch/package-version.html package="@angular/core" %}


