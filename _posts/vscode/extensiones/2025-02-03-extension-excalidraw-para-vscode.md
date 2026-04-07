---
title: "VS Code: Excalidraw, extensión para dibujar esquemas y diagramas"
categories: ["Visual Studio Code", "VSCode_01-Extensiones"]
badge: vscode
---

Esta extensión es una __integración no oficial__ para usar la herramienta de diagramación [Excalidraw](https://excalidraw.com/){:target='_blank'} en VS Code y dibujar directamente dentro del editor.

> Además, una ventaja importante es que puedes trabajar con múltiples archivos de forma simultánea, guardando distintos diagramas dentro de un directorio. A diferencia de la versión web, donde normalmente trabajas sobre un solo archivo a la vez, aquí puedes abrir y editar varios sin problemas dentro de VS Code.
{:.prompt-tip}

## 1. Instalación

1. Abre Visual Studio Code
2. Cambia a Extensiones
3. Busca: `Excalidraw` (autor: pomdtr)

![Extensión Excalidraw](vscode/extension-excalidraw-vscode.webp){:.rounded}

O puedes abrir su página en el Marketplace y añadirlo:

{% include vscode-extension.html logo="https://pomdtr.gallerycdn.vsassets.io/extensions/pomdtr/excalidraw-editor/3.9.1/1770383100526/Microsoft.VisualStudio.Services.Icons.Default" name="Excalidraw" description="Esta extensión integra Excalidraw en VS Code, permite diagramas y dibujar directamente en el editor." url="https://marketplace.visualstudio.com/items?itemName=pomdtr.excalidraw-editor" %}

## 2. Crear archivos para Excalidraw

Para habilitar la pizarra y comenzar a dibujar, solo necesitas crear un archivo con la extensión `.excalidraw` o `.excalidraw.png`. Al abrirlo, se mostrará automáticamente la interfaz visual.

{% include embed/video.html src="vscode/crear-archivo-excalidraw.webm" %}

## 3. Guardar y exportar

Puedes guardar los archivos `.excalidraw` o exportar tus dibujos a imágenes `.png` o vectoriales `.svg`.

- [x] Para guardar de forma rápida utiliza el atajo <kbd>Ctrl</kbd> + <kbd>S</kbd>.
- [x] Para expotar a otro formato utiliza el atajo <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd> .

{% include embed/video.html src="vscode/guardar-y-exportar-excalidraw-a-png.webm" %}

## 4. Configuración adicional

Podemos cambiar la apariencia y el idioma de la interfaz a través de la configuración de VS Code en el archivo `setting.json`

### 4.1 Alternar entre tema claro y oscuro

Desde la interfaz, en la parte superior, encontrarás un botón que permite alternar entre tres opciones:

* Claro (predeterminado)
* Oscuro
* Automático (se sincroniza con el tema de VS Code en uso)

![Alternar entre tema claro y oscuro](vscode/extension-excalidraw-alternar-tema.webp){:.rounded}

También puedes cambiar el tema desde el archivo `settings.json`:

![Cambiar el tema](vscode/vscode-cambiar-tema-de-excalidraw-desde-la-configuracion.webp){:.rounded}

## 4.2 Cambiar el idioma de la interfaz

De forma predeterminada, la extensión utiliza la configuración de VS Code, si el editor está en inglés la integración de Excalidraw se configura con ese idioma. Para cambiar el idioma, abrimos nuevamente el archivo `settings.json` y definir el código regional en `excalidrar.languaje`. Por ejemplo, cambiar el español:

```json
  "excalidrar.languaje": "es-ES"
```
{:file="settings.json" .nolineno .typing}

![Cambiar el idioma](vscode/extension-excalidraw-cambiar-idioma.webp){:.rounded}

## 5. Importar bibliotecas públicas

Puedes importar bibliotecas públicas desde [libraries.excalidraw.com](https://libraries.excalidraw.com/){:target='_blank'}  que son un conjunto de elementos reutilizables (dibujos, íconos, formas, diagramas, etc.). Para ver todas las bibliotecas, haz clic en el botón __"Explorar bibliotecas"__:

![Explorar bibliotecas](vscode/explorar-bibliotecas-en-excalidraw.webp){:.rounded}

Luego, puedes agregar las que necesites. A continuación, se puede observar cómo se hace:

{% include embed/video.html src="vscode/importar-bibliotecas-excalidraw-en-vscode.webm" %}

## 6. Tip para productividad


### 6.1 Split del editor

Podemos dividir el editor en VS Code para visualizar y editar varios archivos de forma simultánea. Esto resulta muy cómodo, ya que permite trabajar en paralelo y arrastrar elementos dentro de la misma instancia, evitando tener que abrir y cerrar archivos constantemente, especialmente cuando los diagramas o contenidos comparten elementos.

![Split down](vscode/excalidraw-split-down.webp){:.rounded}

### 6.2 Usar la paleta de comandos

Podemos usar la paleta de comandos para crear un nuevo que es más rápido de llegar a la interfaz para comenzar a dibujar
