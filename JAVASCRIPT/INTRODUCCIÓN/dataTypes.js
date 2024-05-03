/* 📌 Tipos de datos que podemos guardar en las variables:
    string - Cadena de Texto
    number - Numero
    boolean - Booleano (verdadero o falso)
    object - Objeto
    function - Funciones
    null - Valor nulo
    undefined - Valor sin definir
*/
// 📌 Array

const parrafo = 'Este es un \'parrafo\'';
//console.log(parrafo); // Imprime el valor de la variable "parrafo"

// 📌 Boleano
const userConnected = true;
const greaterThan = 10 > 5;
//console.log(greaterThan);

// 📌 Arrays 
let fruits = ['manzana', 'pear', 'pera'];
fruits[0] = 'platano'; // Cambia el valor de la posicion 0 del array por 'platano'.
fruits[fruits.length] = 'naranja'; // Agrega una nueva posición al final del array con el valor 'naranja'.
//Add objects and arrays to same array
fruits[fruits.length] = { name: 'test' };
fruits[fruits.length] = [1, 2, 3]
console.log('Fruit array: ', fruits);

// 📌 Objects have key and values
const person = {
    name: 'John',
    age: 30,
    isAdmin: true,
    car: {
        model: 'toyota',
        color: 'black'
    }
};
console.log('Person object: ', person);
console.log('Person name: ', person.name);
console.log('Person color car', person.car.model)

// 📌 Function
function helloWorld()
{
    console.log('Hello World');
}

helloWorld();
console.log(typeof helloWorld);

// 📌 Null
// Normalmente lo usamos cuando queremos especificar que un valor sea nulo.

// 📌 Undefined
// Undefined se usa para indicarnos que un valor no esta definido.
const miVariable2 = undefined;
