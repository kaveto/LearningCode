
const fetchPosts = () =>
{
	return new Promise((resolve, reject) =>
	{
		setTimeout(() =>
		{
			const posts = ['Post 1', 'Post 2', 'Post 3'];
			const error = true;

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

//console.log('Inicia Operación');
// fetchPosts()
// 	.then((posts) =>
// 	{
// 		console.log(posts);
// 	})
// 	.catch((error) =>
// 	{
// 		console.log(error);
// 	});
// console.log('Finaliza operación');
// //lo anterior indica que la promesa se inicia, termina y luego se muestra el resultado.

// Esta es la mejor manera de resolver la promesa, lo hace de manera mas ordenada o limpia. 
// La nueva función será declarada asincrona y necesitará el await. 
// Tiene caracteristicas asincronas. 

const mostrarPosts = async () =>
{
	try
	{
		const posts = await fetchPosts(); //cone l await le dices al codigo que esperes a que te respondan primero de la promesa antes de ejecutar las siguientes lineas de codigo. 
		console.log(posts);
	} catch (error)
	{
		console.log(error);
	}
};
mostrarPosts();
