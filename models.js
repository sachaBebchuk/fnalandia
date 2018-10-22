
const sequelize	= require("./db")
const path      = require("path")
const fs        = require( 'fs' )

let modelsDir = path.join(__dirname,"models")

fs.readdir(modelsDir,loadModels)

function loadModels( err, files){
	files.forEach(loadModel)
}

function loadModel(file, index){

	let model = require(path.join(modelsDir,file))()
	let modelName = file.replace(".js","")

	model.sync()

	module.exports[modelName] = model
}