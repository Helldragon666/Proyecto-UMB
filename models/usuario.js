
const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    //matricula: {
    //    type: String,
    //    //required: [true, 'La matrícula es obligatoria'],
    //    unique: true
    //},
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String
    },
    alumno: {
        type: Boolean,
        required: true,
        default: true 
    }

});

module.exports = model('Usuario', UsuarioSchema);
