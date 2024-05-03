//importar la función carrito, ejemplo anterior
// import carrito from './carrito';
// console.log('archivo inicial');
// carrito();

////////////empezar de cero

// //Named imports - primera forma de importar
// import { nombre as nombreImportado, obtenerPost } from "./namedExports";
// let nombre;
// console.log('mi nombre es ' + nombreImportado);
// console.log(obtenerPost());

//NameSpace Imports - segunda forma de importar mediante un alias
// import *  as datos from './namedExports'; //se importan todas las funciones y variables del archivo como datos
// console.log(datos.nombre); //así podria acceder a la información de la variable
// console.log(datos.obtenerPost()); //así podria acceder a la información de la función

//default imports
//se usa cuando quiero exportar una sola cosa.
// import obtUsuario from './defaultExport'; //de esta manera no se usan las llaves y se puede colocar cualquier nombre a la variable para relacionar la información que viene por defecto
// console.log(obtUsuario());

//empty imports: carga todo el codigo, pero sin hacer ningún objeto
import './emptyExport';
import { correo } from './emptyExport';
console.log('correo ' + correo);