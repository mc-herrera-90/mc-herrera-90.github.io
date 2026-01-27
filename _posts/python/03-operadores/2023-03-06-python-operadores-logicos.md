---
title: "Python: Operadores lógicos en Python"
categories: [Python, "Python_03-Operadores"]
badge: python
---

Los **operadores lógicos en Python** permiten **combinar o modificar expresiones booleanas** para construir condiciones más complejas y expresivas.

Estos operadores trabajan directamente con valores `True` y `False`, y son fundamentales para controlar el flujo del programa, especialmente en estructuras como `if`, `elif`, `while` y expresiones condicionales más elaboradas. Gracias a ellos, es posible evaluar múltiples condiciones al mismo tiempo y tomar decisiones más precisas dentro del código.

|Operador|Nombre|Descripción|
|:-------|:-----|:----------|
|`and`|Y lógico|Retorna `True` si ambos operandos son `True`|
|`or`|O lógico|Retorna `True` si al menos uno de los operandos es `True`|
|`not`|No lógico|Retorna `True` si el operando es `False`|


### Operador __and__

El operador `and` se utiliza para combinar dos condiciones, y la expresión resultante será `True` solo si ambas condiciones son `True`. Por ejemplo:

```py
a = 5
b = 10
c = 15

resultado = (a < b) and (b < c)  # True, ya que ambas condiciones son True
```
{:.nolineno .typing}

### Operador __or__

El operador `or` se utiliza para combinar dos condiciones, y la expresión resultante será `True` si al menos una de las condiciones es `True`. Por ejemplo:

```py
a = 5
b = 10
c = 3

resultado = (a > b) or (b < c)  # False, ya que ninguna de las condiciones es True
```
{:.nolineno .typing}

### Operador __not__

El operador `not` se utiliza para negar una condición, es decir, convierte `True` en `False` y viceversa. Por ejemplo:

```py
verdadero = True
falso = not verdadero  # falso es False

numero = 5
es_mayor_a_10 = numero > 10
no_es_mayor_a_10 = not es_mayor_a_10
```
{:.nolineno .typing}
