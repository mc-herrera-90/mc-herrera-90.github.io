---
title: "Cómo usar el Web Share API"
categories: ["Tutoriales", "JavaScript"]
category_url: "javascript/tutorial"
tags: [Tutoriales, JavaScript]
scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js
image:
  path: poster/tutorial-web-share-api.webp
  lqip: data:image/webp;base64,UklGRowAAABXRUJQVlA4WAoAAAAQAAAAEwAACwAAQUxQSDMAAAABR6CgbRuGP+L9mUZEhGWEgWratqI3CDyEhzBGkEwGGWR+/wKI6P8EnAufEDRF8R1fDTcAVlA4IDIAAACwAgCdASoUAAwAPzmEuVOvKKWisAgB4CcJYgAAeyAA/umzCIDNnnjebMD7m73QLAAAAA==
pin: true
---

Cuando interactuamos con aplicaciones móviles y usamos los botones para compartir, enviar enlaces, imágenes o textos a través de aplicaciones como WhatsApp, Facebook, o correo electrónico, es probable que ya hayas visto en acción la **Web Share API** de javaScript. Esta poderosa herramienta permite que las aplicaciones web compartan contenido de manera sencilla utilizando las funcionalidades nativas de los dispositivos.

## ¿Qué es la Web Share API?

La **Web Share API** es una interfaz que permite a las aplicaciones web acceder al sistema de compartir contenido que normalmente se encuentra disponible en aplicaciones nátivas de dispositivos móviles. Básicamente, permite a los usuarios compartir contenido (textos, enlaces, imágenes, etc.) con otras aplicaciones instaladas en su dispositivo sin tener que copiar y pegar el contenido.

### ¿Cómo funciona la Web Share API?

Cuando se utiliza `navigator.share()`, el navegador muestra una interfaz nativa que permite al usuario elegir con qué aplicación desea compartir el contenido. Esta es la forma en que los usuarios normalmente comparten enlaces en aplicaciones móviles como WhatsAPP, Telegram, Twitter, etc.

__Flujo básico de uso__:

+ [x] El usuario interactúa con un botón o enlace en tu página web. Ejemplo <kbd>Botón Compartir</kbd>.
+ [x] La función `navigation.share()` se invoca y pasa los datos a compartir (texto, enlaces, imagen, etc.).
+ [x] El navegador muestra la interfaz de compartir nativa, permitiendo al usuario elegir con qué aplicación compartir el contenido.
+ [x] El contenido se comparte a través de la aplicación seleccionada.

### ¿Cómo usar la Web Share API?

Implementar __Web Share API__ en nuestras páginas web es bastante sencillo. Aquí tenemos varios ejemplos de cómo hacerlo:

**Crear un `index.html`**

Definimos una estructura básica de documento **HTML5** y vinculamos el archivo JavaScript `index.js`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo Web Share API</title>
</head>
<body>
  <div class="container">
    <p id="tip" style="display: none">El navegador no soporta Web Share API!</p>
    <button id="share">Compartir este artículo</button>
  </div>
  <script src="index.js"></script>
</body>
</html>
```
{: file="index.html" }

**Crear un `index.js`**

```javascript
const shareBtn = document.getElementById('share');
const tip = document.getElementById('tip');

