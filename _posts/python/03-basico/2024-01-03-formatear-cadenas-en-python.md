---
title: Python - Formatear cadenas
categories: [Python, "Python_03-Básico"]
badge: python
---


En Python, formatear cadenas significa **insertar valores dentro de un texto** de forma clara y ordenada. Es algo esencial para imprimir mensajes, mostrar datos y crear salidas más legibles.

> La forma **más moderna y clara** es usar **f-strings**, pero es útil conocer las otras opciones para entender código existente.
{: .prompt-tip }

A continuación te muestro las **formas principales** de formatear cadenas, desde la más moderna a la más clásica.

> Puedes ir probando código en la plataforma de [https://onecompiler.com/python](https://onecompiler.com/python){:target="_blank"}
{: .prompt-tip .fit-content }

## 1. f-strings (la forma más usada y recomendada)

Disponibles desde Python 3.6.

```python
nombre = "Marco"
edad = 25

print(f"Hola, me llamo {nombre} y tengo {edad} años.")
```
{: .nolineno }

Ventajas:

* Legibles
* Rápidas
* Permiten expresiones dentro

```python
print(f"El doble de 10 es {10 * 2}")
```
{: .nolineno }

## 2. str.format() (la forma clásica moderna)

```python
nombre = "Marco"
edad = 25

print("Hola, me llamo {} y tengo {} años.".format(nombre, edad))
```
{: .nolineno }

Con nombres:

```python
print("Hola, me llamo {n} y tengo {e} años.".format(n=nombre, e=edad))
```
{: .nolineno }

## 3. Concatenación con + (no recomendada, pero útil conocerla)

```python
nombre = "Marco"
edad = 25

print("Hola, me llamo " + nombre + " y tengo " + str(edad) + " años.")
```
{: .nolineno }

Problema:
- Nada práctica si hay muchos valores.
- Debes convertir números a texto.
{:style="list-style-type: '⛔';"}

## 4. Cadenas con % (estilo antiguo)

```python
nombre = "Marco"
edad = 25

print("Hola, me llamo %s y tengo %d años." % (nombre, edad))
```
{:.nolineno}

* `%s` → string
* `%d` → entero
* `%f` → decimal

Hoy se usa muy poco, pero aparece en código viejo.


## Comparación rápida

| Método        | Fácil | Moderno | Recomendado     |
| ------------- | ----- | ------- | --------------- |
| f-strings     | ⭐⭐⭐⭐⭐ | Sí      | ✔️ Mejor opción |
| format()      | ⭐⭐⭐⭐  | Sí      | Aún válido      |
| Concatenación | ⭐⭐    | Sí      | ❌ Evitar        |
| `%`           | ⭐⭐    | No      | ❌ Muy antiguo   |


## Ejemplos útiles

### Formatear números

```python
pi = 3.141592

print(f"Pi redondeado: {pi:.2f}")   # 3.14
```
{: .nolineno }

### Alinear texto

```python
print(f"{'Python':>10}")  # alineado a la derecha
print(f"{'Python':<10}")  # alineado a la izquierda
```
{:.nolineno}

### Usar expresiones dentro

```python
precio = 1990
iva = 0.19

print(f"Precio final: {precio * (1 + iva)}")
```
{: .nolineno }
