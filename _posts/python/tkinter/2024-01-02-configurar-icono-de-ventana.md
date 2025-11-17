---
title: Tkinter - Configurar ícono en de ventana
icon: icon/python.svg
categories: [Python, Tkinter]
---

En Tkinter podemos usar los siguiente métodos para configurar íconos para las ventanas:

- `iconbitmap()`
- `iconphoto()`

### Iconbitmap

En Windows podemos recurrir al método `iconbitmap()` para establecer el ícono de la ventana a partir de un archivo con extensión `.ico`. Este formato de Microsoft es más practico porque permite tener múltiples imágenes de diversos tamaños (16x16, 32x32, 64x64, etc.) incluidos en un solo archivo `.ico`.

> algunos programas como [Greenfish Icon Editor](https://greenfishsoftware.org/gfie.php) (Gratuito) permiten editar los archivos `.ico`
{: .prompt-info }

Así, por ejemplo, el siguiente código establece el archivo `icon.ico` como ícono de la ventana:

```python
import tkinter as tk

root = tk.Tk()
root.iconbitmap('icon.ico')

root.mainloop()
```

![Iconbitmap Tkinter](python/tkinter-iconbitmap.webp){:.light}
![Iconbitmap Tkinter](python/tkinter-iconbitmap-dark.webp){:.dark}

### Iconphoto

Si tenemos el ícono de nuestra aplicación, la forma más sencilla de configurarlo en la ventana es con `iconphoto()`:

```py
import tkinter as tk

root = tk.Tk()
icono = tk.PhotoImage(file="icon-16.png")
root.iconphoto(True, icono)

root.mainloop()
```

>  El primer argumento de `iconphoto` es un booleano que indica si ese mismo ícono debe aplicarse a ventanas secundarias.
{: .prompt-info }