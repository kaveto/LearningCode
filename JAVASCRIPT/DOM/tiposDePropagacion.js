/*
	📌 Bubbling (false, por defecto)
	En bubbling el evento del elemento hijo reacciona primero y despues el evento del elemento padre.
	
	📌 Capturing (true)
	En capturing el elemento padre reacciona primero y despues el elemento hijo.
*/

//false: asignamos que se ejecute la propagación tipo bubbling
//si cambiamos a true: asignamos que se ejecute la propagación tipo capturing
//esto solo funciona para los elementos padre, como los contenedores
const contenedor = document.getElementById('contenedor1');
contenedor.addEventListener('click', (e) =>
{
	console.log('Hiciste click en el contenedor');
}, false);

//en los elementos hijo no funciona estos tipos de propagación
const primeraCaja = document.querySelector('.caja');
primeraCaja.addEventListener('click', (e) =>
{
	console.log('Hiciste click en la caja1');
});
