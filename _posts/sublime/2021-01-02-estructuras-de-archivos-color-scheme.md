---
title: "Estructura de un archivo .sublime-color-scheme"
categories: ["Editores, IDEs", SublimeText]
icon: icon/sublime.svg
image: poster/sublimetext.webp
tags: [sublime-text, configuracion]
scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js
---

## Dónde se guardan estos archivos

Sublime Text carga los esquemas desde dos lugares. La aplicación incluye sus propios esquemas dentro de los paquetes instalados, normalmente comprimidos en archivos `.sublime-package`. Sin embargo, cualquier modificación o esquema personalizado debe colocarse en la carpeta del usuario, ya que Sublime siempre prioriza esa ruta sobre lo que venga preinstalado. 

{% tabs sublime_user_package %}
{% tab sublime_user_package Windows %}
En sistemas Windows por lo general se ubica en `%AppData%/Roaming/Sublime Text/Packages/User/`:
<pre><code class="language-cmd">{% include copyButton.html %} C:\Users\mcherrera&gt; <span class="hl">cd %AppData%\Roaming\Sublime Text\Packages\User</span>
</code></pre>
Otra forma de llegar a la carpeta es buscarla desde el editor:
![Browse Package](sublime/windows-browse-packages.webp){:.drop-shadow}
{% endtab %}
{% tab sublime_user_package Linux %}
En Linux en `~/.config/sublime-text/Packages/User/`:
```terminal
cd ~/.config/sublime-text/Packages/User/
```
{% endtab %}
{% tab sublime_user_package macOS %}
En macOS dentro de `~/Library/Application Support/Sublime Text/Packages/User/`:
```terminal
cd ~/Library/Application\ Support/Sublime\ Text/Packages/User/
```

Otra forma de llegar a la carpeta es buscarla desde el editor:
![Browse Package](sublime/macos-browse-packages.webp)
{% endtab %}
{% endtabs %}

Basta crear un archivo nuevo con extensión `.sublime-color-scheme` en esa carpeta para que Sublime lo reconozca inmediatamente (aunque nos advertirá que tiene errores). Te sugiero arrastrar la carpeta al editor para poder editar el archivo de manera más rápida y sencilla:
 
![Move folder user](sublime/move-folder-user-to-sidebar.webp){:.drop-shadow}

Lo primero que podemos hacer es definir un nombre para este nuevo esquema:

```json
{
    "name": "Demo Color Scheme"
}
```
{: file="demo.sublime-color-scheme" .nolineno}

## Seleccionar el esquema de colores

Para seleccionar un **esquema de colores** en Sublime Text tienes 3 formas de hacerlo:

### 1. Desde el menú (el más fácil)

1. Abre **Sublime Text**
2. Ve a **Preferences**
3. Haz clic en **Color Scheme…**
4. Se abrirá una lista de temas instalados
5. Selecciona el esquema

![Seleccionar esquema](sublime/select-demo-scheme.webp)


### 2. Desde Command Palette

1. Presiona <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> (o <kbd class="command-icon">Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> en macOS)
2. Escribe: **UI: Select Color Scheme**
3. Enter
4. Selecciona el esquema de colores

### 3. Editando el archivo de preferencias

Si quieres establecer el esquema por el nombre exacto:

1. Ve a **Preferences → Settings**
2. En la parte derecha agrega/modifica esto:

```json
{
    "color_scheme": "demo.sublime-color-scheme",
}
```
{: file="Preferences.sublime-settings"}


## Secciones del archivo

### 1. Variables

La sección `variables` actúa como la paleta interna del esquema y permite declarar colores reutilizables para todo el archivo. Su función es centralizar valores y evitar repetir definiciones en cada regla. Sublime admite colores en formato hex, rgba y funciones como `blend()` o `alpha()`. A continuación, se muestra un ejemplo típico de cómo se declaran colores base y derivados:

```json
{
  "name": "Demo Color Scheme",
  "variables": {
    "background": "#1e1e1e",
    "foreground": "#d4d4d4",
    "accent": "#569cd6",
    "accentDim": "alpha(var(accent), 0.6)",
    "stringColor": "#ce9178"
  }
}
```
{: file="demo.sublime-color-scheme" .nolineno }

### 2. Globals

La sección `globals` define el comportamiento visual general del editor, determinando el fondo, el color principal del texto, las selecciones, el cursor, las guías y los resaltados de búsqueda. No depende de ninguna sintaxis: se aplica a todo el documento abierto. Un ejemplo habitual describe el ambiente completo del editor:

```json
  "globals": {
    "background": "var(background)",
    "foreground": "var(foreground)",
    "caret": "var(accent)",
    "selection": "var(accentDim)",
    "line_highlight": "alpha(var(accent), 0.15)",
    "guide": "#333333",
    "active_guide": "var(accent)"
  }
```
{: file="demo.sublime-color-scheme" .nolineno }

### 3. Rules

La sección `rules` es donde realmente se define cómo se colorean los distintos elementos del código según los *scopes* que asigna Sublime Text. Cada regla modifica un componente sintáctico específico, como cadenas, palabras clave, comentarios o funciones. El sistema acepta múltiples propiedades como `foreground`, `font_style`, `background` y funciones de color. Un conjunto de reglas básico podría verse así:

```json
  "rules": [
    {
      "scope": "comment",
      "foreground": "#6a9955",
      "font_style": "italic"
    },
    {
      "scope": "string",
      "foreground": "var(stringColor)"
    },
    {
      "scope": "keyword",
      "foreground": "var(accent)",
      "font_style": "bold"
    },
    {
      "scope": "entity.name.function",
      "foreground": "#dcdcaa"
    }
  ]
```
{: file="demo.sublime-color-scheme" .nolineno }

## Estructura completa de ejemplo

A modo de referencia, este es un `.sublime-color-scheme` funcional, limpio y listo para usarse en cualquier instalación:

```json
{
  "variables": {
    "background": "#1e1e1e",
    "foreground": "#d4d4d4",
    "accent": "#569cd6",
    "stringColor": "#ce9178"
  },

  "globals": {
    "background": "var(background)",
    "foreground": "var(foreground)",
    "caret": "var(accent)",
    "selection": "alpha(var(accent), 0.25)"
  },

  "rules": [
    {
      "scope": "comment",
      "foreground": "#6a9955",
      "font_style": "italic"
    },
    {
      "scope": "string",
      "foreground": "var(stringColor)"
    },
    {
      "scope": "keyword",
      "foreground": "var(accent)",
      "font_style": "bold"
    },
    {
      "scope": "entity.name.function",
      "foreground": "#dcdcaa"
    }
  ]
}
```


## Más esquemas para sublime

A continuación, puedes ver varios archivos de ejemplo para utilizar en sublime:

{% include file-viewer.html files=site.data.sublime.color_scheme name="esquemas" %}
