---
title: "Angular: Señales en Angular 21"
categories: [Angular, Angular-Reactividad]
badge: angular
---

Rendimiento más predecible y eficiente
: Las señales permiten que Angular detecte cambios de manera puntual y reactiva, evitando la sobrecarga de `Zone.js`, que monitorea todas las operaciones asincrónicas en la aplicación. Esto reduce el trabajo innecesario de detección de cambios y mejora la velocidad de la app.

Mayor control sobre la reactividad
: Con señales, el desarrollador decide explícitamente qué propiedades o componentes deben reaccionar a cambios. En cambio, `Zone.js` aplica detección de cambios de manera global, lo que puede generar renderizados innecesarios y menor eficiencia en aplicaciones grandes.

Simplicidad y trazabilidad del flujo de datos
: Las señales facilitan entender qué causa cada actualización en la UI, ya que cada señal se suscribe de forma explícita. Con `Zone.js`, el flujo de cambios puede ser más difícil de seguir porque actúa “por detrás”, interceptando todo tipo de eventos y operaciones asincrónicas.


## Tabla comparativa

| Característica                | Señales (Angular 21)                                | Zone.js                                                         |
| ----------------------------- | --------------------------------------------------- | --------------------------------------------------------------- |
| **Detección de cambios**      | Reactiva y puntual; solo se actualiza lo que cambió | Global; intercepta todas las operaciones asincrónicas           |
| **Rendimiento**               | Más eficiente y predecible                          | Puede generar sobrecarga en apps grandes                        |
| **Control del desarrollador** | Total control sobre qué reacciona a cambios         | Limitado; actúa automáticamente y de manera general             |
| **Trazabilidad**              | Fácil de seguir; flujo de datos explícito           | Difícil de seguir; cambios ocurren “por detrás”                 |
| **Complejidad**               | Menor complejidad en grandes apps                   | Más fácil de usar en apps pequeñas pero menos óptimo en grandes |

Cuando uno comenzaba en Angular, tenias que trabajar de la mano con RXJS, lo que se transformaba en una barrera ya que desarrolladores acostumbrados a trabajar con operaciones HTTP básicas a través de `fetch` o promesas se encuentra con un problema que RXJS tiene que monstar un montón de configuración para leer un recurso externo es demasiado complicado. Con Angular 21 RXJS va a desaparecer de a poco, aunque no estoy aquí diciendo de que ya no sirve, ya que si es verdad que es una herramienta potente pero creo que se verá disminuido su presencia en la mayoría de los casos de uso. 
