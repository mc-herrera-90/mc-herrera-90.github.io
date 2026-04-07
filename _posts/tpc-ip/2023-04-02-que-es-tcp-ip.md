---
title: "TCP/IP: ¿Qué es TCP/IP y cómo funciona?"
categories: [Redes, "Redes_01-TCP/IP"]
---

## Qué es TCP/IP

La definición de TCP/IP corresponde al conjunto de protocolos de red que permiten la comunicación y transferencia de datos entre dispositivos en redes locales y a través de Internet. Las siglas TCP/IP hacen referencia principalmente a los siguientes protocolos:

* **TCP** (Protocolo de Control de Transmisión) se encarga de establecer la conexión entre dos dispositivos y garantizar que los datos se transmitan de forma confiable, ordenada y sin pérdidas.
* **IP** (Protocolo de Internet) es responsable de direccionar los paquetes de datos mediante direcciones únicas, como por ejemplo `172.16.25.10`, permitiendo que la información llegue al destino correcto dentro de la red.


## ¿Qué diferencia hay entre TCP e IP?

TCP e IP son __protocolos distintos para redes informáticas__. La diferencia entre TCP e IP es su papel en el proceso de transmisión de datos. IP obtiene la dirección a la que se envían los datos (cualquier dispositivo tiene una dirección IP). TCP garantiza la entrega correcta de los datos una vez hallada dicha dirección IP. En combinación, ambos forman el protocolo TCP/IP.

## Cómo funciona el modelo TCP/IP

Cuando envías información por Internet, ya sea un mensaje, una imagen o un archivo, el modelo TCP/IP divide esos datos en paquetes siguiendo un proceso estructurado en cuatro capas. En el equipo de origen, los datos bajan a través de estas capas, donde se encapsulan paso a paso. Luego, al llegar al destino, los paquetes recorren el camino inverso, subiendo por las capas para ser desempaquetados, ordenados y reconstruidos en su forma original.

