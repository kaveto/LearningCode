/*las promesas son estructuras que vamos a poder definir para decirle al navegador que queremos que espere a que nosotros terminemos de hacer una operación y que cuando nosotros terminemos la operación, le vamos a avisar y le vamos a responder con los datos ya se a que nuestra operación tenga exito o no. 
dentro de las promesas() tenemos un callback por resolver.
*/
//aquí se define la promesa con una función tipo flecha
const fetchPosts = () =>
{
	return new Promise((resolve, reject) =>
	{
		setTimeout(() =>
		{
			const posts = ['Post 1', 'Post 2', 'Post 3'];
			const error = false;

			if (error)
			{
				reject('Hubo un error al intentar obtener los posts');
			} else
			{
				resolve(posts);
			}
		}, 2000);
	});
};

//aquí se ejecuta y concatenas dos metodos esperando la respuesta de la promesa y procesarla
fetchPosts()
	.then((posts) =>
	{
		console.log(posts);
	})
	.catch((error) =>
	{
		console.log(error);
	});
