---
title: "Python: El tipo Int en Python"
categories: [Python, "Python_05-Tipos básicos"]
badge: python
---

En Python, los **enteros (`int`)** son números enteros positivos o negativos, sin límite predefinido en su tamaño.
Esto significa que Python puede manejar números muy grandes, solo limitado por la memoria del sistema.

## Cómo declarar enteros

```python
numero_entero = 42
numero_negativo = -10
```
{:.nolineno .typing}


## Operaciones con enteros

Python soporta operaciones matemáticas básicas:

```python
# Suma
suma = 10 + 5
print(suma)  # Salida: 15

# Resta
resta = 10 - 5
print(resta)  # Salida: 5

# Multiplicación
multiplicacion = 10 * 5
print(multiplicacion)  # Salida: 50

# División
division = 10 / 5
print(division)  # Salida: 2.0 (resultado float en Python 3)
```
{:.nolineno .typing}


## División entera y módulo

```python
# División entera
division_entera = 10 // 3
print(division_entera)  # Salida: 3

# Módulo
modulo = 10 % 3
print(modulo)  # Salida: 1
```
{:.nolineno .typing}

## Potenciación

```python
# Potencia
potencia = 2 ** 3
print(potencia)  # Salida: 8 (2 elevado a la 3)
```
{:.nolineno .typing}


## Desbordamiento de enteros (__overflow__)

En Python, no existe el **desbordamiento** típico de otros lenguajes, porque Python ajusta el tamaño del entero automáticamente.

```python
import sys

numero_grande = sys.maxsize + 1
print(numero_grande)
# Salida: 9223372036854775808 (entero muy grande)
```
{:.nolineno .typing}

## Operaciones con punto flotante (float)

En Python 3, el resultado de una división siempre es un **float**, incluso si es exacto.

```python
resultado = 10 / 5
print(resultado)  # Salida: 2.0
```
{:.nolineno .typing}

## Representación binaria, octal y hexadecimal

Python permite representar enteros en distintas bases numéricas:

```python
# Binario
binario = 0b1010
print(binario)  # Salida: 10

# Octal
octal = 0o52
print(octal)  # Salida: 42

# Hexadecimal
hexadecimal = 0x2A
print(hexadecimal)  # Salida: 42
```
{:.nolineno .typing}

## Conversión entre tipos

Se puede convertir una cadena (string) a entero usando `int()`:

```python
texto = "42"
numero = int(texto)
print(numero)  # Salida: 42
```
{:.nolineno .typing}


## Funciones útiles con enteros

| Función                | Descripción                     |
| ---------------------- | ------------------------------- |
| `abs()`                | Devuelve el valor absoluto      |
| `pow(base, exponente)` | Calcula la potencia             |
| `divmod(a, b)`         | Devuelve el cociente y el resto |

### Ejemplo

```python
valor_absoluto = abs(-10)
print(valor_absoluto)  # Salida: 10

resultado = pow(2, 5)
print(resultado)  # Salida: 32

cociente_resto = divmod(10, 3)
print(cociente_resto)  # Salida: (3, 1)
```
{:.nolineno .typing}

{% include circle-line.html %}

## Consideraciones

* `int` en Python no tiene límite fijo.
* La división `/` siempre retorna un `float`.
* Para división entera se usa `//`.
* El operador `%` devuelve el resto.
* Python maneja enteros gigantes automáticamente.

