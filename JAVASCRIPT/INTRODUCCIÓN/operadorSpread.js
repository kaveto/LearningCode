/*
	📌 Operador Spread
	Permite tomar los elementos de un arreglo u objeto y expandirlos en otro sitio.
*/

const frutas = ['Manzana', 'Pera', 'Piña', 'Melon'];
const comidaFavorita = ['Sushi', ...frutas];
console.log(comidaFavorita);

const datosLogin = {
	nombre: 'Arturo',
	correo: 'correo@correo.com',
	password: '123',
};

const usuario = {
	...datosLogin,
	...comidaFavorita,
	nombre: 'Carlos',
	edad: 27,
};

console.log(usuario);

/*
	📌 Parametro Rest
	Permite que una funcion contenga un numero indefinido de argumentos.
	Los argumentos extra que el usuario añada y que no se espifican los convertirá en un arreglo.
*/
const registrarUsuario = (nombre, correo, ...datosAdicionales) =>
{
	console.log(nombre, correo, datosAdicionales);
};

registrarUsuario('Carlos', 'correo@correo.com');
registrarUsuario('Alejandro', 'alex@correo.com', 28, 'España');

/*
	📌 Destructuración de objetos
	Nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable.
*/
const amigos = ['Alejandro', 'Cesar', 'Manuel'];
/*const primerAmigo = amigos[0];
const segundoAmigo = amigos[1];
Lo anterior destructuración de datos es como se hacia antes, ahora se hace de la gte manera mas facil. 
El resultado sigue siendo el mismo*/

const [primerAmigo, segundoAmigo, tercerAmigo] = amigos;//en cada posición escribo la variable como quiero indentificar los elementos del arreglo y ya se guardan los valores del arreglo en las variables que definí.
console.log(segundoAmigo);

const persona = {
	nombre: 'Carlos',
	edad: 27,
	pais: 'México',
};
//puedo hacer lo mismo con objetos que quiera convertir en un arreglo, pero aquí debo usar el nombre exacto de la llave, de lo contrario no funcionará.

const { nombre, pais, edad } = persona; //en este ejemplo toma a la ultima estructura e información con la que quedó la variable persona
console.log(nombre, pais);

const mostrarEdad = ({ nombre, edad }) => //en funciones tambien se puede acceder directamente a los valores del objetos, simplemente debo pasarle los nombres exactos de las llaves en {} del objeto a usar. 
{
	console.log(`${nombre} tiene ${edad} años`);
};
mostrarEdad(persona);//luego al llamado de la función puedo simplemente pasarle como se llama el objeto
