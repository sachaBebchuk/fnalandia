var express = require('express')
var router 	= express.Router()

var perfilController = require('../controllers/perfilController');

router.get('/:idUsuario',perfilController.perfilGet)

module.exports.router 	= router
module.exports.path 	= "/perfil"