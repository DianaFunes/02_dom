function numero_esferas()
{
	var x = parseInt(document.getElementById("nEsferas").value);
	var contenido = '', e = false;

	var r = document.getElementsByName("opcion");
	for (var i = 0; i < r.length; i++) {
		if (r[i].checked) {
		  var e = r[i].value;
		}
	}

	for(i=0;i<x;i++)
	{
		contenido += '<div class="esfera '+ e +'"></div>';
	}
	document.getElementById("esferas").innerHTML = contenido;

}



// Aplica cuando ya estan pintadas las esferas
function numero_esferas2()
{
	var x = parseInt(document.getElementById("nEsferas").value);
	var contenido = '', e = false;

	for(i=0;i<x;i++)
	{
		contenido += '<div class="esfera"></div>';
	}
	document.getElementById("esferas").innerHTML = contenido;

	
	var r = document.getElementsByName("opcion");
	for (var i = 0; i < r.length; i++) {
		if (r[i].checked) {
		  var e = r[i].value;
		}
	  }
	

	var esf = document.getElementsByTagName("div");
	if(e != false){
		for (var i = 0; i < esf.length; i++) {
			switch(e){
				case 'verde':
					esf[i].classList.add('verde');
					break;
				case 'blanco':
					document.getElementById("esfera").classList.add('blanco');
					break;
				case 'rojo':
					document.getElementById("esfera").classList.add('rojo');
			}
		}
	}
}



