const nombres = ['Carlos', 'Christian', 'Christoher', 'Estefania', 'Erika', 'Manuel', 'Diego'];
// nombres.forEach((nombre) => {
// 	console.log(nombre);
// });

/* 
	📌 Ciclo For
	Repite un bloque de código mientras se cumpla una condición.

	Expresión 1: Defino la variable y Se ejecuta una sola vez antes de comenzar a repetir el bloque de código.
	Expresión 2: Establesco una condicion, mientras se cumpla se va a ejecutar el bloque de código.
	Expresión 3: defino cómo o cada cuantola varible se va a ir incremenetando o decremenetando. para eso esta se debe reescribir o usar el ++. numero++ o numero=numero+2
*/
//incremento
for (let numero = 0; numero < nombres.length; numero++)
{
	console.log(nombres[numero]);
}
//decremento
for (let numero = 50; numero > 0; numero--)
{
	console.log(numero);
}