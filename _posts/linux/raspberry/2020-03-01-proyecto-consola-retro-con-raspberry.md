---
title: "Linux: Montar una mini consola con Raspberry PI"
categories: [Linux, Linux_03-Proyectos]
badge: rpie
---


## 2. ¿Qué necesito?

Para montar la consola retro, en primer lugar necesitaremos una serie de componentes de hardware. Dependiendo de nuestro objetivo, podrías reducir gastos y conseguir componentes más baratos o no escatimar en costos y conseguir mejores prestaciones y rendimiento.

Los componentes necesarios serían los siguientes (cada componente y sus características se detallan más adelante):

- Placa base __Raspberry Pi 3 B__
- __Fuente de alimentación__ para Raspberry Pi
- __Tarjeta microSD__ para instalar el sistema y almacenamiento
- __Cable HDMI__ para conectar a la TV
- Mando USB
- __Carcasa__ de Raspberry Pi

### 2.1 <i class="fa-brands fa-raspberry-pi"></i> Una placa base Raspberry Pi 3 B

Como punto de partida, debemos contar con una placa de Raspberry Pi, que será el motor de nuestro proyecto. Existen varias versiones, a diferentes precios cada una pero con una Raspberry Pi 3 B vamos bien.

* Es la **computadora principal** donde correrán los emuladores.
* CPU ARM quad-core y 1 GB de RAM.
* Incluye WiFi, Bluetooth, HDMI y puertos USB.

![Características de Raspberry Pi 3 B](hardware/raspberry-pi-3-b-features.webp){:.rounded}

💰 **Precio estimado:**

* $40.000 – $60.000 CLP

### 2.2 <i class="fa-solid fa-plug-circle-bolt"></i> Fuente de alimentación

Para alimentar las __Raspberry Pi 3 B__ se recomienda utilizar la [fuente de alimentación oficial](https://www.pccomponentes.com/fuente-de-alimentacion-para-raspberry-pi-51v-25a-negra){:target="_blank"}, que tiene una salida de __5.1V__ a __2.5A__. De esta forma asegúramos que estamos suministrando la alimentación necesaria para que funcione correctamente.

![Fuente de alimentación](hardware/fuente-de-alimentacion-raspberry-pi.webp){:.rounded}

> Un detalle importante es que, aunque Retropie tiene una opción para apagar la consola, esta no queda desconectada al 100% en ningún momento, ya que el RaspBerry carece de botón de apagado de serie. Esto se puede solucionar comprando un __Pi Power Switch__ o si tienes conocimiento de electrónica, podemos añadirlo nosotros mismos.
{:.prompt-info}

💰 **Precio estimado:**

* $5.000 – $10.000 CLP


### 2.3 <i class="fa-solid fa-sd-card"></i> Tarjeta MicroSD para el almacenamiento

La Raspberry Pi no lleva un disco duro, sino una tarjeta __MicroSD__ (como los dispositivos móviles) donde tendrá instalado el sistema operativo, el software y también almacenar los juegos.

Al comprar una tarjeta, se recomienda que te fijes en los siguientes aspectos:

- __Capacidad__: Mínimo recomendable: __16 GB__.
- __Tipo__: Puedes encontrar tarjetas __SDXC__, __SDHC__ o __SDSC__. Esto indica simplemente la generación de la tarjeta respecto a su capacidad.
- __Velocidad__: Mínimo recomendable: __Clase 6__ (6MB/s) y en un caso mejor __Clase 10__ (10MB/s). Indica la velocidad de trasmisión mínima de datos y puede aparecer con diferentes nomenclaturas.
- __Marca__: Normalmente no importa demasiado, pero se recomienda usar marcas conocidas como SanDisk o similares.

![MicroSD para Raspberry](hardware/microsd-para-raspberry.webp)

💰 **Precio estimado:**

* $8.000 – $15.000 CLP

### 2.4 Cable HDMI

El cable __HDMI__ es necesario para conectar a la TV o proyector. No hay mucho que decir, asegúrate de la longitud de cable para conectar la consola al televisor y no quedar corto.

![Cable HDMI](hardware/cable-hdmi.avif)

💰 **Precio estimado:**

* $3.000 – $6.000 CLP

## 3. Instalación del sistema

Una vez que tengamos todo el hardware necesario, debemos comenzar con el software. Para utilizar __Raspberry Pi__ se debe instalar un sistema operativo. El sistema operativo oficial es [Raspberry Pi OS](https://www.raspberrypi.com/software/operating-systems/){:target='_blank'} que está basado en __Debian__, optimizado para funcionar en placas de Raspberry Pi.

Para este proyecto, necesitamos descargar una de las [imágenes prediseñadas de RetroPie](https://retropie.org.uk/download/){:target='_blank'}, que actualmente incorporan dos: una versión para __Raspberry Pi Zero / Raspberry Pi 1__ y otra versión para __Raspberry Pi 2 / Raspberry Pi 3__. Ambas están ya instaladas sobre una Raspbian y nos ahorramos el proceso de tener que hacerlo por separado.

### 3.1 Descargar el programa para grabar la imagen

Para copiar la imagen a la microSD se necesita un programa de grabación. Uno de los más utilizados es [Balena Etcher](https://etcher.balena.io/#download-etcher){:target='_blank'}. Este programa es multiplataforma y permite grabar imágenes de sistema de forma directa en dispositivos de almacenamiento y lee archivos comprimidos (`.img` o `.img.gz`).

![Grabar imagen en Balena Etcher](extras/grabar-imagen-de-retropie-para-raspberry-pi.webp)

### 3.2 Insertar la microSD en la Raspberry Pi

Una vez finalizada la grabación:

![Grabación finalizada](extras/balena-etcher-grabacion-finalizada.webp)

- Expulsa la tarjeta de forma segura.
- Insertala en la Raspberry Pi.
- Conectar la fuente alimentación, HDMI a un monitor y un teclado.

La Raspberry Pi comenzará a arrancar __automáticamente al recibir energía__.

{% include embed/video.html src="linux/inicio-retropie.webm" %}

## 4. Agregar juegos (roms) en la Raspberry Pi

El paso más importante para jugar es __copiar los juegos a la microSD__. Sin embargo, como ahora la tarjeta alberga un sistema GNU/Linux, Windows no es capaz de leerla y no sirve copiar los juegos directamente desde nuestro lector de tarjeta del PC (salvo que uses GNU/Linux).

Por eso, __Retropie__ viene ya preparado y tiene varias formas de copiar los juegos a nuestra consola, sin necesidad de apagar la consola.

### 4.1 Método 1: con una unidad USB

Podemos copiar los juegos en una unidad USB y posteriormente conectarla a la Raspberry Pi. Ojo, hay que colocar los juegos en su correspondiente plataforma, por mientras solo ordena tus juegos en carpetas dentro de la unidad USB (Ej: los ROMs de NES en una carpeta NES).

### 4.2 Método 2: por conexión SSH

Este método es más comodo pero requiere estar familiarizado con ciertos conocimiento de comandos de Terminal o programas como [Putty](https://putty.org/index.html){:target='_blank'}.

Los juegos, se deben ubicar en:

<i class="fa fa-folder"></i> `/home/pi/RetroPie/roms`

![Copiar juegos desde USB](extras/copiar-roms-desde-usb-en-retropie.webp)

## 5. EmulationStation

RetroPie incorpora [EmulationStation](https://emulationstation.org/){:target='_blank'} por defecto. Se trata de un panel visual (con soporte para añadir temas o skins de apariencia) que nos permite ver los emuladores y juegos disponibles en el sistema.
