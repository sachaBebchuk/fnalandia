module.exports = function(req,res,next){

	//Reemplazar esto por una validacion como la gente

	if(req.session.userId == undefined &&
	   req.url != "/login" &&
	   req.url.substring(0,7) != "/static"
	){
		res.redirect("/login")
	}
	else{
		next()
	}
}
