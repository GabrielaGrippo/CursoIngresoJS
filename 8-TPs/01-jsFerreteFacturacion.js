/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precio1;
    let precio2;
    let precio3;
    let resultado;

    precio1 =parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 =parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 =parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado=precio1+precio2+precio3;
    alert("la suma es " +resultado);
}
function Promedio () 
{
	let precio1;
    let precio2;
    let precio3;
    let resultado;

    precio1 =parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 =parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 =parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado=(precio1+precio2+precio3)/3 ;
    resultado= resultado.toFixed(2);   //piso la variable otra vez y digo que solo muestre 2 decimales.
    alert("el promedio es "+resultado);
}
function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;
    let preciofinal;

    precio1 =parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 =parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 =parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma=precio1+precio2+precio3;
    preciofinal=suma+suma * 0.21;
    alert("el precio final mas iva es "+preciofinal);
}