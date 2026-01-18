---
title: "Python: Reglas para nombrar variables"
categories: [Python, "Python-Tipos y Variables"]
badge: python
---

En Python, existen diferentes estilos para nombrar y otros identificadores. Cada uno tiene su uso recomendado. A continuación te dejo algunos ejemplo de cada estilo.

## 1. snake\_case (recomendado en Python 🏆)

- Se escribe en minúsculas, separando las palabras con guion bajo.
- Es estándar en Python para variables y funciones.

__Ejemplo__:

```python
nombre_completo = "Marco Contreras"
contador_de_visitas = 103
```
{: .typing }

## 2. camelCase

- La primera palabra va en minúscula y las siguientes comienzan con mayúscula.
- Es una [convención más JavaScript](https://www.w3schools.com/JS/js_conventions.asp){:target='_blank'} y otros lenguajes, pero no es común en Python.

__Ejemplo__:

```python
nombreCompleto = "Marco Contreras"
contadorDeVisitas = 103
```
{: .typing }

## 3. PascalCase

- Todas las palabras inician con mayúscula.
- Se usa en nombres de clases en Python.

```python
class RegistroUsuario():
  pass
```
{: .typing }

## 4. UPPER\_CASE

- Todas las letras en mayúsculas.
- Se usa para definir **constantes** en Python (aunque Python no tiene constantes reales, es una convención).

```python
PI = 3.1416
TASA_DE_CAMBIO = 18.50
```
{: .typing }

## Reglas de nombres

Aunque no es obligatorio, en Python, se recomienda seguir algunas reglas y convenciones para nombrar variables:

### 1. Empezar con una letra o un guion bajo

Los nombres de las variables deben comenzar con una letra (a-z, A-Z) o un guion bajo (`_`). No pueden comenzar con un número. Ej:

```python
_variable = "valor"
variable1 = "valor"
```
{: .typing }

### 2. Usar solo caracteres alfanuméricos y guiones bajos

Después del primer carácter, puedes usar letras, números y guiones bajos.

```python
mi_variable = "valor"
variable_2 = "valor"
```
{: .typing }

### 3. No uses palabras reservadas

Evita usar palabras que son reservadas por Python (como `if`, `for`, `while`, etc.) como nombres de variables.

{% capture code_var_name %}
<span class="hl">&gt;&gt;&gt; for = "valor"</span>
  File "&lt;python-input-5&gt;", line 1
    for = "valor"
        ^
<span class="hl">SyntaxError: invalid syntax</span>
{% endcapture %}
{% include terminal-wrapper.html content=code_var_name %}

### 4. Usa nombres descriptivos

Es una buena práctica usar nombres de variables que sean descriptivos para hacer que tu código sea más legible.

```python
usuario = 'john_doe'
autenticado = False
creditos = 99.0
```
{: .typing }
