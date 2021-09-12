/*Funcion para detallar las camisetas */
function camisetas(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

/*Agregando nuevas camisetas*/
const camiseta1 = new camisetas("PSG", 2300);
const camiseta2 = new camisetas("Juventus", 2800);
const camiseta3 = new camisetas("Barcelona", 2500);
const camiseta4 = new camisetas("Atletico de Madrid", 2900);
const camiseta5 = new camisetas("River", 3000);
const camiseta6 = new camisetas("Boca", 3000);
const camiseta7 = new camisetas("Rosario Central", 2200);
const camiseta8 = new camisetas("Racing", 3100);
const camiseta9 = new camisetas("Argentina", 3700);
const camiseta10 = new camisetas("Palmeiras", 2900);
const camiseta11 = new camisetas("Ajax", 2800);
const camiseta12 = new camisetas("Dortmund", 2600);
const camiseta13 = new camisetas("Real Madrid", 3000);
const camiseta14 = new camisetas("Chelsea", 3200);
const camiseta15 = new camisetas("Sassuolo", 2200);
const camiseta16 = new camisetas("Manchester City", 2900);
const camiseta17 = new camisetas("Gremio", 2700);
const camiseta18 = new camisetas("Peñarol", 2500);
const camiseta19 = new camisetas("Brasil", 2100);
const camiseta20 = new camisetas("Inter", 2900);

/*Array con todas las casacas*/

const arrayCamisetas = [camiseta1, camiseta2, camiseta3, camiseta4, camiseta5, camiseta6, camiseta7, camiseta8, camiseta9, camiseta10, camiseta11, camiseta12, camiseta13, camiseta14, camiseta15, camiseta16, camiseta17, camiseta18, camiseta19, camiseta20];


/*Pasarlo a JSON y mostrarlo en la consola */

const enJSON = JSON.stringify(arrayCamisetas);

console.log(enJSON);

/*Almacenar datos en el Storage ------------------------*/
/*PSG */
localStorage.setItem("añoPSG", 2020);
localStorage.setItem("stockPSG", 20);
localStorage.setItem("marcaPSG", "Nike");

/*Juventus */
localStorage.setItem("añoJuve", 2020);
localStorage.setItem("stockJuve", 14);
localStorage.setItem("marcaJuve", "Adidas");

/*Barcelona */
localStorage.setItem("añoBarca", 2021);
localStorage.setItem("stockBarca", 27);
localStorage.setItem("marcaBarca", "Nike");

/*Atl. Madrid */
localStorage.setItem("añoAleti", 2021);
localStorage.setItem("stockAleti", 12);
localStorage.setItem("marcaAleti", "Nike");

/*River Plate */
localStorage.setItem("añoRiver", 2021);
localStorage.setItem("stockRiver", 10);
localStorage.setItem("marcaRiver", "Adidas");

/*Boca Juniors */
localStorage.setItem("añoBoca", 2020);
localStorage.setItem("stockBoca", 8);
localStorage.setItem("marcaBoca", "Nike");

/*Rosario Central */
localStorage.setItem("añoCentral", 2020);
localStorage.setItem("stockCentral", 22);
localStorage.setItem("marcaCentral", "Under Armour");

/*Racing Club */
localStorage.setItem("añoRacing", 2015);
localStorage.setItem("stockRacing", 15);
localStorage.setItem("marcaRacing", "Topper");


/*Recuperar los datos del Storage ----------------------*/
/*PSG */
let infoPSG1 = localStorage.getItem("añoPSG");
let infoPSG2 = localStorage.getItem("stockPSG");
let infoPSG3 = localStorage.getItem("marcaPSG");

console.log("PSG año: " + infoPSG1);
console.log("PSG stock: " + infoPSG2);
console.log("PSG marca: " + infoPSG3);

/*Juventus */
let infoJuve1 = localStorage.getItem("añoJuve");
let infoJuve2 = localStorage.getItem("stockJuve");
let infoJuve3 = localStorage.getItem("marcaJuve");

console.log("Juventus año: " + infoJuve1);
console.log("Juventus stock: " + infoJuve2);
console.log("Juventus marca: " + infoJuve3);

/*Barcelona */
let infoBarca1 = localStorage.getItem("añoBarca");
let infoBarca2 = localStorage.getItem("stockBarca");
let infoBarca3 = localStorage.getItem("marcaBarca");

console.log("Barcelona año: " + infoBarca1);
console.log("Barcelona stock: " + infoBarca2);
console.log("Barcelona marca: " + infoBarca3);

/*Atl. Madrid */
let infoAleti1 = localStorage.getItem("añoAleti");
let infoAleti2 = localStorage.getItem("stockAleti");
let infoAleti3 = localStorage.getItem("marcaAleti");

console.log("Atl Madrid año: " + infoAleti1);
console.log("Atl Madrid stock: " + infoAleti2);
console.log("Atl Madrid marca: " + infoAleti3);

/*River Plate */
let infoRiver1 = localStorage.getItem("añoRiver");
let infoRiver2 = localStorage.getItem("stockRiver");
let infoRiver3 = localStorage.getItem("marcaRiver");

console.log("River año: " + infoRiver1);
console.log("River stock: " + infoRiver2);
console.log("River marca: " + infoRiver3);

/*Boca Juniors */
let infoBoca1 = localStorage.getItem("añoBoca");
let infoBoca2 = localStorage.getItem("stockBoca");
let infoBoca3 = localStorage.getItem("marcaBoca");

console.log("Boca año: " + infoBoca1);
console.log("Boca stock: " + infoBoca2);
console.log("Boca marca: " + infoBoca3);

/*Rosario Central */
let infoCentral1 = localStorage.getItem("añoCentral");
let infoCentral2 = localStorage.getItem("stockCentral");
let infoCentral3 = localStorage.getItem("marcaCentral");

console.log("Central año " + infoCentral1);
console.log("Central stock: " + infoCentral2);
console.log("Central marca: " + infoCentral3);

/*Racing Club */
let infoRacing1 = localStorage.getItem("añoRacing");
let infoRacing2 = localStorage.getItem("stockRacing");
let infoRacing3 = localStorage.getItem("marcaRacing");

console.log("Racing año: " + infoRacing1);
console.log("Racing stock: " + infoRacing2);
console.log("Racing marca: " + infoRacing3);


/*Solicitar nombre del usuario ----------------------*/
function solicitarNombre() {
	let nombreIngresado = prompt("Ingrese su nombre");
    alert("¡Bienvenido a Casacas El 22 " + nombreIngresado + "!");
    console.log("Nombre: " + nombreIngresado);
}

/*Solicitar talle del cliente -----------------------*/
function solicitarTalle() {
	let talleIngresado = prompt("Ingrese su talle");
	alert("Actualmente contamos con el talle " + talleIngresado + " en todas las camisetas.");
	console.log("Talle: " + talleIngresado);
}

/*¿Es un antiguo cliente? ---------------------------*/
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

/*Eventos --------------------------------------------------------*/
/*Click en la camiseta del PSG */
let camisetaPSG = document.getElementById("remera1");
camisetaPSG.addEventListener ("click", casaca1);

function casaca1() {
    alert("La camiseta del " + camiseta1.nombre + " " + "cuesta " + "$" + camiseta1.precio);
}

/*Click en la camiseta de la Juve */
let camisetaJuve = document.getElementById("remera2");
camisetaJuve.addEventListener ("click", casaca2);

function casaca2() {
    alert("La camiseta del " + camiseta2.nombre + " " + "cuesta " + "$" + camiseta2.precio);
}

/*Click en la camiseta del Barcelona */
let camisetaBarca = document.getElementById("remera3");
camisetaBarca.addEventListener ("click", casaca3);

function casaca3() {
    alert("La camiseta del " + camiseta3.nombre + " " + "cuesta " + "$" + camiseta3.precio);
}

/*Click en la camiseta del Atlético Madrid */
let camisetaAleti = document.getElementById("remera4");
camisetaAleti.addEventListener ("click", casaca4);

function casaca4() {
    alert("La camiseta del " + camiseta4.nombre + " " + "cuesta " + "$" + camiseta4.precio);
}

/*Click en la camiseta de River */
let camisetaRiver = document.getElementById("remera5");
camisetaRiver.addEventListener ("click", casaca5);

function casaca5() {
    alert("La camiseta de " + camiseta5.nombre + " " + "cuesta " + "$" + camiseta5.precio);
}

/*Click en la camiseta de Boca */
let camisetaBoca = document.getElementById("remera6");
camisetaBoca.addEventListener ("click", casaca6);

function casaca6() {
    alert("La camiseta de " + camiseta6.nombre + " " + "cuesta " + "$" + camiseta6.precio);
}

/*Click en la camiseta de Central */
let camisetaCentral = document.getElementById("remera7");
camisetaCentral.addEventListener ("click" , casaca7);

function casaca7() {
    alert("La camiseta de " + camiseta7.nombre + " " + "cuesta " + "$" + camiseta7.precio);
}

/*Click en la camiseta de Racing */
let camisetaRacing = document.getElementById("remera8");
camisetaRacing.addEventListener ("click", casaca8);

function casaca8() {
    alert("La camiseta de " + camiseta8.nombre + " " + "cuesta " + "$" + camiseta8.precio);
}

/*Click en la camiseta de Argentina */
let camisetaArgentina = document.getElementById("remera9");
camisetaArgentina.addEventListener ("click", casaca9);

function casaca9() {
    alert("La camiseta del " + camiseta9.nombre + " " + "cuesta " + "$" + camiseta9.precio);
}

/*Click en la camiseta de Palmeiras */
let camisetaPalmeiras = document.getElementById("remera10");
camisetaPalmeiras.addEventListener ("click", casaca10);

function casaca10() {
    alert("La camiseta del " + camiseta10.nombre + " " + "cuesta " + "$" + camiseta10.precio);
}

/*Click en la camiseta del Ajax */
let camisetaAjax = document.getElementById("remera11");
camisetaAjax.addEventListener ("click", casaca11);

function casaca11() {
    alert("La camiseta del " + camiseta11.nombre + " " + "cuesta " + "$" + camiseta11.precio); 
}

/*Click en la camiseta del Dortmund */
let camisetaDortmund = document.getElementById("remera12");
camisetaDortmund.addEventListener ("click" , casaca12);

function casaca12() {
    alert("La camiseta del " + camiseta12.nombre + " " + "cuesta " + "$" + camiseta12.precio);
}

/*Click en la camiseta del Real Madrid */
let camisetaMadrid = document.getElementById("remera13");
camisetaMadrid.addEventListener ("click", casaca13);

function casaca13() {
    alert("La camiseta del " + camiseta13.nombre + " " + "cuesta " + "$" + camiseta13.precio);
}

/*Click en la camiseta del Chelsea */
let camisetaChelsea = document.getElementById("remera14");
camisetaChelsea.addEventListener ("click", casaca14);

function casaca14() {
    alert("La camiseta del " + camiseta14.nombre + " " + "cuesta " + "$" + camiseta14.precio);
}

/*Click en la camiseta del Sassuolo */
let camisetaSassuolo = document.getElementById("remera15");
camisetaSassuolo.addEventListener ("click", casaca15);

function casaca15() {
    alert("La camiseta del " + camiseta15.nombre + " " + "cuesta " + "$" + camiseta15.precio);
}

/*Click en la camiseta del Manchester City*/
let camisetaCity = document.getElementById("remera16");
camisetaCity.addEventListener ("click", casaca16);

function casaca16() {
    alert("La camiseta del " + camiseta16.nombre + " " + "cuesta " + "$" + camiseta16.precio);
}

/*Click en la camiseta de Gremio */
let camisetaGremio = document.getElementById("remera17");
camisetaGremio.addEventListener ("click", casaca17);

function casaca17() {
    alert("La camiseta del " + camiseta17.nombre + " " + "cuesta " + "$" + camiseta17.precio);
}

/*Click en la camiseta de Peñarol */
let camisetaPeñarol = document.getElementById("remera18");
camisetaPeñarol.addEventListener ("click", casaca18);

function casaca18() {
    alert("La camiseta del " + camiseta18.nombre + " " + "cuesta " + "$" + camiseta18.precio);
}

/*Click en la camiseta de Brasil */
let camisetaBrasil = document.getElementById("remera19");
camisetaBrasil.addEventListener ("click", casaca19);

function casaca19() {
    alert("La camiseta del " + camiseta19.nombre + " " + "cuesta " + "$" + camiseta19.precio);
}

/*Click en la camiseta del Inter */
let camisetaInter = document.getElementById("remera20");
camisetaInter.addEventListener ("click", casaca20);

function casaca20() {
    alert("La camiseta del " + camiseta20.nombre + " " + "cuesta " + "$" + camiseta20.precio);
}


/*Modificaciones al DOM -----------------------------------*/
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
let contenido = document.createElement("h5");
contenido.textContent = "PROMOS";
opcionNueva.appendChild(contenido);

/*Agregar nueva opcion al menu "BRASILEIRAIO" */
let opcionNueva1 = document.getElementById("menu");
let contenido1 = document.createElement("h5");
contenido1.textContent = "BRASILEIRAO";
opcionNueva1.appendChild(contenido1);

/*Agregar nueva opcion al menu "EUROPA" */
let opcionNueva2 = document.getElementById("menu");
let contenido2 = document.createElement("h5");
contenido2.textContent = "EUROPA";
opcionNueva2.appendChild(contenido2);

/*Agregar nueva opcion al menu "MLS" */
let opcionNueva3 = document.getElementById("menu");
let contenido3 = document.createElement("h5");
contenido3.textContent = "MLS";
opcionNueva3.appendChild(contenido3);

/*Agregar nueva opcion al menu "LIGA PROFESIONAL" */
let opcionNueva4 = document.getElementById("menu");
let contenido4 = document.createElement("h5");
contenido4.textContent = "LIGA PROFESIONAL";
opcionNueva4.appendChild(contenido4);


/* Llamado de las funciones -----------------------------*/
solicitarNombre();
solicitarTalle();
pregunta();


