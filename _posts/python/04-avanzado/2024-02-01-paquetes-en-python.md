---
title: Paquetes en Python
badge: python
categories: [Python, "Python_04-Avanzado"]
scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js
package:
  - name: my_project/my_package/__init__.py
    language: python
    content_file: |
      """
      Este es un archivo especial en paquetes Python que sirve como punto de entrada. Se ejecuta cuando se importa el paquete, y su código se puede utilizar para inicializar el paquete o configurar los componentes necesarios.
      """
      from .module1 import saludar, sumar, multiplicar
    wrap: pre-wrap
  - name: my_project/my_package/module1.py
    language: python
    content_file: |
      def saludar(nombre):
          """Devuelve un saludo personalizado."""
          return f"¡Hola, {nombre}! Bienvenido a Python."

      def sumar(a, b):
          """Suma dos números."""
          return a + b

      def multiplicar(a, b):
          """Multiplica dos números."""
          return a * b

  - name: my_project/my_package/module2.py
    language: python
  - name: my_project/main.py
    language: python
    content_file: |
      from my_package import saludar, sumar, multiplicar

      print(saludar("Carla"))
      print("Suma:", sumar(8, 4))
      print("Multiplicación:", multiplicar(3, 5))
---

## Paquetes de Python

Puedes pensar en un paquete de Python como un “proyecto” independiente. Un proyecto puede contener múltiples módulos, cada uno de los cuales contiene un conjunto específico de funciones y variables relacionadas.

> ### ¿Qué es un Paquete?
> Un paquete es una __colección de módulos__. Un paquete es básicamente un directorio que contiene un archivo especial llamado <code class="language-plaintext highlighter-rouge"><i class="fa-brands fa-python"></i> __init__.py</code>
> ### ¿Qué es un Módulo?
> Recordar que un módulo en Python es simplemente un archivo que contiene definiciones y declaraciones de Python, como funciones, clases y variables.
{: .prompt-tip }

Los módulos y paquetes son una parte fundamental de Python, ya que permiten organizar y estructurar proyectos grandes.

### Estructura de un paquete

La estructura de un paquete consiste en crear un directorio en el proyecto y que se vea de la siguiente manera:

{% include file-viewer.html files=page.package name="package" %}

El archivo `__init__.py` le dice a Python que este directorio es un paquete y debe ser tratado como tal. Este archivo se puede dejar vacío, o puede contener un código que se ejecutará cuando se importe el paquete.

Por ejemplo, si quieres facilitar los imports, puedes incluir lo siguiente:

```py
from .module1 import saludar, sumar, multiplicar
```
{: file="my_package/__init__.py" }

Si el paquete se llama `my_package` y contiene un archivo `module1.py`, puedes importar los módulos de la siguiente manera:

```python
import my_package.module1

print(my_package.module1.saludar("Carla"))
print("Suma:", my_package.module1.sumar(8, 4))
print("Multiplicación:", my_package.module1.multiplicar(3, 5))
```
{: file="main.py" }

Gracias a lo que pusimos en `__init__.py`, podemos hacer esto:

```python
from my_package import saludar, sumar, multiplicar

print(saludar("Carla"))
print("Suma:", sumar(8, 4))
print("Multiplicación:", multiplicar(3, 5))
```
{: file="main.py" }

## Gestión de dependencias

Las dependencias son otros paquetes en los que un paquete depende para funcionar correctamente. Realizar un seguimiento de las dependencias puede ser un desafío, pero hay herramientas que nos ayudan a administrarlas de manera efectiva.
