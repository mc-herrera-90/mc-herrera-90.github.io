---
title: "Linux: Instalar RetroPie en distribuciones basadas en Debian"
categories: [Linux, Linux_03-Proyectos]
badge: rpie
---

## Motivación del proyecto

En mi caso, contaba con un equipo reciclado que fue recuperado desde una empresa que lo había dado de baja ya que no cumplía con las exigencias del uso diario, pero que seguía siendo perfectamente funcional. En lugar de dejarlo acumulando polvo, decidí darle una segunda vida destinándolo a un propósito concreto: transformarlo en una recreativa retro.

![Hardware a utilizar](extras/equipo-reacondicionado-hardware-para-segunda-vida.webp){:.w-75}

### Contexto del hardware utilizado

Se trata de una placa madre __Gigabyte GA-G31M-ES2L__, basada en el chipset Intel G31 y socket LGA 775, una plataforma muy común entre 2007 y 2010.

Entre sus características principales:

* Chipset Intel G31 + ICH7.
* Procesador __Intel Celeron serie 3000__.
* Soporte para dos memorias __DDR2__.
* Gráficos integrados Intel GMA 3100.
* Puertos SATA II y PCIe 1.0.
* Disco duro Samsung HD502HI de 500 GB (SATA II, 7200 RPM).
* Fuente de poder Corsair CX850M (sobredimensionada para el equipo, pero reutilizada).
* Gabinete ATX clásico con bahías para unidad óptica DVD.

El sistema no cuenta con tarjeta gráfica dedicada, por lo que todo el rendimiento gráfico depende de la GPU integrada y de un correcto soporte de drivers y OpenGL en el sistema operativo. 

## Elección del sistema operativo

Al tratarse de un equipo con hardware antiguo, debía considerar una distribución de Linux de bajo consumo de recursos, buena compatibilidad con equipos antiguos y soporte para la plataforma de emulación. La elección final fue __Lubuntu 20.04__ al ser una distribución basada en Ubuntu pero más ligera y muy estable.

> Primero probé con Lubuntu 18.04, pero tuve problemas con algunos emuladores por temas de drivers gráficos y compatibilidad con OpenGL. Al pasar a Lubuntu 20.04 (kernel 5.4), el soporte mejoró y todo funcionó de forma más estable.
{:.prompt-info}

### Instalación del sistema operativo

Una vez definida la distribución, procedí con la instalación de Lubuntu 20.04 en el equipo. El proceso es bastante sencillo y requiere dos pasos previos:

- [x] Preparación del USB booteable.
- [x] Configuración del arranque desde la BIOS.

Luego realicé una instalación limpia en el disco duro, priorizando un entorno ligero y optimizado para emulación.

A continuación, te dejo una guía breve de su instalación en formato presentación.

{% include embed/iframe.html src="/slides/instalacion-lubuntu20.html" target="true" %}

## ¿Qué es RetroPie?

El proyecto **RetroPie** se originó como una plataforma para permitir que usuarios de **Raspberry Pi** jueguen títulos retro de manera simple y optimizada. Con el tiempo, la comunidad ha desarrollado un conjunto de herramientas y scripts que permiten instalar RetroPie también en sistemas basados en Debian/Ubuntu.

Este soporte se mantiene en el repositorio oficial [**RetroPie-Setup**](https://github.com/RetroPie/RetroPie-Setup){:target='_blank'}, el cual contiene scripts de instalación, configuración y componentes necesarios para desplegar RetroPie sobre distribuciones como Lubuntu. Gracias a este repositorio, es posible adaptar la plataforma de emulación a hardware reciclado o PCs antiguos, como el usado en este proyecto. Lo más importante es entender que RetroPie tiene:

- [x] __El sistema base__: Raspberry Pi distribuyen una imagen personalizada con RetroPie preinstalado. En este proyecto, en cambio, se mantiene la base Ubuntu/Lubuntu y se instala RetroPie encima.
- [x] __Emuladores__: RetroPie incluye los emuladores más populares para distintas consolas clásicas.
- [x] __Script de instalación__: simplifica la descarga, compilación y configuración de los paquetes necesarios.
- [x] __Front-end__: utiliza [EmulationStation](https://emulationstation.org/){:target='_blank0} como interfaz gráfica para organizar y lanzar los juegos..

### ¿Qué son las BIOS?

La BIOS es el único componente de software que se instala en una computadora antes de instalar un sistema operativo. En una PC, se puede usar para configurar opciones como orden de arranque de los dispositivos, la fecha y hora, las preferencia de hardware, etc.

En una consola de juego, indica cómo debería funcionar la computadora, por lo que el emulador podría necesitarla para ejecutar juegos.


## Instalar RetroPie

Lo primero es contar con una distribucíon actualizada (Ubuntu, Xubuntu, Ubuntu Mate, Lubuntu, etc.)

### Actualizar el sistema

Comienza por actualizar el sistema. Abre una terminal <kbd>Ctrl</kbd>+<kbd>T</kbd> y ejecuta los siguientes comandos:

```terminal
sudo apt update
sudo apt upgrade -y
```
{:.typing}

### Instalar los paquetes necesarios

Una vez listo, se requieren algunos paquetes antes de comenzar la instalación, puedes instalar todos los paquetes con el siguiente comando:

```terminal
sudo apt install git dialog unzip xmlstarlet
```
{:.typing}

El script lo vamos a descargar desde su repositorio de GitHub, por eso es necesario que estos paquetes estén instalados.

### Clonar el proyecto de GitHub

El primer paso es clonar los archivos del proyecto RetroPie de GitHub. Ejecuta el siguiente comando:

```terminal
git clone --depth=1 https://github.com/RetroPie/RetroPie-Setup.git
```
{:.typing}

Ahora, cambia de directorio a RetroPie-Setup:

```terminal
cd RetroPie-Setup
```
{:.typing}

### Ejecutar el script de instalación

Finalmente, ejecuta el siguiente comando para inicializar el script de instalación:

```terminal
sudo ./retropie_setup.sh
```
{:.typing}

El script comenzará a ejecutarse e instalará paquetes adicionales, tras unos breves momentos, aparecerá el menú como se muestra a continuación:

![RetroPie Setup](linux/retropie-setup-1.webp)

Presiona <kbd>Enter</kbd> y repite el proceso para la siguiente ventana:

![RetroPie Setup](linux/retropie-setup-2.webp)

Presiona nuevamente <kbd>Enter</kbd> para confirmar y comenzar el proceso:

![RetroPie Setup](linux/retropie-setup-3.webp)

Este proceso puede tardar entre 20 a 30 minutos según las características del hardware y el ancho de banda de tu conexión a internet.

Una vez finalizada la instalación, el sistema regresará al menú principal del script. En ese momento, simplemente cierra la ventana y busca **rpie** (o ejecuta `emulationstation` desde la terminal).

Al iniciar el front-end, ya podrás acceder a la interfaz principal y comenzar a disfrutar tus juegos clásicos.

![EmulationStation](linux/frontend-emulationstation.webp)