---
title: "Angular: Arquitectura de componentes"
categories: [Angular, Angular_02-Arquitectura]
badge: angular
mermaid: true
---

_Angular_ es un framework frontend completo, orientado a aplicaciones de gran escala, que se apoya fuertemente en una arquitectura bien definida. A partir de __Angular 16__ y consolidado en __Angular 17__, __18__, __19__ y versiones posteriores, la arquitectura ha evolucionado para ser más **modular**, **reactiva** y **flexible**, manteniendo compatibilidad con proyectos tradicionales.

Este artículo analizaremos la arquitectura moderna de _Angular_, cómo se organizan sus piezas principales y qué cambios conceptuales debes entender si trabajas con versiones recientes.

## Visión general de la arquitectura

_Angular_ usa una __arquitectura basada en componentes__, con separación por __responsabilidad__. La arquitectura se basa en los siguientes pilares:

![Arquitectura](angular/arquitectura-angular.webp)

Todo gira en torno a **componentes reactivos**, conectados por servicios y orquestados por el router.

## Componentes: el núcleo de Angular

Un componente es la unidad fundamental de Angular. Define:

<i class="devicon--typescript"></i> Una clase (lógica). Por ejemplo:

```ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() name!: string;
  @Input() role!: string;
  @Input() isActive: boolean = true;

  toggleStatus(): void {
    this.isActive = !this.isActive;
  }
}
```
{:file="user-card.component.ts"}

El archivo muestra:

- Clase del componente (lógica)
- `standalone: true` (NO es estrictamente necesario desde Angular 17+)
- Decorador `@Component`
  - <i class="fa-solid fa-database" style="color: rgb(36, 134, 184)"></i> Metadatos el objeto del decorador
- Uso de `@Input()` para comunicación

> El símbolo `!`, por ejemplo `@Input() name!: string;` es el *Non-Null Assertion Operator* de TypeScript. Indica al compilador que la propiedad **será inicializada más adelante** (por Angular), aunque no tenga un valor en el constructor, evitando errores de compilación por variables no asignadas.
{: .prompt-info }

{% include circle-line.html %}

<i class="fa-brands fa-html5" style="color: #F06529"></i> Un template HTML (vista). Por ejemplo:

{% raw %}
```html
<div class="user-card" [class.inactive]="!isActive">
  <h3>{{ name }}</h3>
  <p>{{ role }}</p>

  <button (click)="toggleStatus()">
    {{ isActive ? 'Desactivar' : 'Activar' }}
  </button>
</div>
```
{:file="user-card.component.html"}
{% endraw %}

El archivo muestra:

- Interpolación {% raw %}`{{ }}`{% endraw %}
- Bindig de clases
- Manejo de eventos `(click)`

{% include circle-line.html %}

<i class="fa-brands fa-css" style="color: #663399"></i> Estilos (CSS/SCSS)

```scss
.user-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 6px;
  max-width: 250px;

  h3 {
    margin: 0 0 0.5rem;
  }

  button {
    margin-top: 0.5rem;
    cursor: pointer;
  }

  &.inactive {
    opacity: 0.5;
  }
}
```
{:file="user-card.component.scss"}

EL archivo muestra:

- Estilos encapsulados al componente
- Uso de SCSS

{% include circle-line.html %}

En cualquier otro componente standalone podemos reutilizar el componente anterior sin necesidad de declararlo en un módulo. Por ejemplo:

```ts
import { UserCardComponent } from './components/user-card/user-card.component';

@Component({
  standalone: true,
  imports: [UserCardComponent],
  template: `
    <app-user-card
      name="Marco Contreras"
      role="Full Stack Developer | Cloud Architect "
    />
  `,
})
export class HomeComponent {}
```
{:.nolineno .typing}

De lo contrario, utilizando el enfoque tradicional basado en `NgModule`, el componente no es standalone y las dependencias deben declararse en un módulo. Por ejemplo, para habilitar *two-way binding* con `ngModel`, es necesario importar `FormsModule` en el módulo principal:

```ts
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
```
{:file="app.module.ts" .nolineno .typing}

Luego, el componente puede utilizar los distintos tipos de binding sin declarar dependencias propias:

