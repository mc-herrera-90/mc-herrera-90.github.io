---
title: Tkinter - Widget Entry
icon: icon/python.svg
categories: [Python, Tkinter]
---

El widget Entry en Tkinter se utiliza para permitir que el usuario ingrese texto en una aplicación gráfica. Es uno de los componentes más comunes en interfaces donde se necesita capturar información escrita, como nombres, contraseñas, etc.

En **tcl/tk** el widget Entry esta representado a través de la clase `ttk.Entry`, que a su vez hereda la funcionalidad de un control más primitivo como `tk.Entry`.

## Crear un widget Entry

Para añadir una caja de texto en nuestra ventana principal, basta con crear una instancia de la clase `Entry`, encargada de gestionar la entrada de texto del usuario:

```py
import tkinter as tk
from tkinter import ttk

root = tk.Tk()
root.config(width=300, height=400)
entry = ttk.Entry(root)
entry.place(x=50, y=50) # posicionamos la ventana
root.mainloop()
```

Al ejecutar el script, puedes ver en acción el comportamiento del widget:

![Clase Entry](python/tkinter-entry-macos-light.webp){:.light}
![Clase Entry](python/tkinter-entry-macos-dark.webp){:.dark}

## Personalizar el widget

### Justificar el contenido del Widget

La alineación del texto dentro del widget puede controlarse mediante el parámetro `justify`, los valores posibles son `tk.LEFT` (izquierda, valor predeterminado), `tk.CENTER` (centrado) y `tk.RIGHT` (derecha). Ejemplo:

```py
entry = ttk.Entry(root, justify=tk.RIGHT)
```
{: .nolineno }

![Justify Entry](python/tkinter-entry-justify-macos-light.webp){:.light}
![Justify Entry](python/tkinter-entry-justify-macos-dark.webp){:.dark}

### Cantidad de caracteres a mostrar

A través del parámetro **width** indicamos el ancho del control, pero no en **pixeles**, sino en caracteres. Por ejemplo, el siguiente código establece un ancho suficiente para visualizar una línea de 10 caracteres:

```py
entry = ttk.Entry(root, width=10)
```
{: .nolineno }

### Cambiar color de fondo y fuente

> El widget `ttk.Entry` pertenece al conjunto de widgets temáticos de Tkinter (ttk), lo que significa que su apariencia depende del tema activo del sistema. Por este motivo, parámetros como `bg`, `fg` o `background` no tienen efecto directo sobre él.
{: .prompt-info }

La personalización se realiza mediante un estilo `ttk.Style`, que define los colores y otros atributos del control:

```python
# Crear un estilo personalizado
style = ttk.Style()
style.theme_use("alt")  # 👈 Tema que sí permite personalización

style.configure(
  "Custom.TEntry",
  fieldbackground="green",  # Color de fondo del campo
  foreground="yellow",              # Color del texto
  padding=5
)

# Aplicar el estilo al Entry
entry = ttk.Entry(root, style="Custom.TEntry")
entry.pack(padx=10, pady=10)
```
{:.nolineno }

![Estilos entry](python/tkinter-entry-style-macos-dark.webp){:.dark}
![Estilos entry](python/tkinter-entry-style-macos-light.webp){:.light}

### Deshabilitar el widget

La caja de texto puede iniciarse como deshabilitada (el usuario no podrá escribir en ella y aparecerá sombreada) usando el parámetro `state`:

```py
entry = ttk.Entry(root, state=tk.DISABLED)
```
{: .nolineno }

Podemos habilitarlo nuevamente, restableciendo este parámetro con el método **`config`**:

```py
entry.config(state=tk.NORMAL)
```
{: .nolineno }

Un estado intermedio es **`readonly`** (solo lectura), en el que el usuario visualiza el control normalmente pero no puede escribir en él: 

```python
entry = ttk.Entry(root, state="readonly")
```
{: .nolineno }

### Ocultar caracteres

Podemos hacer que la caja de texto muestre un glifo en particular cuando queremos ocultar texto a simple vista. Por ejemplo, si el control es empleado para escribir una contraseña:

```python
entry = ttk.Entry(root, show="*")
```
{: .nolineno }

![Ocultar caracteres](python/tkinter-entry-show-macos-light.webp){:.light}
![Ocultar caracteres](python/tkinter-entry-show-macos-dark.webp){:.dark}

## Operaciones comunes

### Obtener el contenido del widget

Para obtener el texto que el usuario ha ingresado en la caja, utilizamos el método `get()`:  

```python
entry.get()
```
{: .nolineno }

Por ejemplo, el siguiente código imprime en la consola el texto ingresado en las cajas de texto al presionar el botón:

```python
l1 = tk.Label(root, text="Su nombre de usuario:")
l1.place(x=50, y=25)
e1 = ttk.Entry(root)
e1.place(x=50, y=50),
l2 = tk.Label(root, text="Su contraseña:")
l2.place(x=50, y=75)
e2 = ttk.Entry(root, show="*")
e2.place(x=50, y=100)

def login():
    print(e1.get())
    print(e2.get())

b1 = ttk.Button(root, text="Iniciar sesión", command=login)
b1.place(x=85, y=135)
```
{: .nolineno }

Al ejecutar el script, completamos ambos campos y al presionar el botón se imprimen sus valores en la consola:

![Get entry](python/tkinter-entry-get-macos-dark.webp){:.dark}
![Get entry](python/tkinter-entry-get-macos-light.webp){:.light}


