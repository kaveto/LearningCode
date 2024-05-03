/*
	📌 Modificar estilos CSS mediante clases
*/
const primeraCaja = document.querySelector('#contenedor1 .caja'); //obtenemos la primera caja
console.log(primeraCaja.classList); //obtenemos las clases de la primera caja

// classList.add() - Nos permite agregar clases a un elemento.
const agregarClase = () =>
{
	primeraCaja.classList.add('activa');
};

// classList.remove() - Nos permite eliminar clases de un elemento
const eliminarClase = () =>
{
	primeraCaja.classList.remove('activa');
};

// classList.toggle() - Nos permite alternar clases de un elemento. si no existe la clase la añade, si existe la elimina
const toggleClase = () =>
{
	primeraCaja.classList.toggle('activa');
};

// classList.contains() - Nos permite comprobar si un elemento contiene una clase
const comprobarClase = () =>
{
	if (primeraCaja.classList.contains('activa')) //¿la clase tiene la clase activa?
	{
		console.log('La caja tiene la clase "activa"');
	} else
	{
		console.log('La caja no tiene la clase "activa"');
	}

	console.log('y contiene las siguientes clases:');
	primeraCaja.classList.forEach((clase) => //recorremos las clases del elemento y las mostramos en la consola.
	{
		console.log(clase);
	});
};
