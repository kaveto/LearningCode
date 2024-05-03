/*
	📌 Modificar estilos CSS mediante "inline styles".
	modificamos atributos style mediante html
	trabajaremos modificando la ultima caja del contenedor 2 con last-child
*/
const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');
ultimaCaja.style.background = '#000';
ultimaCaja.style.color = '#fff';

//aquí modificamos el estilo de todas las cajas de manera dinamica

const cajas = document.querySelectorAll('.caja');
let tamaño = 24; //será el taño inicial de la fuente

const incrementarFuente = () =>
{
	cajas.forEach((caja) =>
	{
		tamaño++;
		caja.style.fontSize = `${tamaño}px`; //cambias el tamaño de la fuente. En CSS se usa font-size, pero aquí se usa con el formato camelCase
	});
};

const disminuirFuente = () =>
{
	cajas.forEach((caja) =>
	{
		tamaño--;
		caja.style.fontSize = `${tamaño}px`;
	});
};
