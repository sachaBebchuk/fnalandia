const models = require("../models")

module.exports.indexGet = function(req, res) {

	let viewBag = {}

	viewBag.publicaciones = []

	for(let i = 0; i < 5; i++){
		viewBag.publicaciones.push({
			titulo: "kaka",
			copete: "lalalalala kakalaskdflhna",
			thumb: "thumb_placeholder.jpg"
		})
	}

	if(req.session.userId == undefined){
		res.render("index.pug",viewBag)
		return
	}

	models["Usuarios"].findById(req.session.userId).then( usuario =>{

		viewBag.usuario = {
			"id": usuario.dataValues.id,
			"nombre": usuario.dataValues.nombre,
			"profile_pic": "/static/img/profile_pics/" + usuario.dataValues.profile_pic
		}

		res.render("index.pug",viewBag)
	})
}