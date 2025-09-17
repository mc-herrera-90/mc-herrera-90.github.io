---
title: Operaciones con archivos y directorios
categories: [Linux, Comandos Linux]
icon: icon/bash.svg
---

> En los comandos donde necesites escribir nombres de archivos o carpetas, puedes __presionar la tecla__ `Tab` __dos veces__ para autocompletar la ruta o mostrar una lista de archivos disponibles.
{: .prompt-tip }

## Desplazamiento entre directorios

Ir al directorio raíz
```terminal
cd
```

Ir al directorio anterior
```terminal
cd ..
```

Ir al directorio del usuario actual
```terminal
cd ~
```

Ir a último directorio visitado
```terminal
cd -
```

Mostrar ruta actual
```terminal
pwd
```

output: `/home/mcherrera/workspace/`{: .filepath}

## Listar archivos y directorios

Mostrar archivos y directorios
```terminal
ls
```

Mostrar archivos y directorios con detalles
```terminal
ls -l
```

Mostrar archivos y directorios, incluidos los ocultos
```terminal
ls -a
```

Mostrar archivos y directorios ordenados por fecha de modificación
```terminal
ls -lt
```

Mostrar archivos y directorios en formato de lista, incluyendo tamaños
```terminal
ls -lh
```

## Manipulación de archivos y directorios

Renombrar o mover un archivo o directorio
```terminal
mv origen destino
```

Copiar un archivo
```terminal
cp archivo destino
```

Copiar un directorio
```terminal
cp -r origen destino
```

Borrar el archivo
```terminal
rm nombre-archivo
```

Borrar directorio si está vacío
```terminal
rm -d directorio
```

Borrar directorio y su contenido
```terminal
rm -r directorio
```

Crear nuevo directorio
```terminal
mkdir directorio
```

Crear varios directorios simultáneamente
```terminal
mkdir directorio1 directorio2
```

Crear ruta de directorios
```terminal
mkdir -p /directorio1/directorio2
```

Crear archivo vacío
```terminal
touch archivo
```

Cambiar fecha de archivo (formato año, mes, día y hora)
```terminal
touch -t 19901230000 archivo
```

## Enlaces simbólicos

Crear un enlace simbólico al archivo o directorio
```terminal
ln -s archivo lnk1
```

Crear enlace físico al archivo o directorio
```terminal
ln archivo lnk1
```

Ver detalles sobre un enlace simbólico
```terminal
ls -l lnk1
```