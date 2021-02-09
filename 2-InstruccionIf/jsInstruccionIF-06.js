function mostrar()
{

	let edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if(edad >12 && edad <18)
	{
		alert("Eres un adolescente.");
	}
	else
	{
		if(edad <=13)
		{
			alert("Eres un niño.");
		}
	else
	{
		alert("Eres adulto.");
	}
	}
}//FIN DE LA FUNCIÓN