---
title: "macOS: Jugar juegos retro con OpenEmu"
categories: [macOS, macOS_02-Juegos]
image: poster/macos-openemu.webp
---

**OpenEmu** es un emulador todo-en-uno para macOS pensado para que puedas jugar títulos clásicos sin lidiar con configuraciones complejas. En lugar de instalar distintos emuladores, aquí todo se gestiona desde una sola aplicación: agregas tus juegos, conectas un mando y juegas.

Este artículo va directo a lo importante: cómo instalarlo, cargar juegos y dejarlo configurado correctamente.


## Instalación

### 1. Descarga la aplicación

Descarga la aplicación desde su [__sitio oficial__](https://openemu.org/){:target="_blank"}.

![Descargar OpenEmu](macos/descargar-openemu.webp)

### 2. Mover a la carpeta Aplicaciones

Arrastra OpenEmu a la carpeta **Aplicaciones**.

![Arrastrar OpenEmu](macos/arrastrar-openemu-a-aplicaciones.webp)

### 3. Abrir OpenEmu

Al abrir por primera vez nos saltará la alerta de seguridad.

![Alerta de seguridad OpenEmu](macos/openemu-alerta-de-seguridad.webp)

> Como OpenEmu se descarga desde internet y no está firmado de la forma que Apple exige, el sistema lo marca como “no verificado”.
{:.prompt-info}

Para abrir OpenEmu ve a __Configuración del sistema__ → __Privacidad y seguridad__ y selecciona abrir de todos modos.

![Abrir OpenEmu de todos modos](macos/abrir-openemu-de-todos-modos.webp)

El asistente inicial instala automáticamente los núcleos necesarios.

![Pantalla de bienvenida](macos/openemu-pantalla-de-bienvenida.webp)

Cuando muestra el lista de los núcleos, puedes marcar o desmarcar las opciones.

![Seleccionar núcleos](macos/openemu-seleccionar-nucleos.webp)

## Cómo añadir juegos

### 1. Abre OpenEmu y selecciona la plataforma

En la pantalla principal, el menú lateral muestra las consolas disponibles. Debemos seleccionar la que corresponda a los ROMs que queremos cargar; por ejemplo, N64.

![Plataforma n64](macos/openemu-plataforma-n64.webp)

### 2. Descarga el juego y arrastralo a la plataforma

Arrastra tus archivos de juego a la ventana principal de la consola.

![Arrastrar juego n64](macos/arrastrar-roms-n64-a-openemu.webp){:.rounded}

> OpenEmu los importará y los organizará en la biblioteca por consola. Si el nombre del archivo es correcto, se añadirá la carátula automáticamente; en caso contrario, puedes añadirla descargándola de Internet.
> ![Añadir carátula](macos/openemu-agregar-caratula.webp){:.rounded}
{:.prompt-info}


## Cómo jugar

### 1. En la barra lateral, elige la consola.

Desplazate por las consola en la barra lateral y selecciona la que tengas juegos añadidos.

![Seleccionar consola](macos/openemu-seleccionar-plataforma.webp)

### 2. Seleccionar el juego

Posicionate sobre el juego y haz doble clic.

![Abrir juego](macos/openemu-abrir-juego.webp)

### 3. Esperar que se inicialice el juego

Se abrirá el reproductor con el juego listo para disfrutar.

![Reproduciendo Mario Party 3](macos/openemu-marioparty3.webp)

Durante la partida puedes:

* Guardar estado rápido
* Cargar estado
* Cambiar filtros de imagen
* Ajustar controles

Todo desde el menú superior o atajos de teclado.

## Configurar un mando

### 1. Conecta el mando por USB o Bluetooth.

OpenEmu reconoce la mayoría de mandos automáticamente, incluyendo controles tipo PlayStation y Xbox. Por ejemplo, el mando de ps4.

Por USB:

![Conectando mando de PS4](macos/conectar-mando-ps4-por-usb.webp){:.rounded}

Por Bluetooth:

![Conectar mando de PS4](macos/conectar-mando-ps4-por-bluetooth.webp)

### 2. Configurar el control conectado

Ve a la consola y haz clic derecho sobre ella y selecciona __editar controles de juego__.

![Editar controles](macos/openemu-editar-controles.webp)

### 3. Asignar botones

Asigna cada botón cuando el sistema lo solicite (es muy intuitivo).

![Configurar mando](macos/openemu-configurar-mando.webp)

## Problemas comunes

### 1. El juego no abre

En algunos casos puede faltar el core o no ser compatible; esto suele ocurrir cuando corremos ciertos juegos. Por ejemplo, en mi caso que estoy usando el chip __Apple M4__ no me funcionan los juegos de GameCube:

![Core no es compatible](macos/openemu-nucleo-no-compatible.webp)

> Hasta el momento no he encontrado una solución dentro de OpenEmu, así que me toca descargar y usar Dolphin directamente para poder jugar.
{:.prompt-info}

### 2. No reconoce el mando

Revisa la configuración en Controls o vuelve a conectarlo. Si lo configuraste por Bluetooth, intenta emparejarlo nuevamente.

![Conectar mando de PS4](macos/conectar-mando-ps4-por-bluetooth.webp)



## Cambiar el destino de la biblioteca en OpenEmu

En mi caso decidí mover la biblioteca de **OpenEmu** a un disco externo, principalmente para liberar espacio en el Mac y mantener todos los juegos en un solo lugar. Si tienes muchas ROMs o archivos pesados, es una buena práctica porque la biblioteca puede crecer bastante con el tiempo y los juegos y carátulas pueden ocupar varios gigabytes.


### 1. Cerrar OpenEmu

Antes de mover nada, asegúrate de que la aplicación esté completamente cerrada.

### 2. Ir a la carpeta de la biblioteca actual

Puedes abrir el spotlight y pegar esta ruta:

<i class="fa fa-folder"></i> `~/Library/Application Support/OpenEmu`

![Carpeta OpenEmu](macos/carpeta-biblioteca-openemu.webp)

### 3. Copiar la biblioteca al disco externo

Copia la carpeta **OpenEmu** completa al disco externo (por ejemplo: `DiscoExterno/OpenEmu`).

![Pegar carpeta en disco externo](macos/pegar-carpeta-openemu-en-disco-externo.webp)

### 4. Abrir OpenEmu con selección de biblioteca

Mantén presionada la tecla **Option (⌥)** y bbre OpenEmu

![Abrir OpenEmu](macos/mantener-tecla-option-presionada-al-abrir-openemu.webp){:.rounded}

Haz clic en **Elegir Biblioteca** y selecciona la carpeta que copiaste al disco externo.

![Elegir biblioteca](macos/openemu-elegir-biblioteca.webp)

OpenEmu ahora usará esa ubicación como biblioteca principal.

{% include circle-line.html %}

OpenEmu destaca porque reduce la emulación a lo esencial: abrir, jugar y guardar.
Si usas Mac y quieres una solución simple para títulos retro sin perder tiempo configurando múltiples programas, es una de las opciones más prácticas disponibles y con una interfaz bastante amigable.
