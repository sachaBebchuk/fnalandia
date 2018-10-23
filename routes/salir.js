var express = require('express');
var router 	= express.Router();

var loginController = require('../controllers/loginController');

router.get('/',loginController.logout)

module.exports.router 	= router
module.exports.path 	= "/salir"
