/*Seccion Selecciones */
/*Funcion para crear camisetas */
function ascenso(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

/*Agregando mas equipos */
const ascenso1 = new ascenso("Tigre", 1800);
const ascenso2 = new ascenso("Belgrano", 1700);
const ascenso3 = new ascenso("Chacarita", 1900);
const ascenso4 = new ascenso("Atlanta", 1600);
const ascenso5 = new ascenso("Comunicaciones", 1900);
const ascenso6 = new ascenso("Flandria", 1500);
const ascenso7 = new ascenso("Sacachispas", 1800);
const ascenso8 = new ascenso("Cañuelas", 2000);

/*Agregar eventos */
/*Click camiseta Tigre */
$("#equipo1").on("click", function() {
	alert("La camiseta de " + ascenso1.nombre + " " + "cuesta " + "$" + ascenso1.precio);
})

/*Click camiseta Belgrano */
$("#equipo2").on("click", function() {
	alert("La camiseta de " + ascenso2.nombre + " " + "cuesta " + "$" + ascenso2.precio);
})

/*Click camiseta Chacarita */
$("#equipo3").on("click", function() {
	alert("La camiseta de " + ascenso3.nombre + " " + "cuesta " + "$" + ascenso3.precio);
})

/*Click camiseta Atlanta */
$("#equipo4").on("click", function() {
	alert("La camiseta de " + ascenso4.nombre + " " + "cuesta " + "$" + ascenso4.precio);
})

/*Click camiseta Comunicaciones */
$("#equipo5").on("click", function() {
	alert("La camiseta de " + ascenso5.nombre + " " + "cuesta " + "$" + ascenso5.precio);
})

/*Click camiseta Flandria */
$("#equipo6").on("click", function() {
	alert("La camiseta de " + ascenso6.nombre + " " + "cuesta " + "$" + ascenso6.precio);
})

/*Click camiseta Sacachispas */
$("#equipo7").on("click", function() {
	alert("La camiseta de " + ascenso7.nombre + " " + "cuesta " + "$" + ascenso7.precio);
})

/*Click camiseta Cañuelas */
$("#equipo8").on("click", function() {
	alert("La camiseta de " + ascenso8.nombre + " " + "cuesta " + "$" + ascenso8.precio);
})