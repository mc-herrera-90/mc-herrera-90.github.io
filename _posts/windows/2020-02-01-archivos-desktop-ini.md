---
title: "Windows: Archivos Desktop.ini"
categories: [Windows, Windows-Sistema]
tags: [windows, sistema]
badge: windows
---

¿Sabías que puedes **cambiar el ícono de tus carpetas** y que esa personalización se mantenga incluso en **discos externos**? 🚀  


## ¿Qué es un archivo Desktop.ini?

Es un archivo de configuración (oculto por defecto) que Windows usa para recordar cómo debe verse una carpeta. Es como un "maquillaje" de tus carpetas. Este archivo te permite lo siguiente:

- Le dice al sistema qué __ícono__ usar.
- Puede cambiar el __nombre que se muestra__ (aunque el nombre de la carpeta no cambie).



> ### Organizar tu disco duro externo <i class="fa-regular fa-hard-drive"></i>
> ¿Tienes un disco duro externo con carpetas para música, backups, proyectos o videos? __Ponerles íconos distintos te permite identificarlas al instante__, sin leer nombres.
{: .prompt-tip }

## ¿Cómo hacer este archivo?

Para crear un archivo `Desktop.ini` a través de la interfaz gráfica es muy sencillo, siguiendo estos pasos:

1. Eliges una carpeta y sobre ella haces __clic derecho__ → __Propiedades__ → __Personalizar__.
2. Selecciona __"Cambiar ícono"__ y asigna uno.
3. Windows creará automáticamente el archivo `Desktop.ini` dentro de esa carpeta.
4. ¡Listo! Incluso si te llevás esa carpeta en un pendrive o disco externo, **la personalización viaja contigo** (si se mantienen los íconos).

Si no puedes ver este archivo, debes ir a panel de control y cambiar la vista a __íconos pequeños__ y __selecciona opciones del explorador de archivos__:

![panel de control](windows/pdc-opciones-del-explorador-de-archivos.webp)

Y luego desmarca la casilla __"ocultar archivos protegidos del sistema"__:

![desmarcar opción](windows/ocultar-archivos-protegidos-del-sistema.webp)

### ¿Cómo hacer este archivo con CMD?

Para crear un archivo `desktop.ini` como archivo de sistema en Windows usando la consola (CMD), puedes seguir estos pasos:

**1. Crear el archivo `desktop.ini`**
: Abre la consola (CMD) y navega a la carpeta donde quieres crear el archivo. Luego, crea el archivo:

```terminal
echo [.ShellClassInfo] > desktop.ini
```

> Puedes usar `type nul > desktop.ini` si quieres crear un archivo vacío.
{: .prompt-info }


**2. Marcarlo como archivo oculto y de sistema**
: Esto es lo que hace que Windows lo trate como un archivo de configuración de carpeta:

```terminal
attrib +s +h desktop.ini
```

- `+s` lo marca como **archivo de sistema**.
- `+h` lo marca como **oculto**.


**3. Definir la ruta del ícono**
: Esto hace que Windows cambie el ícono por defecto de una carpeta por uno personalizado:

```terminal
echo IconResource="\assets\ico\linux.ico" >> desktop.ini
```

**4. Mostrar el ícono**
: Para que los cambios surtan efectos, se debe marcar la carpeta como __"de solo lectura"__

```terminal
attrib +r .
```

__Ejemplo completo__

```terminal
cd "C:\Usuarios\TuUsuario\Escritorio\Test"
echo [.ShellClassInfo] > desktop.ini
attrib +s +h desktop.ini
echo IconResource="\assets\ico\linux.ico" >> desktop.ini
attrib +r .
```

### Tips para que funcione bien en discos externos

- Asegurate de que el ícono esté **dentro de la misma carpeta** o en una ruta accesible desde el mismo dispositivo.
- Podés copiar un archivo `.ico` personalizado y enlazarlo desde `Desktop.ini`.

Ejemplo de contenido de un `Desktop.ini`:

```ini
[.ShellClassInfo]
IconResource=icono.ico,0
```

{% include circle-line.html %}

En resumen, `Desktop.ini` no es basura ni algo que borrar. Es un pequeño genio oculto que te permite tener un **sistema visual personalizado y más organizado**, ideal para creativos, organizados, y amantes del aspecto visual.