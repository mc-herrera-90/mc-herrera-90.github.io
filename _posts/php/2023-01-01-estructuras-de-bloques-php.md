---
title: "PHP: Estructura y Funcionamiento"
categories: [PHP, "PHP-Básico"]
image:
  path: poster/php-estructura-y-funcionamiento.webp
  lqip: data:image/webp;base64,UklGRqYAAABXRUJQVlA4WAoAAAAQAAAAEwAACgAAQUxQSBMAAAABD9D/iAgICQjN/8WyBxH9z+QCAFZQOCBsAAAAEAQAnQEqFAALAD85hLlTryilorAIAeAnCWQAnQAd+3hn83L9/5Ic44AAyyZyI5kLn7CkmLma5GQLTAxSZPz7378kjKUL/66YaNtm7TPQ42E9qoiwjKMK1P7KZCnaC0BNOxbQG3ep4P2uAAAA
tags: [php]
---

Desde ahora comenzamos el aprendizaje del ecosistema PHP. En este post, vamos a explorar la estructura básica de un archivo PHP y cómo ejecutarlo en un servidor para ver los resultados en el navegador. 

## Estructura Básica de un archivo PHP

Un archivo PHP suele tener la extensión `.php`. Para comenzar a escribir código PHP, debes envolverlo dentro de las etiquetas `<?php` y `?>`. Todo el código PHP debe ir dentro de estas etiquetas, las cuales indican el servidor que ejecute el código PHP.

**Ejemplo básico de un archivo PHP**

```php
<?php
    echo "¡Hola, mundo!";
?>
```
{: .nolineno file="index.php" }

En este ejemplo, el código PHP se encuentra entre las etiquetas `<?php` y `?>`. El comando `echo` se utiliza para imprimir la cadena de texto `"!Hola, mundo!"` en el navegador.

**Pasos para crear un archivo PHP**:

1. **Crea un archivo PHP**: Utiliza cualquier editor de texto (como Visual Studio Code, Sublime Text, o el Bloc de Notas) y guarda el archivo con la extensión `.php`. Por ejemplo, puedes llamarlo `index.php`.

2. **Escribe el código dentro de las etiquetas** `<?php` **y** `?>`.

3. **Guarda el archivo**.

## Ejecutar el código PHP sobre Apache

Cuando hablamos de __PHP sobre Apache__, nos referimos a que Apache como servidor web está configurado para interpretar y ejecutar código PHP antes de enviar la respuesta al navegador. Esto funciona gracias a un módulo llamado `mod_php` o, en implementaciones más modernas, a través de un manejador como `PHP-FPM`.

Una vez que tengas tu archivo PHP listo, es momento de verlo en el navegador. Para esto, necesitas tener un **servidor web** que ejecute PHP. Existen diferentes maneras de conseguir Apache.

### 1. Instalar paquetes completos (Apache + PHP + MySQL)

Esto es útil para desarrollo web local porque ya viene todo integrado.

- XAMPP → [https://www.apachefriends.org/es/index.html](https://www.apachefriends.org/es/index.html){:targer='_blank'}  
(Apache + PHP + MariaDB + phpMyAdmin)
- WampServer (Windows) → [https://www.wampserver.com/es/](https://www.wampserver.com/es/){:target='_blank'}
- MAMP (Mac y Windows) → [https://www.mamp.info/es/](https://www.mamp.info/es/){:target='_blank'}

Una vez instalado **XAMP**, **MAMP** o **LAMP**, podrás probar tu archivo PHP de la siguiente manera:

1. Coloca tu archivo `.php` dentro de la carpeta de tu servidor local. En XAMPP, por ejemplo, la carpeta es `htdocs`; en MAMP, es `www`.

2. Asegúrate de que el servidor esté en funcionamiento. Abre la interfaz de tu servidor (por ejemplo, el panel de XAMPP o MAMPP) y verifica que el el servicio de Apache esté ejecutándose.

3. Abre el navegador y accede a la URL de tu archivo PHP. Normalmente, la URL sería algo como: <http://localhost/index.php>.

> Si el archivo se llama `index.php`, la URL sería <http://localhost/index.php>, si fuera `hello.php` el nombre, la URL sería <http://localhost/hello.php>.
{: .prompt-info }

{:start='4'}
4. Si todo está configurado correctamente, deberías ver el resultado del código PHP en el navegador.

### 2. Usar el servidor integrado de PHP

Otra opción más rápida y ligera es usar el servidor web integrado de `PHP`, que te permite ejecutar tu archivo sin necesidad de instalar un servidor web completo, y podrás probar tu archivo PHP de igual manera, sigue estas instrucciones:

1. Abre la terminal o línea de comandos en tu sistema.
2. Navega a la carpeta donde has guardado el archivo PHP.
3. Ejecuta el siguiente comando: `php -S localhost:8080`. Por ejemplo, si tu archivo se llama `index.php`, la URL será <http://localhost:8080/index.php>.

![arrancar servidor](php/php-start-localhost.webp)

Al abrir la URL, se debería mostrar el `!"Hola, Mundo!"`:

![hola mundo](php/echo-hola-mundo-en-el-browser.webp)