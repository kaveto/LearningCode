// // 📌 Forma #1
// function saludo()
// {
//     console.log('Hola!');
// }

// saludo();
// const variable = saludo;
// console.log(variable); //variable está guardando la función

// // 📌 Forma #2 - Asignando una función a una variable.
// const saludo = function ()
// {
//     console.log('Hola desde variable!');
// };

// saludo();

// 📌 Forma #3 - Función de tipo flecha y se le debe asignar a una variable para poder invocarla.
let saludo = () => console.log('Hola!');
saludo();