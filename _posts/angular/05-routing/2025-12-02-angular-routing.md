---
title: "Angular: Routing en Angular 21+"
categories: [Angular, "Angular_05-Routing"]
badge: angular
scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js
---

El routing es el sistema que permite navegar entre páginas o vistas dentro de una aplicación _Angular_. En _Angular_ 21, el enfoque cambió para hacerlo más simple y modular, aprovechando el uso de **standalone components** y el método `bootstrapApplication()`.

En versiones anteriores, el router se configuraba dentro de un módulo (`AppModule`) usando `RouterModule.forRoot()`. En Angular 21 esto sigue funcionando, pero el enfoque recomendado es **configurar el router directamente en `main.ts`**.

## 1. ¿Qué es una ruta en Angular?

Una ruta es una definición que indica qué componente se debe mostrar cuando el usuario visita una URL específica.

Por ejemplo:

* `/` mostraría un componente `Home`
* `/about` mostraría el componente `About`
* `/products/123` mostraría un producto con __ID 123__

En Angular, una ruta se define como un objeto con propiedades como `path` y `component`.

## 2. Definir rutas en `app.routes.ts`

En Angular 21 es común definir todas las rutas en un archivo dedicado.

Ejemplo:

```ts
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home }
];
```
{:file="src/app/app.routes.ts"}

Aquí, `path: ''` significa la ruta raíz (`/`), y `component: Home` indica qué componente se renderiza.

## 3. Activar el router en __main.ts__

El punto central de una app Angular es `main.ts`. Aquí es donde se inicializa la app con `bootstrapApplication()`.

La configuración del router en Angular 21, viene de la siguiente forma:

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
```
{:file="src/main.ts"}

Como se puede observar, se trae la configuración desde `'./app/app.config'`. El contenido de ese archivo es el siguiente:

```ts
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
```
{:file="src/app/app.config.ts"}

## 4. Mostrar el contenido de la ruta con __router-outlet__

Para que _Angular_ sepa dónde mostrar el componente que corresponde a la ruta, necesitas un contenedor en el HTML principal.

Por ejemplo: `app.html`.

```html
<router-outlet></router-outlet>
```
{:file="src/app/app.html" .typing .nolineno}

Ese elemento es donde se inyecta el componente correspondiente según la URL actual.

## 5. Navegación en Angular

### 5.1 Navegación declarativa con __routerLink__

La forma más simple de navegar es usando `routerLink` en enlaces:

```html
<nav>
  <a routerLink="/">Home</a>
  <a routerLink="/about">About</a>
</nav>
```
{: .typing .nolineno}

Esto genera navegación sin recargar la página, porque Angular controla el router.

### 5.2 Navegación programática

A veces necesitas navegar desde código (por ejemplo después de un login).

En Angular 21 se recomienda usar `inject()`:

```ts
import { inject } from '@angular/core';
import { Router } from '@angular/router';

const router = inject(Router);

router.navigate(['/about']);
```
{: .typing .nolineno}


## 6. Rutas con parámetros

Cuando quieres enviar información por la URL, se usan parámetros.

### Definir ruta con parámetro

```ts
{ path: 'product/:id', component: Product }
```
{: .typing .nolineno}

### Leer el parámetro

```ts
import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const route = inject(ActivatedRoute);
const id = route.snapshot.paramMap.get('id');
```
{: .typing .nolineno}

Esto permite leer el `id` desde la URL y usarlo para cargar datos.


## 7. Redirecciones y ruta 404

Es común querer:

* redirigir de `/` a `/home`
* mostrar una página 404 cuando la ruta no existe

Ejemplo:

```ts
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: '**', component: NotFound }
];
```
{: .typing .nolineno}

`pathMatch: 'full'` asegura que la ruta sea exactamente `/` antes de redirigir.

`**` es un wildcard que captura cualquier ruta no definida.


## 8. Lazy loading en Angular 21+

Lazy loading significa cargar módulos o rutas solo cuando el usuario las visita. Esto reduce el tamaño inicial de la app.

En Angular 21 se usa así:

```ts
{
  path: 'profile',
  loadChildren: () => import('./features/profile/profile.routes')
    .then(m => m.routes)
}
```
{: .typing .nolineno}

Y en `profile.routes.ts`:

```ts
import { Routes } from '@angular/router';
import { Profile } from './profile';

export const routes: Routes = [
  { path: '', component: Profile }
];
```
{: .typing .nolineno}


Esto carga el código de `profile` solo cuando se entra a `/profile`.

## 9. Guards (proteger rutas)

Los guards sirven para permitir o bloquear rutas (por ejemplo, si no estás logueado).

Ejemplo:

```ts
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const isLogged = false;
  return isLogged;
};
```
{: .typing .nolineno}


Uso en rutas:

```ts
{ path: 'dashboard', component: Dashboard, canActivate: [authGuard] }
```
{: .typing .nolineno}


{% include circle-line.html %}

## Consideraciones

En Angular 21+:

* El router se configura en `main.ts` con `provideRouter(routes)`
* Las rutas se definen en `app.routes.ts`
* `RouterModule.forRoot()` ya no es obligatorio
* Se recomienda usar `inject()` para obtener `Router` o `ActivatedRoute`
* `router-outlet` es el lugar donde se renderiza la ruta activa

