Prueba Octopus
Nombre: Jesica Firus
Objetivo: Desarrollar un blog login e ingreso de comentarios

1. Estructura de Carpetas
- octopus-blog
-- db
-- docs
-- stite

3. Funcionalidades:
- HOME
- LOGIN
- REGISTRACIÓN
- CREACIÓN DE UNA PUBLICACIÓN
-- Edición de la publicación
-- Eliminar publicación
-- Listado de publicaciones por Usuario
- Listado de Comentarios
- Like a una publicación

4. El análisis del caso fue hecho de forma manual y las fotos del esquema planteado está en:
Análisis: /Docs/Análisis


5. Pasos a seguir para la descarga del proyecto
Una vez que se descarga la carpeta de GIT, deben seguise los siguientes pasos:

	1. Instalarse un editor de javascript (en mi caso utilicé VISUAL STUDIO CODE)
	2. Instalarse un framework para la base de datos, en mi caso usé workbench mysql
	3. Instalarse xamp, para correr la base de datos
	4. Descargarse el proyecto en una carpeta local
	5. Dentro del Visual Studio Code posicionarse en la carpeta /site
	6. Ejecutar esta sentencia de comandos:
		//Instalar bootstrap
		 npm install bootstrap@next

		// Instalación Sequelize
		npm install sequelize
		npm install sequelize-cli -g
		npm install mysql2


		// Instalación de la sesión
		npm install express-session --save

		//Para las cookies
		npm install cookie-parser

		// Para encriptar los datos
		npm install bcryptjs

		//Instalar Multer para el upload de archivos
		npm install --save multer

		//Instalar express validator
		npm install express-validator --save
		
	7. Entrar a "workbench mysql" y ejecutar el script: "scriptSql.sql". Este archivo se encuentra en la carpeta "db"
	8. Una vez creadas las tablas, ejecutar el script "poblarTablas.sql".  Este archivo se encuentra en la carpeta "db"
	9. Entrar a XAMPP y ejecuar "Start" en el módulo SQL.
	10. Volver al Visual studio Code y en la terminal escribir:
		$npm start
	11. Desde un explorador acceder a http://localhost:3000/
