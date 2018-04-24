function colorearTablas(tablas){

	for(var i=0; i < tablas.length; i++){
		colorearRows($(tablas[i]));
	}
}

function colorearRows(tabla){

	var par = false;

	var rows = tabla.children('tbody').children('tr');

	for(var i = 0; i < rows.length; i++){
		var r = $(rows[i]);

		if(r.css("display")=="none") continue;

		if(par){
			r.removeClass("rowImpar");
			r.addClass("rowPar");
		}
		else{
			r.removeClass("rowPar");
			r.addClass("rowImpar");
		}
		par = !par;
	}
}