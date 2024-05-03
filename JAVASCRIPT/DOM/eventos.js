const boton1 = document.getElementById('boton1'); //accedemos al elemento con javaScript
const primeraCaja = document.querySelector('.caja');

//es la mejor manera de procesar el evento en vez de usar el onClick()
boton1.addEventListener('click', (e) => //función callback
{
	console.log('evento', e);
	primeraCaja.classList.toggle('activa'); //aquí le vamos a cambiar (adicionar/eliminar) la clase
});

/*
	📌 Agregando el evento a multiples elementos
	Podemos agregar el evento a multiples elementos recorriendolos mediante un ciclo.
	Nota: Esta no es la forma mas optima, en la proxima clase veremos una mejor forma.
*/

const cajas = document.querySelectorAll('.caja');//selecciona todos los elementos cuya clase es caja

cajas.forEach((caja) =>
{
	caja.addEventListener('click', (e) => //reaccionamos a cada caja
	{
		console.log(`Haz hecho click en la caja: ${e.target.innerHTML}`);
	});
});
