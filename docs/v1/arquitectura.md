# Arquitectura V1

## Visión General

SUPPORTING V1 está compuesto por una arquitectura cliente-servidor basada en React y FastAPI.

```text
Usuario
   │
   ▼
React + Tailwind
   │
   ▼
FastAPI
   │
   ▼
SQLAlchemy
   │
   ▼
PostgreSQL

## Backend


* Responsable de:

``` Autenticación JWT
Gestión de usuarios
Gestión de técnicos
Gestión de servicios
Gestión de tickets
Formularios de contacto
Frontend

```

* Responsable de:

``` Web corporativa
Portal de servicios
Área de usuario
Login
Gestión de peticiones
```


---

## modulos

```markdown
# Módulos del Sistema

## Autenticación

- Registro
- Inicio de sesión
- JWT
- Cambio de contraseña

## Gestión de Usuarios

- Alta de usuarios
- Modificación de datos
- Roles

## Servicios

- Consulta de servicios
- Presentación de soluciones IT

## Técnicos

- Visualización de técnicos
- Información de especialidades

## Tickets

- Creación de incidencias
- Seguimiento básico

## Contacto

- Solicitud comercial
- Solicitud de información
- Acceso empresarial