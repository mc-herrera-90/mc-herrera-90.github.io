---
title: "Web Component: Introducción a Shadow DOM"
categories: [Web Components, "WC_01-Bases"]
badge: webcomponent
---

Sin duda, uno de los conceptos más interesantes de **Web Components** y también de los que más confusos, es el **Shadow DOM**.
Para entenderlo correctamente, conviene partir por lo básico: el **DOM** (*Document Object Model*) es la representación estructural de una página web. Se organiza como un **árbol de nodos**, donde cada elemento puede tener elementos descendientes (*hijos*) y un elemento contenedor (*padre*).

Esta estructura es la que el navegador utiliza para renderizar la página y la que JavaScript manipula para modificar el contenido, los estilos o el comportamiento de la interfaz. A partir de este modelo tradicional es donde el **Shadow DOM** introduce un nuevo concepto: la posibilidad de **encapsular** parte de ese árbol, aislando estructura y estilos del resto del documento.

## ¿Qué es eso de SHADOW DOM? ![psyduck](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/54.gif){:.no-preview}

El **Shadow DOM** surge como una solución a un problema histórico del desarrollo web: la **falta de aislamiento entre los elementos de una página**. Tradicionalmente, todo el contenido del DOM comparte un mismo contexto global, lo que significa que estilos CSS, selectores o scripts pueden afectar a elementos que no deberían verse involucrados.

Para resolver esto, el Shadow DOM introduce un **mecanismo de encapsulamiento** que permite crear subárboles DOM completamente aislados del documento principal. Estos subárboles tienen su propio alcance de estilos y estructura interna, evitando colisiones con el resto de la página y permitiendo construir componentes más predecibles y reutilizables.

Quizás, la forma más fácil de entender el concepto de **Shadow DOM**, es haciendo una analogía precisamente a lo que su propio nombre indica, **una sombre de un elemento**:

![shadow dom](webcomponent/shadowdowm-light.webp){:.light}
![shadow dom](webcomponent/shadowdowm-dark.webp){:.dark}

Aunque el **Shadow DOM** está vinculado a un elemento del DOM principal, su contenido permanece aislado. Esto significa que su estructura interna no es accesible directamente desde el árbol global y se rige por sus propias reglas de encapsulamiento.

Una de las consecuencias más importantes de este enfoque aparece en el manejo de **CSS**. Los estilos definidos dentro del Shadow DOM **no afectan a los elementos externos**, y del mismo modo, los estilos globales de la página **no influyen en los elementos internos** del Shadow DOM. Este aislamiento elimina conflictos comunes de estilos y permite crear componentes más robustos, predecibles y reutilizables.

## ¿Qué es el Virtual DOM?

Aunque tiene cierta relación, el concepto de **Virtual DOM** (*o VDOM*) no es una alternativa directa de **Shadow DOM**, pero muchas veces se suelen asociar, ya que debido a sus nombres se suele intuir que son cosas similares o alternativas.

Durante la aparición de los diferentes **frameworks** del ecosistema javascript, estos idearon un concepto denominado **Virtual DOM**, una copia en memoria del **DOM** de la página, donde se gestionarían directamente los cambios del mismo, para traducirlos posteriormente al **DOM** real del documento, con el objetivo de acelerar y optimizar los cambios del **DOM** de la página.

Por ejemplo, la popular librería <a href="https://es.react.dev/" target="_blank">React</a> introducía el concepto de **Virtual DOM** para detectar los cambios (*diferencias entre árboles*), actualizar los nodos afectados (*cambios y descendientes a quienes pueden afectar*) y posteriormente, actualizar en el **DOM** real, consiguiendo dos cosas principales, **velocidad** y abstraer de estos cambios para hacerlos de forma automática y menos tediosa:

## ¿Cómo crear un Shadow DOM?

Por defecto, los elementos _HTML_ no tienen **Shadow DOM**. Pero si queremos crear uno y adjuntarlo a un elemento **HTML**, no tenemos más que utilizar el método **`.attachShadow()`** sobre el elemento donde queremos crear el **Shadow DOM**.

<table class="table">
	<thead class="thead-js shadow">
		<th>Método</th>
		<th>Descripción</th>
	</thead>
	<tbody>
		<tr>
			<th><span class="badge text-light" style="background: #638">shadowroot</span><br><code>element.attachShadow(</code><span class="badge badge-primary">object</span> options<code>)</code></th>
			<td>Crea y adjunta un <strong>Shadow DOM</strong> en un elemento.</td>
		</tr>
	</tbody>
</table>

En lo que vemos ejemplos, explicaré el parámetro obligatorio **options** y algunas características más, sin embargo para empezar, con este método podríamos crear un **Shadow DOM** utilizando el siguiente fragmento de código:  

```js
const div = document.createElement("div");
const shadow = div.attachShadow({ mode: "open" });
```
{:.nolineno .typing}

En la primera línea creamos un elemento <span class="tag">div</span> desde javascript. También podríamos seleccionar un elemento existente mediante por ejemplo **`querySelector()`**. En este elemento es donde vamos a crear un **DOM** particularmente llamado **Shadow DOM**.
