---
title: "Python: Operadores de pertenencia en Python"
categories: [Python, "Python_03-Operadores"]
badge: python
---

Los **operadores de pertenencia en Python** se utilizan para **comprobar si un valor forma parte de una secuencia o colección**, como una cadena de texto, una lista, una tupla o un conjunto.

Estos operadores devuelven un **valor booleano** (`True` o `False`) y resultan especialmente útiles cuando necesitamos validar datos, buscar elementos dentro de estructuras o tomar decisiones en base a la presencia o ausencia de un valor. Son muy comunes en condicionales y bucles, ya que permiten trabajar de forma sencilla con colecciones de datos.

| Operador | Nombre | Descripción                                             |
|----------|--------|---------------------------------------------------------|
| `in`     | En     | Retorna `True` si el valor se encuentra en la secuencia |
| `not in` | No en  | Retorna `True` si el valor no se encuentra en la secuencia |


### Operador __in__

El operador `in` se utiliza para verificar si un valor está presente en una secuencia. Por ejemplo:

```py
frutas = ["manzana", "banana", "cereza"]

hay_banana = "banana" in frutas   # True
hay_uva = "uva" in frutas         # False
```
{:.nolineno .typing}


En este ejemplo, estamos verificando si `"banana"` está presente en la lista `frutas`, lo cual es `True`. También verificamos si `"uva"` está presente, lo cual es `False`.

### Operador __not in__

El operador `not in` se utiliza para verificar si un valor __NO__ está presente en una secuencia. Por ejemplo:

```py
frutas = ["manzana", "banana", "cereza"]

no_hay_uva = "uva" not in frutas  # True
no_hay_manzana = "manzana" not in frutas  # False
```
{:.nolineno .typing}

En este ejemplo, estamos verificando si `"uva"` __NO__ está presente en la lista `frutas`, lo cual es `True`. También verificamos si `"manzana"` __NO__ está presente, lo cual es `False`.
