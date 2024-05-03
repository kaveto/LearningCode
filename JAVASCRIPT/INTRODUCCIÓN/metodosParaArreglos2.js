/* 📌 .indexOf()
	Obtenemos el primer index de un elemento que se encuentre repetido.
	Si no hay elemento nos retorna -1
*/
const nombres = ['Carlos', 'Rafael', 'Estefania', 'Rodrigo', 'Rafael', 'Gema', 'Diana', 'Sara'];
// console.log(nombres.indexOf('Sergio')); //no está el elemento, retorna -1
// console.log(nombres.indexOf('Rafael')); //retorna el index del primer elemento que se encuentra repetido
// console.log(nombres.indexOf('Estefania')); //retorna el index del elemento

/*
	📌 .lastIndexOf()
	Obtenemos el index del último elemento del arreglo.
*/
// console.log(nombres.lastIndexOf('Rafael'));

/*
	📌 .forEach()
	Nos permite ejecutar una funcion por cada elemento del arreglo.
	El primer argumento es la funcion a ejecutar, el segundo es el elemento
	nombre es como defino el valor de los elementos del arreglo y index es el index
*/
// nombres.forEach((nombre, index) =>
// {
// 	console.log(`Hola ${nombre} (${index})`);
// });

/*
	📌 .find()
	Nos permite recorrer un arreglo y devuelve el PRIMER elemento que retornemos.
*/
// const resultado = nombres.find((nombre) => //find ya recorre el array
// {
// 	if (nombre[0] === 'R')
// 	{
// 		return nombre;
// 	}
// });
// console.log(resultado);

/*
	📌 .map()
	Nos permite ejecutar una función por cada elemento y crear un nuevo arreglo
	en base a los resultados de esa función.
	A diferencia de filter me devolverá undefined aunque no cumpla la condición para que ocupe una posición en el arreglo.
*/
// const nombresMayusculas = nombres.map((nombre) => nombre.toUpperCase());
// console.log(nombresMayusculas);

/* 📌 .filter()
	Nos permite ejecutar una función por cada elemento
	y luego crear un arreglo en base a los resultados de esa función.
	A diferencia de map, filter retorna un arreglo con los elementos que cumplen la condición.
	Si no hay elemento que cumpla la condición, retorna un arreglo vacio.
	Si hay mas de un elemento que cumpla la condición, retorna un arreglo con todos los elementos que cumplen la condición.
*/
// const nombres4Letras = nombres.filter((nombre) => nombre.length === 4);
// console.log(nombres4Letras);

/*
	📌 .filter()
	Nos permite ejecutar una función por cada elemento
	y luego crear un arreglo en base a los resultados de esa función.
*/
// const nombres4Letras = nombres.filter((nombre) =>
// {
// 	if (nombre.length === 4)
// 	{
// 		return nombre;
// 	}
// });
// console.log(nombres4Letras);

/*
	📌 .includes()
	Nos permite saber si el arreglo contiene un elemento especificado y devuelve un valor booleano
*/
// console.log(nombres.includes('Julio'));
// console.log(nombres.includes('Carlos'));

/*
	📌 .every()
	Nos permite ejecutar un condicional sobre cada elemento y
	nos devuelve true si TODOS los elemento cumplieron la condición.
	nombre es como identificamos a cada elemento
*/
// const nombresValidos = nombres.every((nombre) =>
// {
// 	if (typeof nombre === 'string') //typeof se usa para saber el tipo del elemento
// 	{
// 		return true;
// 	} else
// 	{
// 		return false;
// 	}
// });
// console.log('¿Todos los nombres son validos? ' + nombresValidos);

/*
	📌 .some()
	Nos permite ejecutar un condicional sobre cada elemento y
	nos devuelve true si algun elemento cumplio la condición.
*/
const nombresValidos = nombres.some((nombre) =>
{
	if (typeof nombre !== 'string')
	{
		return true;
	} else
	{
		return false;
	}
});
console.log('¿El arreglo es invalido? ' + nombresValidos);
// true si hay algun valor invalido
// false si no hay algun valor invalido
