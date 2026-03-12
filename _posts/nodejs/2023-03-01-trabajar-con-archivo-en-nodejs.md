---
title: "Node.js: Trabajar con archivos usando el módulo fs de Node.js"
categories: ["Node.js", "Node.js_04-Manipular archivos"]
badge: nodejs
---

## 1. ¿Qué es el módulo fs?

El módulo `fs` es una librería integrada de Node.js que permite acceder al sistema de archivos del servidor. Con él podemos realizar tareas como:

- Leer archivos
- Crear archivos
- Escribir o modificar archivos
- Crear o eliminar carpetas
- Listar contenidos de directorios

## 2. Leer archivos con __fs__

### 2.1 Leer archivos de forma asíncrona

El método `readFile` del módulo `fs` lee un archivo de __forma asíncrona__. Esto significa que la operación de lectura se ejecuta en segundo plano sin bloquear la ejecución del programa. Mientras el archivo e está leyendo, el resto del código puede seguir ejecutándose normalmente.

La forma correcta de leer el contenido de un archivo usando `readFile` es la siguiente:

```js
const fs = require('fs');

fs.readFile('archivo.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }
  
  console.log(data);
})

console.log('Este mensaje se mostrará primero');
```
{:.nolineno .typing .typing-fast}

También podemos usar `fs/promises` a través de __ES Module__ para facilitar el uso con `async/await`. Para habilitarlo, agrega la extensión `.mjs` o la clave `"type": "module"` en un archivo `package.json`. Ejemplo:

```js
import { readFile } from 'fs/promises';

async function leerArchivo() {
  try {
    const contenido = await readFile('archivo.txt', 'utf8');
    console.log(contenido);
  } catch(error) {
    console.error('Error:', error);
  }
}

leerArchivo();
console.log('Este mensaje se mostrará primero');
```
{:file="leer-archivo.mjs" .typing .typing-fast}

### 2.2 Leer archivos de forma síncrona

Además del `readFile`, el módulo `fs` también ofrece el método `readFileSync`, que realiza la lectura de archivos de __forma síncrona__. A diferencia del método anterior, este __bloquea la ejecución del programa__ hasta que el archivo ha sido leído completamente.

Por ejemplo, un caso sería leer un archivo de configuración antes de iniciar otros procesos:

```js
const fs = require('fs');

const configData = fs.readFileSync('config.json', 'utf8');

const config = JSON.parse(configData);

console.log("Aplicación:", config.appName)
console.log("Puerto:", config.port)
```
{: .nolineno .typing .typing-fast}
