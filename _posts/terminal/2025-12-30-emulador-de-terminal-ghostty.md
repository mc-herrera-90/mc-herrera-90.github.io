---
title: "Ghostty: Emulador de terminal moderno para desarrolladores"
category: [Terminal, "Terminal_01-Emuladores"]
image: terminal/ghostty.gif
---

Ghostty 👻 es un emulador de terminal moderno enfocado en ser rápido, simple y altamente cofigurable, pensado especialmente para desarrolladores.

## Ghostty como aplicación nativa

En palabras de su creador, la visión de "nativo" en Ghostty es que el terminal esté diseñado para verse, sentirse y comportarse exactamente como una aplicación propia del entorno de escritorio donde se ejecuta.

Es importante destacar que Ghostty es una aplicación verdaderamente nativa tanto en macOS como en Linux.

- En __macOS__, la interfaz gráfica está desarrollada en __Swift__, utilizando __AppKit__ y __SwiftUI__, lo que permite una integración directa con su ecosistema.
- En __Linux__, la interfaz está escrita en __Zig__ y utiliza __GTK4__, manteniendo coherencia con los entornos de escritorio modernos.

## Características de Ghostty

- [x] __Alto rendimiento__: renderizado por GPU que permite una interacción fluida incluso con grandes volúmenes de texto.
- [x] __Configuración sencilla__: archivos de configuración simples y fáciles de mantener.
- [x] __Código open source__: su desarrollo es de acceso público en su [repositorio oficial](https://github.com/ghostty-org/ghostty){:target='_blank'}, lo que permite auditar el código y contribuir al proyecto. 

## Instalación

Ghostty se encuentra disponible principalmente para macOS y Linux aunque está previsto para Windows en un futuro próximo.

### Homebrew

Ghostty está disponible para instalar con Homebrew:

```terminal
brew install --cask ghostty
```
{:.typing}

### Snap

Ghostty está disponible como paquete Snap:

```terminal
snap install ghostty --classic
```
{:.typing}

> Un __paquete Snap__ es un formato de distribución de software desarrollado por Canonical que permite instalar aplicaciones junto con todas sus dependencias en un solo paquete, aislado del sistema. Se utiliza principalmente en distribuciones basadas en Ubuntu.
{:.prompt-info} 

El proceso es rápido, al finalizar la instalación, debes buscarlo para abrir el emulador por primera vez.

![Buscar Ghostty](terminal/buscar-ghostty-en-linux.webp)

## Configuración

Ghostty se configura mediante un simple archivo de texto. A continuación, se muestra un ejemplo de opciones para un archivo `config`.

```
title = "Hello, @mcherrera"
theme = TokyoNight
window-height = 12
window-width = 40
background-opacity = 0.9
font-family = "Victor Mono"
```
{:file="config"}

Al guardar los cambios, abres Ghostty nuevamente y puedes observar el resultado. 

![Comando nerdfetch](terminal/terminal-comando-nerdfetch.webp)

### Ubicación del archivo

El archivo de configuración, se carga desde estas ubicaciones:

{% tabs path_config %}
{% tab path_config Linux %}
La ruta para el archivo es la siguiente:
- `$XDG_CONFIG_HOME/ghostty/config`
- `$HOME/.config/ghostty/config` (si `$XDG_CONFIG_HOME` no está definida)
{% endtab %}
{% tab path_config macOS %}
La ruta en macOS para el archivo de configuración es la siguiente:
- `$HOME/Library/Application\ Support/com.mitchellh.ghostty/config`.
- Al igual que en Linux, admite cambiar la ubicación usando `$XDG_CONFIG_HOME`.
{% endtab %}
{% endtabs %}

### Dividir configuración

Ghostty permite dividir la configuración en varios archivos, lo que facilita mantener los ajustes organizados según el tema o el contexto. Para ello se utiliza la clave `config-file` dentro del archivo de configuración principal. Esta opción indica la ruta de otro archivo de configuración que debe cargarse y puede declararse más de una vez si es necesario. Por ejemplo:

```
config-file=ruta/relativa/sub/config
config-file=/ruta/absoluta/config
config-file=?opcional/config
```
{:file="config"}

- Si la ruta es relativa, será relativa al archivo de configuración que contiene la clave `config-file`.
- Si el archivo no existe, ya sea que se haya indicado una ruta absoluta o relativa, se mostrará un mensaje de error.
- Si el valor tiene el prefijo `?`, el archivo es opcional y, si no existe, se ignora el error.


> En mi caso, tengo la configuración estructurada de la siguiente manera:
> ```
> # ?theme/(light-config | dark-config)
> config-file = ?theme/dark-config
> ```
> {:file="config"}
> Con esta configuración, Ghostty carga el archivo correspondiente al tema oscuro desde la carpeta `theme`, lo que permite cambiar entre configuraciones sin modificar el archivo principal.
{:.prompt-tip}

## Recargar la configuración

Cuando realizas cambios en los archivos de configuración, no es necesario reiniciar el terminal para aplicarlos. Ghostty permite recargar la configuración en tiempo de ejecución mediante un atajo de teclado.

De forma predeterminada, las combinaciones son:

* <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>,</kbd> en Linux
* <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>,</kbd> en macOS

Al utilizarlas, Ghostty vuelve a leer los archivos de configuración y aplica los cambios inmediatamente.

Estas combinaciones son solo los atajos por defecto pero puedes definir uno personalizado utilizando la acción `reload_config`. Por ejemplo:

```
keybind = ctrl+alt+r=reload_config
```
{:file="config"}

Además del atajo de teclado, la configuración también puede recargarse desde el menú principal de opciones en la barra superior de la interfaz.

{% include embed/video.html src="terminal/ghostty-reload-config.webm" %}

## Personalización del terminal

Ghostty incluye de forma nativa una amplia colección de temas, por lo que no es necesario crearlos desde cero para cambiar la apariencia del terminal.

Estos temas abarcan variantes claras, oscuras y estilos inspirados en paletas populares.

### Previsualizar temas

Una de las ventajas es que puedes previsualizar los temas directamente sin necesidad de ir probando uno a uno, usa el siguiente comando:

```terminal
ghostty +list-themes
```
{:.typing}

![Previsualizar temas](terminal/ghostty-list-themes.webp)

De esta forma puedes ver cómo se verá el terminal sin cambiar aún tu configuración principal. Una vez elegido, puedes establecerlo en tu archivo de configuración indicando el nombre del tema correspondiente. Por ejemplo:

```
theme = "Nombre del tema"
```
{:file="config"}

Luego, al recargar la configuración, el cambio se aplicará de inmediato.

### Previsualizar fuentes

Ghostty funciona con cualquier fuente instalada en el sistema, por lo que puedes utilizar tipografías monoespaciadas orientadas a programación, incluidas aquellas con ligaduras.

Al igual que con los temas, puedes listar las fuentes detectadas por Ghostty mediante un comando:

```terminal
ghostty +list-fonts
```
{:.typing}

Este comando muestra las fuentes disponibles para que puedas verificar el nombre exacto que debes usar en la configuración.

![Previsualizar fuentes](terminal/ghostty-list-fonts.webp)

Una vez elegida, puedes definirla en el archivo de configuración indicando su nombre. Por ejemplo:

```
font-family = "Nombre de la Fuente"
```
{:file="config"}

Después de guardar los cambios, basta con recargar la configuración para aplicar la nueva tipografía sin reiniciar el terminal.

## Paleta de comandos

Ghostty incluye una paleta de comandos integrada que permite ejecutar acciones y acceder a funciones del terminal de forma rápida sin necesidad de recordar atajos específicos.

La paleta se puede abrir mediante el atajo predeterminado:

* <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> en Linux
* <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> en macOS

Al activarla, aparece un cuadro de búsqueda donde puedes escribir el nombre de la acción que deseas ejecutar.

![Abriendo paleta de comandos](terminal/ghostty-open-command-palette.webp)

La paleta de comandos facilita el acceso a distintas funcionalidades, por ejemplo:

* Ejecutar acciones internas del terminal
* Cambiar configuraciones rápidamente
* Acceder a opciones sin navegar por menús
* Disparar comandos disponibles según el contexto

Este enfoque permite trabajar de forma más ágil, especialmente cuando no recuerdas un atajo o quieres explorar las capacidades disponibles.

{% include circle-line.html %}

Esto sería todo sobre Ghostty por ahora. A medida que el proyecto siga evolucionando, seguramente aparecerán nuevas funcionalidades y ajustes que valdrá la pena explorar en futuras actualizaciones.

![Ghostty](terminal/ghostty.webp)
_👻👻👻👻_