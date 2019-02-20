const models = require("../models")
const indexController = require("./indexController")

module.exports.perfilGet = function(req,res){

	let viewBag = {}

	indexController.getDatosMenu(req,viewBag).then( () => {

		return models["Usuarios"].findById(req.params.idUsuario)

	}).then( usuario => {

		viewBag.perfil = {
			profilePic: "/static/img/profile_pics/" + usuario.profile_pic,
			nombre: usuario.nombre,
			descripcion: "descripcion"
		}

		res.render("perfil.pug",viewBag)
	})
}