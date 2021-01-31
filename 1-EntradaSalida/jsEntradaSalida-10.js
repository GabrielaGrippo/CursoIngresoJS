/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let sueldo;
	let aumento;
	let resultado;

	sueldo=parseFloat(document.getElementById("txtIdImporte").value);
	
	aumento=sueldo * 25/100 ;
	resultado = sueldo - aumento;

	document.getElementById("txtIdResultado").value = resultado;
}
