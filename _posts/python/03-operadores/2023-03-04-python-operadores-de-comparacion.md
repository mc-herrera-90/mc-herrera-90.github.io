---
title: "Python: Operadores de comparación en Python"
categories: [Python, "Python_03-Operadores"]
badge: python
---

Los **operadores de comparación en Python** permiten **evaluar la relación entre dos valores**, determinando si son iguales, distintos, mayores o menores entre sí.

El resultado de estas comparaciones siempre es un **valor booleano** (`True` o `False`), lo que los convierte en una pieza clave para la **toma de decisiones** dentro del código. Gracias a ellos, _Python_ puede ejecutar distintas acciones según se cumpla o no una condición, siendo fundamentales en estructuras como `if`, `elif`, `while` y otras sentencias de control de flujo.

| Operador | Nombre            | Descripción                                   |
|----------|-------------------|-----------------------------------------------|
| `==`     | Igual a           | Compara si dos valores son iguales            |
| `!=`     | Diferente de      | Compara si dos valores son diferentes         |
| `>`      | Mayor que         | Verifica si un valor es mayor que otro        |
| `<`      | Menor que         | Verifica si un valor es menor que otro        |
| `>=`     | Mayor o igual que | Verifica si un valor es mayor o igual         |
| `<=`     | Menor o igual que | Verifica si un valor es menor o igual         |

## Lista de operadores de comparación

### Igualdad __==__

El operador de igualdad (`==`) se utiliza para verificar si dos valores son iguales. Por ejemplo:

```python
a = 5
b = 5
es_igual = (a == b)  # True, ya que a y b son iguales
```
{:.nolineno .typing}

### Desigualdad __!=__

El operador de desigualdad (`!=`) se utiliza para verificar si dos valores no son iguales. Por ejemplo:

```py
a = 5
b = 3
no_es_igual = (a != b)  # True, ya que a no es igual a b
```
{:.nolineno .typing}

### Mayor que __>__

El operador mayor que (`>`) se utiliza para verificar si un valor es mayor que otro. Por ejemplo:

```py
a = 10
b = 5
es_mayor = (a > b)  # True, ya que a es mayor que b
```
{:.nolineno .typing}

### Menor que __<__

El operador menor que (`<`) se utiliza para verificar si un valor es menor que otro. Por ejemplo:

```py
a = 3
b = 7
es_menor = (a < b)  # True, ya que a es menor que b
```
{:.nolineno .typing}

### Mayor o igual que __>=__

El operador mayor o igual que (`>=`) se utiliza para verificar si un valor es mayor o igual que otro. Por ejemplo:

```python
a = 10
b = 10
es_mayor_igual = (a >= b)  # True, ya que a es igual a b
```
{:.nolineno .typing}

### Menor o igual que __<=__

El operador menor o igual que (`<=`) se utiliza para verificar si un valor es menor o igual que otro. Por ejemplo:

```python
a = 5
b = 7
es_menor_igual = (a <= b)  # True, ya que a es menor que b
```
{:.nolineno .typing}
