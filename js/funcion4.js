var todo = document.createElement("section");
todo.setAttribute("id","all")
var titulo01 = document.createElement("h3");
titulo01.innerText = "Manejo de DOM";
titulo01.setAttribute("id","01titulo");
todo.appendChild(titulo01);
document.body.appendChild(todo);

document.getElementById("01titulo").style.width= '100%';
document.getElementById("01titulo").style.backgroundColor= '#dac2ff';
document.getElementById("01titulo").style.border = '#3e40a3 solid 5px';
document.getElementById("01titulo").style.marginBottom= '10px';
document.getElementById("all").style.display = 'flex';
document.getElementById("all").style.flexWrap= 'wrap';
document.getElementById("all").style.justifyContent = 'space-between';
//document.getElementById("all").style.padding = '50px';
document.getElementById("all").style.backgroundColor = '#ece1ff';

var izq = document.createElement("article");
var txt01 = document.createElement("h2");
txt01.innerText = "Mi avataaaaaar";
izq.appendChild(txt01);
todo.appendChild(izq);

var der = document.createElement("article");
var pic = document.createElement("img");
pic.setAttribute("src", "../imagen/m.png");
pic.setAttribute("id","picture");
der.setAttribute("id","avatar");
der.appendChild(pic);
todo.appendChild(der);

document.getElementById("avatar").style.height = '100%';
document.getElementById("avatar").style.width = '100%';

document.getElementById("picture").style.width = '250px';


ambas = document.getElementsByTagName("article");
ambas[0,1].style.flexBasis = "50%";
ambas[0].style.padding = "60px";
ambas[0].style.fontSize = '40px';
ambas[0].style.border = '#c2ffc2 solid 5px';
ambas[1].style.border = '#b3a188 solid 5px';
ambas[1].style.alignItems = 'right';






