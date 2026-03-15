---
title: "DevOps: Estrategias de la planificación en DevOps"
categories: [DevOps, "DevOps_01-Introducción"]
---

## Agile Planning

__Procedimientos recomendados para planear sprints__:

- Planear y aislar el trabajo en __sprints__ manegables (de 1 a 4 semanas)
- Administrar la capacidad del equipo y ayudar a otros equipos a adaptarse rápidamente a las necesidades empresariales cambiantes
- Definir criterios de aceptación claro y definición de terminado
- Una __definición de Terminado__ en DevOps incluye software en funcionamiento que recopila telemetría en relación con los objetivos empresariales

__Artefactos ágiles clave__:

- __Casos de usuario__: características descritas desde la perspectiva del usuario con un valor claro
- __Épica__: grandes características desglosadas en historias manejables
- __Trabajo pendiente__: lista prioritaria de características y deuda técnica
- __Objetivo de sprint__: Objetivos claros para cada iteración

__Principios Lean__:

- Eliminación de ineficiencias en procesos y transferencias
- Optimización para el flujo, no para el uso de recursos
- Incorporar calidad desde el principio
- Entrega de valor temprano y a menudo

## Supervisión y registro

Supervisar las aplicaciones en ejecución, incluidos los entornos de producción para el estado de la aplicación y el uso del cliente. Ayuda a las organizaciones a crear hipótesis y validar o desaprobar rápidamente estrategias. Los datos enriquecidos se capturan y almacenan en distintos formatos de registro.

__Componentes del stack de monitoreo__:

- __Supervisión del rendimiento de aplicaciones (APM)__: seguimiento en los tiempos de respuesta, los errores y el rendimiento.
- __Supervisión de la infraestructura__: CPU, memoria, disco, métricas de red
- __Supervisión de seguridad__: detección de amenazas y seguimiento de cumplimiento

__Procedimientos recomendados de observabilidad__:

- Implementación del seguimiento distribuido para microservicios
- Uso de registro estructurado con identificadores de correlación
- Configuración de alertas proactivas con falsos positivos mínimos
- Crear paneles para diferentes audiencias (operaciones, desarrollo, negocio)

__Estrategia de administración de registros__:

- Registro centralizado con funcionalidades de búsqueda
- Directivas de retención basadas en los requisitos de cumplimiento
- Optimización de costos mediante la gestión de nivel de registro
- Análisis en tiempo real de problemas críticos


## DevOps puede afectar al principio

Al igual que el entrenamiento en el gimnasio, donde primero se ejercitan los músculos grandes antes que los músculos pequeños, adoptar prácticas que tengan un impacto más significativo primero.

## Antipatrones comunes de DevOps que debes evitar

- __Enfoque centrado en herramientas__: no empieces por comprar o adoptar nuevas herramientas. Comience con la comprensión del estado actual y los resultados deseados.
- __Transformación Big Bang__: evite a toda costa intentar cambiar todo a la vez. Comience poco a poco y expanda gradualmente.
- __Integrar un equipo de DevOps__: no cree un "equipo de DevOps" independiente. DevOps es una práctica, no un rol.
- __Omisión de la seguridad__: No agregua la seguridad al final. Integre la seguridad en todo (DevSecOps).
- __Sobre-ingeniería__: inicie simple y agregue complejidad solo cuando sea necesario. Evite optimización prematura.
- __No ignorar el legado__: no abandone los sistemas existentes. Planear estrategias de modernización graduales.