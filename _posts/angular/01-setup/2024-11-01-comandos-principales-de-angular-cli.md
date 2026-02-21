---
title: "Angular: Comandos esenciales de la Angular CLI"
categories: [Angular, Angular_01-Setup]
---

La Angular CLI es la herramienta oficial del ecosistema Angular para crear y gestionar aplicaciones. Permite automatizar tareas comunes como la generación de código, ejecución del servidor de desarrollo, compilación y pruebas, proporcionando un flujo de trabajo consistente y productivo.

## Instalación

Para instalar Angular CLI, asegúrese de tener instalado __Node.js__ (que incluye npm) y ejecute el siguiente comando:

```terminal
npm install -g @angular/cli
```
{:.typing}

A continuación se presenta una referencia organizada de los comandos más utilizados, clasificados por categoría y con su propósito principal.

## Comandos

### Creación y gestión de proyectos

| Comando         | Descripción                                 | Uso típico             |
| --------------- | ------------------------------------------- | ---------------------- |
| `ng new nombre` | Crea un proyecto Angular nuevo              | Iniciar una aplicación |
| `ng init`       | Inicializa Angular en un proyecto existente | Integrar Angular       |
| `ng config`     | Modifica valores en angular.json            | Ajustar configuración  |
| `ng version`    | Muestra versiones de Angular y CLI          | Verificar entorno      |

{% include circle-line.html %}

### Gestión del servidor de desarrollo

| Comando                           | Descripción                       | Uso típico          |
| --------------------------------- | --------------------------------- | ------------------- |
| `ng serve`                        | Ejecuta el servidor de desarrollo | Desarrollo local    |
| `ng serve --open`                 | Abre el navegador automáticamente | Flujo rápido        |
| `ng serve --port 4300`            | Ejecuta en puerto personalizado   | Evitar conflictos   |
| `ng serve --configuration nombre` | Usa configuración específica      | Testing de entornos |

{% include circle-line.html %}

## Comandos de generación de código

| Comando                        | Descripción             | Uso típico              |
| ------------------------------ | ----------------------- | ----------------------- |
| `ng generate component nombre` | Crea un componente      | UI                      |
| `ng generate service nombre`   | Crea un servicio        | Lógica                  |
| `ng generate directive nombre` | Crea una directiva      | Comportamiento          |
| `ng generate pipe nombre`      | Crea un pipe            | Transformación de datos |
| `ng generate guard nombre`     | Crea un guard           | Control de rutas        |
| `ng generate interface nombre` | Crea una interfaz       | Tipado                  |
| `ng generate class nombre`     | Crea una clase          | Modelos                 |
| `ng generate enum nombre`      | Crea un enum            | Constantes              |
| `ng generate module nombre`    | Crea módulo (si aplica) | Organización            |

Atajo general:

| Comando         | Equivalente        |
| --------------- | ------------------ |
| `ng g c nombre` | generate component |
| `ng g s nombre` | generate service   |

{% include circle-line.html %}

### Compilación y build

| Comando                               | Descripción           | Uso típico         |
| ------------------------------------- | --------------------- | ------------------ |
| `ng build`                            | Compila la aplicación | Generar artefactos |
| `ng build --configuration production` | Build optimizado      | Producción         |
| `ng build --watch`                    | Recompila en cambios  | Testing            |
| `ng build --stats-json`               | Genera estadísticas   | Análisis bundle    |

{% include circle-line.html %}

### Ejecutar pruebas

| Comando                 | Descripción                | Uso típico     |
| ----------------------- | -------------------------- | -------------- |
| `ng test`               | Ejecuta pruebas unitarias  | Validación     |
| `ng test --watch=false` | Ejecuta una sola vez       | CI             |
| `ng e2e`                | Ejecuta pruebas end-to-end | Flujo completo |

{% include circle-line.html %}

### Mantenimiento y actualización

| Comando          | Descripción                          | Uso típico    |
| ---------------- | ------------------------------------ | ------------- |
| `ng update`      | Actualiza dependencias               | Migraciones   |
| `ng add paquete` | Añade librerías con setup automático | Integraciones |
| `ng analytics`   | Configura analíticas de uso          | Configuración |
| `ng lint`        | Analiza calidad de código            | Estándares    |

{% include circle-line.html %}

### Ayuda y diagnóstico

| Comando         | Descripción                | Uso típico      |
| --------------- | -------------------------- | --------------- |
| `ng help`       | Lista comandos disponibles | Referencia      |
| `ng doc`        | Abre documentación oficial | Consulta rápida |
| `ng completion` | Autocompletado en terminal | Productividad   |

{% include circle-line.html %}

## Flujo de trabajo típico

En un flujo de trabajo típico:

1. Crear proyecto con `ng new`
2. Ejecutar desarrollo con `ng serve`
3. Generar código con `ng generate`
4. Validar con `ng test`
5. Compilar con `ng build`
6. Mantener con `ng update`