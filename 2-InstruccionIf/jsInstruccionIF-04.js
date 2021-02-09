function mostrar()
{
	//tomo la edad  
	let edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if(edad >=13 && edad <= 17){
		alert("eres un adolescente: "+edad);
	}

	/*if( !(edad >=13 && edad <= 17) ){
		alert("eres un adolescente: "+edad);
		*/

	/*	if (edad >12)
		{
			if(edad<18)
			{
				alert("es adolescente");
			}
		}*/
}//FIN DE LA FUNCIÓN