```html
<!-- app.component.html -->
<input [(ngModel)]="username" />
```
{:.nolineno .typing}

En este enfoque, la configuración se centraliza en el módulo, a diferencia del modelo standalone, donde cada componente declara explícitamente lo que necesita.

## Componentes Standalone

Como ya hemos mencionado, los componentes independientes, también conocidos como "standalone components" en inglés, son unidades independientes que no requieren ser declarados en un `NgModule`. Introducidos para simplificar el desarrollo (estable desde v15, predeterminado en v17+), gestionan sus propias dependencias importando módulos, directivas o componentes directamente en el decorador.

Características:

* __Independencia__: No requieren ser declarado en un módulo padre.
* __Importaciones directas__: El componente importa sus propias dependencias (`imports: [...]`).
* __Menos código__: Se elimina la necesidad de crear un `NgModule` por cada componente, simplificando la estructura.
* __Reutilización__: Son más fáciles de mover y usar en diferentes partes de la aplicación.
* __Rendimiento__: Mejoran el "tree-shaking", permitiendo a Angular eliminar código no utilizado de manera más eficiente.

### Generar componentes standalone con Angular CLI

Crear estos componentes en versiones superiores a v14, es un proceso bien simple. Puedes usar __Angular CLI__ o crear componentes manualmente en el decarador de componentes de Angular.

Ejemplo, para crear un componente usando Angular CLI:

```terminal
ng generate component "nombre-componente" --standalone
```
{:.typing}

> En Angular 17 (y superiores: 18, 19, 20...) standalone es el comportamiento por defecto. El CLI asume que todo es standalone y basta con:
> ```terminal
> ng generate component "nombre-componente"
> ```
> {:.typing}
{:.prompt-info}

Ejemplo conceptual:

* Un componente importa otros componentes, pipes o directivas directamente
* El árbol de dependencias es explícito

Ejemplo de componente:

```ts
@Component({
  selector: 'app-user-card',
  imports: [CommonModule],
  templateUrl: './user-card.component.html'
})
export class UserCardComponent {
  @Input() user!: User;
}
```
{: .nolineno .typing}

## Templates y sistema de renderizado

Los templates en Angular:

* Usan HTML extendido
* Permiten data binding
* Soportan directivas estructurales y de atributo

### Tipos de binding

* Interpolación:
* Property binding
* Event binding
* Two-way binding

### Interpolación

Se utiliza para mostrar datos desde la clase hacia la vista.

{% raw %}
```html
<h2>Hola {{ username }}</h2>
<p>Edad: {{ age }}</p>
```
{:.nolineno}
{% endraw %}

Componente `.ts`

```ts
username = 'Marco';
age = 28;
```
{:.nolineno}

### Nuevo control de flujo

Desde **Angular 17** se incorporan nuevas **estructuras de control** basadas en sintaxis declarativa, entre las que destacan:

* `@if`
* `@for`
* `@switch`

Estas nuevas directivas reemplazan progresivamente a `*ngIf`, `*ngFor` y `*ngSwitch`, alineándose con la arquitectura moderna de Angular y los componentes *standalone*.

Antes, con la sintaxis tradicional:

{% raw %}
```html
<div *ngIf="user">
  <p>{{ user.name }}</p>
</div>
```
{:.nolineno .typing}
{% endraw %}

Ahora, usando la nueva sintaxis:

{% raw %}
```html
@if (user) {
  <p>{{ user.name }}</p>
}
```
{:.nolineno .typing} 
{% endraw %}

Y para listas:

{% raw %}
```html
@for (item of items; track item.id) {
  <li>{{ item.name }}</li>
}
```
{:.nolineno .typing}
{% endraw %}

Este enfoque hace que las plantillas sean más fáciles de leer, mantener y optimizar, acercando Angular a una experiencia más declarativa y predecible.

---

## Servicios y lógica de negocio

Los servicios contienen:

* Lógica reutilizable
* Acceso a APIs
* Gestión de estado
* Utilidades

No tienen vista y se usan mediante **inyección de dependencias**.

Buenas prácticas:

* Un servicio = una responsabilidad
* Evitar lógica compleja en componentes
* Usar servicios para comunicación entre componentes

