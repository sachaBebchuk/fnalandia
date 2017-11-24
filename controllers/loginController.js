const pbkdf2 		= require("pbkdf2")
const crypto 		= require("crypto")
const sequelize = require("./../db")

module.exports.loginGet = function(req, res) {
	res.render("login.pug")
}

module.exports.loginPost = function(req, res) {

	sequelize.query(
		"SELECT * FROM `sgs_common`.`Usuarios` WHERE `nombre`=:usuario",
		{ replacements: { usuario: req.body.usuario  }, type: sequelize.QueryTypes.SELECT }
	).then(user => {

		var user = user[0]

		var passBuffer = new Buffer(req.body.pass)
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
