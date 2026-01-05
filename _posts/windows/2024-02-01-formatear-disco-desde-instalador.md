---
title: Cómo abrir CMD y usar DiskPart desde el instalador de Windows
categories: [Windows, "Windows-Boot"]
tags: [windows]
badge: windows
---

Si necesitas **formatear, limpiar o gestionar particiones del disco** antes de instalar Windows, puedes hacerlo fácilmente usando **DiskPart** directamente desde el instalador al momento de iniciar el formateo.

¿Alguna vez te ha pasado que intentas instalar Windows y el instalador simplemente no deja avanzar? A veces aparece un mensaje de error del tipo ___"No se puede instalar Windows en este disco"___, o directamente no muestra ningún disco disponible. En la mayoría de los casos, el problema no es el instalador, sino el __estado del disco__, las ___particiones dañadas__ o un __formato incorrecto__ (GPT/MBR).

![No se puede instalar Windows en este disco](windows/no-se-puede-instalar-windows-en-el-disco.webp)

Para estos casos, el propio instalador de Windows es capaz de ayudarnos a través de una línea de comandos (símbolo de sistema CMD): __Diskpart__, es una utilidad de línea de comandos que permite limpiar, crear y formatear particiones de manera rápida y precisa. A continuación, se muestran los pasos de cómo acceder y usarla.

### Pasos:

1. **Inicia el instalador de Windows** desde tu USB o DVD.
2. Cuando llegues a la pantalla inicial (donde se elige idioma y teclado), **no continúes aún**.
3. Presiona las teclas: <kbd>Shift</kbd> + <kbd>F10</kbd>

   Esto abrirá una **ventana del Símbolo del sistema (CMD)**.
4. En la consola, escribe:

   ```
   diskpart
   ```

   y presiona **Enter**.
5. Ahora puedes usar comandos como:

   ```
   list disk
   select disk 0
   clean
   create partition primary
   format fs=ntfs quick
   exit
   ```

> __Importante:__  
* El comando **`clean`** elimina **todas las particiones y datos** del disco seleccionado.
* Asegúrate de elegir el disco correcto antes de ejecutar cualquier comando.
{: .prompt-warning }
