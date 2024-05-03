/*
	📌 getElementById
	Nos permite obtener un elemento en base a su atributo id
*/
const contenedor1 = document.getElementById('contenedor1');
console.log(contenedor1); //devuelve todo toda la sección del html y si deseo usarla debo covertirla a un objeto 

/*
	📌 children
	Nos permite obtener los elementos hijo
*/
console.log(contenedor1.children); //me devuelve una colección html que voy a poder usar con sus respectivas propiedades dentro de lo que me permita

/*
	📌 parentElement
	Nos permite obtener el elemento padre de un elemento o div especificando cual.
*/
console.log('parentElement ' + contenedor1.parentElement);

/*
	📌 getElementsByTagName
	Nos permite obtener una colección de elementos en base a la etiqueta.
	Nota: Devuelve una colección HTML. Una colección no es un arreglo.
	devo indicar la etiqueta que quiero obtener.
	Ejemplo: div
*/

const divs = document.getElementsByTagName('div');
console.log(divs);
console.log(`Tenemos ${divs.length} divs en la pagina`);

/*
	📌 getElementsByClassName
	Nos permite obtener una colección de elementos en base a su clase CSS.
	Nota: Devuelve una colección HTML.
*/
//me busca todos los elementos que tenga la clase contenedores y me los guarda en una variable que se llama
//contenedores. En este caso, contenedores es un nodelist.

const contenedores = document.getElementsByClassName('contenedor'); //class="contenedor"
console.log(contenedores);

/*
	📌 querySelector
	Nos devuelve el primer elemento que coincida con un selector estilo CSS.
	Nota: Devuelve un nodelist.
	el id se representa con # 
	En este ejemplo se está buscando el elemento que tenga la clase caja cuyo id sea contenedor1.
	Ejemplo: .caja
	queryselectro solo me devolverá el primer elemento que coincida con el selector.
	Si quiero obtener todos los elementos que coincidan con el selector, debo usar querySelectorAll.
*/
const caja = document.querySelector('#contenedor1 .caja');
console.log(caja);

/*
	📌 querySelectorAll
	Nos permite obtener una colección de elementos en base a un selector estilo CSS.
	Nota: Devuelve un nodelist.
*/
const cajas = document.querySelectorAll('#contenedor1 .caja');
console.log(cajas);

cajas.forEach((caja) =>
{
	console.log(caja);
});

/*
	📌 closest
	Nos permite buscar de adentro hacia afuera en busca de un elemento. es decir hacia los elementos padre del elemento.
	con css puedo obtener el contendor padre de la ultima caja del contenedor2.
	Ejemplo: ultimaCaja.closest('.contenedor-principal')
*/
const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');
console.log(ultimaCaja);
console.log(ultimaCaja.closest('.contenedor-principal'));

/*
	📌 Podemos encadenar todos los metodos para obtener elementos.
*/
const contenedor2 = document.getElementById('contenedor2');
console.log(contenedor2.querySelectorAll('.caja')); //quiero que tomes el contenedor2 y hagas una busqueda de todos los elementos cuya clase es caja
