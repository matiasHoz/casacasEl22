/*Solicitar nombre del usuario */
function solicitarNombre() {
	let nombreIngresado = prompt("Ingrese su nombre");
    alert("¡Bienvenido a Casacas El 22 " + nombreIngresado + "!");
}

/*Solicitar talle del cliente */
function solicitarTalle() {
	let talleIngresado = prompt("Ingrese su talle");
	alert("Actualmente contamos con el talle " + talleIngresado + " en todas las camisetas.");
}

/*Preguntar sobre su equipo */
function solicitarEquipo() {
	let equipoIngresado = prompt("¿Cuál es tu equipo de fútbol?");
	alert("¡Tenemos disponibilidad en todos los talles para las camisetas de " + equipoIngresado + "!");
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
}

/*Cantidad de productos */
function productos(){
	let pregunta = prompt("¿Cuantos productos tiene en el carrito?"); {
		if (pregunta == 1){
			calcularPrecio();
		}
		if (pregunta == 2){
			calcularPrecio();
			calcularPrecio();
		}
		if (pregunta == 3){
			calcularPrecio();
			calcularPrecio();
			calcularPrecio();
		}
		if (pregunta == 4){
			calcularPrecio();
			calcularPrecio();
			calcularPrecio();
			calcularPrecio();
		}
	}
}

/*Calcular el precio de la camiseta^*/
function calcularPrecio(){
	let descuento = 500;
	let precio1 = prompt("Precio de su camiseta seleccionada");
	resultado = precio1 - descuento;
	alert("El precio de su camiseta, teniendo en cuenta el descuento de este mes, es de " + resultado);
}


solicitarNombre();
solicitarTalle();
solicitarEquipo();
pregunta();
productos();


/*Array de ligas presentes en el sitio */
const miArray = ["Francia", "Italia", "España", "Argentina", "Brasil", "Holanda", "Alemania", "Inglaterra", "Uruguay"];
/*Sumar a Italia con Argentina */
let campeones = miArray[1] + miArray[3];
/*Agregar otra liga */
miArray.push("MLS");
/*Mostrar los campeones del 2021 */
console.log(campeones);
/*Mostrar la cantidad de ligas */
console.log(miArray.length);
/*Mostrar cada liga */
console.log(miArray.toString());
/*Mostrar cada liga separada por un "-" */
console.log(miArray.join("-"));
















