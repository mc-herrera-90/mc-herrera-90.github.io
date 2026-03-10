---
title: "MongoDB: Índices en colecciones - mejor rendimiento en consultas"
categories: [MongoDB, "MongoDB_02-Colecciones"]
badge: mongodb
---

Los índices en _MongoDB_ son herramientas para optimizar el rendimiento de tus consultas. Si no los usas correctamente, tu aplicación puede volverse lenta a medida que tus colecciones crecen.

En este post veremos:

* Qué es un índice en MongoDB
* Cuándo debes usar índices
* Cómo crear índices con `createIndex()`
* Cómo analizar el rendimiento con `explain()`

## ¿Qué es un índice en MongoDB?

Un **índice** es una estructura especial que MongoDB crea para acelerar las búsquedas dentro de una colección.
En vez de recorrer **todos los documentos** (lo que se llama *scan*), _MongoDB_ usa el índice para ir directo al dato.

**Ejemplo real:**

Si tienes una colección de usuarios:

```js
{
  _id: ObjectId("..."),
  nombre: "María",
  email: "maria@mail.com",
  edad: 27
}
```
{: .typing .language-terminal}

Si buscas por `email`, sin índice _MongoDB_ tendría que revisar cada documento.
Con índice, _MongoDB_ va directo a los documentos que coinciden.


## ¿Cuándo debes usar índices?

Usa índices cuando:

* Haces consultas frecuentes por un campo específico
* Ordenas resultados (`sort()`) por un campo
* Filtras por rangos (`$gt`, `$lt`, `$in`)
* Buscas por campos únicos (como email o username)
* Usas consultas que se repiten en tu app

**Ejemplo típico:**

```js
db.usuarios.find({ email: "maria@mail.com" })
```
{: .typing .language-terminal}

Si no hay índice en `email`, esta consulta será lenta cuando la colección crezca.

## Crear índices con createIndex()

__Índice simple (1 campo)__

```js
db.usuarios.createIndex({ email: 1 })
```
{: .typing .language-terminal}

El `1` significa orden ascendente.

__Índice compuesto (varios campos)__

```js
db.ordenes.createIndex({ usuarioId: 1, fecha: -1 })
```
{: .typing .language-terminal}

Esto es útil cuando haces consultas como:

```js
db.ordenes.find({ usuarioId: 123 }).sort({ fecha: -1 })
```
{: .typing .language-terminal}

__Índice único__

```js
db.usuarios.createIndex({ email: 1 }, { unique: true })
```
{: .typing .language-terminal}

Esto evita que haya dos usuarios con el mismo email.

## Analizar el rendimiento con __explain()__

Para saber si una consulta usa índice o no, usa `explain()`:

```js
db.usuarios.find({ email: "maria@mail.com" }).explain("executionStats").queryPlanner.winningPlan
```
{: .typing .language-terminal}


Si ves algo como:

* **`COLLSCAN`** significa que está recorriendo toda la colección (malo)
* **`IXSCAN`** está usando índice (bueno)

__Ejemplo__:

{% capture output_query_indice %}
mi_app> db.usuarios.find({ email: "maria@mail.com" }).explain("executionStats").queryPlanner.winningPlan
{
  <span class="hl">stage: 'COLLSCAN'</span>,
  filter: { email: { '$eq': 'maria@mail.com' } },
  direction: 'forward'
}
mi_app> db.usuarios.createIndex({ email: 1 })
email_1
mi_app> db.usuarios.find({ email: "maria@mail.com" }).explain("executionStats").queryPlanner.winningPlan
{
  stage: 'FETCH',
  inputStage: {
    <span class="hl">stage: 'IXSCAN'</span>,
    keyPattern: { email: 1 },
    indexName: 'email_1',
    isMultiKey: false,
    multiKeyPaths: { email: [] },
    isUnique: false,
    isSparse: false,
    isPartial: false,
    indexVersion: 2,
    direction: 'forward',
    indexBounds: { email: [ '["maria@mail.com", "maria@mail.com"]' ] }
  }
}
{% endcapture%}

{% include terminal-wrapper.html content=output_query_indice %}

## Buenas prácticas con índices

Crea índices en los campos que usas frecuentemente en consultas, como identificadores (`email`, `username`, `userId`) y campos de filtrado o ordenamiento (`fecha`, `estado`).

Usa índices compuestos cuando haces consultas con varios filtros

> Los índices ocupan espacio y pueden afectar el rendimiento de inserciones y actualizaciones, pero __son útiles y casi siempre necesarios__ porque hacen que las consultas sean MUCHO más rápidas.
{:.prompt-warning}

{% include circle-line.html %}

Los índices en MongoDB son clave para que tus consultas sean rápidas y escalables.
Con un buen diseño de índices, tu app puede manejar colecciones grandes sin problemas.
