---
title: Operaciones con gestores de paquetes
categories: [Linux, Comandos Linux]
icon: icon/bash.svg
---


## Paquetes Deb (Debian y derivados)

Instalar o actualizar un paquete `.deb`
: Instala o actualiza un paquete Debian en el sistema
```terminal
dpkg -i paquete.deb
```

Eliminar un paquete `.deb` del sistema
: Desinstala un paquete Debian instalado
```terminal
dpkg -r paquete
```

Mostrar todos los paquetes `.deb` instalados
: Lista todos los paquetes Debian actualmente instalados.
```terminal
dpkg -l
```

Mostrar paquetes `.deb` que contienen un nombre específico
: Filtra la lista de paquetes instalados por nombre
```terminal
dpkg -l | grep nombre
```

Obtener información sobre un paquete instalado
: Muestra información detallada sobre un paquete específico
```terminal
dpkg -s paquete
```

Mostrar lista de archivos proporcionados por un paquete instalado
: Lista todos los archivos que pertenecen a un paquete instalado
```terminal
dpkg -L paquete
```

Mostrar lista de archivos en un paquete sin instalar
: Muestra los archivos incluidos en un paquete `.deb` antes de su instalación
```terminal
dpkg --contents paquete.deb
```

Verificar a qué paquete pertenece un archivo
: Determina el paquete que contiene un archivo específico
```terminal
dpkg -S archivo
```