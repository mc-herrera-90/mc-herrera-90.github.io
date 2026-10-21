---
title: "Angular: Comandos esenciales de la CLI de Angular"
categories: [Angular, Angular_01-Setup]
badge: angular
---

La Angular CLI es la herramienta oficial del ecosistema Angular para crear y gestionar aplicaciones. Permite automatizar tareas comunes como la generación de código, ejecución del servidor de desarrollo, compilación y pruebas para un flujo de trabajo más productivo.

## 1. Instalación

Para instalar Angular CLI, asegúrese de tener instalado __Node.js__ (que incluye npm) y ejecuta el siguiente comando:

```terminal
npm install -g @angular/cli
```
{:.typing}

A continuación, encontrarás los comandos disponibles, organizados por categoría. Selecciona una categoría para consultar los comandos y conocer su propósito principal.

{% include accordion.html items=site.data.angular.angular-cli %}

## 2. Flujo de trabajo típico

En un flujo de trabajo típico:

1. Crear proyecto con `ng new`
2. Ejecutar desarrollo con `ng serve`
3. Generar código con `ng generate`
4. Validar con `ng test`
5. Compilar con `ng build`
6. Mantener con `ng update`

{% include embed/video.html src="angular/demo-ng-new-cli.webm" %}

Cuando ejecutas `ng new`, la cli de Angular pregunta si quieres habilitar __SSR (Server Side Rendering)__.
