function mostrar()
{
	 
	let edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if(edad >= 18)
	{
		alert("eres mayor de edad: "+edad);
	}
	

}//FIN DE LA FUNCIÓN