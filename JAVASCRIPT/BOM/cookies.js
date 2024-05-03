//las cookies son variables que se guardan en el navegador y que si yo refresco la pagina la variable o información que haya guardado no se va a borrar. Como información de un usuario

const CrearCookie = () =>
{
	//la cookie de esta manera al cerrar el navegador se elimina de forma automatica.
	//document.cookie = 'nombre=Carlos';
	/*las cookies son cadenas de texto con una propiedad y un valor
	nombre es la propiedad o identificador y carlos es el valor*/
	document.cookie = 'nombre= Carlos; expires= 1 may 2024 01:00:00 UTC';
};

const iniciarSesion = () =>
{
	const usuario = prompt('Usuario:'); //una ventana de texto
	document.cookie = `nombre=${usuario}; expires= 1 may 2024 01:00:00 UT`;
	alert('Sesión Iniciada');
};

console.log(document.cookie);

/*
	Forma para obtener el usuario de las cookies.
*/

let usuario;

const cookies = document.cookie.split(';'); //en caso de que hayan varias cookies guardadas separarlos y crear un arreglo con la información.

cookies.forEach((cookie) =>
{
	const propiedad = cookie.split('=')[0]; //luego separo por el igual y tomo el primer elemento
	if (propiedad === 'nombre') //si la propiedad es igual a nombre y es de tipo string entonces obtengo el valor de la cookie.
	{
		usuario = cookie.split('=')[1]; //aquí obtengo el valor de la cookie 
	}
});

if (usuario)
{
	console.log('Hola ' + usuario);
} else
{
	console.log('Por favor inicia sesión');
}

const cerrarSesion = () =>
{
	document.cookie = 'nombre=; expires=1 may 2024 01:00:00 UTC';
	console.log('Hasta luego!');
};
