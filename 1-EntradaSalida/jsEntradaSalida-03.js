
/*Pedir al usuario los siguientes datos:
nombreDelAlumno: por  id.value
edadDelAlumno: por prompt
Mostrar por alert el mensaje "Ud  se llama ... y tiene ... años"
*/ 

function mostrar()
{
	let nombreAlumno;
	let edadAlumno;

	nombreAlumno= document.getElementById("txtIdNombre").value;

	edadAlumno=prompt("Ingrese su edad:");

	alert("usted se llama "+nombreAlumno+ " y tiene "+edadAlumno);

}


