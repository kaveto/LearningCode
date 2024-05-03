/*
    📌 Operadores de Comparación:
    ==		Igual que
    ===		Igual en valor y tipo de valor
    !=		Diferente
    !==		Diferente en valor y diferente en tipo
    >		Mayor que
    <		Menor que
    >=		Mayor o igual que
    <=		Menor o igual que
    ?		Operador ternario

    📌 Operadores Lógicos
    && 	And
    ||	OR
    ! 	NOT
*/

// 📌 Estructura de una condicional
// if (true) {
// Código a ejecutar
// }

// 📌 Ejemplo #1:
// let user = {
//     age: 17,
//     country: 'Mexico',
//     ticket: true,
// };

// if (user.age > 17)
// {
//     console.log('El user es mayor de age, puede entrar al concierto.');
// } else
// {
//     console.log('El user es menor de age, no puede entrar al concierto');
// }

//📌 Ejemplo #2 - combinando operadores
// const user = {
//     age: 27,
//     country: 'Mexico',
//     ticket: false,
// };

// if (user.age >= 18 && user.ticket)
// {
//     console.log('El user es mayor de age y tiene un ticket.');
// } else
// {
//     console.log('El user es menor de age o no tiene un ticket.');
// }

//📌 Ejemplo #3 - Anindando condicionales
// const user = {
//     age: 27,
//     country: 'Mexico',
//     ticket: false,
// };

// if (user.age >= 18)
// {
//     if (user.ticket)
//     {
//         console.log('El user es mayor de age y tiene ticket.');
//     } else
//     {
//         console.log('El user es mayor de age, pero no tiene ticket.');
//     }
// } else
// {
//     console.log('El user es menor de age.');
// }

// 📌 Ejemplo #4 - elseif
const user = {
    age: 27,
    country: 'argentina',
    ticket: false,
};

if (user.country === 'mexico')
{
    console.log('El user es mexicano');
} else if (user.country === 'colombia')
{
    console.log('El user es colombiano');
} else if (user.country === 'españa')
{
    console.log('El user es español');
} else
{
    console.log('El user es otro country');
}
