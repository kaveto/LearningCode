const formulario = document.forms['formulario-donacion'];

/*
	📌 Evento submit
	Nos permite detectar cuando el usuario intenta enviar un formulario.
*/
formulario.addEventListener('submit', (e) =>
{
	//con esto prevenimos el comportamiento por defecto del formulario, que es recargar la pagina al dar click en el boton submit.
	//cuando den click en el boton no se recarga la pagina y no me intenta enviar el formulario con los valores a la misma pagina link?valores del formulario
	e.preventDefault();
	console.log('Enviando datos');
});

/*
	📌 Evento Change
	Nos permite detectar cuando hay un cambio en el valor de un input, select o textarea.
	Se ejecuta cuando cambiamos el valor del input y damos click fuera.
*/
formulario.pais.addEventListener('change', (e) =>
{
	console.log('El pais cambió');
	console.log('El nuevo valor es: ' + e.target.value); //e es el evento, target es el elemento y value es el valor
});

//si se desea conocer si los valores de tipo radiobutton, se debe agregar el enevto change por cada radiobutton

formulario['cantidad-5'].addEventListener('change', () => console.log('La cantidad cambio')); //'cantidad-5' es el id del botón 5 
formulario['cantidad-10'].addEventListener('change', () => console.log('La cantidad cambio')); //'cantidad-10' es el id del botón 10

/*
	📌 Evento Focus
	Nos permite detectar cuando un input recibe el foco de atención, es decir que se está usando el campo.
*/
formulario.correo.addEventListener('focus', () =>
{
	console.log('El input correo ahora es el foco de atención');
});

/*
	📌 Evento Blur
	Nos permite detectar cuando un input pierde el foco de atención, es decir que no se está usando el campo.
*/
formulario.correo.addEventListener('blur', () =>
{
	console.log('El input correo ya no es el foco de atención');
});

/*
	📌 Evento keydown
	Nos permite detectar cuando un usuario presiona una tecla sobre un input.
*/
formulario.correo.addEventListener('keydown', (e) =>
{
	console.log(e);
});

/*
	📌 Evento keyup
	Se ejecuta cuando un una tecla es levantada al escribir sobre un input.
*/
formulario.correo.addEventListener('keyup', (e) =>
{
	console.log(e);
});
