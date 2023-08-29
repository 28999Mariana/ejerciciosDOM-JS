// Creo un elemento <div>
let div = document.createElement("div");
// Agrego texto al elemento <div>
div.innerHTML = "Soy un elemento <div> creado con javascript.";
// Agrego el elemento <div> al final del documento
document.body.appendChild(div);
// Cambio el estilo del div
div.style.padding = "30px";
div.style.fontSize = "30px";
div.style.fontFamily = "cursive";
div.style.color = "white";
div.style.backgroundColor = "#F85408";
div.style.marginTop = "2%";
div.style.textAlign = "center";


//Eliminar elemento de una lista
function eliminarPrimerElemento() {
    let lista = document.getElementById("lista");
    lista.removeChild(lista.firstElementChild);
}



//Cambio de atributos
// Obtengo la imagen
let imagen = document.getElementById("imagen");
// Cambio el atributo src de la imagen
imagen.src = "./img/img2.jpg";



//Cambio de contenido HTML
// Obtengo el párrafo
let parrafo = document.getElementById("parrafo");
// Cambio el contenido HTML del párrafo
parrafo.innerHTML = "Vivir el día a día!";


//Anidación de elementos
// Creo una lista <ul>
let listaAnidada = document.createElement("ul");
// Agrego elementos <li> a la lista
for (let i = 0; i < 8; i++) {
  let li = document.createElement("li");
  li.innerHTML = "Elemento " + i;
  listaAnidada.appendChild(li);
}
// Agrego la lista al documento
document.body.appendChild(listaAnidada);
//Edito lista anidada
listaAnidada.style.color = "white";
listaAnidada.style.fontSize = "30px";
listaAnidada.style.fontFamily = "cursive";
listaAnidada.style.padding = "40px";



//Reemplazo de elementos
 // Obtengo el párrafo
 let p = document.getElementById("p");
 // Creo un nuevo elemento <h2>
 let h2 = document.createElement("h2");
 h2.innerHTML = "Este es un encabezado h2";
 // Reemplazo el párrafo por el elemento <h2>
 p.parentNode.replaceChild(h2, p);


 //Clonación de elementos
 // Obtengo el elemento div original
 let original = document.getElementById("original");
 // Clono el elemento div
 let clon = original.cloneNode(true);
 // Agrego el clon después del elemento div original
 original.parentNode.insertBefore(clon, original.nextSibling);


 //Movimiento de elementos
 // Obtengo los elementos div padre e hijo
 let padre = document.getElementById("padre");
 let hijo = document.getElementById("hijo");
 // Muevo el elemento div hijo dentro del elemento div padre
 padre.appendChild(hijo);


 //Cambio de estilo al elemento p
 // Obtengo el párrafo
 let par = document.getElementById("par");
 // Cambio el estilo del párrafo
 par.style.color = "white";
 par.style.fontSize = "30px";
 par.style.fontFamily = "cursive";



 //Edición de contenido
  // Obtengo el elemento span
  let texto = document.getElementById("texto");
  // Permito que el usuario edite el contenido del span
  texto.contentEditable = true;