shareBtn.addEventListener('click', (event) => {
  if ("share" in navigator) {
    navigator
      .share({
        // título para la ventana compartir
        title: "Comparte este recurso en tus plataformas",
        // Si queremos compartir el recurso actual
        url: window.location.href
      })
      .then(() => {
        console.log("Recurso compartido");
      })
      .catch(console.error)
    } else {
      alert("Lo sentimos, este navegador no tiene soporte para recursos compartidos");
      tip.style.display = "block";
    }
});
```
{: file="index.js" }

El resultado lo podemos probar usando el siguiente botón:

<button id="btn-share" class="btn btn-secondary">Compartir este artículo</button>

<script>
const shareBtn = document.getElementById('btn-share');
shareBtn.addEventListener('click', (event) => {
	if ("share" in navigator) {
		navigator
			.share({
				title: "Comparte este recurso en tus plataformas",
				url: window.location.href
			})
			.then(() => {
				console.log("Recurso compartido");
			})
			.catch(console.error)
	} else {
		alert("Lo sentimos, este navegador no tiene soporte para recursos compartidos");
	}
});
</script>

### ¿Qué se puede compartir con la Web Share API?

La __Web Share API__ permite compartir diferentes tipos de datos:

- **Texto** (`text`): Cualquier cadena de texto que quieras compartir.
- **URL** (`url`): Un enlace a una página web.
- **Título** (`title`): Un título descriptivo del contenido que se está compartiendo.
- **Archivos** (`files`): En dispositivos que lo soportan, puedes compartir archivos (por ejemplo, imágenes, documentos).

## Compartir Archivos

La **Web Share API** también permite compartir archivos como parte del objeto de datos, no solo URLs. Para lograr esto, el archivo debe ser accesible como un **objeto Blob** o **File** (es decir, como un archivo binario en lugar de solo una URL).

Ahora veamos un ejemplo para compartir un archivo (este método es compatible para cualquier tipo de archivo como imágenes, pdf, etc.) con la **Web Share API**. Para ello primero, debes asegurarte que el archivo esté en una carpeta que pueda ser servida públicamente por un servidor web.


### 1. Cargar el archivo como un Blob

Para ello podemos definir una función que se encargará de realizar la carga del archivo (por ejemplo imágenes PNG, PDF, etc.):

```javascript
/**
 * Carga un archivo desde el directorio `/assets` del sitio web
 * y lo devuelve como un objeto `File`.
 *
 * @param {string} archivo - Nombre del archivo dentro de /assets (por ejemplo, "img/logo.png")
 * @returns {Promise<File>} Promesa que resuelve con un objeto File listo para usar
 */
function loadFile(archivo) {
  // Construye la ruta relativa al archivo dentro del directorio de assets
  const relativePath = `/assets/${archivo}`;

  // Determina el tipo MIME según la extensión del archivo
  const fileType = archivo.endsWith(".png")
    ? "image/png"
    : archivo.endsWith(".jpg") || archivo.endsWith(".jpeg")
    ? "image/jpeg"
    : archivo.endsWith(".gif")
    ? "image/gif"
    : archivo.endsWith(".pdf")
    ? "application/pdf"
    : "application/octet-stream"; // Tipo por defecto para archivos desconocidos

  // Realiza la petición al archivo y lo convierte a un objeto File
  return fetch(window.location.origin + relativePath)
    .then((response) => response.blob()) // Convierte la respuesta en un Blob binario
    .then(
      (blob) =>
        new File([blob], archivo, {
          type: fileType, // Define el tipo MIME del archivo
        })
    )
    .catch((error) =>
      console.error("❌ Error al cargar el archivo:", error)
    );
}

```
{: .nolineno }

### 2. Usar Web Share API para compartir

Para que funcione entonces debemos llamar a la función anterior y especificar el nombre del archivo:

```javascript
// Agrega un listener al botón o elemento con id 'share'
document.getElementById('share').addEventListener('click', function() {
  // Verifica si el navegador soporta la Web Share API y la capacidad de compartir archivos
  if (navigator.share && navigator.canShare) {
    
    // Carga el archivo desde el directorio de assets usando la función loadFile
    loadFile("image.png")
      .then(file => {
        // Una vez cargado el archivo, intenta compartirlo con la API nativa del sistema
        navigator.share({
          title: 'Mira este archivo', // Título que aparecerá en el diálogo de compartir
          text: 'Te estoy compartiendo un archivo interesante.', // Texto descriptivo del contenido
          files: [file] // El archivo a compartir (en formato File)
        })
        .then(() => {
          // Mensaje en consola si la operación de compartir fue exitosa
          console.log('Archivo compartido exitosamente');
        })
        .catch((error) => {
          // Captura y muestra errores durante el intento de compartir
          console.error('Error al compartir el archivo:', error);
        });
      })
      .catch(error => {
        // Captura errores en la carga del archivo antes de compartir
        console.error('Error al cargar el archivo:', error);
      });

  } else {
    // Muestra un aviso si la API no está disponible o no puede compartir archivos
    alert('La Web Share API no es compatible o no puede compartir archivos en este dispositivo.');
  }
});

