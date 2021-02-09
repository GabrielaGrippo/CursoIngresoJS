function mostrar()
{
	//tomo la edad  
	let edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	//condicion verdadera para valores que estan por debajo de {13,17}

	if(edad <= 13 || edad >=17){
	
		alert("No eres un adolescente: "+edad );
	}

	/*(pregunto si no estoy afuera del rango)	
	if( !(edad >=13 && edad <= 17)){
		alert("no es un adolescente."+edad);
		
	}*/

}//FIN DE LA FUNCIÓN