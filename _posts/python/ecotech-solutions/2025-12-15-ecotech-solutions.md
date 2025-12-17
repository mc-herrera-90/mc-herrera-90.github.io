---
title: Ecotech Solutions
icon: icon/python.svg
categories: [Python, "Python-Proyectos"]
image:
    path: poster/python-instalacion.webp
    lqip: data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAACwAwCdASoUAAsAPzmIulOvKSWisAgB4CcJZgCdAB87I8BCy/pQAgD+oMJm1X2r2TfzZNbTXWf9L+N8znXHbn++k1kUTW1sld+ooGg9QcWvAsCRQ1T95CFRs5YbzhLIwHy1D4MAAAA=
scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js
---

## Planificación del Proyecto


La planificación del proyecto **ecotech_solutions** se llevó a cabo utilizando la plataforma SaaS **Jira**, aplicando el marco de trabajo **Scrum** para organizar y gestionar el desarrollo del sistema.

El proyecto corresponde a una **aplicación de consola**, orientada a la gestión de **usuarios, empleados, departamentos y proyectos**, y fue diseñada siguiendo una **arquitectura N capas**, lo que permite una clara separación de responsabilidades entre la capa de **persistencia**, **lógica de negocio** y **presentación**.

Durante la planificación, se definió un **Product Backlog** compuesto por **épicas e historias de usuario**, organizadas principalmente por capas del sistema. A partir de este backlog, se planificaron sprints enfocados en funcionalidades específicas, comenzando por la **capa de persistencia**, mientras que las historias asociadas a la **capa de presentación en consola** quedaron priorizadas en el backlog para sprints futuros.

### ÉPICA 2: Capa de Persistencia

__Descripción__: Implementar el acceso y manejo de datos para empleados, departamentos y proyectos, utilizando un enfoque desacoplado mediante DAO.

![Epica 2](jira/ecotech-sprint1.webp)
_Tablero de ecotech-solutions - Sprint 1_

{% include file-viewer.html files=site.data.codes.ecotech-solutions.persistencia name="persistencia" %}

![Backlog antes de la epica 4](jira/ecotech-backlog-before-sprint2.webp)
_Estado del Backlog antes de comenzar el próximo Sprint_
