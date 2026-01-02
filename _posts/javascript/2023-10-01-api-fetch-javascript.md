---
title: "JavasScript - Api Fetch" 
categories: ["JavaScript", "JavaScript-APIs"]
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


## Formas de procesar promesas

Tenemos como ya mencionamos anteriormente dos foras de consumir la promesa.

{% tabs consumir_promesas %}
{% tab consumir_promesas Método <code>then()</code> %}
a
{% endtab %}
{% tab consumir_promesas Vía <code>async/await</code> %}
b
{% endtab %}
{% endtabs %}