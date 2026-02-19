---
title: "macOS: Jugar juegos de GameCube y Wii con el emulador Dolphin"
categories: [macOS, macOS_02-Juegos]
---

Nada supera la alegría de jugar a los clásicos juegos de GameCube y Nintendo Wii. El único problema es que la mayoría de las veces ya nuestras consolas no están con nosotros o en mal estado. Muchas de ellas son ahora objetos de colección que viven en vitrinas en vez de usarse para jugar.

Ahí es donde entra la emulación, y después de probar varias varias alternativas, puedo decir que __Dolphin__ es la mejor forma de revivir esos juegos en un computador moderno. En este artículo vamos a ver a cómo usarlo y configurarlo en macOS.

## ¿Qué es Dolphin y por qué lo uso?

__Dolphin__ es un emulador que permite ejecutar juegos de GameCube y Wii con una precisión increíble, mejoras gráficas y muchas opciones de personalización. Además, es de código abierto y multiplataforma, lo que significa que puedes usarlo tanto en macOS como en Linux y Windows.

Una de las cosas más destacable es que no solo replica el hardware original, sino que también permite aumentar la resolución interna, aplicar filtros gráficos, usar controles modernos, de PlayStation y Xbox.

## Instalación y configuración

### 1. Descargar el emulador

Para descargar, ingresa a su [__sitio oficial__](https://es.dolphin-emu.org/?cr=es){:target="_blank"}.

![web oficial dolphin](macos/web-oficial-dolphin-emulador.webp)

Luego, selecciona la plataforma correspondiente, en nuestro caso es evidente la opción.

![Descargar versión de dolphin](macos/seleccionar-plataforma-para-el-emulador-dolphin.webp)

### 2. Arrastrar el archivo .dmg

Al ejecutar el archivo `.dmg` nos va a mostrar ventana para mover la aplicación a la carpeta __Aplicaciones__.

![Arrastrar aplicación](macos/arrastrar-openemu-a-aplicaciones.webp)

Listo, con eso ya queda instalado.

## Configuración general

La primera vez que abro Dolphin, hago algunos ajustes básicos para asegurar buen rendimiento en Apple Silicon.

* **Backend gráfico:** Metal (es el que mejor rendimiento me da en macOS).
* **Compilación de shaders:** Asíncrona (reduce tirones).

## Ajustes gráficos

En **Graphics → Enhancements** suelo usar:

* Resolución interna: **2x o 3x** (depende del juego).
* Anti-aliasing: opcional.
* Anisotropic filtering: 4x o 8x.

Esto mejora muchísimo la calidad sin afectar demasiado el rendimiento en chips ARM.

## Configurar controles

Voy a **Controllers** y elijo según lo que tenga:

* Control de Xbox o PlayStation por Bluetooth.
* O teclado si quiero algo rápido.

Solo hay que mapear botones y guardar el perfil.

## Cómo agregar juegos

Yo organizo mis juegos en una carpeta dedicada, por ejemplo:

```
~/Games/Dolphin
```

Luego en Dolphin:

1. Settings → Paths
2. Agrego esa carpeta
3. Automáticamente aparecen en la biblioteca

{% include circle-line.html %}

La verdad es que la experiencia en Apple Silicon me sorprendió. El rendimiento es muy estable y muchos juegos se ven incluso mejor que en el hardware original gracias al escalado de resolución.

Para mí, Dolphin terminó siendo la forma más cómoda de volver a esos juegos sin depender de hardware antiguo o configuraciones complicadas.
