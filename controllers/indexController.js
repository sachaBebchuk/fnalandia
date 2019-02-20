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

	getDatosMenu(req,viewBag).then( () => {
		res.render("index.pug",viewBag)
	})
}

function getDatosMenu(req,retObj){

	if(req.session.userId == undefined){
		return Promise.resolve()
	}

	let promiseFind = models["Usuarios"].findById(req.session.userId)

	promiseFind.then( usuario =>{

		retObj.usuario = {
			"id": usuario.dataValues.id,
			"nombre": usuario.dataValues.nombre,
			"profile_pic": "/static/img/profile_pics/" + usuario.dataValues.profile_pic
		}
	})

	return promiseFind
}

module.exports.getDatosMenu = getDatosMenu