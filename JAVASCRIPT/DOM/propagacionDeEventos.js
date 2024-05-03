/*propagación de eventos quiere decir que se escucharán los eventos no solo del elemento padre que estoy accediendo sino tambien de los hijos  */
const contenedor = document.getElementById('contenedor1');
contenedor.addEventListener('click', (e) =>
{
	console.log('Hiciste click en el contenedor');
	//tanto al hacer click en el contenedor como en la caja el evento se va a activar.
});

//para evitar el comportamiento anterior en caso que los hijos tengas eventos independientes debemos 
const primeraCaja = document.querySelector('.caja');
primeraCaja.addEventListener('click', (e) =>
{
	e.stopPropagation(); //este evento me permite parar la propgación. solo se usa en un elemento hijo que reciba la propagación
	console.log('Hiciste click en la caja1');
});
