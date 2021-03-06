

const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        
        await mongoose.connect(process.env.MONGODB_ATLAS);

        console.log('Base de datos ONLINE');

    } catch (err) {
        console.log(err);
        throw new Error('Error al iniciar la base de datos');
    }

}

module.exports = {
    dbConnection
}