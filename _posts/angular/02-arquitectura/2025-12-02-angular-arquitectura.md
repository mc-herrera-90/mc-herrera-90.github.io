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

* <i class="devicon--typescript"></i> Una clase (lógica) 
* <i class="fa-brands fa-html5" style="color: #F06529"></i> Un template HTML (vista)
* <i class="fa-brands fa-css" style="color: #663399"></i> Estilos (CSS/SCSS)
* <i class="fa-solid fa-database" style="color: rgb(36, 134, 184)"></i> Metadatos
{:.list-unstyled}

Desde Angular 17 en adelante, el enfoque recomendado es usar **componentes standalone**, lo que elimina la dependencia obligatoria de NgModules.

## Componentes Standalone

Características:

* No requieren `NgModule`
* Declaran directamente sus dependencias
* Facilitan lazy loading y testing
* Reducen complejidad estructural

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

### Nuevo control de flujo

Desde Angular 17 se introducen nuevas sintaxis como:

* @if
* @for
* @switch

Estas reemplazan progresivamente a *ngIf y *ngFor, ofreciendo:

* Mejor rendimiento
* Mejor análisis estático
* Sintaxis más clara

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

Angular tiene un sistema de DI jerárquico y altamente optimizado.

Características:

* Providers a nivel global, componente o ruta
* Árbol de inyectores
* Instancias controladas automáticamente

Desde versiones modernas, se promueve:

* Providers en componentes y rutas
* Uso de inject() en lugar de constructor cuando corresponde

Esto permite mayor control del ciclo de vida y mejor encapsulación.

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