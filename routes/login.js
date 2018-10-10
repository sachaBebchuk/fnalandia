var express = require('express');
var router 	= express.Router();

var loginController = require('../controllers/loginController');

router.get('/',loginController.loginGet)
router.post('/',loginController.loginPost)

module.exports.router 	= router
module.exports.path 	= "/ingresar"
