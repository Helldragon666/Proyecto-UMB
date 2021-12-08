


const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../db/config');



class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            inicio: '/inicio',
            registro: '/registro'
        }

        //Conectar a la base de datos
        this.conectarDB();

        //Middlewares: Fuciones que se ejecutan antes de las rutas
        this.middlewares();

        //Rutas de mi app
        this.routes();
    }


    async conectarDB() {
        await dbConnection();
    }


    middlewares() {

        // CORS  Intercambio de Recursos de Origen Cruzado
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        //Directorio publico para mi gagina web 
        this.app.use(express.static('public'));

    }

    routes() {

        this.app.use(this.paths.inicio, require('../routes/inicio'));
        this.app.use(this.paths.registro, require('../routes/inicio'));

    }

    listen() {

        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });

    }

}



module.exports = Server;