/* 📌 Block Scope / Alcance de tipo bloque
	- Pertenecen a las variables declaradas con const o let dentro de un bloque { }
	- Solo podemos acceder a ellas dentro del bloque
*/

const edad = 19;
if (edad >= 18)
{
	const accesoPermitido = true;

	if (true)
	{
		console.log('if true ' + accesoPermitido);
	}

	const miFuncion = () =>
	{
		console.log('const miFuncion ' + accesoPermitido);
	};
	miFuncion();
}

const accesoPermitido = 'SI';
console.log('const accesoPermitido SI ' + accesoPermitido);

if (true)
{
	let nombre = 'Carlos';

}

console.log('nombre within if true ' + nombre); //error porque la estoy llamando fuera del bloque
