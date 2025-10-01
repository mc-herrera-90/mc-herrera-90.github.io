---
title: "Copiar y pegar en portapapeles"
categories: [Sistemas Operativos, macOS]
tags: [Sistemas Operativos, macOS]
---

En macOS, hay dos comandos, `pbcopy` y `pbpaste` que manipulan el portapapeles del sistema.


## 1. Copiar en el portapapeles

Para copiar el contenido de un archivo o resultado de un comando en el portapapeles, usamos el comando `pbcopy`.

### Copiar el contenido de un archivo

Para copiar el contenido de un archivo al portapapeles, usamos el siguiente comando:

```terminal
cat archivo.txt | pbcopy
```

### Copiar el resultado de un comando

Si deseas copiar la salida de un comando al portapapeles, puedes hacerlo con el siguiente comando:

```terminal
echo "Hola, Mundo" | pbcopy
```


## 2. Pegar desde el portapapeles

Para pegar el contenido del portapales en el terminal, simplemente usamos el comando `pbpaste`.

### Pegar el contenido del portapapeles

Por ejemplo, si tuvieramos la salida del siguiente comando en el portapapeles:

```terminal
ls | pbcopy
```

Para pegar el contenido que copiaste previamente, simplemente ejecutamos el siguiente comando:

```terminal
pbpaste
```

##  3. Otros comandos útiles

Copiar el contenido de un archivo al portapapeles (más sencillo):

```terminal
pbcopy < archivo.txt
````

Pegar directamente en un archivo el contenido del portapapeles:

```terminal
pbpaste > archivo.txt
```