---
title: "Python: El tipo Booleano en Python"
categories: [Python, "Python_05-Tipos básicos"]
badge: python
---

En Python, el tipo `bool` se utiliza para representar valores lógicos: **verdadero** o **falso**.
Los valores booleanos son instancias de las constantes predefinidas **`True`** y **`False`**.

## Cómo declarar valores booleanos

```python
valor_verdadero = True
valor_falso = False
```
{:.nolineno .typing}

Estos valores son esenciales para la lógica booleana en programación y se usan en condiciones y expresiones lógicas.

## Operaciones lógicas con booleanos

Python soporta operaciones lógicas básicas:

| Operador | Descripción                                   |
| -------- | --------------------------------------------- |
| `and`    | Devuelve `True` si ambos operandos son `True` |
| `or`     | Devuelve `True` si al menos uno es `True`     |
| `not`    | Invierte el valor lógico                      |

### Operador __and__

```python
resultado_and = True and False
print(resultado_and)  # Salida: False
```
{:.nolineno .typing}

### Operador __or__

```python
resultado_or = True or False
print(resultado_or)  # Salida: True
```
{:.nolineno .typing}


### Operador __not__

```python
resultado_not = not True
print(resultado_not)  # Salida: False
```
{:.nolineno .typing}

## Comparaciones y condiciones

Las expresiones de comparación devuelven valores booleanos:

```python
resultado = 10 > 5
print(resultado)  # Salida: True
```
{:.nolineno .typing}

Los booleanos se usan para controlar el flujo del programa:

```python
numero = 10
es_mayor_que_cinco = numero > 5

if es_mayor_que_cinco:
  print("El número es mayor que cinco")
else:
  print("El número no es mayor que cinco")
```
{:.nolineno .typing}

## Evaluación cortocircuitada ( __short-circuit__ )

Python optimiza las operaciones lógicas evaluando solo lo necesario:

* En `and`, si el primer operando es `False`, el segundo **no se evalúa**.
* En `or`, si el primer operando es `True`, el segundo **no se evalúa**.

```python
# Evaluación cortocircuitada con `and`
resultado = False and funcion_que_no_se_evalua()

# Evaluación cortocircuitada con `or`
resultado = True or funcion_que_no_se_evalua()
```
{:.nolineno .typing}

## Conversión a booleano __bool()__

Se puede convertir otros tipos a booleano usando `bool()`:

```python
# Conversión de números
numero = 42
valor_booleano = bool(numero)
print(valor_booleano)  # Salida: True

# Conversión de cadenas vacías
cadena_vacia = ""
valor_booleano = bool(cadena_vacia)
print(valor_booleano)  # Salida: False
```
{:.nolineno .typing}


## Reglas de conversión a bool

| Tipo                           | Valor considerado `False` | Ejemplo                |
| ------------------------------ | ------------------------- | ---------------------- |
| `int` / `float`                | `0`                       | `bool(0)` → `False`    |
| `str`                          | Cadena vacía `""`         | `bool("")` → `False`   |
| `list`, `tuple`, `set`, `dict` | Colección vacía           | `bool([])` → `False`   |
| `None`                         | Siempre `False`           | `bool(None)` → `False` |


{% include circle-line.html %}

## Consideraciones

* `bool` representa `True` o `False`.
* Se usa en condiciones y comparaciones.
* Operadores lógicos: `and`, `or`, `not`.
* Python hace **evaluación cortocircuitada**.
* `bool()` convierte otros tipos a booleanos.
