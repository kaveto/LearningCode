const boton1 = document.getElementById('boton1'); //buscamos y relacionamos el evento cuyo id se llama boton1
const boton2 = document.getElementById('boton2'); //buscamos y relacionamos el evento cuyo id se llama boton2
const primeraCaja = document.querySelector('.caja'); //accedemos al primer elemento con la clase caja

const toggleClase = () => //es la función que genera afecta la clase
{
	primeraCaja.classList.toggle('activa'); //le asignamos la clase sino la tiene y si la tiene la elimina
};

boton1.addEventListener('click', () => //escuchamos cuando se haga click sobre el boton1 e invoca la función del toggle
{
	primeraCaja.addEventListener('click', toggleClase);
});

boton2.addEventListener('click', () => //escuchamos cuando se haga click sobre el boton2 y eliminamos el evento click y efecto de la función que invocamos
{
	primeraCaja.removeEventListener('click', toggleClase);
});

