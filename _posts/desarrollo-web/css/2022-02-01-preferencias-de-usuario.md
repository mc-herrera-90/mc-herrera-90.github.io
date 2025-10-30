---
title: "Preferencias del usuario"
categories: [Desarrollo Web, CSS]
image:
    path: poster/css-preferencias-de-usuario.webp
    lqip: data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAADQAwCdASoUAAsAPzmGulOvKSWisAgB4CcJZQAAXePs9LXwKgyvdhAA/qKO4NLDMIuCmoifxIYMfEXWhxL24JC/CoCfMN3eN9ptb9YzdFAIIj00IeuqlL3kpVgboql+37aBs2iaKAAAAA==
---

Cuando trabajamos con las [_medias queries_](https://developer.mozilla.org/es/docs/Web/CSS/CSS_media_queries/Using_media_queries){:target="_blank"} no solo es para adaptar estilos a diferentes tamaños de pantalla, estas también nos permiten tener en cuenta las __preferencias del usuario__ definidas en su sistema operativo o navegador. Estas reglas especiales con `@media` nos permiten personalizar la experiencia según condiciones como el modo oscuro, la reducción de movimiento o el contraste elevado, respetando así las necesidades o gustos del usuario.

Veamos algunas reglas de __preferencias de usuario__ que existen:

| Preferencia (`@media`)         | Valores posibles                                   | Descripción                                                                               |
| ------------------------------ | -------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `prefers-color-scheme`         | `light` / `dark`                                   | Detecta si el usuario prefiere una interfaz clara o en modo oscuro.                       |
| `prefers-reduced-motion`       | `reduce` / `no-preference`                         | Indica si el usuario prefiere reducir animaciones y transiciones para evitar molestias.   |
| `prefers-reduced-transparency` | `reduce` / `no-preference`                         | Sugerencia del usuario para reducir efectos de transparencia (limitado soporte).          |
| `prefers-contrast`             | `no-preference` / `high` / `low` / `more` / `less` | Detecta si el usuario solicita mayor o menor contraste en la interfaz.                    |
| `inverted-colors` (obsoleto)   | `none` / `inverted`                                | Indica si los colores están invertidos a nivel del sistema (poco soporte, reemplazado).   |
| `forced-colors`                | `none` / `active`                                  | Detecta si el sistema fuerza una paleta de colores específica (útil para alto contraste). |
| `prefers-reduced-data`         | `reduce` / `no-preference`                         | Indica si el usuario desea limitar el uso de datos, útil para imágenes pesadas o video.   |
| `update`                       | `none` / `slow` / `fast`                           | Indica la frecuencia con la que el dispositivo puede actualizar visualmente la pantalla.  |
| `dynamic-range`                | `standard` / `high`                                | Indica si el usuario tiene un dispositivo que soporta alto rango dinámico (HDR).          |

## Dark mode / Light mode

Una de las características más recurrentes en interfaces de usuario es la posibilidad de elegir un __dark mode__ o __light mode__, es decir, un sistema que permita al usuario seleccionar un __tema claro__ (generalmente con fondo blanco) o un __tema oscuro__ (generalmente con fondo negro).

Aunque podemos hacer esto de forma __manual__, existe una regla `@media` especial denominada `prefers-color-scheme` donde podemos detectar si el usuario tiene preferencia por uno de estos dos valores (establecido en las opciones del sistema operativo) y ofrecer un tema con un esquema de colores apropiado.

Las reglas de __preferencias de usuario__ se utilizan como una media query normal, indicando el valor en cuestión y aplicándole estilos CSS. A continuación, observa este ejemplo donde adaptamos los estilos de una página web según la preferencia del usuario para el __modo oscuro__.

```css
@media (prefers-color-scheme: dark) {
  :root {
    --foreground-color: white;
    --background-color: black;
  }
}

body {
  background: var(--background-color, white);
  color: var(--foreground-color, black);
}
```
{:.nolineno file="estilos.css"}

Como puedes observar, hemos establecido para toda la página, con la pseudoclase `:root`, las variables CSS `--foreground-color` y `--background-color` sólo para aquellos usuarios que tengan establecido esta preferencia en su sistema operativo.

## Función light-dark()

Si buscas algo más rápido y práctico, tienes la función `light-dark()`. Esta función nos permite indicar rápidamente dos valores como parámetro y establecerá el que corresponda dependiendo de la preferencia del usuario:

```css
body {
  background: light-dark(white, black);
  color: light-dark(black, white);
}
```
{: .nolineno file="estilos.css"}

## Movimiento reducido

Las interfaces modernas en la actualidad sueles apostar por diseños con animaciones y transiciones que hacen más agradables los cambios de estado y acciones específicas en una web. Sin embargo, por cuestiones de accesibilidad estas animaciones también pueden suponer molestias a usuarios que son especialmente sensibles a este tipo de estímulos.

En CSS tenemos una característica que permite notificar al desarrollador web si un usuario ha elegido en su sistema que prefiere eliminar o desactivar este tipo de animaciones o transiciones, mediante `prefers-reduced-motion`, la cuál tiene los valores `no-preference` o `reduce`:


```css
@media (prefers-reduced-motion: reduce) {
  :root {
    --animation-timing: 0s;
  }
}

.button {
  box-shadow: 0 0 10px 5px #000a inset;
  background: red;
  border-radius: 5px;
  transition: transform var(--animation-timing, 2s);
}

.button:hover {
  transform: scale(1.1);
}
```
{:.nolineno file="estilos.css"}

## Ancho de banda reducido

De la misma forma que en ejemplos anteriores, el usuario puede preferir usar su __ancho de banda disponible__ de forma reducida, evitando así descargas que consuman gran cantidad de datos, con su correspondiente gasto que en ciertas situaciones puede ser limitado.

La característica `prefers-reduced-data` nos permite recuperar del sistema o navegador del usuario la opción `reduce` o `no-preference` para saber que preferencia tiene seleccionada. De esta forma podemos crear estilos donde se establezcan imágenes de bajo tamaño, o incluso utilizar fondos con __gradientes__ o colores sólidos en lugar de imágenes.


```css
@media(prefers-reduced-data: reduce) {
  :root {
    --preferred-background: linear-gradient(120deg, steelblue, blue, black);
  }

  body {
    background: var(--preferred-background, url(/assets/background.png));
  }
}
```
{: .nolineno file="estilos.css"}

## Efectos de transparencia reducidas

De la misma forma que las preferencias anteriores, podemos indicar en nuestro sistema que preferimos interfaces de usuario donde __no se utilicen transparencias__ o elementos traslúcidos, ya que muchas veces dificultan la visión o lectura, y puede resultar molestoso.

Con esta media query, deberíamos poder modificar la opacidad de los elementos para retirar la opacidad.

Como los ejemplos anteriores, se recomienda el uso de variables para que sea más sencillo:

```css
@media (prefers-reduced-transparency: reduce) {
  :root {
    --opacity: 100%;
  }
  
  body {
    background: linear-gradient(200deg, black, peru, hotpink);
  }
  
  .container {
    background: rgb(0% 0% 100% / var(--opacity, 15%));
    padding: 0.5rem 2rem;
  }
}
```
{: .nolineno file="estilos.css" }

{% include circle-line.html %}

Adaptar nuestros estilos a las preferencias del usuario no solo es una buena práctica, se trata de __ser más empáticos__ con los usuarios. La accesibilidad no se trata solo de cumplir reglas, sino de construir experiencias que se sientan cómodas, inclusivas y pensadas para todos. Pequeños gestos, como respetar el modo oscuro o reducir las animaciones, pueden marcar una gran diferencia en la experiencia de quien visita nuestro sitio.