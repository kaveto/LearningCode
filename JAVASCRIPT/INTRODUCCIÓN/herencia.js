//las clases son platillas usadas para crear objetos
class Usuario
{
	constructor(usuario, password)
	{
		this.usuario = usuario;
		this.password = password;
	}

	obtenerPosts()
	{
		const posts = ['post1', 'post2'];
		return posts;
	}
}

class Moderador extends Usuario
{
	constructor(usuario, password, permisos)
	{
		super(usuario, password); //con super podemos copiar todos los atributos, constructores, metodos y demas de la clase usuario
		this.permisos = permisos;
	}

	borrarPost(id)
	{
		if (this.permisos.includes('borrar')) //permisos es un array por eso puedo usar el metodo includes para validar si existe borrar
		{
			console.log(`El post con el id #${id} ha sido borrado`);
		} else
		{
			console.log('No tienes los permisos para borrar post');
		}
	}
}

const usuario = new Usuario('carlos', '123');
console.log(usuario.obtenerPosts());
// console.log(usuario.permisos);
// usuario.borrarPost(1);

const usuario2 = new Moderador('arturo', '456', ['editar', 'borrar']); //el orden en que envio la info la defino en el constructor
console.log(usuario2.obtenerPosts());
console.log(usuario2.permisos);
usuario2.borrarPost(7);
