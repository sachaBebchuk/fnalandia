
const sequelize	= require("./db")
const path      = require("path")
const fs        = require( 'fs' )

var modelsDir = path.join(__dirname,"models")

fs.readdir(modelsDir,loadModels)

function loadModels( err, files){

	files.forEach(loadModel)
}

function loadModel(file, index){

	var model = require(path.join(modelsDir,file))
	var modelName = file.replace(".js","")

	module.exports[modelName] = model
}
