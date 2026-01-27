---
title: "Python: Operadores de asignación en Python"
categories: [Python, "Python_03-Operadores"]
badge: python
---

Los **operadores de asignación en Python** se utilizan para **dar o actualizar valores en las variables**, siendo una de las operaciones más básicas y frecuentes del lenguaje.

El operador de asignación más común es `=`, que asigna a una variable el valor o resultado de la expresión que se encuentra a su derecha. Por ejemplo, se usa cada vez que inicializamos una variable o cambiamos su contenido.

Además del operador básico, _Python_ incluye **operadores de asignación compuestos**, los cuales combinan una operación aritmética con la asignación en una sola instrucción. Estos operadores permiten **reducir código repetitivo**, mejorar la **legibilidad** y hacer las operaciones más eficientes y expresivas.

## Operador de asignación básico __=__

El operador de asignación básico (=) se utiliza para asignar un valor a una variable. Por ejemplo:

```python
numero = 10
```
{:.nolineno .typing}

En este ejemplo, `numero` es una variable a la que se le asigna el valor `10`.

El operador de asignación también se utiliza para actualizar el valor de una variable. Por ejemplo:

```python
a = 5 # Asignación inicial
a = 10 # Actualización del valor
```
{:.nolineno .typing}

## Operadores de asignación compuestos

### Operador __+=__

El operador `+=` se utiliza para sumar el valor de la derecha a la variable y asignar el resultado a la variable. Por ejemplo:

```python
contador = 5
contador += 3  # Equivalente a contador = contador + 3
```
{:.nolineno .typing}

Después de esta operación, `contador` será igual a `8`.

### Operador __-=__

El operador `-=` se utiliza para restar el valor de la derecha a la variable y asignar el resultado a la variable. Por ejemplo:

```python
total = 100
descuento = 20
total -= descuento  # Equivalente a total = total - descuento
```
{:.nolineno .typing}

Después de esta operación, `total` será igual a `80`.

### Operador __*=__ y __/=__

Estos operadores se utilizan para multiplicar (`*=`) y dividir (`/=`) la variable por el valor de la derecha y asignar el resultado a la variable, respectivamente.

```python
cantidad = 5
cantidad *= 2  # Equivalente a cantidad = cantidad * 2

precio = 100
descuento = 20
precio /= (100 - descuento) / 100  # Equivalente a precio = precio / ((100 - descuento) / 100)
```
{:.nolineno .typing}

### Operador __//=__

El operador `//=` se utiliza para realizar una división entera y asignar el resultado a la variable.

```python
numero = 25
numero //= 4  # Equivalente a numero = numero // 4, el resultado es 6
```
{:.nolineno .typing}
