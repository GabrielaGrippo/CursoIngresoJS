//Gabriela Grippo , ejercicio 10.
/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let resultado;

	importe=document.getElementById("txtIdImporte").value;
	
	importe=parseInt(importe);
	
	//1) descuento=importe * 25/100 ;
	/*2) descuento=importe *0.25;
	
	resultado = importe - descuento;*/
	 
	/* 4) resultado= importe * 0.75; a la parte enterta le 
	 resto el procentaje 100-25=75.
	 */ 
	document.getElementById("txtIdResultado").value = resultado;
}
