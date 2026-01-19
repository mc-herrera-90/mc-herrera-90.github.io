---
title: "MongoDB: Crear y listar colecciones"
categories: [MongoDB, "MongoDB-Colecciones"]
badge: mongodb
---

## Seleccionar la base de datos

Para trabajar con colecciones primero debemos seleccionar una base de datos:

```terminal
use blog
```
{:.typing}

## Crear una colección explícitamente

En _MongoDB_, una colección puede crearse de forma explícita cuando se desea definirla antes de insertar documentos. Por ejemplo:

```terminal
db.createCollection("users")
```
{:.typing}

### Crear una colección implícitamente

_MongoDB_ crea la colección automáticamente al insertar un documento. Ejemplo:

```js
db.posts.insertOne({
  title: "Primer post",
  published: true
})
```
{:.typing .nolineno }

## Listar colecciones existentes

```terminal
show collections
```
{:.typing}