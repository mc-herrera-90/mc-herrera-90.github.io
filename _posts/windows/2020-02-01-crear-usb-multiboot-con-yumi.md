---
title: "Crear USB Multiboot con YUMI"
categories: [Windows, "Windows-Boot"]
tags: [windows, boot]
badge: yumi
---

## ¿Qué es YUMI?

__YUMI__ es una aplicación desarrollada por [PendriveLinux](https://pendrivelinux.com/){:target='_blank'} que permite crear unidades USB con múltiples sistemas operativos y otras utilidades. Es una de las herramientas más populares para técnicos informáticos, ya que ofrece flexibilidad, compatibilidad y una interfaz sencilla.

![YUMI multiboot al abrir](windows/yumi-multiboot-open.webp)

## Preparar una unidad USB <i class="fa-brands fa-usb"></i> para YUMI

Una vez tengas tu unidad USB conectada al equipo, vamos a realizar los siguientes pasos:

### 1. Eliminar toda partición y sistema de archivo

En Windows, usamos __diskpart__ y ejecutamos los comandos que se destacan a continuación (asegurate de seleccionar la unidad correcta):

{% capture clean_disk %}
<span class="hl">DISKPART&gt; list disk</span>

  Núm Disco  Estado           Tamaño     Disp     Din  GPT
  ----------  -------------   -------    -------  ---  ---
  Disco 0     En línea          465 GB   130 GB
  Disco 1     En línea           14 GB      0 B

<span class="hl">DISKPART&gt; select disk 1</span>

El disco 1 es ahora el disco seleccionado.

<span class="hl">DISKPART&gt; clean</span>

DiskPart ha limpiado el disco satisfactoriamente.

<span class="hl">DISKPART&gt; create partition primary</span>

DiskPart ha creado satisfactoriamente la partición especificada.

<span class="hl">DISKPART&gt; active</span>

DiskPart marca la partición actual como activa.

<span class="hl">DISKPART&gt; format fs=fat32 quick</span>

   100 por ciento completado

DiskPart formateó el volumen correctamente.

<span class="hl">DISKPART&gt; assign</span>

DiskPart asignó correctamente una letra a la unidad o punto de montaje.

<span class="hl">DISKPART&gt; exit</span>
{% endcapture %}
{% include terminal-wrapper.html content=clean_disk title="CMD" %}

### 2. Abrir el programa

Ahora al ejecutar __YUMI__, selecciona tu USB preparada:

![preparar USB](yumi/preparar_usb.webp){:style="width: 80%; margin: auto"}

Al darle check, nos mostrará una advertencia que avisa que todo lo que esté en ese disco se va a borrar y después, se va a:

- Recrear la letra de unidad (I:) con una nueva partición formateada en __exFAT__.
- Crear una segunda partición (llamada __VTOYEFI__) — esto va a sobrescribir el registro maestro de arranque (MBR) existente.
- Asignar una etiqueta llamada __"YUMI"__ a la __unidad I:__.

![usb configurada](yumi/usb_configurada.webp){:style="width: 75%; margin: auto"}

Aceptamos y avanzamos a la siguiente sección.

### 3. Cargar una ISO en YUMI

Ahora se nos desbloquea el __step 2__, donde podemos seleccionar una distribución. Por ejemplo vamos a seleccionar __Ubuntu__ y luego se desbloqueará el __step 3__ para poder cargar una ISO:

![usb configurada](yumi/buscar_iso.webp){:style="width: 75%; margin: auto"}

Una vez cargada, das clic en crear:

![iso cargada](yumi/crear_iso_booteable.webp){:style="width: 75%; margin: auto"}

Esperamos a que termine el proceso y luego clic en siguiente:

![proceso completado](yumi/proceso_completado.webp){:style="width: 75%; margin: auto"}

En este momento nos preguntá si queremos __cargar otra ISO__, le decimos que no y finalizamos.

## Probando YUMI en VirtualBox

Para ver __YUMI__ en acción, voy a configurar una máquina virtual en __VirtualBox__.

Para este proceso lo primero es navegar a donde tengo las herramientas de Virtualbox:

```terminal
cd "C:\Program Files\Oracle\VirtualBox"
```

Desde aquí puedo acceder a __VBoxManage__, que es la herramienta de línea de comandos de VirtualBox. Ahora puedo ejecutar el siguiente comando:

```terminal
VBoxManage internalcommands createrawvmdk -filename "%USERPROFILE%\usb-yumi.vmdk" -rawdisk \\.\PhysicalDrive1
```

__`internalcommands createrawvmdk`__
: Es un subcomando especial para __crear un disco virtual que apunta a un disco físico real__ (como tu USB). No es una imagen, sino un "puente".

__`-filename "%USERPROFILE%\usb-yumi.vmdk"`__
: Define la ruta y nombre del archivo __.vmdk__ que se va a crear. `%USERPROFILE%` es una variable de Windows que apunta a tu carpeta de usuario (ej: `C:\Users\TuNombre`). El archivo será: `usb-yumi.vmdk`.

__`-rawdisk \\.\PhysicalDrive1`__
: Indica el disco físico real al que se conectará el archivo VMDK. En este caso, __PhysicalDrive1 es tu pendrive USB__. El número puede cambiar, por eso antes se revisa con __list disk__ en __DiskPart__.

Ahora podemos abrir el programa __VirtualBox__ y crear una nueva máquina:

![Nueva máquina](virtualbox/nueva_maquina.webp){:style="width: 80%; margin:auto"}

En el siguiente paso, colocamos el nombre a la máquina y llenamos con los valores que se muestran a continuación:

![Nombre máquina](virtualbox/nombre_maquina_yumi.webp){:style="width: 65%; margin:auto"}

Ahora falta crear el disco de arranque para poder iniciar YUMI, debemos seleccionar __Usar un archivo de disco duro virtual existente__ y buscarlo:

![Seleccionar Disco Yumi](virtualbox/usar_disco_yumi_puente.webp){:style="width: 75%; margin:auto"}

Y ya estaría listo, con la limitación de que no añadimos un disco duro adicional para poder instalar el sistema operativo, pero podemos ejecutarlo en __modo live__.

Si iniciamos la máquina, tendremos a YUMI en acción:

![YUMI Inicio](yumi/yumi_inicio.webp)

Buscamos la única ISO que tenemos de momento y la seleccionamos:

![YUMI seleccionar la ISO](virtualbox/seleccionar_iso_yumi.webp)

Y la última opción es seleccionar arrancar en modo normal:

![YUMI arancar en modo normal](virtualbox/arrancar_iso_modo_normal.webp)

Finalmente, empieza el __modo live__ de Ubuntu, para acceder a probar el sistema, debes dar clic en __Probar Ubuntu__:

![Modo Live de Ubuntu](virtualbox/inicio_instalador_ubuntu_mate.webp)

{% include circle-line.html %}

__YUMI__ es una opción __rápida__, __sencilla__ y muy útil para llevar varios sistemas operativos y para generar unidades __USB multiboot__ mediante un sistema de menús basados en [__GRUB__](https://es.wikipedia.org/wiki/GNU_GRUB){:target='_blank'}. Su compatibilidad con BIOS y UEFI (en versiones actualizada) y su soporte de persistencia para algunas distribuciones lo hacen una solución sólida para entornos de mantenimiento, instalación y rescate de sistemas.
