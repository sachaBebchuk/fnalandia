var path 	= require("path")
var fs 		= require( 'fs' )

module.exports = function(app){

	var routesDir = path.join(__dirname,"routes")

	fs.readdir(routesDir, function( err, files){

		files.forEach(function(file, index){

			var route = require(path.join(__dirname,"routes",file))

			app.use(route.path,route.router)
		})
	})
}