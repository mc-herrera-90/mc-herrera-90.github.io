---
title: "Angular: Novedades y nuevas características del Routing en Angular moderno"
categories: [Angular, "Angular_05-Routing"]
badge: angular
scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js
---

El routing es el sistema que permite navegar entre páginas o vistas dentro de una aplicación __Angular__. En __Angular v17+__, el enfoque cambió para hacerlo más simple y modular, aprovechando el uso de **standalone components** y el método `bootstrapApplication()`.

En versiones anteriores, el router se configuraba dentro de un módulo (`AppModule`) usando `RouterModule.forRoot()`. En Angular 21 esto sigue funcionando, pero el enfoque recomendado es **configurar el router directamente en `main.ts`**.

## 1. ¿Qué es una ruta en Angular?

En Angular, **una ruta** es una **regla que le indica a la aplicación qué componente debe mostrarse** cuando el usuario navega a una determinada URL.

En otras palabras, una ruta **conecta una URL con un componente**. En Angular, una ruta se define como un objeto con propiedades como `path` y `component`.

```ts
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About }
];
```
{:.nolineno .typing}

Aquí se están definiendo dos rutas:

| URL      | Componente que se muestra |
| -------- | ------------------------- |
| `''` (raíz) | `Home`                    |
| `/about` | `About`                   |

## 2. Definir rutas nuevas en __app.routes.ts__

En __Angular__ es común definir todas las rutas en un archivo dedicado a ese propósito, el archivo `app.routes.ts` dentro del directorio `src/app`. Esto se debe a que, en los proyectos generados con la CLI de Angular, **no es necesario crear el archivo de rutas manualmente**; solo debes abrirlo y agregar o modificar las rutas según los componentes que quieras mostrar en tu aplicación.

Ejemplo:

```ts
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'about', component: About},
  {path: 'contact', component: Contact}
];
```
{:file="src/app/app.routes.ts"}

> Recuerda verificar que estás importando correctamente el componente. En el ejemplo del código anterior, la ruta de importación debería coincidir con la que genera Angular automáticamente cuando creas el componente con `ng g c pages/<nombre-componente>`. De esta forma te aseguras de que el módulo pueda encontrarlo sin problemas.
{:.prompt-tip}

## 3. Activar el router en __main.ts__

El punto central de una app Angular es `main.ts`. Aquí es donde se inicializa la app con `bootstrapApplication()`.

La configuración del router en Angular, viene de la siguiente forma:

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

> Cuando generas una aplicación con la CLI de Angular, el sistema de enrutamiento ya viene configurado automáticamente en el proyecto inicial. Esto significa que ya existe la estructura básica de rutas y solo necesitas agregar o modificar las rutas según las necesidades de tu aplicación. Antiguamente en versiones __-v16__, la CLI te preguntaba interactívamente si querías agregar enrutamiento.
{:.prompt-info}

## 4. Mostrar el contenido con __router-outlet__

Para que __Angular__ sepa dónde mostrar el componente que corresponde a la ruta, necesitas un contenedor en el HTML principal.

Por ejemplo: `app.html`.

```html
<header class="header">
  <h1>Mi Aplicación</h1>
  <nav>
    <a routerLink="/home">Home</a>
    <a routerLink="/about">About</a>
    <a routerLink="/contact">Contact</a>
  </nav>
</header>

<main class="main">
  <div class="content">
    <!-- Aquí Angular renderiza el componente de la ruta activa -->
    <router-outlet></router-outlet>
  </div>
</main>

<footer class="footer">
  <small>Ejemplo de Angular Router</small>
</footer>
```
{:file="src/app/app.html" }

Además, cuando vayas a utilizar directivas del router en un componente debes **importar `RouterLink` y `RouterLink` en ese componente**. Esto permite que Angular reconozca esas directivas dentro de la plantilla.

Por ejemplo:

```ts
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
```
{:file='src/app/app.ts'}

## 5. Navegación en Angular

### 5.1 Navegación declarativa con __routerLink__

La forma más simple de navegar es usando `routerLink` en enlaces. Esto genera navegación sin recargar la página, porque Angular controla el router.

```html
<nav>
  <a routerLink="/">Home</a>
  <a routerLink="/about">About</a>
  <a routerLink="/contact">About</a>
</nav>
```
{: .typing .nolineno}

Esto significa que, al navegar entre las distintas URLs, el resultado esperado sería más o menos así:

![Routing](angular/pages-in-angular.webp)

### 5.2 Navegación programática

