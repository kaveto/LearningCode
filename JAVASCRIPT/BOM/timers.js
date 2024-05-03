/*
	📌 window.setTimeOut()
	Nos permite ejecutar una funcion despues de cierto tiempo.
*/

// const saludo = () =>
// {
// 	console.log('Hola!');
// };

// let id;
// const iniciar = () =>
// {
// 	console.log('Iniciando timer');
// 	id = setTimeout(saludo, 5000); //ejecuta la función despues de 5 segundos
// };

// const parar = () =>
// {
// 	console.log('Parando timer');
// 	clearTimeout(id);
// };

/*
	📌 window.setInterval()
	Nos permite ejecutar una funcion cada cierto tiempo.
*/
let cuenta = 0;
let id;

const iniciar = () =>
{
	console.log('Iniciamos la cuenta');
	id = setInterval(() => //una función que se ejecuta cada segundo
	{
		console.log(cuenta);
		cuenta++;
	}, 1000);
};

const parar = () =>
{
	console.log('Paramos la cuenta');
	clearInterval(id); //para el intervalo de tiempo con el identificador asignado al timer que se estaba ejecutando.
};
