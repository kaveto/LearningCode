/*
	📌 Estructura de una clase:
	- Definición
	- Propiedades: La clase puede contener variables. Dentro de una clase se llaman propiedades.
	- Constructor: Es un metodo especial para inicializar un objeto creado a partir de una clase.
	- Métodos: La clase puede contener funciones. Dentro de una clase se llaman metodos.
*/

class Usuario
{
	tipo = 'usuario';

	constructor(nombre, apellido)
	{
		//this hace referencia a la clase y nombre a la propiedad y si no esxiste la crea y con esto relacionamos la información que está llegando de nombre y apellido entre parentesis en el constructor.
		this.nombre = nombre;
		this.apellido = apellido;

		console.log('Nuevo usuario registrado!');
	}

	obtenerNombreCompleto()
	{
		console.log('Obteniendo datos...');
		return ` ${this.nombre} ${this.apellido} es un ${this.tipo}`;
	}
}

const usuario = new Usuario('Carlos Arturo', 'Esparza'); //aquí estoy creando el objeto que se llama usuario
console.log(usuario.obtenerNombreCompleto());

const usuario2 = new Usuario('Alejandro', 'Garcia');
console.log(usuario2.obtenerNombreCompleto());
