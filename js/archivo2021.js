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