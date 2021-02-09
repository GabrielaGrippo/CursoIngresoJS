function mostrar()
{
	  
	let edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if(edad >= 18)
	{
		alert("Eres mayor de edad: "+edad);
	}

	else
	{
		alert("Eres menor de edad: "+edad);
	}
}//FIN DE LA FUNCIÓN