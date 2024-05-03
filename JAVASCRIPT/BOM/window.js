// console.log(window)
// window.alert('Hola') //igual a alert('Hola')
//comillas backticks o comillas invertidas Alt+096
// console.log(`la ventana del navegador mide ${window.innerWidth} de ancho`);
// console.log(`la ventana del navegador mide ${window.innerHeight} de alto`);
// console.log(`la ventana del navegador mide ${window.outerHeight} de alto`);

/*
    📌 window.open()
    Nos permite abrir ventanas del navegador
Nota: Es posible que el navegador te pida permisos para abrir una nueva ventana.

    - 1er parametro: Dirección de la nueva ventana (opcional)
    - 2do parametro: Nombre de la ventana
    - 3er parametro: Cadena de texto de opciones

    Nos devuelve un objeto para aceder a esa ventana
*/

let ventana;
//abrir una nueva ventana de navegador definiendo dimensiones y contenido
// const abrirVentana = () =>
// {
//     ventana = window.open('', 'Mi nueva ventana', 'width=500,height=500');
//     ventana.document.write('<h1>Hola, escribiendo en la nueva ventana!</h1>'); //accedes al documento de la nueva ventana abierta y con esto puedes escribir codigo html para escribir contenido a mostrar en la nueva ventana
// };

// const cerrarVentana = () =>
// {
//     ventana.close();
// };

/*
    📌 Screen Object
    Representa la pantalla del usuario.
*/
console.log('Ancho de pantalla:', window.screen.width);
console.log('Alto de pantalla:', window.screen.height);

console.log('Ancho de pantalla sin barra de Windows:', window.screen.availWidth);
console.log('Alto de pantalla sin barra de Windows:', window.screen.availHeight);
