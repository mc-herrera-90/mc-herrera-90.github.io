---
title: "Optimización de imágenes"
description: "Acelerar la carga de tus sitios web optimizando correctamente tus imágenes"
categories: ["Tutoriales", "Web"]
image:
    path: poster/tutorial-optimizacion-de-imagenes.webp
    lqip: data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAABwAwCdASoUAAsAPzmEuVOvKKWisAgB4CcJaQAASoAhmdH0egAA/uv+PzBy+/q1hjFXpgUNEQ3rpKi6nLu3PWw1NRyLeXrgj8nxLKAAAAA=
pin: true
---

La optimización de imágenes es fundamental para mejorar la velocidad de carga de un sitio web. Las imágenes de gran tamaño, si no se gestionan adecuadamente, pueden ralentizar el rendimiento del sitio y afectar la experiencia del usuario. Afortunadamente, existen diversas **técnicas** y **herramientas** que permiten reducir el tamaño de las imágenes sin perder calidad. Además, el uso de *placeholders* puede mejorar la percepción de la carga de la página, brindando una experiencia de usuario más fluida y agradable. A continuación, exploraremos algunas de las mejores prácticas y herramientas para optimizar imágenes y mejorar el rendimiento de tu sitio web.

## Calidad Visual y Experiencia del Usuario

La **calidad visual** de un sitio web juega un papel esencial en la **experiencia del usuario**. Imágenes de baja resolución pueden dar una impresión negativa, haciendo que el sitio se vea poco profesional o desactualizado. Por otro lado, imágenes de alta resolución pueden hacer que el sitio se vea nítido y atractivo, pero si no se optimizan correctamente, pueden afectar el rendimiento y la velocidad de carga.

La resolución ideal de las imágenes en un sitio web depende del equilibrio entre calidad y rendimiento. Aquí tienes algunas recomendaciones según el uso:  

### Tamaño y resolución según el uso

Cuando diseñamos para la web, no solo importa cómo se ve una imagen, sino también **su tamaño en píxeles y su peso en megabytes o kilobytes**. Una imagen demasiado pesada causa que el sitio cargue lento, afectando la experiencia del usuario y el posicionamiento en buscadores.

Por eso, es clave elegir el **tamaño adecuado según el uso** que le vamos a dar. Aquí tienes una guía práctica de tamaños recomendados:

| Tipo de imagen               | Tamaño (en píxeles)       | Detalles importantes                     |
| ---------------------------- | ------------------------- | ---------------------------------------- |
| **Banners / fondos grandes** | 1920×1080 px o más        | Comprimir bien (idealmente < 500–800 KB) |
| **Imágenes de contenido**    | 1200×800 px (orientativo) | Suficiente para la mayoría de usos web   |
| **Miniaturas / thumbnails**  | 300×300 px aprox.         | Peso muy liviano (< 100 KB)              |


> **Las imágenes son los recursos que más peso pueden tener en un sitio web**, y si estás no están optimizadas correctamente harán que tu página parezca lenta y arruinará la experiencia de navegación de tus usuarios.
{: .prompt-info }

__Observa el siguiente ejemplo, de un sitio web__:

{% include embed/video.html src='extras/imagenes-mal-optimizadas.mp4' %}

