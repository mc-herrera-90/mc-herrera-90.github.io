---
title: "Batocera: Cómo instalar Batocera y crear una máquina recreativa retro"
categories: [Linux, Linux_02-Distribuciones]
---

Batocera es una distribución Linux gratuita y de código abierto diseñada para crear consolas de retrojuegos a partir de una amplia cantidad de dispositivos. Es compatible con una variedad de plataformas y arquitecturas, desde computadoras basadas en Intel hasta Raspberry Pi y consolas portátiles, y funciona como un panel de control central para una gran cantidad de emuladores de consola.

![Batocera](linux/batocera.webp)

## Escribir la imagen Batocera

Hay muchas maneras en que podemos escribir la imagen de Batocera, una de las más fáciles de usar es __balenaEtcher__.

## Instalar Batocera desde Batocera en disco interno

Podemos instalar desde un USB con Batocera a un disco duro interno

## Cómo acceder al sistema de archivos

Batocera crea dos particiones en el dispositivo de destino; la primera tiene el formato del sistema de archivos y está etiquetado como "BATOCERA". Contiene los archivos necesarios para que el sistema arranque, como `batocera.conf`. La segunda, que abarca el resto del dispositivo, es la partición "userdata", formateada con el sistema de archivos __EXT4__ con la etiqueta de "SHARE". Contiene, entre otros, los directorios "salvados", "bios", "roms". El primero contiene archivos guardados, el segundo es donde colocanos imágenes de bios requeridas por ciertas consolas, y el tercero contiene imágenes de juegos en una serie de subdirectorios que llevan el nombre de los sistemas emulados.