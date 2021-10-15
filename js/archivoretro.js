/*Seccion Retro */
/*Funcion para crear camisetas */
function retros(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

/*Agregando nuevas retro */
const retro1 = new retros("Fiorentina", 2000);
const retro2 = new retros("Napoli", 2400);
const retro3 = new retros("Inter", 2200);
const retro4 = new retros("Juventus", 2500);
const retro5 = new retros("Chelsea", 2100);
const retro6 = new retros("Manchester City", 2300);
const retro7 = new retros("Arsenal", 2500);
const retro8 = new retros("Manchester United", 2400);
const retro9 = new retros("Boca Juniors", 2800);
const retro10 = new retros("River Plate", 2700);
const retro11 = new retros("Racing Club", 2900);
const retro12 = new retros("Independiente", 2400);

/*Agregar eventos */
/*Click camiseta Fiorentina */
$("#retros1").on("click", function() {
    alert("La camiseta de la " + retro1.nombre + " " + "cuesta " + "$" + retro1.precio);
})

/*Click camiseta Napoli */
$("#retros2").on("click", function() {
	alert("La camiseta del " + retro2.nombre + " " + "cuesta " + "$" + retro2.precio);
})

/*Click camiseta Inter */
$("#retros3").on("click", function() {
	alert("La camiseta del " + retro3.nombre + " " + "cuesta " + "$" + retro3.precio);
})

/*Click camiseta Juventus */
$("#retros4").on("click", function() {
	alert("La camiseta de la " + retro4.nombre + " " + "cuesta " + "$" + retro4.precio);
})

/*Click camiseta Chelsea */
$("#retros5").on("click", function() {
	alert("La camiseta del " + retro5.nombre + " " + "cuesta " + "$" + retro5.precio);
})

/*Click camiseta Manchester City */
$("#retros6").on("click", function() {
	alert("La camsieta del " + retro6.nombre + " " + "cuesta " + "$" + retro6.precio);
})

/*Click camiseta Arsenal */
$("#retros7").on("click", function() {
	alert("La camiseta del " + retro7.nombre + " " + "cuesta " + "$" + retro7.precio);
})

/*Click camiseta Manchester United */
$("#retros8").on("click", function() {
	alert("La camiseta del " + retro8.nombre + " " + "cuesta " + "$" + retro8.precio);
})

/*Click camiseta Boca Jrs. */
$("#retros9").on("click", function() {
	alert("La camiseta de " + retro9.nombre + " " + "cuesta " + "$" + retro9.precio);
})

/*Click camiseta River Plate */
$("#retros10").on("click", function() {
	alert("La camiseta de " + retro10.nombre + " " + "cuesta " + "$" + retro10.precio);
})

/*Click camiseta Racing Club */
$("#retros11").on("click", function() {
	alert("La camiseta de " + retro11.nombre + " " + "cuesta " + "$" + retro11.precio);
})

/*Click camiseta Independiente */
$("#retros12").on("click", function() {
	alert("La camiseta de " + retro12.nombre + " " + "cuesta " + "$" + retro12.precio);
})


/*Compras */
/*Darle click a comprar la camiseta de la Fiorentina */
$("#retro1").on("click", function () {
    alert("Agregaste la camiseta del " + retro1.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${retro1.nombre} $${retro1.precio}</p>`);
})

/*Darle click a comprar la camiseta de la Napoli */
$("#retro2").on("click", function() {
    alert("Agregaste la camiseta del " + retro2.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${retro2.nombre} $${retro2.precio}</p>`);
})

/*Darle click a comprar la camiseta del Inter */
$("#retro3").on("click", function() {
    alert("Agregaste la camiseta del " + retro3.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${retro3.nombre} $${retro3.precio}</p>`);
})

/*Darle click a comprar la camiseta del Juventus */
$("#retro4").on("click", function() {
    alert("Aregaste la camiseta del " + retro4.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${retro4.nombre} $${retro4.precio}</p>`);
})

/*Darle click a comprar la camiseta de Chelsea */
$("#retro5").on("click", function() {
    alert("Agregaste la camiseta de " + retro5.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${retro5.nombre} $${retro5.precio}</p>`);
})

/*Darle click a comprar la camiseta de Manchester City */
$("#retro6").on("click", function() {
    alert("Agregaste la camiseta de " + retro6.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${retro6.nombre} $${retro6.precio}</p>`);
})

/*Darle click a comprar la camiseta de Arsenal */
$("#retro7").on("click", function() {
    alert("Agregaste la camiseta de " + retro7.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${retro7.nombre} $${retro7.precio}</p>`);
})

/*Darle click a comprar la camiseta de Manchester United */
$("#retro8").on("click", function() {
    alert("Agregaste la camiseta de " + retro8.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${retro8.nombre} $${retro8.precio}</p>`);
})

/*Darle click a comprar la camiseta de Boca */
$("#retro9").on("click", function() {
    alert("Agregaste la camiseta de la Selección " + retro9.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${retro9.nombre} $${retro9.precio}</p>`);
})

/*Darle click a comprar la camiseta del River */
$("#retro10").on("click", function() {
    alert("Agregaste la camiseta del " + retro10.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${retro10.nombre} $${retro10.precio}</p>`);
})

/*Darle click a comprar la camiseta del Racing */
$("#retro11").on("click", function() {
    alert("Agregaste la camiseta del " + retro11.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${retro11.nombre} $${retro11.precio}</p>`);
})

/*Darle click a comprar la camiseta del Independiente */
$("#retro12").on("click", function() {
    alert("Agregaste la camiseta del " + retro12.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${retro12.nombre} $${retro12.precio}</p>`);
})

/*Darle click a Limpiar */
$("#limpiar").on("click", function() {
    let borrar = document.getElementById("resumen");
    borrar.parentNode.removeChild(borrar);
})