### Insertar contenido en el Widget

Para añadir un texto empleamos **`insert()`** que toma como primer argumento la posición y como segundo la cadena de texto:

```python
entry.insert(0, "Hola mundo!")
```
{: .nolineno }

Este código es similar a si hicieramos lo siguiente:  

```python
entry.insert(0, "¡Hola,")
entry.insert(6, " mundo!")
```
{: .nolineno }

Todas las operaciones en **Tk** que requieren una posición aceptan la constante `tk.END`, que representa el final del texto. En nuestro caso, `tk.END` es equivalente a `len(entry.get())`. Por esto, el siguiente código también consigue el mismo resultado que el ejemplo anterior:  

```python
entry.insert(0, "¡Hola,")
entry.insert(tk.END, " mundo!")
```
{: .nolineno }

### Eliminar contenido en el Widget

La eliminación de un texto o una parte de él se consigue a través del método **`delete()`**, pasándole como argumentos los índices de inicio y fin.

```python
# Elimina el texto completo.
entry.delete(0, tk.END)
```
{: .nolineno }

### Comportamiento de placeholders

En muchas interfaces es común que los campos de texto muestren un **texto de ejemplo o guía** (placeholder) que se borra automáticamente cuando el usuario hace clic para escribir.

Podemos implementar este comportamiento de forma sencilla usando los métodos `delete()` e `insert()` junto con el evento `<Button-1>`(clic izquierdo del mouse) asociado a un `bind`.

> Los eventos (`bind`) permiten ejecutar funciones según la acción del usuario.
{: .prompt-info .fit-content }

En el siguiente ejemplo, se define una función llamada `limpiar()` que elimina el texto del campo cuando el usuario hace clic sobre él y otra función `restaurar()` para cuando sale del foco sin editar el texto.

```python
import tkinter as tk
from tkinter import ttk

def limpiar(event):
  if event.widget.get() in ["Ej: mcherrera@user", "******"]:
    event.widget.delete(0, tk.END)

def restaurar(event):
  if not event.widget.get():
    if event.widget == e_usuario:
      event.widget.insert(0, "Ej: mcherrera@user")
    else:
      event.widget.insert(0, "******")

root = tk.Tk()

# Usuario
tk.Label(root, text="Usuario").pack()
e_usuario = ttk.Entry(root)
e_usuario.insert(0, "Ej: mcherrera@user")
e_usuario.bind("<Button-1>", limpiar)  # Limpia al hacer clic
e_usuario.bind("<FocusOut>", restaurar) # Restaurar el placeholder
e_usuario.pack(padx=10, pady=5)

# Contraseña
tk.Label(root, text="Contraseña").pack()
e_password = ttk.Entry(root, show="*")
e_password.insert(0, "******")
e_password.bind("<Button-1>", limpiar)
e_password.bind("<FocusOut>", restaurar)
e_password.pack(padx=10, pady=5)

root.mainloop()
```
{: .nolineno }


Al ejecutar el script, puedes probar cómo al **hacer clic** sobre cada campo el texto de ejemplo se borra, y al **salir del foco** sin escribir nada, vuelve a mostrarse automáticamente:

![PLACEHOLDERS](python/tkinter-entry-placeholders-macos-dark.webp){:.dark}
![PLACEHOLDERS](python/tkinter-entry-placeholders-macos-light.webp){:.light}

> De esta forma, practicamos el uso de los métodos `delete()` e `insert()` junto con distintos eventos (`<Button-1>` y `<FocusOut>`), consiguiendo un comportamiento más natural y moderno.
{: .prompt-tip }

### Seleccionar contenido en el Widget

De forma análoga opera el método **`select_range()`**, que selecciona el texto desde una posición hasta otra. Por ejemplo, el siguiente código selecciona la palabra "mundo".

```python
entry.insert(0, "¡Hola, mundo!")
# Seleccionar desde el carácter 7 hasta el 12.
entry.select_range(7, 12)
# Enviar el foco a la caja de texto despues de la selección.
entry.focus()
```
{: .nolineno }

Para obtener la posición del cursor en la caja de texto, llamamos al método **`index()`** con la constante `tk.INSERT`.  

```python
print(entry.index(tk.INSERT))
```
{: .nolineno }

Y para establecer la posición:

```python
entry.insert(0, "¡Hola, mundo!")
# Ubica el cursor antes de la "m".
entry.icursor(7)
# Envía el foco.
entry.focus()
```
{: .nolineno }

**Tk** no provee una función específica para retornar el texto seleccionado, pero haciendo uso del método `index()` junto con las constantes `tk.SEL_FIRST` y `tk.SEL_LAST` que retornan los índices de inicio y fin de la selección, podemos construirla manualmente:  

```python
entry.insert(0, "¡Hola, mundo!")
def get_selection():
    # Comprobar primero que haya una selección.
    if entry.select_present():
        # Obtener los índices del inicio y fin de la selección
        first = entry.index(tk.SEL_FIRST)
        last = entry.index(tk.SEL_LAST)
        print(entry.get()[first:last])
    else:
        print("No hay selección.")
button = ttk.Button(text="Obtener selección", command=get_selection)
```
{: .nolineno }

{% include circle-line.html %}

El widget `ttk.Entry` es muy flexible y permite realizar diversas operaciones, desde capturar y validar texto hasta reaccionar a eventos. En este artículo vimos lo esencial: cómo manejar el foco, detectar cambios y controlar su comportamiento dinámicamente y sus operaciones básicas.
