/*
	📌 Formularios
	- Los formularios son colecciones
	- Tenemos dos formas de acceder a los formularios.
	- Mediante el objeto forms
	- Mediante métodos del DOM
*/

// console.log(document.forms['formulario-donacion']['correo'].value); //accedo al nput correo del fromulario en especifico por el id declarado. con value accedo al valor de la propiedad del correo

document.getElementById('btnEnviar').addEventListener('click', (e) =>
{
	e.preventDefault();//cuando den click en el boton no se recarga la pagina y no me intenta enviar el formulario con los valores a la misma pagina link?valores del formulario

	console.log(document.forms['formulario-donacion']['correo'].value);

	const correo = document.querySelector('#formulario-donacion [name="correo"]');//accedemos al atributo correo del formulario
	console.log(correo.value); //accedemos al valor del correo y lo imprimimos en la consola.

	console.log(document.forms['formulario-donacion']['pais'].value);

	//guardamos el formulario dentro de una variable para poder acceder a asus valores mas facilmente
	const formulario = document.forms['formulario-donacion'];
	console.log(formulario['donacion'].value); //obtenemos el valor del campo doncación

	console.log(formulario.fecha.value); //tambien podemos acceder al valor con el id del campo

	console.log(formulario['terminos-y-condiciones'].checked);//si la variable está separado por guines en mejor obtener el valor usando los corchetes.
});
