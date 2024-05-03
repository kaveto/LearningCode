const eliminarCaja = () =>
{
	/*Primero debemos obtener el elemento padre del elemento que queremos eliminar.
	 *Luego debemos obtener el elemento que queremos eliminar.
	 *Por ultimo debemos eliminar el elemento del padre.
	 *
	 *Eliminar un elemento del padre:
	 *padre.removeChild(elemento); */

	const padre = document.getElementById('contenedor1');
	const cajaAEliminar = padre.querySelector('.caja');

	if (cajaAEliminar) //para evitar que se rompa el codigo al tratar de elimar cajas que ya no hayan se verifica primero si hay cajas disponibles para eliminar
	{
		padre.removeChild(cajaAEliminar); //pasamos el elemento a eliminar. Va a ser siempre la primera que encuentre
	}
};
