

const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Usuario = require('../models/usuario');


const inicio = (req = request, res = response) => {
    res.json({

        msg: 'Este es un Inicio de prueba'

    });
}

const usuariosPost = async (req = request, res = response) => {

    const { nombre, correo, password } = req.body;

    const usuario = new Usuario({ nombre, correo, password});

    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    //guardar en bd
    await usuario.save();

    res.json({
        usuario
    });
}




module.exports = {
    inicio,
    usuariosPost
}