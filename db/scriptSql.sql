
CREATE SCHEMA BLOG;

USE  BLOG;


CREATE TABLE users (
	id int unsigned primary key auto_increment,
    name VARCHAR (255),
    lastname VARCHAR (255),
    email VARCHAR (50) NOT NULL,
	password VARCHAR (255) NOT NULL,
    admin TINYINT, -- USER o ADMIN
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP, -- Fecha de Alta
    updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP, -- Fecha de Modificación
    deletedAt DATETIME -- Fecha de borrado del registro. Cuando se haga un select * from user where deleteAt is not null
);

CREATE TABLE publications (
	id int unsigned primary key auto_increment,
	titulo VARCHAR (255),
    cuerpo TEXT,
	image VARCHAR (255),
    userId int unsigned ,
	likes int unsigned ,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP, -- Fecha de Alta
    updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP, -- Fecha de Modificación
    deletedAt DATETIME -- Fecha de borrado del registro. Cuando se haga un select * from user where deleteAt is not null
);

CREATE TABLE comments (
	id int unsigned primary key auto_increment,
	publicationId int unsigned ,
    comment VARCHAR (255),
    userId int unsigned ,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP, -- Fecha de Alta
    updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP, -- Fecha de Modificación
    deletedAt DATETIME -- Fecha de borrado del registro. Cuando se haga un select * from user where deleteAt is not null
);

CREATE TABLE likes (
	id int unsigned primary key auto_increment,
    publicationId int unsigned,
    userId int unsigned ,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP, -- Fecha de Alta
    updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP, -- Fecha de Modificación
    deletedAt DATETIME -- Fecha de borrado del registro. Cuando se haga un select * from user where deleteAt is not null
);