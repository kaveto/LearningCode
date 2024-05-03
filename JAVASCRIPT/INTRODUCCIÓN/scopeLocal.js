/* 📌 Local Scope o Variables Locales
	- Son las variables declaradas dentro de una función.
	- Solo podemos acceder a ellas desde dentro de la función.
*/
var numeroGlobal = 1;

var obtenerNumeroLetras = (nombre) =>
{
	var numeroLocal = nombre.length;
	console.log(`${nombre} tiene ${numeroLocal} letras`);

	funcionAnidada();
};

var funcionAnidada = () =>
{
	console.log('var numero ' + numeroGlobal);
};

obtenerNumeroLetras('Alex');
console.log('var num global ' + numeroGlobal);
console.log('var num local' + numeroLocal); //error al no poder acceder a la var local
