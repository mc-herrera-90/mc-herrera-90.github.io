---
title: Bootstrap - Botones
categories: [Bootstrap, Componentes]
icon: techs/bootstrap.svg
---

<div style="text-align: center;" markdown="1">
  ❤️{% include {{ page.icon }} %}{:style="width:190px; margin:20px auto;"}
</div>


# Uso de botones en Bootstrap

Los botones son uno de los componentes más utilizados en cualquier interfaz web. En Bootstrap, los botones vienen listos para usar, con estilos consistentes, accesibles y fáciles de personalizar, lo que permite mantener una interfaz coherente sin escribir reglas CSS desde cero.

En este post veremos cómo funcionan los botones en Bootstrap, qué clases existen y combinarlos de diferentes maneras.

## 1. Botón básico

El punto de partida es la clase `.btn`.
Sin esta clase, Bootstrap no aplica ningún estilo especial al elemento.

```html
<button class="btn">Botón</button>
```
{: .nolineno .fit-content }

Por sí sola, `.btn` aplica:

* padding consistente
* tipografía correcta
* borde y alineación básica

Normalmente, esta clase se combina con una variante de estilo.

## 2. Variantes de botones

Bootstrap ofrece distintas variantes para representar acciones con diferente nivel de importancia.

{% tabs codigo_1 %}
{% tab codigo_1 Código %}
```html
<button class="btn btn-primary">Primario</button>
<button class="btn btn-secondary">Secundario</button>
<button class="btn btn-success">Éxito</button>
<button class="btn btn-danger">Peligro</button>
<button class="btn btn-warning">Advertencia</button>
<button class="btn btn-info">Información</button>
<button class="btn btn-light">Claro</button>
<button class="btn btn-dark">Oscuro</button>
```
{: .nolineno }
{% endtab %}
{% tab codigo_1 Preview %}
<button class="btn btn-primary">Primario</button>
<button class="btn btn-secondary">Secundario</button>
<button class="btn btn-success">Éxito</button>
<button class="btn btn-danger">Peligro</button>
<button class="btn btn-warning">Advertencia</button>
<button class="btn btn-info">Información</button>
<button class="btn btn-light">Claro</button>
<button class="btn btn-dark">Oscuro</button>  
{% endtab %}
{% endtabs %}


Uso recomendado:

* **Primary**: acción principal
* **Secondary**: acción alternativa
* **Danger**: acciones destructivas (eliminar, borrar)
* **Success**: confirmaciones

## 3. Botones tipo enlace

Bootstrap permite estilizar enlaces como botones, útil cuando la acción es navegación.

{% tabs codigo_2 %}
{% tab codigo_2 Código %}
```html
<a href="/about" class="btn btn-primary">
  Ir a mi perfil
</a>
```
{:.nolineno }
{% endtab %}
{% tab codigo_2 Preview %}
<a href="/about" class="btn btn-primary">
  Ir a mi perfil
</a>
{% endtab %}
{% endtabs %}



Visualmente es un botón, semánticamente sigue siendo un enlace.

## 4. Botones outline

Las variantes `outline` muestran solo el borde, ideales para acciones secundarias o menos invasivas.

```html
<button class="btn btn-outline-primary">Primario</button>
<button class="btn btn-outline-danger">Eliminar</button>
```
{: .nolineno }

Son especialmente útiles cuando hay muchos botones en pantalla.

---

## 5. Tamaños de botones

Bootstrap permite definir tamaños de forma simple:

```html
<button class="btn btn-primary btn-sm">Pequeño</button>
<button class="btn btn-primary">Normal</button>
<button class="btn btn-primary btn-lg">Grande</button>
```

Esto ajusta padding y tamaño de fuente automáticamente.

---

## 6. Botones deshabilitados

Para desactivar un botón:

```html
<button class="btn btn-primary" disabled>
  Deshabilitado
</button>
```

En enlaces:

```html
<a class="btn btn-primary disabled" aria-disabled="true">
  Deshabilitado
</a>
```

Bootstrap aplica estilos visuales y mantiene accesibilidad básica.


## 7. Botones como acciones de componentes

Los botones se integran directamente con otros componentes de Bootstrap, como modales, colapsables o dropdowns, usando atributos `data-bs-*`.

Ejemplo: abrir una modal.

```html
<button
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal">
  Abrir modal
</button>
```
{:.nolineno }

En este caso, **no es necesario JavaScript adicional**.


## 8. Grupos de botones

Para agrupar acciones relacionadas:

```html
<div class="btn-group" role="group">
  <button class="btn btn-primary">Izquierda</button>
  <button class="btn btn-primary">Centro</button>
  <button class="btn btn-primary">Derecha</button>
</div>
```
{:.nolineno}

<div class="btn-group" role="group">
  <button class="btn btn-primary">Izquierda</button>
  <button class="btn btn-primary">Centro</button>
  <button class="btn btn-primary">Derecha</button>
</div>

Esto mantiene alineación y bordes coherentes.

## 9. Recomendaciones

* No uses demasiados botones `btn-primary` en una misma vista
* Usa `outline` para acciones secundarias
* Mantén coherencia en tamaños
* No abuses de colores llamativos para acciones triviales
* Prefiere `<button>` para acciones y `<a>` para navegación


{% include circle-line.html %}

Los botones en Bootstrap ofrecen una solución rápida, consistente y accesible para manejar acciones en la interfaz. Con solo combinar clases, puedes cubrir la mayoría de los casos sin escribir CSS ni JavaScript adicional.

Dominar su uso permite crear interfaces limpias y bien estructuradas desde el inicio.

