

const { Router } = require('express');


const { inicio, usuariosPost } = require('../controllers/inicio');



const router = Router();

router.post('/', usuariosPost);

router.get('/', inicio);



module.exports = router;