//callbacks son funciones que podemos pasar como parametro a otra función y esto con el fin de que una función simplemente pueda llamar o pueda ejecutar otra función.

const obtenerPostsDeUsuario = (usuario, callback) =>
{
	console.log(`Obteniendo los post de ${usuario} ...`);

	setTimeout(() =>
	{
		let posts = ['Post1', 'Post2', 'Post3'];
		callback(posts);
	}, 2000); //el bloque se ejecuta despues de que pase 2 segundos o 2000ms
};

obtenerPostsDeUsuario('carlos', (posts) => //Esta en la parte de la función que debo conocer para ejecutar funciones callback.
{
	console.log(posts);
});
