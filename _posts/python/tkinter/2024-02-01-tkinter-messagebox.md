---
title: Módulo Messagebox
icon: icon/python.svg
categories: [Python, Tkinter]
image:
  path: poster/python-tk-messagebox.webp
  lqip: data:image/webp;base64,UklGRnIAAABXRUJQVlA4WAoAAAAQAAAAEwAACgAAQUxQSBcAAAABF9D/iAgYZBtpB9n353mCiP4HOFjVHwBWUDggNAAAAHADAJ0BKhQACwA/OYa5U68pJaKwCAHgJwlpAABcTsUdKoWYAAD+1Li304qBdRQXDtgAAAA=
---

[**Tkinter**](https://docs.python.org/es/3.13/library/tkinter.html), cuenta con una variedad de herramientas para **crear cuadros de mensajes**. Estos cuadros de mensajes son ideales para notificaciones, alertas y confirmaciones de usuarios en diversas aplicaciones.

En este post cubriremos los siguiente:

- Cómo mostrar mensajes de información con `showinfo`.
- Cómo crear advertencias con `showwarning`
- Cómo manejar errores con `showerror`
- Cómo hacer preguntas interactivas con `askquestion`

## ¿Qué es el módulo messagebox?

El módulo `messagebox` de Tkinter es una herramienta que te permite mostrar cuadros de diálogo emergentes de manera sencilla.

Estos cuadros pueden incluir mensajes de texto, botones y, según el tipo de mensaje (como información, advertencia o error), incluso pueden incluir íconos que ayudan a comunicar el propósito del mensaje de forma visual.

![messagebox](extras/messagebox-xl.webp)

## ¿Cómo usar messagebox en Tkinter?

Antes de comenzar a usar `messagebox`, necesitas importarlo desde Tkinter. Aquí tienes cómo hacerlo:

```python
from tkinter import Tk, messagebox
```
{: .nolineno }

### Crear una aplicación básica

Para mostrar un `messagebox`, primero debes crear una ventana principal de Tkinter. Aquí tienes un ejemplo básico para implementar un cuadro de diálogo:

```python
import tkinter as tk
from tkinter import messagebox

# Crear la ventana principal
root = tk.Tk()
root.title("Ejemplo de Messagebox")
root.geometry("300x200")

# Función para mostrar un mensaje de alerta
def mostrar_alerta():
  messagebox.showinfo(
    "Información",
    "Este es un mensaje de información."
  )

# Crear un botón que llamará a la función mostrar_alerta
boton = tk.Button(root, text="Mostrar Alerta", command=mostrar_alerta)
boton.pack(pady=20)

# Ejecutar el bucle principal de eventos
root.mainloop()
```
{: .nolineno }

**En este ejemplo**:
- Se crea una ventana principal con el título "Ejemplo de Messagebox" y un tamaño de 300x200 píxeles.
- Se define una función `mostrar_alerta` que utiliza `messagebox.showinfo` para mostrar un cuadro de mensaje de información.
- Se crea un botón que llama a esta función cuando se hace clic.


Si ejecutamos el script anterior, obtendríamos una ventana gráfica como la siguiente:

![demo messagebox](python/tkinter-messagebox-demo-macos-dark.webp){:.dark}
![demo messagebox](python/tkinter-messagebox-demo-macos-light.webp){:.light}

## Tipos de Mensajes con messagebox

El módulo `messagebox` ofrece varias funciones para mostrar diferentes tipos de cuadros de mensaje. A continuación, se presentan los más comunes:

### Mensajes de información

```python
messagebox.showinfo("Título del Mensaje", "Este es un mensaje de información.")
```
{: .nolineno }

- **Propósito**: Mostrar información general.
- **Botones**: OK

![messagebox info](extras/messagebox-info.png)

### Mensajes de advertencia

```python
messagebox.showwarning("Título de Advertencia", "Este es un mensaje de advertencia.")
```
{: .nolineno }

- **Propósito**: Advertir al usuario sobre una acción o situación que podría ser problemática.
- **Botones**: OK

![messagebox warning](extras/messagebox-warning.png)

### Mensajes de error

```python
messagebox.showerror("Título de Error", "Este es un mensaje de error.")
```
{: .nolineno }

- **Propósito**: Informar al usuario sobre un error o problema.
- **Botones**: OK

![messagebox error](extras/messagebox-error.png)

### Mensaje de confirmación

```python
respuesta = messagebox.askyesno(
  "Confirmación",
  "¿Estás seguro de que deseas continuar?"
)

if respuesta:
  print("El usuario seleccionó Sí.")
else:
  print("El usuario seleccionó No.")
```
{: .nolineno }

- **Propósito**: Solicitar una respuesta del usuario para confirmar una acción.
- **Botones**: Sí, No
- **Valor de Retorno**: `True` o `False`, según la elección del usuario.

### Mensajes de pregunta

```python
respuesta = messagebox.askquestion(
  "Pregunta",
  "¿Deseas guardar los cambios?"
)

if respuesta == 'yes':
    print("El usuario seleccionó Sí.")
else:
    print("El usuario seleccionó No.")
```
{: .nolineno }

- **Propósito**: Hacer una pregunta al usuario y obtener una respuesta.
- **Botones**: Sí, No
- **Valor de Retorno**: `'yes'` o `'no'`

![messagebox askyesno](extras/messagebox-askyesno.webp)

### Uso de iconos en messagebox

Los cuadros de mensaje también pueden incluir iconos para proporcionar contexto visual:

- **Icono de Información**: `messagebox.showinfo()`
- **Icono de Advertencia**: `messagebox.showwarning()`
- **Icono de Error**: `messagebox.showerror()`
- **Icono de Pregunta**: `messagebox.askquestion()`, `messagebox.askyesno()`

Cada uno de estos métodos incluye un icono específico que ayuda a transmitir el tipo de mensaje que se está mostrando.

{% include circle-line.html %}

El módulo `messagebox` de Tkinter es una herramienta que nos permite mejorar la interacción con los usuarios. Ya sea que necesitemos mostrar mensajes de información, advertencias, errores, o solicitar confirmaciones, `messagebox` proporciona una forma fácil y efectiva de hacerlo.