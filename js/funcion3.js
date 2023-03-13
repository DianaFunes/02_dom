//selectores
//var es para decara variables globales
//let para variables locales

let identificador, seccion, etiqueta, clase, nombre;
identificador = document.getElementById("titulo");
//console.log(identificador);
//para obtener el contenido del elemento
console.log(identificador.innerHTML);
//Devuelve un NodeList que contiene todos los elementos con el nombre de la etiqueta especificada
seccion = document.getElementsByTagName("section");
console.log(seccion);
console.log(seccion[1].innerHTML);
//para accesar a un nodo en especifico
etiqueta = document.getElementsByTagName("p");
console.log(etiqueta[2].innerHTML);
//traer elementos de la clase parrafo

clase = document.getElementsByClassName('parrafo');
console.log(clase);
//Devuelve una colección de todos los elementos secundarios con el nombre de la clase especificada
//Devuelve un NodeList que contiene todos los elementos con un nombre especificado
nombre = document.getElementsByName("subtitulo");
console.log(nombre);

// agregar nodos
//Crea un nodo de elemento
let elemento, contenido;

elemento = document.createElement('p');

contenido = document.createTextNode('Nuevo Parrafo');
//Añade un nuevo nodo secundario, a un elemento, como el último nodo hijo
elemento.appendChild(contenido);
//seccion[1].appendChild(elemento);
//seccion[1].insertAdjacentElement('beforebegin',elemento);
//seccion[1].insertAdjacentElement('beforeend',elemento);
//seccion[1].insertAdjacentElement('afterbegin',elemento);
//seccion[1].removeChild(elemento);
//insertar contenido a nodo

elemento = document.createElement("article");
contenido = document.createTextNode("Artículo de Sección");
elemento.appendChild(contenido);
		document.getElementById("nodo").appendChild(elemento);
        
//Insertar contenido de un nodo

//insentar contenido de un nodo agregar otro parrafo
document.getElementById("contenido").innerHTML = 'Informacion <br/><p class = "nuevo"> otro parrafo en el nodo <p>';

//cambiar atributos de un nodo
etiqueta[0].setAttribute("class", "parrafo nuevo");

//cambiar estilo a parrafo con color diferente
seccion[2].setAttribute("class", "contenido");
seccion[3].setAttribute("class", "contenido");

//estilos 
document.getElementById("titulo").style.background = '#f00';
document.getElementById("contenido").style.marginTop = '10px';
document.getElementById("contenido").style.lineHeight = '50px';





















