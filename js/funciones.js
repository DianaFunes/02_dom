function numero_esferas()
{
	//Devuelve el elemento que tiene el ID atributo con el valor especificado
	var x = parseInt(document.getElementById("nEsferas").value); 
	var contenido = '', e = false;
//Devuelve un NodeList que contiene todos los elementos con un nombre especificado
	var r = document.getElementsByName("opcion"); 
	// length  lista de nodos Devuelve el número de nodos en un NodeList

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

function numero_esferas2(){

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
	
//Devuelve un NodeList que contiene todos los elementos con el nombre de la etiqueta especificada
	var esf = document.getElementsByTagName("div");
	if(e != false){
		// length  Devuelve el número de nodos en un NodeList
		for (var i = 0; i < esf.length; i++) {
			switch(e){
				case 'verde':
					esf[i].classList.add('verde'); // classlist Devuelve la clase name(s) de un elemento
					break;
				case 'blanco':
					document.getElementById("esferas").classList.add('blanco');
					break;
				case 'rojo':
					document.getElementById("esferas").classList.add('rojo');
			}
		}
	}
}