```
{: .nolineno }

### 3. Ejemplo completo

A continuación puedes revisar el código directamente en el previsualizador del editor.

{% include file-viewer.html files=site.data.codes.js.web_share_api.sample1 name="demo1" %}

<button onclick="shareFile('img/never-stop-learning.png')" class="btn btn-primary">Compartir este archivo PNG</button>

<script>
function loadFile(archivo) {
	const relativePath = `/assets/${archivo}`;
	const fileType = archivo.endsWith('.png') ? 'image/png' :
					 archivo.endsWith('.jpg') || archivo.endsWith('.jpeg') ? 'image/jpeg' :
					 archivo.endsWith('.gif') ? 'image/gif' :
					 archivo.endsWith('.pdf') ? 'application/pdf' :
					 'application/octet-stream';

	return fetch(window.location.origin + relativePath)
            .then(response => response.blob())
            .then(blob => new File([blob], archivo, { type: fileType }))
            .catch(error => console.error('Error al cargar el archivo:', error));
}

function shareFile(archivo) {
		if (navigator.share && navigator.canShare) {
			loadFile(archivo)
				.then(file => {
						navigator.share({
						title: 'Mira este archivo',
						text: 'Te estoy compartiendo un archivo interesante.',
						files: [file]
				})
				.then(() => {
					console.log('Archivo compartido exitosamente');
				})
				.catch((error) => {
					console.error('Error al compartir el archivo:', error);
				});
			});
		} else {
			alert('La Web Share API no es compatible o no puede compartir archivos en este dispositivo.');
		}
}
</script>


#### Otro enfoque simplificado

```javascript
shareButton.onclick = async () => {
  const response = await fetch(window.location.origin + "/assets/docs/documento.pdf");
  const buffer = await response.arrayBuffer();

  const pdf = new File([buffer], "documento.pdf", { type: "application/pdf" });
  const files = [pdf];

  // Si el navegador tiene soporte para recursos compartidos
  if (navigator.canShare({ files })) await navigator.share({ files });
};
```
{: .nolineno }

<button id="share-button-pdf" class="btn btn-danger">Compartir este archivo PDF</button>

<script>
const shareButton = document.getElementById("share-button-pdf");

shareButton.onclick = async () => {
  const response = await fetch(window.location.origin + "/assets/docs/gh-cli-cheatsheet.pdf");
  const buffer = await response.arrayBuffer();

  const pdf = new File([buffer], "documento.pdf", { type: "application/pdf" });
  const files = [pdf];

  if (navigator.canShare({ files })) await navigator.share({ files });
};
</script>

## Consideraciones

### 1. Compatibilidad de la Web Share API

La Web Share API no está disponible en todos los navegadores, y su disponibilidad varía según el dispositivo y el sistema operativo. Por ejemplo:

- **Móviles**: Está soportada principalmente en dispositivos Android con navegadores como Chrome y Edge.
- **Escritorio**: Aunque algunos navegadores de escritorio como Chrome en Windows pueden soportar la API, otros (como Firefox y Safari) pueden no tener soporte completo para compartir archivos, o incluso para compartir en general.

#### **Requiere un contexto seguro (HTTPS)**

La Web Share API solo funciona en sitios servidos a través de HTTPS. Si tu web no está usando HTTPS, la API no podrá ejecutarse.

### 2. No funciona con archivos locales

La **Web Share API** requiere que el archivo esté disponible de forma accesible a través de la web (es decir, debe estar en una URL completa). Los archivos locales dentro del proyecto, como los de una ruta relativa al archivo, no son accesibles por la API, ya que la aplicación necesita que el archivo esté expuesto a través de un servidor web (y no como un recurso local).