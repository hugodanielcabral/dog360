# Recursos Útiles

## Mockup

- [Dog360](./client/src/images/mockup.png) - Mockup de Dog360

## Íconos

- [FontAwesome](https://fontawesome.com/) - Biblioteca de íconos ampliamente utilizada.
  - [Ver íconos disponibles](https://fontawesome.com/icons)
  - [Documentación de FontAwesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react)

## Paleta de Colores

- [Coolors](https://coolors.co/) - Generador de paletas de colores en línea.

## Fuentes

- [Roboto](https://fonts.google.com/specimen/Roboto)

## Imagenes

- [Unsplash](https://unsplash.com/)

## Documentación

- [Documentación de React Router Dom](https://reactrouter.com/en/main)

## Código MYSQL

create database dogs360;
use dogs360;

CREATE TABLE razas (
id INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
descripcion VARCHAR(255),
imagen VARCHAR(255),
tamanio VARCHAR(50),
esperanza_de_vida INT,
personalidad VARCHAR(255)
);

CREATE TABLE usuarios (
id INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(255),
apellido VARCHAR(255),
correo VARCHAR(255) UNIQUE,
contrasenia VARCHAR(255),
estado TINYINT(1),
rol VARCHAR(50)
);

CREATE TABLE turnos (
id INT PRIMARY KEY AUTO_INCREMENT,
dia_de_turno DATE,
nombre_de_mascota VARCHAR(255),
descripcion TEXT,
usuario_id INT,
FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
