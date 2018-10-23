var express = require('express');
var router 	= express.Router();

var registrarseController = require('../controllers/registrarseController');

router.get('/',registrarseController.registrarseGet)
router.post('/',registrarseController.registrarsePost)

module.exports.router 	= router
module.exports.path 	= "/registrarse"
