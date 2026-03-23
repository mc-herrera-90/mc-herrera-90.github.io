---
title: "MongoDB: Qué son y como usar documentos embebidos en MongoDB"
categories: [MongoDB, "MongoDB_02-Colecciones y Documentos"]
badge: mongodb
---

Los documentos embebidos en MongoDB corresponden a una forma de modelar datos donde __información relacionada se almacena dentro de un mismo documento__, en lugar de distribuirse en múltiples colecciones.

## 1. ¿Qué es un documento embebido?

Un documento embebido es un documento incrustado en otro. Esto es posible gracias a las características de sus propiedades en forma de lista, ya que una propiedad puede ser al mismo tiempo otra lista de propiedades.

### Ejemplo básico

{% capture demo1 %}
<span class="cuadro">
  "direccion": {
    "calle": "Av. Costanera",
    "ciudad": "La Serena",
    "region": "Coquimbo"
  }
</span>  
{% endcapture %}

```json
{
  "nombre": "Marco",
  "edad": 35,
  "direccion": {
    "calle": "Av. Costanera",
    "ciudad": "La Serena",
    "region": "Coquimbo"
  }
}
```
{:.nolineno}

En este caso, `dirección` es un documento embebido dentro del documento principal.

![Documento embebido](mongodb/ej_documento-embebido-light.webp){:.rounded}

### 1.1 Ventajas de los documentos embebidos

- [x] __Mejor rendimiento__: Toda información se encuentra en un solo documento, lo que reduce la necesidad de múltiples consultas.
- [x] __Acceso más rápido a los datos__: No es necesario realizar `joins` como en las bases de datos relacionales.
- [x] __Modelo de dato más natural__: Se asemeja a estructuras utilizadas en programación orientada a objetos.

### 1.2 Consideraciones importantes

- __Límite de tamaño__: Cada documento en MongoDB tiene un límite de 16 MB.
- __Duplicación de datos__: Puede existir redundancia si la información se repite en múltiples documentos.
- __Complejidad en actualizaciones__: Modificar estructuras anidadas puede requerir operaciones más específicas.

---

## 2. Casos de uso

En el modelado de datos en MongoDB, es importante identificar el tipo de relación entre entidades para decidir si usar __documentos embebidos__ o __referencias__.

### 2.1 Relación Uno a Uno (1:1)

Una relación uno a uno ocurre cuando __un documento está asociado a exactamente otro documento__.

__Cuándo usarla__

- Cuando los datos siempre se consultan juntos
- Cuando la información es complementaria
- Cuando el tamaño del documento no crece demasiado

__Ejemplo: Usuario y perfil__

```json
{
  "usuario": "mcherrera",
  "email": "contacto@mcherrera.dev",
  "perfil": {
    "telefono": "+56912345678",
    "direccion": "Calle #123, La Serena",
    "fecha_nacimiento": "1990-11-05"
  }
}
```
{:.nolineno}

En este caso, el perfil está embebido porque pertenece exclusivamente al usuario.

### 2.2 Relación Uno a Muchos (1:N)

Una relación uno a muchos ocurre cuando __un documento está relacionado con múltiples documentos__.

__Cuándo usarla__

- Cuando una entidad tiene múltiples elementos asociados
- Cuando los datos se consultan frecuentemente junto al padre
- Cuando la cantidad de elementos es controlada

__Ejemplo embebido: Usuario y mascotas__

```json
{
  "usuario": "mcherrera",
  "mascotas": [
    { "nombre": "Firulais", "tipo": "Perro" },
    { "nombre": "Michi", "tipo": "Gato" }
  ]
}
```
{:.nolineno}

Este enfoque es ideal cuando:

- El número de mascotas es pequeño
- Siempre se consultan junto al usuario

__Ejemplo con referencia__

```js
// Usuario
{
  "_id": "507f1f77bcf86cd799439011",
  "usuario": "mcherrera"
}

// Mascotas
{
  "usuario_id": "507f1f77bcf86cd799439011",
  "nombre": "Firulais",
  "tipo": "Perro"
}
```
{:.nolineno .language-json}

Se recomienda este modelo cuando:
- La cantidad de elementos puede crecer mucho
- Se requiere consultar las mascotas por separado
- Se necesitan búsquedas o filtros sobre las mascotas