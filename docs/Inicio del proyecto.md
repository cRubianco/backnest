### Creo el proyecto
    nest new project-name (nest new backend)

### Instalo nestjs en forma global
	npm i -g @nestjs/cli
	
### Instalo la dependecnia @nestjs/config 
    npm i --save @nestjs/config

### Creo el archivo .env 
      (donde se guardan las variables de entorno) 
    Y el archivo constants.ts 
      donde se almacenaran las constantes

### Instalo las librerias para el manejo de la base de datos 
      npm i --save @nestjs/typeorm typeorm mysql2

y defino las constantes de la base de datos
	  DB: {
		HOST: 'DB_HOST',
		PORT: 'DB_PORT',
		DATABASE: 'DB_DATABASE',
		USER: 'DB_USER',
		PASS: 'DB_PASSWORD',
	  }

		Instalo las dependencias necesarias para validación y crear la API's 
				npm i --save class-validator class-transformer 		// Validaciones
				npm i --save @nestjs/swagger swagger-ui-express 	// open API

				