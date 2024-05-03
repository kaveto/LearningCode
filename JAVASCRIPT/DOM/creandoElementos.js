const agregarCaja = () =>
{
	/*
	Debemos seguir 3 pasos para crear un elemento:
		
		📌 1. Creamos el elemento
		createElement - Recibe como parametro una cadena de texto con la etiqueta que queremos crear.
		Debemos guardarla en una variable
	*/
	const nuevaCaja = document.createElement('div');

	/*
		📌 2. Agregamos texto y atributos
	*/
	nuevaCaja.innerText = 'Nueva Caja!'; //accedemos al texto interno de la caja y le asignamos lo que queremos que muestre
	nuevaCaja.setAttribute('id', 'nuevo-id'); //le asignamos un atributo al elemento, en este caso el id.
	//El id debe ser unico. Al usar esto para signarle id, cada que presionamos el botón asigna el mismo ID.
	nuevaCaja.setAttribute('class', 'caja activa'); //le asignamos un atributo al elemento, en este caso class.

	/*
		📌 3. Agregamos el elemento al DOM
		Definimos donde vamos a guardar el elemento, en este caso el contenedor.
		Debemos guardarlo en una variable.
		Debemos usar el metodo .appendChild() o .insertAdjacentElement()
		.replaceWith() - Nos permite remplazar el elemento por otro
		
	*/

	// .appendChild() - Agrega un elemento al final
	const contenedor = document.getElementById('contenedor1');
	// contenedor.appendChild(nuevaCaja);

	/* .insertAdjacentElement() - Nos permite agregar un elemento en 4 lugares diferentes
	Valores:
		afterbegin - como primer elemento
		beforebegin - antes del elemento padre
		beforeend - como ultimo elemento
		afterend -  despues del elemento padre
	*/
	//contenedor.insertAdjacentElement('afterbegin', nuevaCaja);

	//.replaceWith() - Nos permite remplazar el elemento por otro
	document.querySelector('#contenedor1 .caja').replaceWith(nuevaCaja);
};
