---
title: "Angular: Comandos esenciales de la Angular CLI"
categories: [Angular, Angular_01-Setup]
badge: angular
---

La Angular CLI es la herramienta oficial del ecosistema Angular para crear y gestionar aplicaciones. Permite automatizar tareas comunes como la generación de código, ejecución del servidor de desarrollo, compilación y pruebas para un flujo de trabajo más productivo.


## Instalación

Para instalar Angular CLI, asegúrese de tener instalado __Node.js__ (que incluye npm) y ejecuta el siguiente comando:

```terminal
npm install -g @angular/cli
```
{:.typing}

A continuación se presenta una referencia organizada de los comandos más utilizados, clasificados por categoría y con su propósito principal.

{% include accordion.html items=site.data.angular.angular-cli %}

## Flujo de trabajo típico

En un flujo de trabajo típico:

1. Crear proyecto con `ng new`
2. Ejecutar desarrollo con `ng serve`
3. Generar código con `ng generate`
4. Validar con `ng test`
5. Compilar con `ng build`
6. Mantener con `ng update`