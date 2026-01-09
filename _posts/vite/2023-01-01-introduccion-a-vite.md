---
title: Introducción a Vite
categories: [Vite, "Vite-Introducción"]
badge: vite
---

{% capture vite_word %}{% include tooltip.html word="Vite" description="palabra francesa que significa _rápido_" %}{% endcapture %}

En el desarrollo web moderno, la velocidad y la experiencia del desarrollador son claves. Herramientas tradicionales como Webpack han sido fundamentales durante años, pero con el crecimiento de frameworks modernos y aplicaciones más grandes, surgió la necesidad de soluciones más rápidas y simples.
Ahí es donde entra {{ vite_word }}.

## ¿Qué es Vite?

{{ vite_word }} es una herramienta de desarrollo frontend creada por __Evan You__, el creador de [Vue.js](https://vuejs.org/){:target='_blank'}. Su objetivo principal es ofrecer un entorno de desarrollo __extremadamente rápido__, aprovechando las capacidades nativas de los navegadores modernos.

__Vite se compone de dos partes principales__:

* **Servidor de desarrollo** con Hot Module Replacement (HMR) ultra rápido
* **Sistema de build** optimizado para producción usando **Rollup**

## ¿Por qué Vite es tan rápido?

La principal diferencia entre Vite y los bundlers tradicionales está en cómo manejan los módulos.

### En desarrollo

* No empaqueta toda la aplicación al iniciar
* Usa **ES Modules (ESM)** nativos del navegador
* Solo carga el código que realmente se necesita en cada momento

Esto significa:

* Arranque casi instantáneo 🚀
* Recargas inmediatas al guardar cambios
* Mejor experiencia de desarrollo

### En producción

* Usa **Rollup** para generar bundles optimizados
* Código minificado y optimizado automáticamente
* Excelente rendimiento final

## Principales características de Vite

- [x] Inicio del servidor en milisegundos
- [x] Hot Module Replacement (HMR) instantáneo
- [x] Configuración simple
- [x] Soporte nativo para TypeScript
- [x] Compatible con múltiples frameworks
- [x] Plugins potentes y flexibles
- [x] Excelente soporte para CSS (PostCSS, Sass, etc.)

## Frameworks compatibles

Vite no es solo para Vue. Actualmente soporta:

* **Vanilla JavaScript**
* **Vue**
* **React**
* **Svelte**
* **Preact**
* **Lit**
* **Solid**

Y muchos más mediante plugins de la comunidad.

## Instalación de Vite

Requisitos previos:

* Node.js versión 16 o superior

Crear un nuevo proyecto es muy sencillo:

```terminal
npm create vite@latest
```

Luego:

```terminal
cd nombre-del-proyecto
npm install
npm run dev
```

En segundos tendrás un servidor corriendo en `http://localhost:5173`.

## Estructura básica de un proyecto Vite

```text
├─ index.html
├─ package.json
├─ vite.config.js
└─ src
   ├─ main.js
   └─ style.css
```

🔹 `index.html` es el punto de entrada
🔹 `src/main.js` contiene la lógica principal
🔹 `vite.config.js` permite personalizar la configuración

## Configuración básica

Un ejemplo simple de configuración:

```js
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000
  }
})
```
{:file='vite.config.js'}

## Vite vs Webpack

| Característica      | Vite        | Webpack   |
| ------------------- | ----------- | --------- |
| Inicio del servidor | Instantáneo | Lento     |
| HMR                 | Muy rápido  | Más lento |
| Configuración       | Simple      | Compleja  |
| ESM nativo          | Sí          | No        |
| Build producción    | Rollup      | Webpack   |

Vite no reemplaza completamente a Webpack en todos los casos, pero es una **excelente opción para proyectos modernos**.

## ¿Cuándo usar Vite?

Vite es ideal si:

* Estás creando una SPA moderna
* Usas frameworks actuales
* Quieres mejorar la productividad
* Buscas tiempos de carga rápidos en desarrollo

No es la mejor opción si necesitas compatibilidad con navegadores muy antiguos sin polyfills.

## Conclusión

Vite representa una nueva generación de herramientas frontend. Su enfoque en la velocidad, simplicidad y estándares modernos lo convierte en una opción ideal para desarrolladores que buscan eficiencia sin sacrificar potencia.

Si estás comenzando un nuevo proyecto frontend, **Vite es una opción que definitivamente vale la pena considerar** ⚡

