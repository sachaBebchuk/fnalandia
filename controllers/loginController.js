const pbkdf2    = require("pbkdf2")
const request   = require("request")
const sequelize = require("./../db")
let   env       = process.env.NODE_ENV || "development"
let   config    = require("../config/config.json")[env]

module.exports.loginGet = function(req, res) {

	let viewBag = {
		profilePic: "static/img/placeholderProfile.svg",
		sitekey: config["captchaSiteKey"]
	}

	res.render("login.pug",viewBag)
}

module.exports.loginPost = function(req, res) {

	if( req.body["g-recaptcha-response"] != undefined ){

		loginCaptcha(req,res);
		return;
	}

	login(req,res);
}

function loginCaptcha(req, res){

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
				login(req,res);
			}else{
				res.render("login.pug",{
					errorCaptcha: true
				})
			}
		}
	)
}

function login(req, res){
	sequelize.query(
		"SELECT * FROM `Usuarios` WHERE `nombre`=:usuario",
		{ replacements: { usuario: req.body.usuario  }, type: sequelize.QueryTypes.SELECT }
	).then(user => {

		var user = user[0]

		var passBuffer = new Buffer.alloc(255,req.body.pass)
		var saltBuffer = user.salt

		var derivedKey = pbkdf2.pbkdf2Sync(passBuffer, saltBuffer, 1000, 64, 'sha256')

		if(user.pass_hash === derivedKey.toString('hex')){

			req.session.userId = user.id_usuario
			res.redirect("/")
		}else{

			res.render("login.pug",{
				errorAutenticacion: true
			})
		}
	}).catch(()=>{
		res.render("login.pug",{
			errorAutenticacion: true
		})
	})	
}