CREATE DATABASE prosabar;

USE prosabar;

CREATE TABLE users(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (100) NOT NULL,
    email VARCHAR (100) NOT NULL,
    senha INTEGER NOT NULL
    );

select * from users;