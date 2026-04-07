---
title: "MongoDB: Cómo organizar y crear documentos en MongoDB"
categories: [MongoDB, "MongoDB_02-Colecciones y Documentos"]
badge: mongodb
---

Los documentos son la unidad básica de organización en MongoDB. Se trata de __un conjunto ordenado de claves que tiene asociado determinados valores__.

Su estructura es __clave-valor__, por ejemplo: `{"nombre":"Juan", "Pais": "Chile"}`

## 1. Formato de las claves en los documentoss

Las claves son __cadenas de textos__, con algunas excepciones:

### No usar símbolos extraños

No pueden tener puntos o el símbolos extraños. Por ejemplo: `"."` o `"$"`.

El símbolo `$` esta reservado para:

- Operadores (ej: `$set`, `$gt`, `$in`)
- Expresiones internas del motor

Ejemplo inválido:

```json
"$price": 9900
```
{:.nolineno .noheader .fit-content .typing}

### Sensible a mayúsculas y minúsculas

MongoDB es sensible a mayúsculas/minúsculas y por lo que los pares clave valor; `{"Edad":3}`, `{"Edad": "3"}`, `{"edad": 3}`, `{"edad": "3"}` son distintos.
