---
title: "Python: Operadores aritméticos en Python"
categories: [Python, "Python_03-Operadores"]
badge: python
---

Los operadores aritméticos nos permiten realizar __operaciones matemáticas__ sobre números. Los operadores básicos en _Python_ son los siguientes:

|Operador|Nombre|Descripción|
|:-------|:-----|:----------|
|`+`|Suma|Suma dos valores|
|`-`|Resta|Resta el segundo valor del primero|
|`*`|Multiplicación|Multiplica dos valores|
|`/`|División|Divide el primer valor por el segundo (retorna un `float`)|
|`%`|Módulo|Retorna el residuo de la división del primer valor por el segundo|
|`**`|Potencia|Eleva el primer valor a la potencia del segundo|
|`//`|División entera|Divide el primer valor por el segundo y retorna la parte entera|

### Suma __+__

El operador de suma (`+`) se utiliza para sumar dos números. También se puede utilizar para concatenar cadenas y listas en _Python_.

```python
a = 5
b = 3
resultado = a + b  # resultado es 8
```
{: .nolineno .typing}

### Resta __-__

El operador de resta (`-`) se utiliza para restar un número de otro.

```python
a = 10
b = 7
resultado = a - b  # resultado es 3
```
{: .nolineno .typing}


### Multiplicación __*__

El operador de multiplicación (`*`) se utiliza para multiplicar dos números.

```python
a = 5
b = 4
resultado = a * b  # resultado es 20
```
{: .nolineno .typing}

### División __/__

El operador de división (`/`) se utiliza para dividir un número entre otro. En Python 3, la división siempre devuelve un número de punto flotante (float).

```python
a = 10
b = 2
resultado = a / b  # resultado es 5.0
```
{: .nolineno .typing}

### División Entera __//__

El operador de división entera (`//`) se utiliza para dividir un número entre otro y devolver el cociente entero, descartando cualquier parte decimal.

```python
a = 10
b = 3
resultado = a // b  # resultado es 3
```
{: .nolineno .typing}

### Módulo __%__

El operador de módulo (`%`) se utiliza para obtener el residuo de una división entre dos números.

```python
a = 10
b = 3
resultado = a % b  # resultado es 1
```
{: .nolineno .typing}

### Potencia __\*\*__

El operador de potencia (`**`) se utiliza para elevar un número a una potencia.

```python
a = 2
b = 3
resultado = a ** b  # resultado es 8
```
{: .nolineno .typing}
