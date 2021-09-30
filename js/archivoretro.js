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