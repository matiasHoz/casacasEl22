function solicitarNombre() {
	let nombreIngresado = prompt("Ingrese su nombre");
    alert("¡Bienvenido a Casacas El 22 " + nombreIngresado + "!");
}

solicitarNombre();

function solicitarTalle(){
	let talle = prompt("Ingrese su talle");
    alert("Veremos cuales son las mejores opciones para su talle " + talle);
}

solicitarTalle();

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


productos();

function calcularPrecio(){
	let descuento = 500;
	let precio1 = prompt("Precio de su camiseta seleccionada");
	resultado = precio1 - descuento;
	alert("El precio de su camiseta, teniendo en cuenta el descuento de este mes, es de " + resultado);
}













