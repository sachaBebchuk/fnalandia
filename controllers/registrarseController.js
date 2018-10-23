const sequelize = require("../db")
const request   = require("request")
const models    = require("../models")
const pbkdf2    = require("pbkdf2")
const crypto    = require("crypto")
let   env       = process.env.NODE_ENV || "development"
let   config    = require("../config/config.json")[env]

module.exports.registrarseGet = function(req, res){

	let viewBag = {
		sitekey: config["captchaSiteKey"]
	}

	res.render("registrarse.pug",viewBag)
}

module.exports.registrarsePost = function(req, res){

	if( req.body.pass != req.body.pass2 ){
		res.render("registrarse.pug")
	}

	if( req.body["g-recaptcha-response"] != undefined ){

		registrarseCaptcha(req,res);
		return;
	}

	registrarse(req,res);
}

function registrarseCaptcha(req, res){

	request.post(
		{
			"url":"https://www.google.com/recaptcha/api/siteverify",
			"form":{
				"secret": config["captchaSecret"],
				"response": req.body["g-recaptcha-response"]
			}
		},
		function(err,httpResponse,body){
			if(body.success){
				registrarse(req,res);
			}else{
				res.render("registrarse.pug")
			}
		}
	)
}

function registrarse(req,res){

	let Usuarios = models["Usuarios"]

	let passBuffer = Buffer.alloc(255,req.body.pass)
	let saltBuffer = crypto.randomBytes(255)

	let derivedKey = pbkdf2.pbkdf2Sync(passBuffer, saltBuffer, 1000, 64, 'sha256')

	let passHash = derivedKey.toString('hex')

	Usuarios.create({
		nombre: req.body.nombre,
		pass_hash: passHash,
		email: req.body.email,
		salt: saltBuffer
	}).then(() =>{
		res.render("registrarse.pug")
	})
}