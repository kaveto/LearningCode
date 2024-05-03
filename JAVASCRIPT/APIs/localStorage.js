document.getElementById('boton1').addEventListener('click', () =>
{
	const nombre = prompt('Escribe tu nombre'); //Esto es una cadena de texto
	//BOM
	window.localStorage.setItem('usuario', nombre); //la llave a crear y relacionar el valor debe ser cadena de texto tambien
});

if (window.localStorage.usuario) //en caso de que exista un usuario guarado en localstorage
{
	console.log('Hola ', window.localStorage.usuario);
} else
{
	console.log('Hola usuario anonimo');
}

document.getElementById('boton2').addEventListener('click', () =>
{
	window.localStorage.removeItem('usuario');
});


