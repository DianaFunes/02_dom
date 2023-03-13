//selectores
let identificador, etiquetas, clase, nombre, referencia, seccion;
identificador = document.getElementById("titulo");
//para obtener solo el id  del elemento
//console.log(identificador);
//para obtener solo el contenido del elemento
console.log(identificador.innerHTML);
//Devuelve una colección de todos los elementos secundarios con el nombre de la etiqueta especificada
seccion = document.getElementsByTagName("section");
console.log(seccion);
//puedo accesar al primer nodo de la primer seccion, cada elemento del arreglo
//traer etiquetas del primer nodo
console.log(seccion[0].innerHTML);
//traer  el priemr parrafo 

etiquetas = document.getElementsByTagName("p");
console.log(etiquetas[0].innerHTML);
//tarer el nodo de una clase
//Devuelve una colección de todos los elementos secundarios con el nombre de la clase especificada
clase= document.getElementsByClassName('parrafo');
console.log(clase);

//Devuelve un NodeList que contiene todos los elementos con un nombre especificado h2
nombre = document.getElementsByName("subtitulo");
console.log(nombre);

//--- Gestion de nodos
let elemento, contenido;
//crear nodo
elemento = document.createElement('p');
contenido = document.createTextNode('NuevoParrafo');
//Añade un nuevo nodo secundario, a un elemento, como el último nodo hijo
elemento.appendChild(contenido);
//seccion[1].appendChild(elemento);
//para añadirnlo al principio de los nodos 
//seccion[1].insertAdjacentElement('beforebegin',elemento);
//eccion[1].insertAdjacentElement('afterbegin',elemento);
//seccion[1].insertAdjacentElement('beforeend',elemento);
//insertar elemento despues de la primera etiqueta
seccion[1].insertBefore(elemento,etiquetas[1]);

//insertar contenido a nodo
//Aqui me quede
/*
elemento = document.createElement("article");
contenido = document.createTextNode("Artículo de Sección");

//Insertar Contenido en un nodo
document.getElementById("contenido").innerHTML= 
							'información<br/><p class="nuevo">otro parrafo en el nodo</p>';
                            
//Cambiar Atributos de un Nodo
etiquetas[0].setAttribute("class","parrafo nuevo");
seccion[2].setAttribute("class", "contenido");
seccion[3].setAttribute("class", "contenido");
document.getElementById("enlace").setAttribute("href", "https://www.google.com");

//Estilos
document.getElementById("titulo").style.background='#f00';
document.getElementById("contenido").style.marginTop="10px";
document.getElementById("contenido").style.lineHeight="50px"; 

//Ejercicio en clase
  //nueva sección Forma1
    nuevaSeccion = document.createElement('section');
        encabezado = document.createElement('h1');
        encabezado.setAttribute('class','encabezado')
        contenido = document.createTextNode('Conóceme');
        encabezado.appendChild(contenido);

        articulo1 = document.createElement('article');
            texto = document.createElement('span');
            texto.setAttribute('class','texto')
            frase = document.createTextNode('Mi Foto');
            texto.appendChild(frase);
        articulo1.appendChild(texto);

        articulo2 = document.createElement('article');
            imagen = document.createElement('img');
            imagen.setAttribute('src','../imagen/m.png')
        articulo2.appendChild(imagen);  
        nuevaSeccion.appendChild(encabezado);
    nuevaSeccion.appendChild(articulo1);
    nuevaSeccion.appendChild(articulo2);
    seccion[3].insertAdjacentElement('afterend',nuevaSeccion);

/*
    nuevaSeccion = document.createElement('section');

     //nueva sección Forma2
     nuevaSeccion2 = document.createElement('section');
     seccion[4].insertAdjacentElement('afterend',nuevaSeccion);
     seccion[5].innerHTML = '<h1 class="encabezado">Conóceme</h1><article><span class="texto">Mi Foto</span></article><article><img src="../imagen/m.png"></article>';*/