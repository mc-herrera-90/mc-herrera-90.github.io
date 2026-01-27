---
title: "Python: Ambito de variables"
categories: [Python, "Python_04-Tipos y Variables"]
mermaid: true
badge: python
---

El ámbito o __scope__ de una variable se refiere a __la parte del programa donde esa variable es accesible__. En Python, hay dos tipos principales de alcance de variables; __local__ y __global__.

> - __Variables locales__: Son aquellas definidas dentro de una función. Su alcance está limitado a esa función y no son accesibles fuera de ella.
> - __Variables globales__: Son aquellas definidas fuera de cualquier función o en un ámbito global. Pueden ser accesibles desde cualquier parte del programa (tanto dentro como fuera de las funciones).
{:.prompt-info}

## Variables locales

Las variables __definidas dentro de una función tienen un alcance local__. Esto significa que solo son accesibles dentro de esa función. Si intentamos acceder a una variable local desde fuera de la función, Python generará un error.

```python
def mi_funcion():
  variable_local = "Soy local"
  print(variable_local) # Accede a la variable local

mi_funcion()
print(variable_local) # Esto causará un error, ya que variable_local no está definida fuera de la función
```
{: .typing }

> En este ejemplo, la línea 6 `print(variable_local)` genera el error:
> ```py
> Traceback (most recent call last):
>  File "main.py", line 6, in <module>
>    print(variable_local)
> NameError: name 'variable_local' is not defined
> ```
> {: .nolineno .noheader }
{: .prompt-info }

## Variables globales

Las variables definidas __fuera de cualquier función tienen un alcance global__. Esto significa que son accesibles desde cualquier parte del programa (incluyendo dentro de funciones).

```python
variable_global = "Soy global"

def mi_funcion():
  print(variable_global)  # Accede a la variable global

mi_funcion() # Resultado: Soy global
print(variable_global)  # FuncionaTambién es accesible fuera de la función
```
{: .typing }

## Palabra clave global

En algunos casos, es posible que necesitemos __modificar una variable global desde dentro de una función__. Para hacerlo, necesitamos utilizar la palabra clave `global`.

```python
variable_global = "Soy global"

def modificar_global():
  global variable_global
  variable_global = "Modificado dentro de la función"
  print(variable_global)

modificar_global()  # Resultado: Modificado dentro de la función
print(variable_global)  # Ahora la variable global ha sido modificada
```
{:.typing }

> Al utilizar `global variable_global` dentro de la función `modificar_global`, le estamos indicando a Python que queremos modificar la variable global `variable_global`.
{:.prompt-info}

## Alcance en funciones anidadas

Si definimos una función dentro de otra función, la función interna puede acceder a las variables locales de la función externa, __pero no puede modificarlas directamente__.

Sin embargo, si utilizamos la palabra clave `nonlocal`, podemos modificar variables de la función externa.

```python
def funcion_externa():
  variable_externa = "Soy de la función externa"

  def funcion_interna():
    nonlocal variable_externa
    variable_externa = "Modificado por la función interna"
    print("Desde función interna:", variable_externa)

  funcion_interna()
  print("Desde función externa:", variable_externa)

funcion_externa()
```
{:.typing}

> En este ejemplo, `funcion_interna` puede acceder y modificar la variable `variable_externa` de `funcion_externa` debido al uso de `nonlocal`.
{:.prompt-info}
