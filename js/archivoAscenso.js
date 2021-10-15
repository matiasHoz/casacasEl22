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


/* Compras */
/*Darle click a comprar la camiseta de Tigre */
$("#team1").on("click", function () {
    alert("Agregaste la camiseta de " + ascenso1.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${ascenso1.nombre} $${ascenso1.precio}</p>`);
})

/*Darle click a comprar la camiseta de Belgrano */
$("#team2").on("click", function() {
    alert("Agregaste la camiseta de " + ascenso2.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${ascenso2.nombre} $${ascenso2.precio}</p>`);
})

/*Darle click a comprar la camiseta del Chacarita */
$("#team3").on("click", function() {
    alert("Agregaste la camiseta de " + ascenso3.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${ascenso3.nombre} $${ascenso3.precio}</p>`);
})

/*Darle click a comprar la camiseta de Atlanta */
$("#team4").on("click", function() {
    alert("Agregaste la camiseta de " + ascenso4.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${ascenso4.nombre} $${ascenso4.precio}</p>`);
})

/*Darle click a comprar la camiseta de Comuniaciones */
$("#team5").on("click", function() {
    alert("Agregaste la camiseta de " + ascenso5.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${ascenso5.nombre} $${ascenso5.precio}</p>`);
})

/*Darle click a comprar la camiseta de Flandria */
$("#team6").on("click", function() {
    alert("Agregaste la camiseta de " + ascenso6.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${ascenso6.nombre} $${ascenso6.precio}</p>`);
})

/*Darle click a comprar la camiseta de Sacachispas */
$("#team7").on("click", function() {
    alert("Agregaste la camiseta de " + ascenso7.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${ascenso7.nombre} $${ascenso7.precio}</p>`);
})

/*Darle click a comprar la camiseta de Cañuelas */
$("#team8").on("click", function() {
    alert("Agregaste la camiseta de " + ascenso8.nombre + " al carrito.");
    $("#total").append(`<p id="resumen"> ${ascenso8.nombre} $${ascenso8.precio}</p>`);
})

/*Darle click a Limpiar */
$("#limpiar").on("click", function() {
    let borrar = document.getElementById("resumen");
    borrar.parentNode.removeChild(borrar);
})