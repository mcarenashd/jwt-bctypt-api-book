# API de Libros con Autenticación JWT y Bcrypt

Esta es una API RESTful para gestionar libros, que incluye un sistema de autenticación de usuarios utilizando JWT y bcrypt.

## Dependencias

Este proyecto utiliza una serie de dependencias para su correcto funcionamiento. A continuación se detallan las dependencias de producción y de desarrollo.

### Dependencias de Producción

![Node.js](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?logo=express)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?logo=jsonwebtokens)
![bcrypt](https://img.shields.io/badge/Bcryptjs-3384A1?logo=npm&logoColor=white)


Son necesarias para que la aplicación se ejecute.

* **bcryptjs**: Para el hash de contraseñas.
* **dotenv**: Para cargar variables de entorno desde un archivo `.env`.
* **express**: Framework web para Node.js.
* **mysql2**: Cliente de MySQL para Node.js.
* **sequelize**: ORM de Node.js para bases de datos relacionales.



## Características

* **CRUD de Libros:** Crear, leer, actualizar y eliminar libros.
* **Autenticación de Usuarios:** Registro e inicio de sesión de usuarios.
* **Contraseñas Seguras:** Hash de contraseñas utilizando bcrypt.

## Estructura del Proyecto
```
├── app.js
├── controllers
│   ├── AuthController.js
│   └── BookController.js
├── database
│   └── db_connection.js
├── models
│   ├── BookModel.js
│   └── UserModel.js
├── routes
│   ├── authRoutes.js
│   └── bookRoutes.js
└── test
└── books.test.js
```
## Endpoints de la API

### Autenticación

* `POST /auth/register`: Registra un nuevo usuario.
* `POST /auth/login`: Inicia sesión.

### Libros

* `GET /books`: Obtiene todos los libros.
* `POST /books`: Crea un nuevo libro.
* `DELETE /books/:id`: Elimina un libro.

## Cómo Empezar

### Prerrequisitos

* Node.js
* npm
* MySQL

### Instalación

1.  Clona el repositorio.
2.  Instala las dependencias:
    ```bash
    npm install
    ```
3.  Configura las variables de entorno en un archivo `.env`.
    ```
    DB_NAME=tu_base_de_datos
    DB_USER=tu_usuario
    DB_PASS=tu_contraseña
    ```

### Uso

Inicia el servidor:
```bash
node app.js
```
### Pruebas
Ejecuta las pruebas:

```bash

npm test
```
