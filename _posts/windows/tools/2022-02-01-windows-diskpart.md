---
title: "Windows: Administración de disco con Diskpart"
categories: [Windows, Disk Management]
tags: [windows]
---

Cuando se trata de una gestión del almacenamiento en Windows, `diskpart` es una __herramienta poderosa__. A diferencia de las utilidades gráficas como el popular __Administrador de discos__, `diskpart` te da acceso total, incluso a operaciones que el entorno gráfico no permite.

## Comandos esenciales de Diskpart

Una vez ingresamos a la herramienta con el comando `diskpart` desde el CMD (con permisos de administrador). Podemos realizar las siguientes operaciones:

__1\. Listar Discos y Volúmenes__

```terminal
list disk   :: Muestra los discos físicos
list volume :: Muestra las particiones montadas
```

__2\. Seleccinar el disco__

```terminal
select disk 1   :: Selecciona el disco 1
```

__3\. Limpiar todo (elimina particiones)__

```terminal
clean    :: borrado de bajo nivel
```

> Esto elimina __todas las particiones y datos__ del disco seleccionado. ¡Úsalo con precaución y solo si estás completamente seguro!
{: .prompt-warning }

__4\. Salir de Diskpart__

```terminal
exit
```

En la práctica, se vería de la siguiente manera:

{% capture select_disk %}
<span class="hl">DISKPART&gt; list disk</span>

  Núm Disco  Estado           Tamaño     Disp     Din  GPT
  ----------  -------------   -------    -------  ---  ---
  Disco 0     En línea          465 GB   130 GB
  Disco 1     En línea         3840 MB      0 B

<span class="hl">DISKPART&gt; select disk 1</span>

El disco 1 es ahora el disco seleccionado.

<span class="hl">DISKPART&gt; clean</span>

DiskPart ha limpiado el disco satisfactoriamente.

<span class="hl">DISKPART&gt; exit</span>
{% endcapture %}
{% include terminal-wrapper.html content=select_disk title="CMD" %}

Aquí, `Núm Disco` te muestra los discos conectados, `Tamaño` es el __tamaño total__ de cada disco, y `Disp` indica el espacio disponible.

## __Crear Particiones con Diskpart__

El proceso de crear particiones con `diskpart` es relativamente sencillo, pero requiere seguir una serie de pasos para asegurarte de que todo esté configurado correctamente.

__1\. Seleccionar el disco en el cual crear las particiones__

```terminal
select disk 1
```


__2\. (Opcional) Limpiar el disco__

Si el disco tiene particiones previas, borra todas las particiones y comienza desde cero:

```terminal
clean
```

> Si quieres borrar de manera más profunda, usa `clean all`
{: .prompt-info }

__3\. Crear un a nueva partición primaria__

```terminal
create partition primary
```

> Si tienes un disco con formato __`GPT`__, puedes crear particiones más específicas, pero en un disco __`MBR`__ el tipo más común para discos de menos de __2 TB__, es `primary`.
{: .prompt-info }

__4\. Verificar la partición creada__

```terminal
list partition
```

__5\. Formatear la partición__

Una vez creada la partición, necesitamos formatearla con un sistema de archivos para poder usarla. El sistema de archivos más común en Windows es __NTFS__:

```terminal
format fs=ntfs quick
```

__6\. Asignar letra a la unidad__

Una vez formateada, asignamos una letra a la unidad para que sea accesible desde el Explorador de archivos:

```terminal
assign letter=G
```

{% include circle-line.html %}

__Diskpart__ es una poderosa herramienta para gestionar discos y particiones en Windows, ideal para usuarios avanzados y administradores de sistema. Si bien su uso es sencillo, se debe tener cuidado, ya que ejecutar comandos de forma apresurada sin precaución, puede resultar en la pérdida total de datos.