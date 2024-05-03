const usuario = {
	nombre: 'Carlos',
	pais: 'peru',
};

if (usuario.pais === 'mexico')
{
	console.log('El usuario es mexicano');
} else if (usuario.pais === 'españa')
{
	console.log('El usuario es español');
} else if (usuario.pais === 'argentina')
{
	console.log('El usuario es argentino');
} else
{
	console.log('El usuario es de otro pais');
}

switch (usuario.pais)
{
	case 'mexico':
		console.log('El usuario es mexicano.');
		break; //rompe la ejecución del bloque
	case 'españa':
		console.log('El usuario es español.');
		break;
	case 'argentina':
		console.log('El usuario es argentino.');
		break;
	default:
		console.log('El usuario es de otro pais');
}
