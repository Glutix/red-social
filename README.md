# Red Social

Es un proyecto realizado con fines educativos. se trata de una red-social para que los usuarios puedan mantenerse conectados y al mismo tiempo interctuar entre si.

## Equipo

El equipo de Red Social esta integrado por los siguientes miembros:

- [Alejandro Vargas](https://github.com/dether)
- [Ricardo Ferreyra](https://github.com/glutix)


## Features
- Hacer una publicacion
- Crear un perfil personlizado
- Agregar amigos.
- Eliminar un amigo

### Tecnologias usadas 🛠️

- [React](https://reactjs.org/) - Framework de Javascript
- [PostgreSQL](https://www.mysql.com/) - Server y base de datos
- [Sequelize](https://sequelize.org/) - ORM (Object Relational Mapping)
- [Typescript](https://www.typescriptlang.org/) - Lenaguaje Principal
- [Express](https://expressjs.com/) - Framework Backend
- [Node](https://nodejs.org/es) - Entorno de ejecucion
- [Redux Toolkit](https://redux-toolkit.js.org/) - Estado Global

### Dependencies 📋

_Front-End Packages:_

```
react-router-dom
react-icons
react-toastify
react-redux
redux-toolkit
sweetalert
jwt-decode
react-dropzone
react-oauth/google
reduxjs/toolkit
@types/chart.js
axios

```

_Back-End Packages:_

```
nodemailer
jsonwebtoken
express-validator
express
dotenv
cors
bcryptjs
sequelize
```

## Instalacion

Clonar el repositorio:

```bash
git clone https://github.com/](https://github.com/Glutix/red-social.git
cd red-social
```

Una vez posicionado en red-social comenzamos por la api.

Instalacion de la API:

```bash
    cd api
    npm install

```

Instalacion del cliente:

```bash
    cd client
    npm install

```

En la carpeta /API creamos un archivo `.env`.

Vamos a necesitar dicho archivo, para crear las variables de entorno y conectar la base de datos.

**_Variables de entorno de la base de datos_**

- DB_NAME= \*database name 'for example: red-social'
- DB_USER= "[Nombre de usuario de tu base de datos]"
- DB_PASSWORD= "[Contraseña de tu base de datos]"
- DB_HOST= "[Host de tu base de datos]"
- DB_PORT= "[Puerto de tu base de datos]"
- PORT= "[Puerto donde se iniciara el server]"


**_Encrypt_**

- JWT_SECRET = Tu firma digital.


Para las variables de entorno en el cliente, creamos el archivo  `.env` en  /client.

**_API URL_**

- VITE_HOST= Aqui

```bash
cd api
npm start
```


## License

[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.html)

## Screenshots


