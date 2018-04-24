//http://stackoverflow.com/questions/9659265/check-if-javascript-script-exists-on-page
function isMyScriptLoaded(url){
    var scripts = document.getElementsByTagName('script');
    url = "http://" + window.location.hostname + "/" + url;
    for (var i = scripts.length; i--;) {
        if (scripts[i].src == url) return true;
    }
    return false;
}
function agregarScript(script){

	if(isMyScriptLoaded(script)){
		return;
	}

	var se = document.createElement('script');
	se.setAttribute('type', 'text/javascript');
	se.setAttribute('src',script);
	document.getElementsByTagName('head').item(0).appendChild(se);
}
function llenarSelect(select,data,onclick){

	while(select.firstElementChild){
		select.removeChild(select.firstChild);
	}

	for(var i = 0; i < data.length; i++){

		option = document.createElement("option");
		option.value = data[i].id;
		option.innerHTML = data[i].descripcion;

		if(onclick != undefined){
			option.onclick = () => { onclick() }
		}

		select.appendChild(option);
	}
}
function getSelected(s){

	if(s.multiple){

		var result = [];
		for(var i = 0; i < s.length; i++){
			if(s[i].selected){
				result.add(s[i]);
			}
		}
		return result;
	}else{
		return s[s.selectedIndex];
	}
}


function formatNumber(n){
	return parseFloat(Math.round(n * 100) / 100).toFixed(2);
}
