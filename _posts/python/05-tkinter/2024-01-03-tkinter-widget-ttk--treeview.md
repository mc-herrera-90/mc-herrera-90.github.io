---
title: Tkinter - Widget ttk.Treeview
icon: icon/python.svg
categories: [Python, "Python_05-Tkinter"]
---


El widget `ttk.Treeview` de Tkinter permite presentar información en forma tabular o jerárquica, similar a un explorador de archivos o a una tabla con filas y columnas. Su estructura permite crear vistas organizadas y navegar datos complejos dentro de una interfaz gráfica desarrollada en Python.

## Introducción a ttk.Treeview

El widget se comporta como un contenedor que puede almacenar elementos llamados ítems. Cada uno puede contener datos asociados a columnas, así como hijos y subhijos, lo que lo hace útil para representar árboles jerárquicos. Cuando se configura en modo de tabla, puede funcionar como un reemplazo de widgets como `Listbox`, pero con un formato más avanzado.

Para usarlo es necesario importar los módulos base:

```python
import tkinter as tk
from tkinter import ttk
```
{: .nolineno file="main.py"}

## Creación básica de un Treeview

El uso mínimo consiste en crear una instancia, agregarla a un contenedor y poblarla con ítems.

```python
root = tk.Tk()
tree = ttk.Treeview(root)
tree.pack(fill="both", expand=True)
root.mainloop()
```
{: .nolineno file="main.py" }

En este estado, el widget no muestra columnas visibles ni encabezados. Para trabajar con datos estructurados, es necesario configurar columnas y títulos.

## Creación de columnas y encabezados

El Treeview utiliza una columna especial llamada columna raíz o columna principal. Esta se identifica mediante el carácter `#0` y existe siempre, incluso cuando se declaran columnas adicionales.

El siguiente ejemplo muestra una configuración típica para columnas:

```python
tree = ttk.Treeview(root, columns=("nombre", "edad", "ciudad"), show="headings")
tree.heading("nombre", text="Nombre")
tree.heading("edad", text="Edad")
tree.heading("ciudad", text="Ciudad")

tree.column("nombre", width=150)
tree.column("edad", width=70, anchor="center")
tree.column("ciudad", width=120)
```
{: .nolineno file="main.py" }


El argumento `show="headings"` oculta la columna raíz `#0` y muestra únicamente los encabezados definidos. Si se requiere una estructura jerárquica, se omite ese parámetro para mostrar `#0`.

## Inserción de ítems

Los ítems se insertan mediante el método `insert`. Este permite especificar el elemento padre, la posición y los valores de sus columnas.

```python
tree.insert("", "end", values=("María", 28, "Santiago"))
tree.insert("", "end", values=("Pedro", 31, "Valparaíso"))
```
{: .nolineno file="main.py" }


El argumento `""` significa que el ítem se inserta en el nivel raíz, mientras que `"end"` indica que se agrega al final de la lista.

## Inserción de datos jerárquicos

Para representar un árbol, se utiliza la columna `#0` y se asignan hijos a un ítem identificado por su **id interno**, que retorna el método `insert`.

```python
tree = ttk.Treeview(root)
tree.pack(fill="both", expand=True)

padre = tree.insert("", "end", text="Carpeta principal")
tree.insert(padre, "end", text="Documento1.txt")
tree.insert(padre, "end", text="Documento2.txt")
```
{: .nolineno file="main.py" }


Esto crea un árbol con una carpeta y dos archivos como hijos.

## Obtención de valores y selección de ítems

El Treeview permite recuperar la selección actual usando:

```python
seleccion = tree.selection()
```
{: .nolineno file="main.py" }


Una vez obtenido el identificador, se puede recuperar información con:

```python
item = tree.item(seleccion)
print(item["values"])
```
{: .nolineno file="main.py" }


En jerarquías, `item["text"]` corresponde al contenido de la columna `#0`.

## Actualización de datos

Los valores de un ítem se pueden actualizar modificando sus campos:

```python
tree.item(seleccion, values=("Nuevo nombre", 20, "Nuevo lugar"))
```
{: .nolineno file="main.py" }


También se pueden cambiar el texto principal o estilos.

## Eliminación de ítems

Para eliminar un elemento específico:

```python
tree.delete(seleccion)
```

Para borrar todos los elementos:

```python
for elemento in tree.get_children():
    tree.delete(elemento)
```
{: .nolineno file="main.py" }


## Scrollbars

El Treeview no añade barras de desplazamiento automáticamente. Es necesario vincularlas manualmente.

```python
scroll_y = ttk.Scrollbar(root, orient="vertical", command=tree.yview)
scroll_y.pack(side="right", fill="y")

tree.configure(yscrollcommand=scroll_y.set)
```

La misma lógica aplica para barras horizontales.

## Ejemplo completo: tabla con selección y edición

El siguiente ejemplo integra configuración de columnas, inserción de datos, selección de ítems y actualización.

```python
import tkinter as tk
from tkinter import ttk

root = tk.Tk()
root.title("Ejemplo Completo Treeview")

tree = ttk.Treeview(root, columns=("nombre", "edad", "ciudad"), show="headings")
tree.heading("nombre", text="Nombre")
tree.heading("edad", text="Edad")
tree.heading("ciudad", text="Ciudad")

tree.column("nombre", width=150)
tree.column("edad", width=70, anchor="center")
tree.column("ciudad", width=120)

tree.pack(fill="both", expand=True)

datos = [
    ("Carla", 23, "Concepción"),
    ("Diego", 29, "La Serena"),
    ("Laura", 35, "Iquique")
]

for fila in datos:
    tree.insert("", "end", values=fila)

def mostrar_seleccion():
    seleccion = tree.selection()
    if seleccion:
        item = tree.item(seleccion)
        print("Seleccionado:", item["values"])

boton = ttk.Button(root, text="Mostrar selección", command=mostrar_seleccion)
boton.pack(pady=10)

root.mainloop()
```

Este ejemplo genera una tabla completa y funcional, imprime los valores seleccionados y ejemplifica el flujo básico de interacción con el widget.

## Uso de estilos y personalización

El módulo `ttk.Style` permite modificar la apariencia del Treeview. Es posible cambiar colores alternos en filas, tamaño de fuente y aspectos visuales generales.

```python
estilo = ttk.Style()
estilo.configure("Treeview", font=("Arial", 11))
estilo.configure("Treeview.Heading", font=("Arial", 12, "bold"))
estilo.map("Treeview", background=[("selected", "#d0d0d0")])
```

Algunos estilos requieren versiones específicas de Tk o sistemas operativos compatibles.

## Conclusión

El widget `ttk.Treeview` constituye una herramienta avanzada para mostrar datos estructurados dentro de interfaces gráficas en Python. Su capacidad de manejar columnas, jerarquías y estilos lo convierte en un componente clave para aplicaciones que demandan vistas complejas. Con una comprensión adecuada de sus métodos y propiedades, es posible construir tablas, exploradores y visualizadores altamente funcionales y personalizables.

