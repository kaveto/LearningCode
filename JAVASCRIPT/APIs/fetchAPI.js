const endpoint = 'https://api.npoint.io/53cb575a789e51933e0b';
/*endpoint es una url que nos permite acceder a una api externa creada desde https://www.npoint.io/
en https://www.npoint.io/ puedo subir mi json y convertirlo en una api para luego consumirla en mi proyecto
FETCH es una api del navegador que vamos a poder usar para hacer peticiones a una api externa
FETCH nos permite hacer peticiones a una api externa, es decir, hacer peticiones a una api que no es nuestro proyecto
*/

// fetch(endpoint)
// 	.then((respuesta) => {
// 		console.log('El servidor respondio');

// 		const promesa = respuesta.json();
// 		promesa
// 			.then((datos) => {
// 				console.log(datos);
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

/*
	📌 Ejemplo con Async/Await
*/
const obtenerDatos = async () =>
{
	const respuesta = await fetch(endpoint); //conexión a la api
	const datos = await respuesta.json(); //asignación de los valores del api en una variable
	console.log(datos);
};

obtenerDatos();