A veces necesitas navegar desde código (por ejemplo después de un login) o poner un botón en vez de un enlace. Dependiendo del escenario, se puede requerir una navegación programática.

Un ejemplo menos común, es usar navegación programática en un botón, pero sería algo como se muestra a continuación:

```ts
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <h2>Bienvenido a Home</h2>
    <button (click)="goToAbout()">¿Quiénes somos?</button>
  `,
  styleUrl: './home.css',
})
export class Home {
  private router = inject(Router);

  goToAbout() {
    this.router.navigate(['/about']);
  }
}
```
{:file="src/app/pages/home/home.ts"}

El resultado no es más ni menos que el mismo que podríamos haber obtenido utilizando un enlace (estilizado como botón) con la directiva `routerLink`.

{% include embed/video.html src="angular/navegacion-programatica-demo.webm" %}

Para complementar, vamos a crear algunas rutas adicionales y la asociamos a su respectivo componente:

```ts
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'about', component: About },
  { path: 'contact', component: Contact }
];
```
{:file="src/app/app.routes.ts"}

La idea es simple, mostrar cómo, después de iniciar sesión, Angular __navega a otra ruta__ (no mezclando cosas como proteger rutas, ya que lo abordamos más adelante).

```ts
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  template: `
    <div class="login-container">
      <h2>Iniciar Sesión</h2>
      <input [(ngModel)]="username" placeholder="Usuario" />
      <input [(ngModel)]="password" type="password" placeholder="Contraseña" />
      <button (click)="login()">Entrar</button>
    </div>
  `,
  styleUrl: './login.css'
})
export class Login {
  private router = inject(Router);

  username = '';
  password = '';

  login() {
    // Simulación simple: si hay usuario y contraseña, navegar
    if (this.username && this.password) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Ingresa usuario y contraseña');
    }
  }
}
```
{:file="src/app/pages/login/login.ts"}

El resultado es predecible: al ingresar los datos, se nos permite iniciar sesión y se nos redirige al dashboard de forma programática.

{% include embed/video.html src="angular/demo-login-simple.webm" %}

## 6. Rutas con parámetros

Cuando quieres enviar información por la URL, se usan parámetros. Las URL parametrizadas nos permiten definir rutas dinámicas para que múltiples URL accedan al mismo componente pero mostrando datos diferentes según el parámetro de la URL.

### 6.1 Definir ruta con parámetro

Para definir los parámetros, se debe anteponer dos puntos (`:`). En el siguiente caso, añadimos una ruta con parámetros basado en el ID de un usuario.

```ts
/* ... */
import { UserProfile } from './pages/user-profile/user-profile';

export const routes: Routes = [
  /* Otras rutas */
  { path: 'profile/:id', component: UserProfile }
];
```
{:file="src/app/app.routes.ts"}

Podemos usar un arreglo de usuarios que actuará como un servicio, el cual nos permitirá cargar el perfil correspondiente según el parámetro recibido en la URL.

```ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Users {

  users = [
    { id: 1, name: 'Juan Pérez', role: 'Frontend Developer', avatar: '//robohash.org/1' },
    { id: 2, name: 'Marco Contreras', role: 'Backend Developer', avatar: '//robohash.org/2' },
    {id: 3, name: 'María Díaz', role: 'UI Designer', avatar: '//robohash.org/3?set=set4' }
  ];
    
  getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }
}
```
{:file="src/app/servives/users.ts"}

### 6.2 Leer el parámetro

Una vez definida la ruta con parámetro (`profile/:id`), podemos acceder a ese valor desde el componente utilizando `ActivedRoute`.

Esto permite leer el `id` desde la URL y usarlo para cargar datos.

{% raw %}
```ts
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../../services/users';

@Component({
  imports: [],
  template: `
    <h2>Perfil de usuario</h2>

    <!-- Comprobamos si hay un usuario encontrado -->
    @if (user; as u) {

      <div class="user-info">
        <img [src]="u.avatar" [alt]="u.name" class="avatar" />
        <p><strong>Nombre:</strong> {{ u.name }}</p>
        <p><strong>Rol:</strong> {{ u.role }}</p>
        <p><strong>ID:</strong> {{ u.id }}</p>
      </div>

    } @else {

      <p>Usuario no encontrado</p>

    }
  `,
  styleUrl: './user-profile.css',
})
export class UserProfile {
  
  // Accedemos a la información de la ruta actual
  private route = inject(ActivatedRoute);

  // Inyectamos el servicio que contiene los usuarios
  private userService = inject(Users);

  // Obtenemos el parámetro "id" desde la URL
  id = Number(this.route.snapshot.paramMap.get('id'));

