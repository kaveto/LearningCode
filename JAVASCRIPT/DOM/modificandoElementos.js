/* 📌 elemento.innerHTML
	Nos permite obtener y cambiar el contenido HTML de un elemento
*/

const primeraCaja = document.querySelector('.caja');
primeraCaja.innerHTML = '<b>Hola!</b>'; //cambias el codigo html interno

/* 📌 elemento.attribute
	Nos permite acceder y cambiar atributos del elemento. En este caso le estamos asignando un Id. 
	En este caso 'nuevo.id
	no le agrega en el archivo html este Id, sino que lo agrega en el codigo JS.
	Por lo tanto, no se ve en el archivo html.
	Si queremos que se ve en el archivo html, debemos agregarlo en el codigo JS.
	Esto se hace con el elemento.setAttribute().
	solo se puede ver en la consola al inspeccionar el elemento.
*/
primeraCaja.id = 'nuevo-id';

/* 📌 elemento.setAttribute()
	Nos permite agregar o establecer el valor de un atributo del elemento
*/
primeraCaja.setAttribute('class', 'caja activa');
primeraCaja.setAttribute('data-id', '123-456-789');

/* 📌 elemento.style.property
	Nos permite cambiar los estilos css de un elemento
	En este ejemplo estamos mofificando el la primera caja del contenedor2
*/
const contenedor2Caja1 = document.querySelector('#contenedor2 .caja');
contenedor2Caja1.style.background = '#000'; //cambias color de fondo
contenedor2Caja1.style.color = 'red'; //cambias color del texto
contenedor2Caja1.style.textTransform = 'uppercase'; //cambias el texto a mayusculas. En CSS se usa text-ransform, pero aquí se usa con el formato camelCase
