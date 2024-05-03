/*
	📌 Ciclo forEach
	Es un método de los arreglos que podemos usar para recorrer los elementos.
*/
// const amigos = ['Alejandro', 'Cesar', 'Manuel'];
// amigos.forEach((amigo, index) => console.log(`El amigo #${index} es: ${amigo}`));

/*
	📌 Ciclo for in
	Nos permite recorrer las propiedades de un objeto.
*/
const persona = {
	nombre: 'Carlos',
	edad: 27,
	correo: 'correo@correo.com',
};

for (propiedad in persona)
{
	//console.log(propiedad); //accedo a las llaves
	//console.log(persona[propiedad]); //accedo a los valores
	console.log(propiedad + ': ' + persona[propiedad]);
}


/*
	📌 Ciclo for of
	Nos permite recorrer los valores de un objeto iterable.
	Podemos recorrer: Arreglos, Cadenas de Texto, Mapas y Listas de Nodos, etc
*/
const etiquetas = document.head.children;
console.log(etiquetas);

//esto no sirve porque no es un arreglo, es una collección de elemtos HTML. A menos que lo conviertas en un arreglo.
// etiquetas.forEach((etiqueta) =>
// {
// 	console.log(etiqueta);
// });

///sin convertir a un arreglo la colección se puede recorrer con este ciclo
for (elemento of etiquetas)
{
	console.log(elemento);
}

/////convertir la colleción en un arreglo
[...etiquetas].forEach((elemento) => console.log(elemento));
