# [Salud en tus manos]


## Sec [02] - Grupo N° [19]

### Integrantes

| ------------------------------------------------- |
| Nombre                            | Carnet        |
| --------------------------------- | ------------- |
| Vanessa Saraí Durán Cruz          | 00025822      |
| Diego Fabrizio Calderon Quevedo   | 00034022      |
| Diego                             |               |
| ------------------------------------------------- |


Salud en tus manos, es un sitio web dedicado para hospitales y clinicas de El Salvador, en el cual el paciente y 
los doctores puedan tener una buena comunicacion, por ende, un mejor servicio. Esto se logra ya que se implementan 
agendas, calendarios, recordatorios, una farmacia en linea en donde se puede verificar la disponibilidad de los medicamentos,etc.


Instalacion

Guía de Instalación
Paso 1: Clonar el Repositorio

bash

git clone https://github.com/Programacion-Web-02-2023/proyecto-equipo-19-sec-02-dvd.git
cd proyecto-equipo-19-sec-02-dvd

Paso 2: Instalar Dependencias del Backend

bash


bash

cd proyecto-19-webservice
yarn install

Paso 3: Configurar la Base de Datos

Crea un archivo .env en el directorio proyecto-19-webservice y configura la conexión a tu base de datos MongoDB. Puedes usar el siguiente formato:

env

MONGO_URI=mongodb://tu_usuario:tu_contraseña@tu_cluster.mongodb.net/tu_base_de_datos?retryWrites=true&w=majority

Reemplaza tu_usuario, tu_contraseña, tu_cluster, y tu_base_de_datos con la información de tu base de datos MongoDB.
Paso 4: Iniciar el Backend


bash

yarn dev

Esto iniciará tu servidor backend en el puerto 3000. Asegúrate de que no haya errores y que puedas acceder a http://localhost:3000 en tu navegador.
Paso 5: Instalar Dependencias del Frontend

Abre otra terminal y navega al directorio principal del proyecto:

cd ..
yarn install

y por ultimo para correr el proyecto:

yarn dev




Es un proyecto creado en yarn vite en el cual se utiliza

React JS
MongoDB
yarn: yarn create vite
      yarn add express (para la api)
      yarn add cors
      yarn add mongoose    
      yarn add axios (para las rutas de las paginas)
      yarn add -D nodemon
      yarn add dotenv
      yarn global add express-generator




