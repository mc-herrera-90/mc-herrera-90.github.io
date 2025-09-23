---
title: "Tutorial: Cómo usar el Web Share API"
categories: ["Tutoriales", "Web"]
tags: [tutoriales, web]
image:
  path: posters/tutorial-web-share-api.webp
  lqip: data:image/webp;base64,UklGRowAAABXRUJQVlA4WAoAAAAQAAAAEwAACwAAQUxQSDMAAAABR6CgbRuGP+L9mUZEhGWEgWratqI3CDyEhzBGkEwGGWR+/wKI6P8EnAufEDRF8R1fDTcAVlA4IDIAAACwAgCdASoUAAwAPzmEuVOvKKWisAgB4CcJYgAAeyAA/umzCIDNnnjebMD7m73QLAAAAA==
pin: true
---

Cuando interactuamos con aplicaciones móviles y usamos los botones para compartir, enviar enlaces, imágenes o textos a través de aplicaciones como WhatsApp, Facebook, o correo electrónico, es probable que ya hayas visto en acción la **Web Share API** de javaScript. Esta poderosa herramienta permite que las aplicaciones web compartan contenido de manera sencilla utilizando las funcionalidades nativas de los dispositivos.

## ¿Qué es la Web Share API?

La **Web Share API** es una interfaz que permite a las aplicaciones web acceder al sistema de compartir contenido que normalmente se encuentra disponible en aplicaciones nátivas de dispositivos móviles. Básicamente, permite a los usuarios compartir contenido (textos, enlaces, imágenes, etc.) con otras aplicaciones instaladas en su dispositivo sin tener que copiar y pegar el contenido.

### __¿Cómo funciona la Web Share API?__

Cuando se utiliza `navigator.share()`, el navegador muestra una interfaz nativa que permite al usuario elegir con qué aplicación desea compartir el contenido. Esta es la forma en que los usuarios normalmente comparten enlaces en aplicaciones móviles como WhatsAPP, Telegram, Twitter, etc.

__Flujo básico de uso__:

+ [x] El usuario interactúa con un botón o enlace en tu página web. Ejemplo <kbd>Botón Compartir</kbd>.
+ [x] La función `navigation.share()` se invoca y pasa los datos a compartir (texto, enlaces, imagen, etc.).
+ [x] El navegador muestra la interfaz de compartir nativa, permitiendo al usuario elegir con qué aplicación compartir el contenido.
+ [x] El contenido se comparte a través de la aplicación seleccionada.

### __¿Cómo usar la Web Share API?__

Implementar la Web Share API en nuestras páginas web es bastante sencillo. Aquí tenemos un ejemplo de cómo hacerlo:

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

### __¿Qué se puede compartir con la Web Share API?__

La __Web Share API__ permite compartir diferentes tipos de datos:

- **Texto** (`text`): Cualquier cadena de texto que quieras compartir.
- **URL** (`url`): Un enlace a una página web.
- **Título** (`title`): Un título descriptivo del contenido que se está compartiendo.
- **Archivos** (`files`): En dispositivos que lo soportan, puedes compartir archivos (por ejemplo, imágenes, documentos).

### __Compartir Archivos__

La **Web Share API** también permite compartir archivos como parte del objeto de datos, no solo URLs. Para lograr esto, el archivo debe ser accesible como un **objeto Blob** o **File** (es decir, como un archivo binario en lugar de solo una URL).

Ahora veamos un ejemplo para compartir un archivo (este método es compatible para cualquier tipo de archivo como imágenes, pdf, etc.) con la **Web Share API**. Para ello primero, debes asegurarte que el archivo esté en una carpeta que pueda ser servida públicamente por un servidor web.

#### __Pasos__

**1. Cargar el archivo como un `Blob`**

Para ello podemos definir una función que se encargará de realizar la carga del archivo (por ejemplo imágenes PNG, PDF, ETC):

```javascript
// Función que carga el archivo desde el directorio de assets
function loadFile(archivo) {
	// Ruta relativa al archivo en tu servidor web (debe ser accesible)
	const relativePath = `/assets/${archivo}`;  // Ruta relativa al archivo
	const fileType = archivo.endsWith('.png') ? 'image/png' :
					 archivo.endsWith('.jpg') || archivo.endsWith('.jpeg') ? 'image/jpeg' :
					 archivo.endsWith('.gif') ? 'image/gif' :
					 archivo.endsWith('.pdf') ? 'application/pdf' :
					 'application/octet-stream';  // Default para otros tipos de archivo

	return fetch(window.location.origin + relativePath)
            .then(response => response.blob()) // Convierte el archivo en un Blob
            .then(blob => new File([blob], archivo, { type: fileType })) // Convierte el archivo en un objeto File
            .catch(error => console.error('Error al cargar el archivo:', error));
}
```
{: .nolineno }

**2. Usar la Web Share API para compartir**

Para que funcione entonces debemos llamar a la función anterior y especificar el nombre del archivo:

```javascript
document.getElementById('share').addEventListener('click', function() {
// Verifica si la Web Share API está disponible
    if (navigator.share && navigator.canShare) {
		// Cargar el archivo como un File
		loadFile("image.png")
			.then(file => {
				// Compartir el archivo
					navigator.share({
					title: 'Mira este archivo',
					text: 'Te estoy compartiendo un archivo interesante.',
					files: [file]  // El archivo como un array de archivos
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
});
```
{: .nolineno }

#### __Ejemplo Completo__

**Crear un `index.html`**

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
		<button id="share">Compartir este archivo</button>
	</div>
	<script src="index.js"></script>
</body>
</html>
```
{: file="index.html" }

**Crear un `index.js`**

```javascript
function loadFile(archivo) {
	const relativePath = `/assets/${archivo}`;

	return fetch(window.location.origin + relativePath)
            .then(response => response.blob())
            .then(blob => new File([blob], archivo))
            .catch(error => console.error('Error al cargar el archivo:', error));
}

document.getElementById('share').addEventListener('click', function() {
    if (navigator.share && navigator.canShare) {
		loadFile("image.png")
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
});
```
{: file="index.js" }

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


#### **Otro enfoque simplificado**

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

### **Consideraciones**

#### **Compatibilidad de la Web Share API**

La Web Share API no está disponible en todos los navegadores, y su disponibilidad varía según el dispositivo y el sistema operativo. Por ejemplo:

- **Móviles**: Está soportada principalmente en dispositivos Android con navegadores como Chrome y Edge.
- **Escritorio**: Aunque algunos navegadores de escritorio como Chrome en Windows pueden soportar la API, otros (como Firefox y Safari) pueden no tener soporte completo para compartir archivos, o incluso para compartir en general.

#### **Requiere un contexto seguro (HTTPS)**

La Web Share API solo funciona en sitios servidos a través de HTTPS. Si tu web no está usando HTTPS, la API no podrá ejecutarse.

#### **No funciona con archivos locales**

La **Web Share API** requiere que el archivo esté disponible de forma accesible a través de la web (es decir, debe estar en una URL completa). Los archivos locales dentro del proyecto, como los de una ruta relativa al archivo, no son accesibles por la API, ya que la aplicación necesita que el archivo esté expuesto a través de un servidor web (y no como un recurso local).