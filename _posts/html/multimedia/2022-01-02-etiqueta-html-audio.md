---
title: "HTML - etiqueta &lt;audio&gt;"
categories: [HTML, Html-Multimedia]
badge: html
tags: [HTML]
---

Con el lanzamiento de HTML5, el manejo de contenido multimedia en la web dio un salto enorme. Antes dependíamos de plugins como [Flash](https://es.wikipedia.org/wiki/Adobe_Flash){:target="_blank"}, que eran poco seguros y complicados. Hoy podemos integrar contenido multimedia de forma nativa compatible con casi todos los navegadores.

## Etiqueta HTML &lt;audio&gt;

En **HTML5** es posible incorporar archivos de audio de manera sencilla, ya sea para reproducir música, podcasts, efectos de sonido o incluso añadir una pista de ambientación sonora a una página web.

Ejemplo básico:

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Tu navegador no soporta la etiqueta audio.
</audio>
```
{:.nolineno}

__Resultado:__

{% include embed/audio.html src="audios/serene-piano.mp3" %}

## Atributos

Los atributos de la etiqueta `<audio>` se pueden agrupar según su propósito: hay atributos que controlan la interfaz y comportamiento del reproductor (por ejemplo, mostrar controles o repetir el sonido) y otros que afectan cómo se carga.

## Atributos de fuente y carga

|Atributo|Descripción|
|:-------|:----------|
| `src` |Ruta del archivo de audio.|
|`type`|(en `<source>`): Especifica el tipo MIME del audio.|

### Atributos de control

|Atributo|Descripción|
|:-------|:----------|
| `controls` |Muestra los controles nativos del reproductor (reproducir, pausar, volumen).|
|`controlsList`|Permite indicar qué controles mostrar u ocultar (como nodownload).|
|`autoplay`|Comienza a reproducir el audio automáticamente al cargar la página.|
|`loop`|Hace que el audio se repita en bucle.|
|`muted`|Inicia el audio silenciado.|
|`preload`|Indica cómo debe cargarse el audio (`auto`, `metadata` o `none`).|

Ejemplo:

```html
<audio controls autoplay loop muted preload="auto">
  <source src="audio.mp3" type="audio/mpeg">
</audio>
```
{:.nolineno}

## Ejemplo de uso con JavaScript

Veamos un ejemplo un poco más avanzado, el cual combina la carga del archivo en HTML y el control mediante JavaScript:

```html
<!-- Definimos el sonido sin el atributo controls para que no se muestre -->
<audio id="tecla-sound" src="key.ogg" preload="auto"></audio>
<div class="keyboard" align="center">
  <kbd data-key="q">Q</kbd>
  <kbd data-key="w">W</kbd>
  <kbd data-key="e">E</kbd>
  <kbd data-key="r">R</kbd>
  <kbd data-key="t">T</kbd>
  <kbd data-key="y">Y</kbd>
</div>
<script>
  document.addEventListener("keydown", (e) => {
    const audio = document.getElementById("tecla-sound");
    const key = e.key.toLowerCase();
    const keyElement = document.querySelector(`kbd[data-key="${key}`);
    if (keyElement) {
        audio.currentTime = 0; // reinicia el audio para que suene cada vez
        audio.play();
    }
  });
</script>
```
{: .nolineno }

En este caso, el archivo de sonido se __declara en el HTML__ con la etiqueta `<audio>`, y el control de reproducción se maneja desde JavaScript mediante el evento `keydown`.

Presiona una de las siguientes teclas para escuchar el sonido:

<style scoped>
  .keyboard kbd {
    padding: 8px 12px;
    font-size: large;
  }
  .keyboard kbd.active {
    background-color: currentColor;
    color: var(--color-bg, #fff);
    transform: scale(1.1);
    transition: all 0.15s ease;
    border-radius: 4px;
  }
</style>

<div class="keyboard" align="center">
  <kbd data-key="q">Q</kbd>
  <kbd data-key="w">W</kbd>
  <kbd data-key="e">E</kbd>
  <kbd data-key="r">R</kbd>
  <kbd data-key="t">T</kbd>
  <kbd data-key="y">Y</kbd>
</div>
<script>
  const sonido = new Audio("{{ page.media_subpath }}/audios/key.ogg"); 
  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    const keyElement = document.querySelector(`kbd[data-key="${key}"]`);
    if (keyElement) {
      keyElement.classList.add("active");
      setTimeout(() => keyElement.classList.remove("active"), 150);
      sonido.currentTime = 0;
      sonido.play();
    }
  });
</script>
