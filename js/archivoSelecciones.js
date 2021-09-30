/*Seccion Selecciones */
/*Funcion para crear camisetas */
function selecciones(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

/*Agregando nuevas Selecciones */
const seleccion1 = new selecciones("Italia", 3000);
const seleccion2 = new selecciones("Alemania", 2800);
const seleccion3 = new selecciones("Belgica", 2700);
const seleccion4 = new selecciones("Holanda", 2500);
const seleccion5 = new selecciones("Argentina", 3000);
const seleccion6 = new selecciones("Brasil", 2900);
const seleccion7 = new selecciones("Colombia", 2500);
const seleccion8 = new selecciones("Uruguay", 2700);

/*Agregar eventos */
/*Click camiseta Italia */
$("#selec1").on("click", function() {
	alert("La camiseta de " + seleccion1.nombre + " " +  "cuesta " + "$" + seleccion1.precio);
})

/*Click camiseta Alemania */
$("#selec2").on("click", function() {
	alert("La camiseta de " + seleccion2.nombre + " " + "cuesta " + "$" + seleccion2.precio);
})

/*Click camiseta Belgica */
$("#selec3").on("click", function() {
	alert("La camiseta de " + seleccion3.nombre + " " + "cuesta " + "$" + seleccion3.precio);
})

/*Click camiseta Holanda */
$("#selec4").on("click", function() {
	alert("La camiseta de " + seleccion4.nombre + " " + "cuesta " + "$" + seleccion4.precio);
})

/*Click camiseta Argentina */
$("#selec5").on("click", function() {
	alert("La camiseta de " + seleccion5.nombre + " " + "cuesta " + "$" + seleccion5.precio);
})

/*Click camiseta Brasil */
$("#selec6").on("click", function() {
	alert("La camiseta de " + seleccion6.nombre + " " + "cuesta " + "$" + seleccion6.precio);
})

/*Click camiseta Colombia */
$("#selec7").on("click", function() {
	alert("La camiseta de " + seleccion7.nombre + " " + "cuesta " + "$" + seleccion7.precio);
})

/*Click camiseta Uruguay */
$("#selec8").on("click", function() {
	alert("La camiseta de " + seleccion8.nombre + " " + "cuesta " + "$" + seleccion8.precio);
})