Existen diversas herramientas para crear imágenes con resoluciones específicas, y en mi caso, una de las que más me resulta útil es el uso de los **marcos (frames)** de [Excalidraw](https://excalidraw.com/){: target='_blank' }.

![frames excalidraw - resoluciones](extras/excalidraw-frames-con-resoluciones.webp){:.rounded .border .border-secondary-subtle}

**Mostrar información de resoluciones en excalidraw**

![frames excalidraw - resoluciones](extras/excalidraw-mostrar-informacion-resoluciones.webp){:.rounded .border .border-secondary-subtle}

Los frames en Excalidraw no están diseñados específicamente para ajustar el peso final de una imagen (KB o MB), pero sí permiten establecer dimensiones precisas. Luego, es posible exportar esa imagen y aplicar el formato y la compresión adecuados para optimizarla para la web.

### Formatos recomendados

Cuando hablamos de formatos de imagen para la web, hay varios, pero los más comunes y seguramente ya conoces son: __PNG__, __JPG__, __SVG__, __AVIF__ y el más reciente, WebP. Sobre este último profundizaremos en breve, pero por ahora, veamos las diferencias principales entre ellos:

* **WebP** → Mejor opción (gran calidad y menor peso).
* **JPEG** → Bueno para fotos, pero más pesado que WebP.
* **PNG** → Solo si necesitas transparencia (pero pesa más).
* **SVG** → Ideal para iconos y gráficos simples.
* **AVIF** → Aún más ligero que WebP, pero no todos los navegadores lo soportan todavía.

## ¿Qué es WebP y por qué es útil?

Como mencionamos anteriormente, **WebP** es un formato de imagen moderno desarrollado por Google que ofrece una compresión mucho más eficiente que los formatos tradicionales como **JPEG** y **PNG**.

Con WebP, puedes reducir el peso de tus imágenes hasta un **30% más** en comparación con JPEG o PNG, **sin perder calidad visual**, lo que se traduce en sitios web más rápidos y con mejor rendimiento.

Además, **WebP admite transparencia** (como PNG) y **animaciones** (como GIF), lo que lo convierte en una opción muy versátil para distintos tipos de contenido en la web.

Para mostrar un ejemplo de la diferencia entre una imagen en **formato PNG** o **JPEG** y su **versión optimizada en WebP**, a continuación te dejo un escenario dinámico donde puedes subir tu propia imagen y ver los resultados. Verás cómo se carga la imagen en su formato original y luego su versión optimizada en WebP, destacando la diferencia en el tamaño de los archivos entre ambos formatos.

### **Comparar imágenes PNG, JPEG y WebP**

{% include png-to-webp.html %}

### Herramientas de WebP

Las herramientas WebP son utilidades de línea de comandos que permiten convertir imágenes de varios formatos (como PNG, JPEG y TIFF) a WebP. Estas herramientas se utilizan normalmente en la terminal o en el símbolo del sistema y ofrecen opciones para ajustar la configuración de compresión, la calidad y otros parámetros para optimizar las imágenes según sus requisitos específicos. Con las herramientas WebP, puede realizar conversiones por lotes, ajustar la calidad de las imágenes y automatizar las tareas de procesamiento de imágenes mediante secuencias de comandos o procesos de compilación.

### Instalación de WebP

{% tabs install_webp %}
{% tab install_webp macOS %}
```terminal
brew install webp
```
{% endtab %}
{% tab install_webp Linux %}
```terminal
sudo apt-get install webp
```
{% endtab %}
{% tab install_webp Windows %}
Para Windows, descargue los binarios de WebP desde [la página del proyecto WebP](https://developers.google.com/speed/webp/download?hl=es-419) y sigue las instrucciones para instalarlos.
{% endtab %}
{% endtabs %}

### Convertir imagen al formato WebP

El proceso para convertir imágenes usando la herramienta instalada anteriormente es bastante sencillo y rápido. Aquí te dejo algunos ejemplos para que comiences a probar:

**1. Conversión básica de una imagen (sin compresión adicional)**

```terminal
cwebp imagen.png -o imagen.webp
```

**2. Controlar la calidad de la imagen convertida (0 a 100)**

```terminal
cwebp -q 80 input-image.png -o output-image.webp
```

- `-q 80`: Establece la calidad de la imagen convertida a 80 (de 0 a 100, donde 100 es la calidad más alta y el tamaño más grande).
- `-o output-image.webp`: Especifica el archivo de salida en formato WebP.

A continuación, se muestra las diferencias de tamaño al cambiar el parámetro `-q`:

![controlando la calidad de las imágenes convertidas](extras/tutorial-webp-quality-90.webp){:.rounded .border .border-secondary-subtle}

**3. Usar el modo de compresión "lossless" (sin pérdida)**

```terminal
cwebp -lossless input-image.png -o output-image.webp
```

## Imágenes de baja calidad para placeholder

A nadie le gusta esperar a que un sitio web cargue por completo. Sin embargo, existen estrategias efectivas para mejorar la experiencia del usuario durante ese tiempo, como las animaciones de carga o los marcadores de posición tipo *skeleton*. En particular, cuando hablamos de marcadores de posición, nos referimos al uso de imágenes borrosas, también conocidas como **marcadores de posición de imágenes de baja calidad** (*Low-Quality Image Placeholders* o LQIP).


### ¿Qué es LQIP?

___Low-Quality Image Placeholder___ es una de las técnicas más efectivas para mejorar la experiencia del usuario, que consiste en generar una versión de baja resolución de una imagen codificada en __base64__ y mostrarla temporalmente. Esto permite mostrar una vista previa rápida mientras la imagen de alta resolución se carga en segundo plano, lo que mejora la percepción del tiempo de carga y optimiza la experiencia del usuario.

__Ventajas de LQIP__

1. **Carga más rápida**: Se muestra una imagen de baja resolución mientras se carga la real, lo que da la impresión de que la página se carga más rápido.
2. **Mejor experiencia de usuario**: El uso de LQIP hace que los sitios web parezcan más rápidos, lo que aumenta la satisfacción del usuario.
3. **Reducción de la percepción de espera**: Aunque la imagen pesada todavía se está cargando, el usuario ya puede ver una versión básica de la misma.

### Herramientas para LQIP

Los marcadores de posición *placeholders* de imágenes de baja calidad (LQIP) son fundamentales para mejorar los tiempos de carga percibidos y la experiencia del usuario. Para crear estos marcadores de posición, necesitaremos una herramienta adicional. Te recomiendo [ImageMagick, una potente herramienta de manipulación de imágenes](https://imagemagick.org/){:target='_blank'}.

### Instalar ImageMagick

ImageMagick es una herramienta de manipulación de imágenes de código abierto que se puede utilizar para crear una imagen de marcador de posición **codificada en base64** para LQIP. Es por ello, que vamos a proceder a instalar la herramienta en los diferentes sistemas operativos:

{% tabs install_imagemagick %}
{% tab install_imagemagick macos %}
```terminal
brew install imagemagick
```
{% endtab %}
{% tab install_imagemagick linux %}
```terminal
sudo apt-get install imagemagick
```
{% endtab %}
{% tab install_imagemagick windows %}
Para Windows, descargue el instalador de ImageMagick desde la [la página de descarga de ImageMagick](https://imagemagick.org/script/download.php) y siga las instrucciones para instalarlos.
{% endtab %}
{% endtabs %}

### Generar el LQIP

El siguiente comando cambia el tamaño de la imagen a un tamaño pequeño, reduce su calidad, la convierte al formato WebP, la codifica en base64 y luego limpia el archivo temporal generado:

{% tabs demo_lqip %}
{% tab demo_lqip comando %}
```terminal
magick input-image-load.webp -resize 20x20 -strip -quality 20 tmp.webp && \
base64 -i tmp.webp && \
rm tmp.webp
```
{% endtab %}
{% tab demo_lqip resultado %}
```
UklGRloAAABXRUJQVlA4IE4AAABwAwCdASoUAAsAPzmEuVOvKKWisAgB4CcJaQAASoAhmdH0egAA/uv+PzBy+/q1hjFXpgUNEQ3rpKi6nLu3PWw1NRyLeXrgj8nxLKAAAAA=
```
{: .nolineno .noheader }
{% endtab %}
{% endtabs %}

Esta configuración, logra un equilibrio óptimo entre la longitud de la cadena base64 y la calidad de la imagen, lo que garantiza un marcador de posición eficaz sin pérdida innecesaria de tamaño o calidad. A continuación, se muestra un desglose del comando:

- `-resize 20x20`: Redimensiona la imagen a 20x20 píxeles, proporcionando un buen equilibrio entre detalle y tamaño de archivo.
- `-strip`: Elimina todos los metadatos para reducir el tamaño del archivo.
- `-quality 20`: Establece la calidad de WebP en 20, equilibrando la fidelidad visual y el tamaño del archivo.
- `tmp.webp`: Crea un archivo WebP temporal.
- `base64 tmp.webp`: Convierte el archivo temporal en una cadena base64.
- `rm tmp.webp`: Elimina el archivo temporal después de la codificación.

## Implementar carga diferida

Ahora, si ya tienes el archivo WebP y el LQIP listo, puedes implementar la imagen en tu sitio con **lazy loading** y un **placeholder** para que se cargue progresivamente.

En este caso, utilizaremos el **LQIP** como una imagen de baja calidad temporalmente mientras se carga la imagen original con el formato WebP.

```html
<img
  src="data:image/webp;base64,...."
  data-src="input-image.webp"
  alt="Imagen optimizada"
  class="lazyload"
  loading="lazy"
  width="600" height="400"
  style="width: 100%; height: auto;"
/>
```
{: .nolineno }


- `src`: Contiene la imagen LQIP en formato base64.
- `data-src`: Tiene la URL de la imagen original en formato WebP.
- `class="lazyload"`: Se utiliza para indicar que la imagen debe cargarse de manera diferida.
- `loading="lazy"`: Es un atributo estándar de HTML5 que ayuda a activar la carga diferida de las imágenes.
- `width` y `height`: Controlan el tamaño de la imagen.

El siguiente paso, es añadir el algo de JavaScript que permitirá que las imágenes solo se carguen cuando están cerca de la ventana de visualización. Esto mejora el rendimiento, ya que no todas las imágenes se cargan de inmediato.

```html
<script>
  const lazyImages = document.querySelectorAll('.lazyload');

  const loadImage = (image) => {
    const src = image.getAttribute('data-src');
    if (src) {
      image.src = src;
      image.onload = () => {
        image.style.opacity = 1;
      };
    }
  };

  // rootMargin: Activar cuando la imagen esté a punto de entrar en la vista
  // threshold: Cuando el 10% de la imagen sea visible
  const imageOptions = {
    rootMargin: '0px 0px 100px 0px', 
    threshold: 0.1,                    
  };

  // observer.unobserve(entry.target): Dejar de observar la imagen una vez cargada
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadImage(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, imageOptions);

  lazyImages.forEach((image) => {
    imageObserver.observe(image);
  });
</script>
```
{: .nolineno }


{% include circle-line.html %}

Listo, esto fue una breve guía práctica que muestra cómo optimizar imágenes para la web usando herramientas de línea de comandos como **ImageMagick** y el formato **WebP**, enfocándose en:

* Reducir el tamaño de las imágenes sin perder calidad.
* Convertir formatos y redimensionar según el uso real.
* Automatizar procesos para manejar muchas imágenes fácilmente.

El resultado es un sitio más rápido, eficiente y con mejor rendimiento en herramientas como PageSpeed.

## Consejos adicionales para optimizar imágenes

- **Redimensionar imágenes**: Asegúrate de que las imágenes no sean más grandes de lo necesario. Por ejemplo, no cargues imágenes de 3000px de ancho si se mostrarán a 800px en tu sitio web.
- **Uso de carga diferida (Lazy Loading)**: Implementa el *lazy loading* para que las imágenes se carguen solo cuando estén a punto de entrar en la vista del usuario, reduciendo el tiempo de carga inicial.
- **Compresión sin pérdida**: Si no quieres perder calidad en las imágenes, utiliza herramientas de compresión sin pérdida.