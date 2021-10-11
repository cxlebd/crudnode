-- Creando la base de datos
CREATE DATABASE crudnode;
use crudnode;

-- Crear tabla
CREATE TABLE cancion(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    artista VARCHAR(50) NOT NULL
);

-- Mostrar tablas
SHOW TABLES;

-- Describir la tabla
describe cancion;