---

## Inyección de dependencias (DI)

Angular cuenta con un sistema de **inyección de dependencias jerárquico y altamente optimizado**, que permite administrar y compartir servicios de forma eficiente a lo largo de la aplicación.

Este sistema se basa en un **árbol de inyectores**, donde cada nivel (aplicación, rutas y componentes) puede definir sus propios *providers*, heredando o sobrescribiendo dependencias según sea necesario.

### Características principales

* **Providers a distintos niveles**: global, componente o ruta
* **Árbol de inyectores**, que define el alcance y reutilización de las instancias
* **Gestión automática de instancias**, sin necesidad de crear o destruir servicios manualmente

### Enfoque en versiones modernas de Angular

En las versiones más recientes de Angular se promueve un uso más explícito y controlado de la DI, priorizando:

* **Providers definidos directamente en componentes y rutas**, en lugar de centralizarlos solo en módulos
* **Uso de la función `inject()`**, evitando constructores innecesarios cuando el servicio se utiliza de forma puntual

### Ejemplo con `inject()`

{% raw %}
```ts
import { Component, inject } from '@angular/core';
import { UserService } from './user.service';

@Component({
  standalone: true,
  selector: 'app-user',
  template: `{{ userService.getUserName() }}`,
  providers: [UserService]
})
export class UserComponent {
  private userService = inject(UserService);
}
```
{:.nolineno .typing}
{% endraw %}

En este ejemplo, el servicio queda **encapsulado dentro del componente**, asegurando que su ciclo de vida esté directamente ligado a él.

### Beneficios de este enfoque

* Mayor **control del ciclo de vida** de las dependencias
* Mejor **encapsulación y aislamiento** entre componentes
* Código más claro y alineado con la arquitectura *standalone*

---

## Ruteo y arquitectura de navegación

El router de Angular permite:

* Navegación por vistas
* Lazy loading
* Guards
* Resolvers

### Lazy loading moderno

En Angular actual:

* Se cargan componentes standalone directamente
* No se requieren módulos intermedios

Esto reduce el tamaño del bundle inicial y mejora el rendimiento.

### Guards y Resolvers

Se usan para:

* Controlar acceso
* Preparar datos antes de renderizar
* Proteger rutas

---

## Estado y reactividad

Angular siempre ha sido reactivo, pero desde Angular 16 en adelante esto se refuerza con:

### Signals

Los signals introducen un modelo reactivo nativo:

* Estado explícito
* Actualizaciones automáticas
* Menos dependencia de RxJS para casos simples

Ventajas:

* Código más claro
* Menos suscripciones manuales
* Mejor rendimiento

RxJS sigue siendo clave para flujos complejos y asincronía avanzada.


## NgModules vs arquitectura moderna

### NgModules (arquitectura clásica)

* Organización por módulos
* Declaraciones, imports y providers
* Mayor boilerplate

### Standalone (arquitectura actual)

* Componentes autosuficientes
* Imports explícitos
* Menor complejidad
* Mejor tree-shaking

NgModules no están obsoletos, pero **ya no son el enfoque recomendado para nuevos proyectos**.

---

## Compilación, build y rendimiento

Angular utiliza:

* Compilación AOT por defecto
* Tree-shaking
* Optimización de bundles

En producción:

* Se eliminan comprobaciones de desarrollo
* Se minimiza el código
* Se optimizan assets

Esto se gestiona mediante configuraciones de build definidas en angular.json.


## Organización recomendada del proyecto

Arquitectura típica moderna:

* <i class="fa-regular fa-folder"></i> `core/`

  * servicios globales
  * interceptores


* <i class="fa-regular fa-folder"></i> `shared/`

  * componentes reutilizables
  * pipes

* <i class="fa-regular fa-folder"></i> `features/`

  * funcionalidades independientes
  * componentes standalone
* app.routes.ts
* app.config.ts

Este enfoque favorece escalabilidad y mantenimiento.

### Ejemplos de servicios

```ts
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  http = inject(HttpClient);

  getAllProducts(){
    return this.http.get("https://api.freeprojectapi.com/api/Ecommerce/get-products")
  }
}
```
{:file="product-service.ts"}