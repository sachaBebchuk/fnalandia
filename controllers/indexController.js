var t1 = require("../models/t1")

module.exports.indexGet = function(req, res) {

	t1.findAll({
	  attributes: ['name']
	}).then(result => {

		var registros = []

		for( var i = 0; i < result.length; i++){
			registros.push(result[i].dataValues.name)
		}

		return res.render("index.pug",{
			"registros": registros
		})
	})

}
