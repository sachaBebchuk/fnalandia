module.exports.indexGet = function(req, res) {

	let viewBag = {
		publicaciones: [
			{
				titulo: "kaka",
				copete: "lalalalala kakalaskdflhna",
				thumb: "thumb_placeholder.jpg"
			},
			{
				titulo: "kaka",
				copete: "lalalalala kakalaskdflhna",
				thumb: "thumb_placeholder.jpg"
			},
			{
				titulo: "kaka",
				copete: "lalalalala kakalaskdflhna",
				thumb: "thumb_placeholder.jpg"
			},
			{
				titulo: "kaka",
				copete: "lalalalala kakalaskdflhna",
				thumb: "thumb_placeholder.jpg"
			}
		]
	}

	res.render("index.pug",viewBag)
}