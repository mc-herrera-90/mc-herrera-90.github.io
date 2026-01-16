---
title: "JavaScript: Api Fetch"
badge: javascript
categories: ["JavaScript", "JavaScript-APIs"]
tags: [javascript, apis]
---

**Fetch** es el nombre de una API moderna de JavaScript que nos permite realizar peticiones HTTP de forma asíncrona utilizando **promesas**. Gracias a esto, podemos escribir código más limpio, legible y fácil de mantener en comparación con métodos tradicionales como `XMLHttpRequest`. Además, Fetch se integra con `async` y `await`, lo que facilita el manejo de respuestas y errores al trabajar con datos provenientes de servidores.

## ¿Cómo usar Fetch?

La forma de realizar una petición con `fetch`es muy sencilla, básicamente se trata de llamar a `fetch` y pasarle por parámetro la URL de la petición a realizar:

```js
const promise = fetch("/data/colaboradores.json")

promise.then(function(response) {
   /* --- */ 
})

// O más abreviado con arrows functions
promise.then((response) => /* ... */)
```

Fetch devolverá una promesa (`PROMISE`) que será aceptada cuando reciba una respuesta y sólo será rechazada si hay un fallo de red o si por alguna razón no se pudo completar la petición (ej. URl incorrecta).

El modo más habitual de manejar las promesas es utilizando el método `.then()`, aunque también se puede utilizar `async/await`. Esto se suele reescribir de la siguiente forma, que queda mucho más simple y evitamos constantes o variables de un solo uso:

```js
fetch("/data/colaboradores.json")
    .then(function(response) {
        /* Código que procesa la respuesta */ 
    })
```

## Procesar respuestas

Por otra parte, la instancia `response` también cuenta con varios **métodos** interesantes. La mayoría de ellos permiten procesar, mediante promesas, los datos recibidos en la respuesta, facilitando así su manipulación y uso con JavaScript.


|Método|Retorno|Descripción|
|:-----|:------|:----------|
|`.text`|<span class="badge bg-warning text-dark">String</span>|Devuelve una promesa con el texto plano de la respuesta.|
|`.json()`|<span class="badge bg-primary">Object</span>|Devuelve un objeto `json` equivalente a usar `JSON.parse()`.|
|`.blob()`|<span class="badge bg-primary">Object</span>|Devuelve un objeto `Blob` (binary large object).|
|`.arrayBuffer()`|<span class="badge bg-primary">Object</span>|Devuelve un objeto `ArrayBuffer` (buffer binario puro).|
|`.formData()`|<span class="badge bg-primary">Object</span>|Devuelve un objeto `FormData` (datos de formularios).|
|`.clone()`|<span class="badge bg-primary">Object</span>|Crea y devuelve un clon de la instancia `response`.|
|`Reponse.redirect(url, code)`|<span class="badge bg-primary">Object</span>|Redirige a una URL, opcionalmente con un código de error.|


## Formas de consumir promesas

Tenemos dos formas principales que ya mencionamos anteriormente.

{% tabs consumir_promesas %}
{% tab consumir_promesas Usando <code>then()</code> %}
El siguiente ejemplo es más completo que los casos anteriores.

```js
fetch("/api/users")
  .then(response => {
    if (response.ok)
      return response.json();

    throw new Error(response.status);
  })
  .then(data => {
    console.log("Datos: " + data);
  })
  .catch(err => {
    console.error("ERROR: ", err.message)
  });
```
{:.nolineno}

__Explicación:__
- Comprobamos que la petición es correcta con `response.ok`
- Utilizamos `response.json()` para procesarla
- En el caso de producirse algún error, lanzamos la excepción con el código de error (`response.status`)
- Procesamos los datos y los mostramos en la consola
- En el caso de que la `PROMISE` sea rechazadada, capturamos el error con `catch`
- Si ocurre un error `404`, `500` o similar, lanzamos el error con `throw` para capturarlo en el `catch`.
{% endtab %}
{% tab consumir_promesas Usando <code>async/await</code> %}
Utilizar `async/await` no es más que lo que se denomina __azúcar sintáctico__, es decir, utilizar algo visualmente agradable, pero por debajo realiza la misma tarea.

> Lo que debemos tener siempre presente es que `await` sólo se puede ejecutar si esta dentro de una función definida como `async`.
{: .prompt-info }

```js
async function load(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(res.status);
  return response.text();
}

try {
  console.log(await load("/data.txt"));
  console.log(await load("/no-file.txt"));
} catch (e) {
  console.error("Error:", e.message);
}
```
{:.nolineno}

__Explicación__:

- Creamos una función `load(url)` que se define como `async`
- Invocamos a `fetch` utilizando `await` para esperar y resolver la promesa
- Comprobamos si todo a ido bien usando `response.ok`
- Invocamos a `response.text()` utilizando `await` y devolvemos el resultado
{% endtab %}
{% endtabs %}
