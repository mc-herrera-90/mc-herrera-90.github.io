---
title: "Linux: Recreativa con una PC antigua usando RetroPie en distros basadas en Debian"
categories: [Linux, Linux_03-Proyectos]
image: poster/convertir-pc-en-retro-arcade.avif
---

## Motivación del proyecto

En mi caso, contaba con un equipo reciclado que fue recuperado desde una empresa que lo había dado de baja ya que no cumplía con las exigencias del uso diario, pero que seguía siendo perfectamente funcional. En lugar de dejarlo acumulando polvo, decidí darle una segunda vida destinándolo a un propósito concreto: transformarlo en una recreativa retro.

![Hardware a utilizar](extras/equipo-reacondicionado-hardware-para-segunda-vida.webp){:.w-75}

### Contexto del hardware utilizado

Se trata de una placa madre __Gigabyte GA-G31M-ES2L__, basada en el chipset Intel G31 y socket __LGA 775__, una plataforma muy común entre 2007 y 2010.

![Placa madre](extras/placa-base-ga-g31m-es2l.webp)

### Componentes principales internos

Chipset Intel G31 + ICH7
: Conjunto de controladores de la placa base donde el G31 se encarga de la comunicación entre el procesador, la memoria y los gráficos integrados, mientras que el ICH7 gestiona las conexiones y periféricos como puertos SATA, USB y audio.

![Chipset G31 + ICH7](extras/chipset-g31-ich7.webp){:w="300" style="display:block; margin:auto;"}

Gráficos integrados Intel GMA 3100
: Es más que suficiente para emulación de consolas clásicas (NES, SNES, Mega Drive, arcade, etc.), pero se queda corta para emuladores más pesados como PS2 o GameCube.

![GMA 3100](extras/gma3100.webp){:w="300" style="display:block; margin:auto;"}

Procesador Intel Celeron serie 3000
: Es un procesador económico y modesto, suficiente para tareas básicas y para emulación de consolas clásicas.

![Procesador](extras/intel-celeron-e3300.webp){:w="300" style="display:block; margin:auto;"}

Soporte para dos memorias DDR2
: En este modelo, cada ranura admite normalmente **hasta 2 GB**, alcanzando un **máximo total de 4 GB**, suficiente para mover bien el sistema y nuestro proyectos de emulación retro.

![Ram DDR2](extras/ram-dd2-2gb.webp){:w="300" style="display:block; margin:auto;"}

Disco duro Samsung HD502HJ de 500 GB (SATA II, 7200 RPM)
: Unidad de almacenamiento mecánica con interfaz SATA II. Ofrece capacidad suficiente para instalar el sistema operativo, emuladores y una biblioteca amplia de títulos retro.

![HDD 500GB](extras/hdd-samsumg-hd502hj.webp){:w="300" style="display:block; margin:auto;"}

Fuente de poder Corsair CX850M
: Fuente de alimentación que suministra energía estable a todos los componentes del sistema. Aunque su capacidad es superior a lo que requiere el equipo, se reutiliza para garantizar fiabilidad, eficiencia y margen suficiente para futuras ampliaciones.

![Fuente de poder](extras/corsair-cx-850m.webp){:w="300" style="display:block; margin:auto;"}

> El sistema no cuenta con tarjeta gráfica dedicada, por lo que todo el rendimiento gráfico depende de la GPU integrada y de un correcto soporte de drivers y OpenGL en el sistema operativo. 
{:.prompt-info}

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

El proyecto **RetroPie** se originó como una plataforma para permitir que usuarios de **Raspberry Pi** jueguen títulos retro mediante una imagen del sistema optimizada y fácil de instalar. Con el tiempo, la comunidad ha desarrollado un conjunto de herramientas y scripts que permiten instalar RetroPie también en sistemas basados en Debian/Ubuntu.

<div align="center" markdown="1">
{% include techs/rpie.svg %}{:width="150"}
</div>

Este soporte se mantiene en el repositorio oficial [**RetroPie-Setup**](https://github.com/RetroPie/RetroPie-Setup){:target='_blank'}, el cual contiene scripts de instalación, configuración y componentes necesarios para RetroPie. Gracias a este repositorio, es posible adaptar la plataforma de emulación a hardware antiguo, como el usado en este proyecto. Lo más importante es entender que RetroPie tiene:

- [x] __El sistema base__: Raspberry Pi distribuyen una imagen personalizada con RetroPie preinstalado. En este proyecto, en cambio, se mantiene la base Ubuntu/Lubuntu y se instala RetroPie encima.
- [x] __Emuladores__: RetroPie incluye los emuladores más populares para distintas consolas clásicas.
- [x] __Script de instalación__: Simplifica la descarga, compilación y configuración de los paquetes necesarios.
- [x] __Front-end__: Utiliza [EmulationStation](https://emulationstation.org/){:target='_blank0} como interfaz gráfica para organizar y lanzar los juegos..

### ¿Qué son las BIOS?

La **BIOS** (Basic Input/Output System) es un firmware que se ejecuta al encender una computadora antes de cargar el sistema operativo. En un PC permite configurar opciones como el orden de arranque, la fecha y hora o ciertos parámetros del hardware.

En el caso de las consolas de videojuegos, la BIOS define cómo funciona el sistema, por lo que algunos emuladores (como los usados en **RetroPie**) la necesitan para poder iniciar y ejecutar juegos correctamente.

Por ejemplo, plataformas como PlayStation o Neo Geo requieren su BIOS correspondiente para lograr una emulación precisa y compatible.

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

Ahora, debemos cambiarnos al directorio RetroPie-Setup:

```terminal
cd RetroPie-Setup
```
{:.typing}

### Ejecutar el script de instalación

Finalmente, ejecutamos el siguiente comando para inicializar el script de instalación:

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

Este proceso puede tardar entre 20 a 30 minutos según las características del hardware y el ancho de banda de nuestra conexión a internet.

Una vez finalizada la instalación, el sistema regresará al menú principal del script. En ese momento, simplemente cierra la ventana y busca **rpie** (o ejecuta `emulationstation` desde la terminal).

Al iniciar el front-end, ya podemos acceder a la interfaz principal y comenzar a disfrutar tus juegos clásicos.

![EmulationStation](linux/frontend-emulationstation.webp)