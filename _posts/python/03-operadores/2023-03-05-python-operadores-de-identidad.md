---
title: "Python: Operadores de identidad en Python"
categories: [Python, "Python_03-Operadores"]
badge: python
---

Los **operadores de identidad en Python** se utilizan para **comprobar si dos variables hacen referencia al mismo objeto en memoria**, y no solo si contienen el mismo valor.

A diferencia de los operadores de comparación, estos operadores evalúan la **identidad del objeto**, es decir, si ambas variables apuntan exactamente a la misma ubicación en memoria. Para esto, _Python_ utiliza los operadores `is` y `is not`.

Estos operadores son **muy eficientes**, ya que se limitan a comparar referencias de memoria, sin realizar cálculos adicionales. Son especialmente útiles cuando trabajamos con objetos, estructuras complejas o valores especiales como `None`.

|Operador|Nombre|Descripción|
|`is`|Es|Verifica si dos variables apuntan al mismo objeto|
|`is not`|No es|Verifica si dos variables no apuntan al mismo objeto|

### Operador __is__

El operador `is` se utiliza para verificar si dos variables se refieren al mismo objeto en la memoria. Por ejemplo

```py
a = [1, 2, 3]
b = a

es_igual = (a is b)  # True, ya que a y b se refieren al mismo objeto
```
{:.nolineno .typing}

En este ejemplo, tanto `a` como `b` apuntan al mismo objeto en la memoria, por lo que la expresión `a is b` es `True`.

### Operador __is not__

El operador is not se utiliza para verificar si dos variables NO se refieren al mismo objeto en la memoria. Por ejemplo:

```py
x = 15
y = 15

no_es_igual = (x is not y)  # False, ya que x e y se refieren al mismo objeto
```
{:.nolineno .typing}

En este ejemplo, tanto `x` como `y` apuntan al mismo objeto en la memoria. _Python_ optimiza y reutiliza ciertos objetos inmutables, como los enteros pequeños (normalmente entre `-5` y `256`), por lo que la expresión `x is not y` es `False`.
