---
title: "Python: Operadores bitwise en Python"
categories: [Python, "Python_03-Operadores"]
badge: python
---

Los **operadores bitwise en Python** permiten manipular directamente los **bits individuales** de números enteros. Son especialmente útiles cuando se requiere trabajar a bajo nivel, optimizar operaciones, manejar banderas (*flags*) o realizar cálculos eficientes sobre valores binarios.

Estos operadores actúan sobre la representación binaria de los números y permiten realizar operaciones como **`AND`**, **`OR`**, **`XOR`**, **desplazamientos de bits** y **complemento**.

## Operadores bitwise disponibles en Python

|Operador|Nombre|Descripción|
|:--------|:------|:-----------|
|`&`|AND bit a bit|Compara bits y devuelve `1` si ambos son `1`|
|`|`|OR bit a bit|Devuelve `1` si al menos uno de los bits es `1`|
|`^`|XOR bit a bit|Devuelve `1` si los bits son diferentes|
|`<<`|Desplazamiento a la izquierda|Mueve los bits hacia la izquierda|
|`>>`|Desplazamiento a la derecha|Mueve los bits hacia la derecha| 
|`~`|Complemento|Invierte todos los bits del número|

### Operador AND __&__

El operador **AND** compara cada bit de dos números y devuelve `1` solo si **ambos bits son `1`**. Por ejemplo

```python
a = 10  # 1010 en binario
b = 3   # 0011 en binario

resultado = a & b
print(resultado)  # 2
```
{:.nolineno .typing}

**Explicación:**

```
1010
0011
----
0010  → 2
```
{:.noheader}

### Operador OR __|__

El operador **OR** devuelve `1` si **al menos uno de los bits es `1`**. Por ejemplo:

```python
a = 10  # 1010 en binario
b = 3   # 0011 en binario

resultado = a | b
print(resultado)  # 11
```
{:.nolineno .typing}

**Explicación:**

```
1010
0011
----
1011  → 11
```
{:.noheader}

## Operador XOR __^__

El operador **XOR** devuelve `1` cuando los bits son **diferentes**, y `0` cuando son iguales. Por ejemplo:

```python
a = 10  # 1010 en binario
b = 3   # 0011 en binario

resultado = a ^ b
print(resultado)  # 9
```
{:.nolineno .typing}

**Explicación:**

```
1010
0011
----
1001  → 9
```
{:.noheader}


### Desplazamiento a la izquierda __<<__

Los operadores de desplazamiento mueven los bits de un número hacia la izquierda o derecha. Por ejemplo:

```python
a = 5   # 101 en binario

resultado = a << 2
print(resultado)  # 20
```
{:.nolineno .typing}

**Explicación:**

```
101 << 2 = 10100  → 20
```
{:.noheader}

Cada desplazamiento a la izquierda equivale a multiplicar por 2.


### Desplazamiento a la derecha __>>__

```python
a = 20  # 10100 en binario

resultado = a >> 2
print(resultado)  # 5
```
{:.nolineno .typing}


**Explicación:**

```
10100 >> 2 = 101  → 5
```
{:.noheader}

Cada desplazamiento a la derecha equivale a dividir por 2 (parte entera).

## Operador de complemento __~__

El operador de complemento **invierte todos los bits** del número. En Python, esto se realiza usando **complemento a dos**, por lo que el resultado suele ser un número negativo.

```python
a = 5   # 101 en binario

resultado = ~a
print(resultado)  # -6
```
{:.nolineno .typing}


**Explicación:**

```
~5 = -(5 + 1) = -6
```
{:.noheader}

{% include circle-line.html %}

Los operadores bitwise no son comunes en código cotidiano, pero son muy útiles en programación de sistemas, manejo de permisos, criptografía y optimización.
