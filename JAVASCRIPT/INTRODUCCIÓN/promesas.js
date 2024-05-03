/*las promesas son estructuras que vamos a poder definir para decirle al navegador que queremos que espere a que nosotros terminemos de hacer una operación y que cuando nosotros terminemos la operación, le vamos a avisar y le vamos a responder con los datos ay se a que nuestra operación tenga exito o no. 
dentro de las promesas() tenemos un callback por resolver.
*/

//aquí se define la promesa
const promesa = new Promise((resolve, reject) =>
{
	// Acción que se ejecutara.
	setTimeout(() =>
	{
		const exito = true; //simular la operación

		if (exito)
		{
			resolve('La operación tuvo exito');
		} else
		{
			reject('La operación no tuvo exito');
		}
	}, 2000);
});

//aquí se ejecuta o resuelve la promesa si fue exitosa
promesa.then((mensaje) =>
{
	alert(mensaje);
});

//aquí se ejecuta o resuelve la promesa si no fue exitosa
promesa.catch((mensaje) =>
{
	alert(mensaje);
});
