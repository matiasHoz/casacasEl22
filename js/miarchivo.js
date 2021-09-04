/*Objetos de cada equipo */
const camiseta1 = { nombre: "PSG",
                    precio: 2300};

const camiseta2 = { nombre: "Juventus",
                    precio: 2800};

const camiseta3 = { nombre: "Barcelona",
                    precio: 2500};

const camiseta4 = { nombre: "Atletico de Madrid",
                    precio: 2900};

const camiseta5 = { nombre: "River",
                    precio: 3000};

const camiseta6 = { nombre: "Boca",
                    precio: 3000};

const camiseta7 = { nombre: "Rosario Central",
                    precio: 2200};

const camiseta8 = { nombre: "Racing",
                    precio: 3100};

const camiseta9 = { nombre: "Argentina",
                    precio: 3700};

const camiseta10 = { nombre: "Palmeiras",
                    precio: 2900};

const camiseta11 = { nombre: "Ajax",
                     precio: 2800};

const camiseta12 = { nombre: "Dortmund",
                     precio: 2600};

const camiseta13 = { nombre: "Real Madrid",
                     precio: 3000};

const camiseta14 = { nombre: "Chelsea",
                     precio: 3200};

const camiseta15 = { nombre: "Sassuolo",
                     precio: 2200};

const camiseta16 = { nombre: "Manchester City",
                     precio: 2900};

const camiseta17 = { nombre: "Gremio",
                     precio: 2700};

const camiseta18 = { nombre: "Peñarol",
                     precio: 2500};

const camiseta19 = { nombre: "Brasil",
                     precio: 2100};

const camiseta20 = { nombre: "Inter",
                     precio: 2900};


/*Lista de objetos seccion 1 */
const seccion1 = [{id: 1, nombre: "PSG", precio: 2300},
                  {id: 2, nombre: "Juventus", precio: 2800},
                  {id: 3, nombre: "Barcelona", precio: 2500},
                  {id: 4, nombre: "Atletico de Madrid", precio:2900}];

