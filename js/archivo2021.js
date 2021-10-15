/*Seccion 2021 */
/*Funcion para crear camisetas */
function nuevas(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

/*Agregando nuevas colecciones */
const nueva1 = new nuevas("Inter", 2200);
const nueva2 = new nuevas("Juventus", 2100);
const nueva3 = new nuevas("Napoli", 2200);
const nueva4 = new nuevas("Roma", 2000);
const nueva5 = new nuevas("Chelsea", 2400);
const nueva6 = new nuevas("Manchester United", 2500);
const nueva7 = new nuevas("Manchester City", 2400);
const nueva8 = new nuevas("Arsenal", 2200);
const nueva9 = new nuevas("Sevilla", 2300);
const nueva10 = new nuevas("Barcelona", 2000);
const nueva11 = new nuevas("Real Madrid", 2500);
const nueva12 = new nuevas("Atletico Madrid", 2400);
const nueva13 = new nuevas("River Plate", 2700);
const nueva14 = new nuevas("Boca Juniors", 2700);
const nueva15 = new nuevas("Racing Club", 2500);
const nueva16 = new nuevas("San Lorenzo", 2300);

/*Agregar eventos */
/*Click camiseta Inter */
$("#2021_1").on("click", function () {
	alert("La camiseta del " + nueva1.nombre + " " + "cuesta " + "$" + nueva1.precio);
})

/*Click camiseta Juventus */
$("#2021_2").on("click", function () {
	alert("La camiseta de la " + nueva2.nombre + " " + "cuesta " + "$" + nueva2.precio);
})

/*Click camiseta Napoli */
$("#2021_3").on("click", function () {
	alert("La camiseta del " + nueva3.nombre + " " + "cuesta " + "$" + nueva3.precio);
})

/*Click camiseta Roma */
$("#2021_4").on("click", function () {
	alert("La camiseta de la " + nueva4.nombre + " " + "cuesta " + "$" + nueva4.precio);
})

/*Click camiseta Chelsea */
$("#2021_5").on("click", function() {
	alert("La camiseta del " + nueva5.nombre + " " + "cuesta " + "$" + nueva5.precio);
})

/*Click camiseta Manchester United */
$("#2021_6").on("click", function() {
	alert("La camiseta del " + nueva6.nombre + " " + "cuesta " + "$" + nueva6.precio);
})

/*Click camiseta Manchester City */
$("#2021_7").on("click", function() {
	alert("La camiseta del " + nueva7.nombre + " " + "cuesta " + "$" + nueva7.precio);
})

/*Click camiseta Arsenal */
$("#2021_8").on("click", function() {
	alert("La camiseta del " + nueva8.nombre + " " + "cuesta " + "$" + nueva8.precio);
})

/*Click camiseta Sevilla */
$("#2021_9").on("click", function() {
	alert("La camiseta del " + nueva9.nombre + " " + "cuesta " + "$" + nueva9.precio);
})

/*Click camiseta Barcelona */
$("#2021_10").on("click", function() {
	alert("La camiseta del " + nueva10.nombre + " " + "cuesta " + "$" + nueva10.precio);
})

/*Click camiseta Real Madrid */
$("#2021_11").on("click", function() {
	alert("La camiseta del " + nueva11.nombre + " " + "cuesta " + "$" + nueva11.precio);
})

/*Click camiseta Atl Madrid */
$("#2021_12").on("click", function() {
	alert("La camiseta del " + nueva12.nombre + " " + "cuesta " + "$" + nueva12.precio);
})

/*Click camiseta River */
$("#2021_13").on("click", function() {
	alert("La camiseta de " + nueva13.nombre + " " + "cuesta " + "$" + nueva13.precio);
})

/*Click camiseta Boca */
$("#2021_14").on("click", function() {
	alert("La camiseta de " + nueva14.nombre + " " + "cuesta " + "$" + nueva14.precio);
})

/*Click camiseta Racing */
$("#2021_15").on("click", function() {
	alert("La camiseta de " + nueva15.nombre + " " + "cuesta " + "$" + nueva15.precio);
})

/*Click camiseta San Lorenzo */
$("#2021_16").on("click", function() {
	alert("La camiseta de " + nueva16.nombre + " " + "cuesta " + "$" + nueva16.precio);
})


/*Compras */
/*Darle click a comprar la camiseta del Inter */
$("#nuevo1").on("click", function () {
    alert("Agregaste la camiseta del " + nueva1.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${nueva1.nombre} $${nueva1.precio}</p>`);
})

/*Darle click a comprar la camiseta de la Juventus */
$("#nuevo2").on("click", function() {
    alert("Agregaste la camiseta del " + nueva2.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${nueva2.nombre} $${nueva2.precio}</p>`);
})

/*Darle click a comprar la camiseta del Napoli */
$("#nuevo3").on("click", function() {
    alert("Agregaste la camiseta del " + nueva3.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${nueva3.nombre} $${nueva3.precio}</p>`);
})

/*Darle click a comprar la camiseta del Roma */
$("#nuevo4").on("click", function() {
    alert("Agregaste la camiseta del " + nueva4.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${nueva4.nombre} $${nueva4.precio}</p>`);
})

/*Darle click a comprar la camiseta de Chelsea */
$("#nuevo5").on("click", function() {
    alert("Agregaste la camiseta de " + nueva5.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${nueva5.nombre} $${nueva5.precio}</p>`);
})

/*Darle click a comprar la camiseta de Manchester United */
$("#nuevo6").on("click", function() {
    alert("Agregaste la camiseta de " + nueva6.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${nueva6.nombre} $${nueva6.precio}</p>`);
})

/*Darle click a comprar la camiseta de Manchester City */
$("#nuevo7").on("click", function() {
    alert("Agregaste la camiseta de " + nueva7.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${nueva7.nombre} $${nueva7.precio}</p>`);
})

/*Darle click a comprar la camiseta de Arsenal */
$("#nuevo8").on("click", function() {
    alert("Agregaste la camiseta del " + nueva8.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${nueva8.nombre} $${nueva8.precio}</p>`);
})

/*Darle click a comprar la camiseta del Sevilla */
$("#nuevo9").on("click", function() {
    alert("Agregaste la camiseta del " + nueva9.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${nueva9.nombre} $${nueva9.precio}</p>`);
})

/*Darle click a comprar la camiseta del Barcelona */
$("#nuevo10").on("click", function() {
    alert("Agregaste la camiseta del " + nueva10.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${nueva10.nombre} $${nueva10.precio}</p>`);
})

/*Darle click a comprar la camiseta del Real Madrid */
$("#nuevo11").on("click", function() {
    alert("Agregaste la camiseta del " + nueva11.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${nueva11.nombre} $${nueva11.precio}</p>`);
})

/*Darle click a comprar la camiseta del Atletico Madrid */
$("#nuevo12").on("click", function() {
    alert("Agregaste la camiseta de " + nueva12.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${nueva12.nombre} $${nueva12.precio}</p>`);
})

/*Darle click a comprar la camiseta de River Plate */
$("#nuevo13").on("click", function() {
    alert("Agregaste la camiseta de " + nueva13.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${nueva13.nombre} $${nueva13.precio}</p>`);
})

/*Darle click a comprar la camiseta de Boca */
$("#nuevo14").on("click", function() {
    alert("Agregaste la camiseta de " + nueva14.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${nueva14.nombre} $${nueva14.precio}</p>`);
})

/*Darle click a comprar la camiseta de Racing */
$("#nuevo15").on("click", function() {
    alert("Agregaste la camiseta de " + nueva15.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${nueva15.nombre} $${nueva15.precio}</p>`);
})

/*Darle click a comprar la camiseta de San Lorenzo */
$("#nuevo16").on("click", function() {
    alert("Agregaste la camiseta del " + nueva16.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${nueva16.nombre} $${nueva16.precio}</p>`);
})

/*Darle click a Limpiar */
$("#limpiar").on("click", function() {
    let borrar = document.getElementById("resumen");
    borrar.parentNode.removeChild(borrar);
})