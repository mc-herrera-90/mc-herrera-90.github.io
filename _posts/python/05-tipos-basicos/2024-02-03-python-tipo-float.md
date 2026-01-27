---
title: "Python: El tipo Float en Python"
categories: [Python, "Python_05-Tipos básicos"]
badge: python
---

En Python, el tipo **`float`** representa números reales (positivos o negativos) con parte fraccionaria, usando el estándar **IEEE 754**.

## Declaración de float

```python
numero_float = 3.14159
```
{:.nolineno .typing}


### Notación científica

```python
numero_cientifico = 6.022e23  # 6.022 × 10^23
```
{:.nolineno .typing}


## Operaciones con float

```python
# Suma
suma = 3.14 + 2.71
print(suma)  # 5.85

# Resta
resta = 10.5 - 4.2
print(resta)  # 6.3

# Multiplicación
multiplicacion = 2.5 * 4.0
print(multiplicacion)  # 10.0

# División
division = 10.0 / 3.0
print(division)  # 3.3333333333333335
```
{:.nolineno .typing}

## Operaciones avanzadas math

```python
import math

# Potenciación
potencia = math.pow(2.0, 3.0)
print(potencia)  # 8.0

# Seno
seno_valor = math.sin(math.pi / 2)
print(seno_valor)  # 1.0
```
{:.nolineno .typing}

## Precisión y redondeo

Los floats tienen precisión limitada porque se almacenan en binario.

```python
suma_precisa = 0.1 + 0.2
print(suma_precisa)  # 0.30000000000000004
```
{:.nolineno .typing}


Comparaciones directas pueden fallar:

```python
a = 0.1 + 0.2
b = 0.3
print(a == b)  # False
```
{:.nolineno .typing}

## __Inf__ y __NaN__

```python
# Infinito positivo
infinito_positivo = float('inf')
print(infinito_positivo)  # inf

# Not-a-Number
nan_valor = float('nan')
print(nan_valor)  # nan
```
{:.nolineno .typing}

## Conversión a float

```python
texto = "3.14"
numero_float = float(texto)
print(numero_float)  # 3.14
```
{:.nolineno .typing}

## Métodos útiles de `float`

| Método         | Descripción                                      |
| -------------- | ------------------------------------------------ |
| `is_integer()` | Devuelve `True` si el float representa un entero |

```python
numero = 3.0
print(numero.is_integer())  # True
```
{:.nolineno .typing}