/*Creando un elemento a partir de objetos */
for (const producto of seccion1) {
    let nuevosDatos1 = document.getElementById("fotos1");
	let contenedor = document.createElement("div");
	contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
	                        <p> nombre: ${producto.nombre} </p>
	                        <p> precio: ${producto.precio + 400}  </p>`;
	nuevosDatos1.appendChild(contenedor);
}


/*Lista de objetos seccion 2 */
const seccion2 = [{id: 5, nombre: "River", precio: 3000},
                  {id: 6, nombre: "Boca", precio: 3000},
                  {id: 7, nombre: "Rosario Central", precio: 2200},
                  {id: 8, nombre: "Racing", precio:3100}];

/*Creando un elemento a partir de los objetos */
for (const producto of seccion2) {
	let nuevosDatos = document.getElementById("fotos2");
	let contenedor = document.createElement("div");
	contenedor.innerHTML = `<h3> ID: ${producto.id} </h3>
	                        <p> nombre: ${producto.nombre} </p>
	                        <p> precio: ${producto.precio + 1000}  </p>`;
	nuevosDatos.appendChild(contenedor);
}


/*Eliminar subtitulo "Europa" */
let subtitulo1 = document.getElementById("eur");
subtitulo1.parentNode.removeChild(subtitulo1);

/*Eliminar subtitulo "Futbol Argentino" */
let subtitulo2 = document.getElementById("arg");
subtitulo2.parentNode.removeChild(subtitulo2);

/*Eliminar subtitulo "Talle S" */
let subtitulo3 = document.getElementById("sim");
subtitulo3.parentNode.removeChild(subtitulo3);

/*Agregar nuevo subtitulo */
let subtituloNuevo = document.getElementById("camisetas1");
let elementoHTML = document.createElement("h2");
elementoHTML.textContent = "LIGA ARGENTINA";
subtituloNuevo.appendChild(elementoHTML);

/*Agregar nuevo subtitulo */
let subtituloNuevo1 = document.getElementById("camisetas2");
let elementoHTML1 = document.createElement("h2");
elementoHTML1.textContent = "TALLE 1";
subtituloNuevo1.appendChild(elementoHTML1);

/*Agregar nueva opcion al menu "PROMOS" */
let opcionNueva = document.getElementById("menu");
let contenido = document.createElement("li");
contenido.textContent = "PROMOS";
opcionNueva.appendChild(contenido);

/*Agregar nueva opcion al menu "BRASILEIRAIO" */
let opcionNueva1 = document.getElementById("menu");
let contenido1 = document.createElement("li");
contenido1.textContent = "BRASILEIRAO";
opcionNueva1.appendChild(contenido1);

/*Agregar nueva opcion al menu "EUROPA" */
let opcionNueva2 = document.getElementById("menu");
let contenido2 = document.createElement("li");
contenido2.textContent = "EUROPA";
opcionNueva2.appendChild(contenido2);

/*Agregar nueva opcion al menu "MLS" */
let opcionNueva3 = document.getElementById("menu");
let contenido3 = document.createElement("li");
contenido3.textContent = "MLS";
opcionNueva3.appendChild(contenido3);

/*Agregar nueva opcion al menu "LIGA PROFESIONAL" */
let opcionNueva4 = document.getElementById("menu");
let contenido4 = document.createElement("li");
contenido4.textContent = "LIGA PROFESIONAL";
opcionNueva4.appendChild(contenido4);



/*Solicitar nombre del usuario */
function solicitarNombre() {
	let nombreIngresado = prompt("Ingrese su nombre");
    alert("¡Bienvenido a Casacas El 22 " + nombreIngresado + "!");
    console.log("Nombre: " + nombreIngresado);
}

/*Solicitar talle del cliente */
function solicitarTalle() {
	let talleIngresado = prompt("Ingrese su talle");
	alert("Actualmente contamos con el talle " + talleIngresado + " en todas las camisetas.");
	console.log("Talle: " + talleIngresado);
}

/*¿Es un antiguo cliente? */
function pregunta() {
	let descuento = prompt("¿Alguna vez habías comprado en Casacas El 22?");
	if(descuento == "Si"){
		alert("Obtienes un descuento del 20% por haber comprado en este sitio.")
	}
	if(descuento == "No"){
		alert("¡Entonces gracias por elegirnos!");
	}
	console.log("Descuento: " + descuento);
}

/*Consultar sobre el precio de la camiseta seleccionada */
function pregunta2() {
	let equipo = prompt("¿De qué equipo es la camiseta que seleccionaste?");
	if(equipo == camiseta1.nombre){
		alert("La camiseta del " + "" + (camiseta1.nombre) + " " + "cuesta " + (camiseta1.precio) + ".");
	}
	if(equipo == camiseta2.nombre){
		alert("La camiseta de la " + "" + (camiseta2.nombre) + " " + "cuesta " + (camiseta2.precio) + ".");
	}
	if(equipo == camiseta3.nombre){
		alert("La camiseta del " + "" + (camiseta3.nombre) + " " + "cuesta " + (camiseta3.precio) + ".");
	}
    if(equipo == camiseta4.nombre){
    	alert("La camiseta del " + "" + (camiseta4.nombre) + " " + "cuesta " + (camiseta4.precio) + ".");
    }
    if(equipo == camiseta5.nombre){
    	alert("La camiseta de " + "" + (camiseta5.nombre) + " " + "cuesta " + (camiseta5.precio) + ".");
    }
    if(equipo == camiseta6.nombre){
    	alert("La camiseta de " + "" + (camiseta6.nombre) + " " + "cuesta " + (camiseta6.precio) + ".");
    }
    if(equipo == camiseta7.nombre){
    	alert("La camiseta de " + "" + (camiseta7.nombre) + " " + "cuesta " + (camiseta7.precio) +".");
    }
    if(equipo == camiseta8.nombre){
    	alert("La camiseta del glorioso " + "" + (camiseta8.nombre) + " " + "cuesta " + (camiseta8.precio) + ".");
    }
    if(equipo == camiseta9.nombre){
    	alert("La camiseta de la Selección " + "" + (camiseta9.nombre) + " " + "cuesta " + (camiseta9.precio) + ".");
    }
    if(equipo == camiseta10.nombre){
    	alert("La camiseta del " + "" + (camiseta10.nombre) + " " + "cuesta " + (camiseta10.precio) + ".");
    }
    if(equipo == camiseta11.nombre){
    	alert("La camiseta del " + "" + (camiseta11.nombre) + " " + "cuesta " + (camiseta11.precio) + ".");
    }
    if(equipo == camiseta12.nombre){
    	alert("La camiseta del " + "" + (camiseta12.nombre) + " " + "cuesta " + (camiseta12.precio) + ".");
    }
    if(equipo == camiseta13.nombre){
    	alert("La camiseta del " + "" + (camiseta13.nombre) + " " + "cuesta " + (camiseta13.precio) + ".");
    }
    if(equipo == camiseta14.nombre){
    	alert("La camiseta del " + "" + (camiseta14.nombre) + " " + "cuesta " + (camiseta14.precio) + ".");
    }
    if(equipo == camiseta15.nombre){
    	alert("La camiseta del " + "" + (camiseta15.nombre) + " " + "cuesta " + (camiseta15.precio) + ".");
    }
    if(equipo == camiseta16.nombre){
    	alert("La camiseta del " + "" + (camiseta16.nombre) + " " + "cuesta " + (camiseta16.precio) + ".");
    }
    if(equipo == camiseta17.nombre){
    	alert("La camiseta del " + "" + (camiseta17.nombre) + " " + "cuesta " + (camiseta17.precio) + ".");
    }
    if(equipo == camiseta18.nombre){
    	alert("La camiseta del " + "" + (camiseta18.nombre) + " " + "cuesta " + (camiseta18.precio) + ".");
    }
    if(equipo == camiseta19.nombre){
    	alert("La camiseta de la Selección de " + "" + (camiseta19.nombre) + " " + "cuesta " + (camiseta19.precio) + ".");
    }
    if(equipo == camiseta20.nombre){
    	alert("La camiseta del " + "" + (camiseta20.nombre) + " " + "cuesta " + (camiseta20.precio) + ".");
    }
    console.log("Equipo: " + equipo);
}


/* Llamado de las funciones */
solicitarNombre();
solicitarTalle();
pregunta();
pregunta2();

