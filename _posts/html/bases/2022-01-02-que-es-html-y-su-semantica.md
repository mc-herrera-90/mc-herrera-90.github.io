---
title: "HTML: Etiquetas y semántica web"
categories: [HTML, Html-Bases]
tags: [HTML]
badge: html
---

Los navegadores, tienen varias formas de acceder al código HTML de una página:

- Pulsando la combinación de teclas <kbd>Ctrl</kbd> + <kbd>U</kbd>. Te aparecerá el __código fuente__ tal cuál lo recibe el navegador.

- Pulsando <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> y accediendo a la pestaña __Elements__, o simplemente haciendo clic derecho y seleccionar la opción __Inspeccionar__.

El documento esta formado por __etiquetas__, que son la base de _HTML_. Existen muchas etiquetas y cada una se utiliza para contener información y darle significado a dicha información, dependiendo de la etiqueta que se trate.

## Estructura de una etiqueta

Una __etiqueta__ está formada por una **etiqueta de apertura**, el **contenido** y una **etiqueta de cierre**.

{% include assets/estructura-etiqueta-html-dark.svg %}
{% include assets/estructura-etiqueta-html-light.svg %}

La __etiqueta de apertura__ indica al navegador qué tipo de elemento se va a interpretar, __el contenido__ es la información que se muestra o se procesa, y la __etiqueta de cierre__ señala dónde termina ese elemento.

```html
<etiqueta>contenido</etiqueta>
```
{:.nolineno .typing}

En _HTML_ no se puede utilizar cualquier palabra como etiqueta (como el ejemplo que utiliza la palabra «etiqueta»). En su lugar, existen una serie de etiquetas concretas, cada una de ellas con características propias.

### Ejemplo de etiqueta

A continuación, utilizamos las etiquetas `<p>` y `<strong>` para crear un párrafo y resaltar la información más importante dentro del texto.

```html
<p>Dentro de este texto, esta <strong>palabra</strong> es más importante que el resto.</p>
```
{:.typing .nolineno}

También se puede observar que se pueden anidar etiquetas (incluir etiquetas dentro de otras). Es algo que se hace continuamente en _HTML_ y se convierte en algo habitual.

## ¿Qué es la semántica?

Una de las características más importante en _HTML5_ fue introducir información en un documento _HTML5_ de forma que sea semántico y no visual. Con esto se quiere decir que todos los aspectos visuales deben dejarse para el __apartado de presentación__, que se gestiona desde el lenguaje _CSS_.

En un documento _HTML_ debe aparecer información correctamente individualizada, de modo que al leer una página comprendamos su significado, y si queremos cambiar la apariencia, lo hagamos a través de _CSS_. Esto es lo que se conoce como __separación de la presentación del contenido__.

A continuación, se muestra un layout semántico clásico de _HTML5_, representado en bloques, donde se puede observar cómo se organiza una página web de forma lógica y estructurada.

{% include assets/layout-semantico-light.svg %}
{% include assets/layout-semantico-dark.svg %}

### Ejemplo de semántica HTML

Un ejemplo donde se ve claramente este concepto es con la etiqueta `<b>` de _HTML4_ y anteriores. Dicha etiqueta se utilizaba para poner un texto en __negrita__:

```html
Hola, quiero resaltar esta <b>palabra</b>.
```
{:.nolineno .typing}

En este caso en particular, se está utilizando una propiedad de presentación en el _HTML_, algo que no se debe hacer en _HTML5_. La misión de _HTML5_ es mantener sólo contenido e información semántica. Por esa razón, la forma de hacerlo en _HTML5_ es la siguiente:

```html
Hola, quiero resaltar esta <strong>palabra</strong>.
```
{:.nolineno .typing}

> En este nuevo ejemplo, se remplaza la etiqueta `<b>` (negrita, característica de presentación) por `<strong>`, una etiqueta que indica información semántica (importante, característica semántica).
{:.prompt-info}

De esta forma, en el _HTML5_ sólo se está añadiendo información particular sobre fragmentos de texto, y si queremos dotar de presentación visual, lo haremos por medio de _CSS_.

{% include circle-line.html %}

El objetivo de crear documentos _HTML_ semánticos es que, aunque estamos acostumbrados a crear páginas para usuarios (o más concretamente, para navegadores), cada vez tendemos más a una Internet capaz de procesar información de forma autónoma. Ejemplo de ello son, por ejemplo, los robots o crawlers de los buscadores como __Googlebot__ (el robot de búsqueda de Google) que es capaz de acceder a páginas web para analizar la información de la misma, entenderla e indexarla en su buscador.