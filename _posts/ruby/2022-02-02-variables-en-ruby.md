---
title: "Ruby: Variables uso y alcance"
categories: [Ruby, Ruby-Variables]
badge: ruby
---

Las variables son uno de los conceptos fundamentales en Ruby y en la programación en general. Permiten **almacenar valores**, **referenciarlos por nombre** y **reutilizarlos** a lo largo de un programa.
Antes de ver estructuras más complejas, es importante entender **cómo Ruby maneja las variables y hasta dónde llegan**.

## ¿Qué es una variable en Ruby?

Una variable es un nombre que apunta a un objeto en memoria.
Ruby no obliga a declarar el tipo de una variable, ya que utiliza **tipado dinámico**.

```ruby
mensaje = "Hola Ruby"
contador = 10
activo = true
```
{:.typing}

El tipo del valor lo define el objeto asignado, no la variable.

---

## Asignación de variables

En Ruby, la asignación se realiza con el operador `=`:

```ruby
nombre = "Marco"
```
{:.typing}


Esto significa que la variable `nombre` **referencia** al objeto `"Marco"`.
Si el valor cambia, la variable simplemente apunta a otro objeto.

---

## Convención de nombres

Ruby utiliza convenciones claras para diferenciar tipos de variables:

| Tipo                  | Prefijo    |
| --------------------- | ---------- |
| Variable local        | `nombre`   |
| Variable de instancia | `@nombre`  |
| Variable de clase     | `@@nombre` |
| Variable global       | `$nombre`  |
| Constante             | `NOMBRE`   |

Estas convenciones son clave para entender el **alcance**.

---

## Variables locales

Son las más comunes y solo existen **dentro del contexto donde se definen**.

```ruby
def saludar
  mensaje = "Hola"
  puts mensaje
end
```
{:.typing}


Fuera del método, `mensaje` **no existe**.

---

## Variables de instancia

Se identifican por `@` y pertenecen a una **instancia de una clase**.

```ruby
class Usuario
  def initialize(nombre)
    @nombre = nombre
  end
end
```
{:.typing}

Estas variables pueden ser usadas por distintos métodos dentro del mismo objeto.

---

## Variables de clase

Se identifican con `@@` y son compartidas por **todas las instancias de una clase**.

```ruby
class Contador
  @@total = 0
end
```
{:.typing}

Su uso es limitado y, en muchos casos, se prefieren otras alternativas.

---

## Variables globales

Las variables globales comienzan con `$` y están disponibles **en todo el programa**.

```ruby
$modo_debug = true
```
{:.typing}

> Se recomienda evitarlas, ya que hacen el código más difícil de mantener y depurar.
{:.prompt-warning}

---

## Constantes

Las constantes se escriben en **mayúsculas** y se utilizan para valores que no deberían cambiar.

```ruby
PI = 3.1416
```
{:.typing}

Ruby permite modificar constantes, pero mostrará una advertencia. Por convención, **no se deben cambiar**.

---

## Alcance (scope) de las variables

El alcance define **desde dónde se puede acceder a una variable**.

En Ruby, el alcance depende de:

* métodos
* clases
* módulos
* bloques

Ejemplo de bloque:

```ruby
3.times do
  numero = 10
end

# numero no existe aquí
```
{:.typing}

Aunque el bloque se ejecuta, la variable no es accesible fuera de él.

{% include circle-line.html %}

En resumen:

* Ruby usa tipado dinámico
* Las variables apuntan a objetos
* El prefijo define el alcance
* El scope evita efectos secundarios
* Seguir las convenciones hace el código más claro