  // Buscamos el usuario correspondiente usando ese id
  user = this.userService.getUserById(this.id);
}
```
{:file="src/app/user-profile/user-profile.ts"}
{% endraw %}

De esta manera, al cambiar el valor en la URL, se carga el perfil con la información de ese usuario.

{% include embed/video.html src="angular/demo-rutas-con-parametros.webm" %}

## 7. Redirecciones y ruta 404

Es común querer redirigir automáticamente de una ruta a otra, por ejemplo cuando alguien ingresa a `/` y queremos enviarlo a `/home`.

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

{% include embed/video.html src="angular/demo-redireccion-y-wildcard.webm" %}

## 8. Cómo definir el orden de las rutas

Un aspecto importante al definir rutas en Angular es **el orden en el que se declaran**, ya que el router sigue la estrategia conocida como **"primera coincidencia gana"** (*first match wins*).

Esto significa que Angular **evalúa las rutas de arriba hacia abajo** y, cuando encuentra una coincidencia entre la URL y un `path`, **detiene la búsqueda inmediatamente** y renderiza el componente asociado.

Por esta razón, siempre se recomienda definir las rutas **desde las más específicas hasta las más generales**.

El siguiente ejemplo muestra cómo debería organizarse el orden de las rutas:

```ts
const routes: Routes = [
  { path: 'products/new', component: NewProduct },      // Ruta más específica
  { path: 'products/:id', component: ProductDetail },   // Ruta dinámica
  { path: 'products', component: Product }              // Ruta más general
]
```
{:.nolineno .typing}

En este caso, si un usuario visita la siguiente URL:

```
/products/new
```
{:.fit-content .noheader}

Angular seguirá estos pasos:

1. Revisa la primera ruta: `products/new`.
2. La URL coincide exactamente con esa ruta.
3. Angular carga el componente `NewProduct`.
4. El router **deja de evaluar el resto de las rutas**.

Por lo tanto, **no llega a revisar**:

* `products/:id`
* `products`

Si cambiáramos el orden de las rutas, por ejemplo:

```ts
const routes: Routes = [
  { path: 'products/:id', component: ProductDetail },
  { path: 'products/new', component: NewProduct },
  { path: 'products', component: Product }
]
```
{:.nolineno .typing}

Entonces la URL:

```
/products/new
```
{:.fit-content .noheader}

coincidiría con:

```
products/:id
```
{:.fit-content .noheader}

porque Angular interpretaría `"new"` como el valor del parámetro `id`.
Como resultado, se cargaría **el componente incorrecto** (`ProductDetail`).

## 9. Títulos de página

Puedes asociar un __título a cada ruta__. Angular actualiza automáticamente el título en la pestaña del navegador cuando se activa esa ruta. Es recomendado definir títulos de páginas adecuados para mejorar la accesibilidad de la aplicación.

```ts
const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Inicio',
  },
  {
    path: 'about',
    component: About,
    title: 'Acerca de nosotros',
  },
];
```
{: .nolineno }

Para escenarios avanzados donde se necesita un control centralizado sobre cómo se debe componer el título, puedes implementarlo de la siguiente manera.

Primero proporciona un servicio para crear una estrategia personalizadas. Por ejemplo:

```ts
import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable()
export class AppTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);

  updateTitle(snapshot: RouterStateSnapshot): void {
    const pageTitle = this.buildTitle(snapshot) || this.title.getTitle();
    this.title.setTitle(`Mi Aplicación - ${pageTitle}`);
  }
}
```
{:file="src/app/core/app-title.strategy.ts"}

Ahora para utilizar la estrategia personalizada, necesitas registrar en el `app.config.ts`:

```ts
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';

import { routes } from './app.routes';
import { AppTitleStrategy } from './core/app-title.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {provide: TitleStrategy, useClass: AppTitleStrategy }
  ]
};
```
{:file="src/app/app.config.ts"}

## 10. Lazy loading en Angular

Lazy loading significa cargar módulos o rutas solo cuando el usuario las visita. Esto reduce el tamaño inicial de la app.

Desde Angular 14+ se usa así:

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

## 11. Guards (proteger rutas)

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

En Angular 14+:

* El router se configura en `main.ts` con `provideRouter(routes)`
* Las rutas se definen en `app.routes.ts`
* `RouterModule.forRoot()` ya no es obligatorio
* Se recomienda usar `inject()` para obtener `Router` o `ActivatedRoute`
* `router-outlet` es el lugar donde se renderiza la ruta activa

