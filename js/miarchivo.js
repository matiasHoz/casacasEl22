/*Funcion para detallar las camisetas */
function camisetas(nombre, precio) {
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

const arrayCamisetas = [
  camiseta1,
  camiseta2,
  camiseta3,
  camiseta4,
  camiseta5,
  camiseta6,
  camiseta7,
  camiseta8,
  camiseta9,
  camiseta10,
  camiseta11,
  camiseta12,
  camiseta13,
  camiseta14,
  camiseta15,
  camiseta16,
  camiseta17,
  camiseta18,
  camiseta19,
  camiseta20,
];

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

/*Solicitar talle del cliente -----------------------
function solicitarTalle() {
  let talleIngresado = prompt("Ingrese su talle");
  alert(
    "Actualmente contamos con el talle " +
      talleIngresado +
      " en todas las camisetas."
  );
  console.log("Talle: " + talleIngresado);
}
*/

/* Llamado de las funciones -----------------------------*/
solicitarNombre();
/*
solicitarTalle();
*/

/* Agregar elementos al DOM con jQuery ------------------*/
/* Nuevo botón de "Aviso" */
$(".camisetas4").append(`<button id="boton"> AVISO </button>`);

/*Contacto 1 */
$(".camisetas3").append(`<button id="info"> CONTACTO VENDEDOR 1 </button>`);

/*Contacto 2 */
$(".camisetas1").append(`<button id="info1"> CONTACTO VENDEDOR 2 </button>`);

/*Contacto 3 */
$(".camisetas2").append(`<button id="info2"> CONTACTO VENDEDOR 3 </button>`);

/*Contacto 4 */
$(".camisetas5").append(`<button id="info3"> CONTACTO VENDEDOR 4 </button`);

/* Nuevo subtitulo */
$(".camisetas3").prepend(`<br> <h2 id="colecciones"> COLECCIONES </h2`);

/* Descripcion */
$(".camisetas3").prepend(`<h2 class="quehace"> ¿Qué hacemos? </h2>
                         <p id="descrip"> Somos un sitio dedicado a la venta de camisetas. Tenemos desde camisetas clásicas hasta lo último
                         en actualidad. Cada vez sumamos más ligas a nuestro stock. </p>`);

/* Nuevo formulario */
$("main").append(`<h2 id="registro">REGISTRATE</h2>
<form class="form">
  <div class="mb-3">
    <label for="exampleInputEmail1" id="emal" class="form-label">Dirección de e-mail</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">Nunca vamos a compartir tu e-mail con otros.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Quiero que me lleguen las novedades.</label>
  </div>
  <button type="submit" class="btn btn-primary submit">Enviar</button>
</form>
<br>`);

/*Asociar eventos a los elementos -----------------------------*/
/*Click en la camiseta del PSG */
$("#camisetas__foto1").on("click", function () {
  alert(
    "La camiseta del " +
      camiseta1.nombre +
      " " +
      "cuesta " +
      "$" +
      camiseta1.precio
  );
});

/*Click en la camiseta de la Juve */
$("#camisetas__foto2").on("click", function () {
  alert(
    "La camiseta del " +
      camiseta2.nombre +
      " " +
      "cuesta " +
      "$" +
      camiseta2.precio
  );
});

/*Click en la camiseta del Barcelona */
$("#camisetas__foto3").on("click", function () {
  alert(
    "La camiseta del " +
      camiseta3.nombre +
      " " +
      "cuesta " +
      "$" +
      camiseta3.precio
  );
});

/*Click en la camiseta del Atl Madrid */
$("#camisetas__foto4").on("click", function () {
  alert(
    "La camiseta del " +
      camiseta4.nombre +
      " " +
      "cuesta " +
      "$" +
      camiseta4.precio
  );
});

/*Click en la camiseta de River */
$("#camisetas__foto5").on("click", function () {
  alert(
    "La camiseta de " +
      camiseta5.nombre +
      " " +
      "cuesta " +
      "$" +
      camiseta5.precio
  );
});

/*Click en la camiseta de Boca */
$("#camisetas__foto6").on("click", function () {
  alert(
    "La camiseta de " +
      camiseta6.nombre +
      " " +
      "cuesta " +
      "$" +
      camiseta6.precio
  );
});

/*Click en la camiseta de Central */
$("#camisetas__foto7").on("click", function () {
  alert(
    "La camiseta de " +
      camiseta7.nombre +
      " " +
      "cuesta " +
      "$" +
      camiseta7.precio
  );
});

/*Click en la camiseta de Racing */
$("#camisetas__foto8").on("click", function () {
  alert(
    "La camiseta de " +
      camiseta8.nombre +
      " " +
      "cuesta " +
      "$" +
      camiseta8.precio
  );
});

/*Click en la camiseta de la Selección Argentina */
$("#camisetas__foto9").on("click", function () {
  alert(
    "La camiseta de " +
      camiseta9.nombre +
      " " +
      "cuesta " +
      "$" +
      camiseta9.precio
  );
});

/*Click en la camiseta del Palmeiras */
$("#camisetas__foto10").on("click", function () {
  alert(
    "La camiseta del " +
      camiseta10.nombre +
      " " +
      "cuesta " +
      "$" +
      camiseta10.precio
  );
});

/*Click en la camiseta del Ajax */
$("#camisetas__foto11").on("click", function () {
  alert(
    "La camiseta del " +
      camiseta11.nombre +
      " " +
      "cuesta " +
      "$" +
      camiseta11.precio
  );
});

/*Click en la camiseta del Dortmund */
$("#camisetas__foto12").on("click", function () {
  alert(
    "La camiseta del " +
      camiseta12.nombre +
      " " +
      "cuesta " +
      "$" +
      camiseta12.precio
  );
});

/*Click en la camiseta del Real Madrid */
$("#camisetas__foto13").on("click", function () {
  alert(
    "La camiseta del " +
      camiseta13.nombre +
      " " +
      "cuesta " +
      "$" +
      camiseta13.precio
  );
});

/*Click en la camiseta del Chelsea */
$("#camisetas__foto14").on("click", function () {
  alert(
    "La camiseta del " +
      camiseta14.nombre +
      " " +
      "cuesta " +
      "$" +
      camiseta14.precio
  );
});

/*Click en la camiseta del Sassuolo */
$("#camisetas__foto15").on("click", function () {
  alert(
    "La camiseta del " +
      camiseta15.nombre +
      " " +
      "cuesta " +
      "$" +
      camiseta15.precio
  );
});

/*Click en la camiseta del City */
$("#camisetas__foto16").on("click", function () {
  alert(
    "La camiseta del " +
      camiseta16.nombre +
      " " +
      "cuesta " +
      "$" +
      camiseta16.precio
  );
});

/*Click en la camiseta de Gremio */
$("#camisetas__foto17").on("click", function () {
  alert(
    "La camiseta de " +
      camiseta17.nombre +
      " " +
      "cuesta " +
      "$" +
      camiseta17.precio
  );
});

/*Click en la camiseta de Peñarol */
$("#camisetas__foto18").on("click", function () {
  alert(
    "La camiseta de " +
      camiseta18.nombre +
      " " +
      "cuesta " +
      "$" +
      camiseta18.precio
  );
});

/*Click en la camiseta de Brasil */
$("#camisetas__foto19").on("click", function () {
  alert(
    "La camiseta de " +
      camiseta19.nombre +
      " " +
      "cuesta " +
      "$" +
      camiseta19.precio
  );
});

/*Click en la camiseta del Inter */
$("#camisetas__foto20").on("click", function () {
  alert(
    "La camiseta del " +
      camiseta20.nombre +
      " " +
      "cuesta " +
      "$" +
      camiseta20.precio
  );
});

/*Envio de formulario */
let mails = $(".form").submit("submit", function (e) {
  e.preventDefault();
  alert("Los datos se han guardado.");
});

/*Click en el botón "Aviso" */
$("#boton").one("click", function () {
  $("#boton").append(`<p id="aviso"> El stock se actualiza cada semana </p>`);
});

/*Doble click para desaparecer */
$("#boton").one("dblclick", function () {
  $("#aviso").fadeOut();
});

/*Darle click a comprar la camiseta del PSG */
$("#comprar1").on("click", function () {
  alert("Agregaste la camiseta del " + camiseta1.nombre + " al carrito.");
  $("#total").append(
    `<p id="resumen"> ${camiseta1.nombre} $${camiseta1.precio}</p></div>`
  );
});

/*Darle click a comprar la camiseta de la Juventus */
$("#comprar2").on("click", function () {
  alert("Agregaste la camiseta del " + camiseta2.nombre + " al carrito.");
  $("#total").append(
    `<p id="resumen"> ${camiseta2.nombre} $${camiseta2.precio}</p></div>`
  );
});

/*Darle click a comprar la camiseta del Barcelona */
$("#comprar3").on("click", function () {
  alert("Agregaste la camiseta del " + camiseta3.nombre + " al carrito.");
  $("#total").append(
    `<p id="resumen"> ${camiseta3.nombre} $${camiseta3.precio}</p>`
  );
});

/*Darle click a comprar la camiseta del Atletico Madrid */
$("#comprar4").on("click", function () {
  alert("Agregaste la camiseta del " + camiseta4.nombre + " al carrito.");
  $("#total").append(
    `<p id="resumen"> ${camiseta4.nombre} $${camiseta4.precio}</p>`
  );
});

/*Darle click a comprar la camiseta de River */
$("#comprar5").on("click", function () {
  alert("Agregaste la camiseta de " + camiseta5.nombre + " al carrito.");
  $("#total").append(
    `<p id="resumen"> ${camiseta5.nombre} $${camiseta5.precio}</p>`
  );
});

/*Darle click a comprar la camiseta de Boca */
$("#comprar6").on("click", function () {
  alert("Agregaste la camiseta de " + camiseta6.nombre + " al carrito.");
  $("#total").append(
    `<p id="resumen"> ${camiseta6.nombre} $${camiseta6.precio}</p>`
  );
});

/*Darle click a comprar la camiseta de Rosario Central */
$("#comprar7").on("click", function () {
  alert("Agregaste la camiseta de " + camiseta7.nombre + " al carrito.");
  $("#total").append(
    `<p id="resumen"> ${camiseta7.nombre} $${camiseta7.precio}</p>`
  );
});

/*Darle click a comprar la camiseta de Racing */
$("#comprar8").on("click", function () {
  alert("Agregaste la camiseta de " + camiseta8.nombre + " al carrito.");
  $("#total").append(
    `<p id="resumen"> ${camiseta8.nombre} $${camiseta8.precio}</p>`
  );
});

/*Darle click a comprar la camiseta de la Selección Argentina */
$("#comprar9").on("click", function () {
  alert(
    "Agregaste la camiseta de la Selección " + camiseta9.nombre + " al carrito."
  );
  $("#total").append(
    `<p id="resumen"> ${camiseta9.nombre} $${camiseta9.precio}</p>`
  );
});

/*Darle click a comprar la camiseta del Palmeiras */
$("#comprar10").on("click", function () {
  alert("Agregaste la camiseta del " + camiseta10.nombre + " al carrito.");
  $("#total").append(
    `<p id="resumen"> ${camiseta10.nombre} $${camiseta10.precio}</p>`
  );
});

/*Darle click a comprar la camiseta del Ajax */
$("#comprar11").on("click", function () {
  alert("Agregaste la camiseta del " + camiseta11.nombre + " al carrito.");
  $("#total").append(
    `<p id="resumen"> ${camiseta11.nombre} $${camiseta11.precio}</p>`
  );
});

/*Darle click a comprar la camiseta del Dortmund */
$("#comprar12").on("click", function () {
  alert("Agregaste la camiseta del " + camiseta12.nombre + " al carrito.");
  $("#total").append(
    `<p id="resumen"> ${camiseta12.nombre} $${camiseta12.precio}</p>`
  );
});

/*Darle click a comprar la camiseta del Real Madrid */
$("#comprar13").on("click", function () {
  alert("Agregaste la camiseta del " + camiseta13.nombre + " al carrito.");
  $("#total").append(
    `<p id="resumen"> ${camiseta13.nombre} $${camiseta13.precio}</p>`
  );
});

/*Darle click a comprar la camiseta del Chelsea */
$("#comprar14").on("click", function () {
  alert("Agregaste la camiseta del " + camiseta14.nombre + " al carrito.");
  $("#total").append(
    `<p id="resumen"> ${camiseta14.nombre} $${camiseta14.precio}</p>`
  );
});

/*Darle click a comprar la camiseta de Sassuolo */
$("#comprar15").on("click", function () {
  alert("Agregaste la camiseta del " + camiseta15.nombre + " al carrito.");
  $("#total").append(
    `<p id="resumen"> ${camiseta15.nombre} $${camiseta15.precio}</p>`
  );
});

/*Darle click a comprar la camiseta del Manchester City */
$("#comprar16").on("click", function () {
  alert("Agregaste la camiseta del " + camiseta16.nombre + " al carrito.");
  $("#total").append(
    `<p id="resumen"> ${camiseta16.nombre} $${camiseta16.precio}</p>`
  );
});

/*Darle click a comprar la camiseta del Gremio */
$("#comprar17").on("click", function () {
  alert("Agregaste la camiseta del " + camiseta17.nombre + " al carrito.");
  $("#total").append(
    `<p id="resumen"> ${camiseta17.nombre} $${camiseta17.precio}</p>`
  );
});

/*Darle click a comprar la camiseta del Peñarol */
$("#comprar18").on("click", function () {
  alert("Agregaste la camiseta del " + camiseta18.nombre + " al carrito.");
  $("#total").append(
    `<p id="resumen"> ${camiseta18.nombre} $${camiseta18.precio}</p>`
  );
});

/*Darle click a comprar la camiseta de Brasil */
$("#comprar19").on("click", function () {
  alert("Agregaste la camiseta del " + camiseta19.nombre + " al carrito.");
  $("#total").append(
    `<p id="resumen"> ${camiseta19.nombre} $${camiseta19.precio}</p>`
  );
});

/*Darle click a comprar la camiseta del Inter */
$("#comprar20").on("click", function () {
  alert("Agregaste la camiseta del " + camiseta20.nombre + " al carrito.");
  $("#total").append(
    `<p id="resumen"> ${camiseta20.nombre} $${camiseta20.precio}</p>`
  );
});

/*Darle click a Limpiar */
$("#limpiar").on("click", function () {
  let borrar = document.getElementById("resumen");
  borrar.parentNode.removeChild(borrar);
});

/*Aplicar AJAX ------------------------------------------*/
/*Link al primer ID del JSON */
const URLGET = "https://jsonplaceholder.typicode.com/users/1";

/*Darle click al primer contacto */
$("#info").one("click", function () {
  $.get(URLGET, function (data, status) {
    console.log(data);
    console.log(status);
    var JSON1 = JSON.stringify(data.name);
    var JSON2 = JSON.stringify(data.email);
    $("#info").append(`<div class="contacto1"> ${JSON1} </div>`);
    $("#info").append(`<div class="contacto1"> ${JSON2} </div>`);
  });
});

/*Doble click al contacto 1 */
$("#info").one("dblclick", function () {
  $(".contacto1").fadeOut();
});

/*Link al segundo ID del JSON */
const URLGET1 = "https://jsonplaceholder.typicode.com/users/2";

/*Darle click al segundo contacto */
$("#info1").one("click", function () {
  $.get(URLGET1, function (data, status) {
    console.log(data);
    console.log(status);
    var JSON3 = JSON.stringify(data.name);
    var JSON4 = JSON.stringify(data.email);
    $("#info1").append(`<div class="contacto2"> ${JSON3} </div>`);
    $("#info1").append(`<div class="contacto2"> ${JSON4} </div)`);
  });
});

/*Doble click al contacto 2 */
$("#info1").one("dblclick", function () {
  $(".contacto2").fadeOut();
});

/*Link al tercer ID del JSON */
const URLGET2 = "https://jsonplaceholder.typicode.com/users/3";

/*Darle click al tercer contacto */
$("#info2").one("click", function () {
  $.get(URLGET2, function (data, status) {
    console.log(data);
    console.log(status);
    var JSON5 = JSON.stringify(data.name);
    var JSON6 = JSON.stringify(data.email);
    $("#info2").append(`<div class="contacto3"> ${JSON5} </div>`);
    $("#info2").append(`<div class="contacto3"> ${JSON6} </div>`);
  });
});

/*Doble click al contacto 3 */
$("#info2").one("dblclick", function () {
  $(".contacto3").fadeOut();
});

/*Link al cuarto ID del JSON */
const URLGET3 = "https://jsonplaceholder.typicode.com/users/4";

/*Darle click al cuarto contacto */
$("#info3").one("click", function () {
  $.get(URLGET3, function (data, status) {
    console.log(data);
    console.log(status);
    var JSON7 = JSON.stringify(data.name);
    var JSON8 = JSON.stringify(data.email);
    $("#info3").append(`<div class="contacto4"> ${JSON7} </div>`);
    $("#info3").append(`<div class="contacto4"> ${JSON8} </div>`);
  });
});

/*Doble click al contacto 4 */
$("#info3").one("dblclick", function () {
  $(".contacto4").fadeOut();
});

/*Desafío de enviar datos al API */
/*URL del API */
const APIURL = "https://jsonplaceholder.typicode.com/posts";

/*Aclaramos la información a enviar */
const infoPost = { nombre: "Matias", profesion: "Estudiante" };

/*Agregamos evento al boton "enviar" del formulario */
$(".submit").click(() => {
  $(".form").append(`<p id="gracias"> ¡Gracias por registrarte!</p>`);
});
