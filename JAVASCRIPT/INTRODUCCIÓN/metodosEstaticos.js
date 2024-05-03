class Usuario
{
	constructor(nombre, correo)
	{
		this.nombre = nombre;
		this.correo = correo;
	}

	//metodos y propiedades estaticas, es decir puedo acceder a estos sin tener que definir o crear nuevos objetos
	static borrar(id_usuario)
	{
		console.log(`El usuario con el id: ${id_usuario} ha sido borrado de la base de datos`);
	}

	static registrados = 1000;
}

// const usuario = new Usuario('Carlos', 'correo@correo.com');
// usuario.borrarUsuario(1);
Usuario.borrar(1); //cuando el metodo es estatico puedo invocarlo sin tener que inicializarlo al relacionarlo en una variable y tener que pasarle valores. 
console.log(Usuario.registrados);
