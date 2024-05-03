//primera forma para exportar información
//exporta variables y funciones por eso se llama namedExports

// //Forma 1 exportar - palabra export por cada que vayas a exportar

// //variables
// export const nombre = "Juan"

// //funciones
// export const obtenerPost = () =>
// {
//     return [
//         {
//             title: "Post 1",
//             body: "Este es el primer post"
//         },
//         {
//             title: "Post 2",
//             body: "Este es el segundo post"
//         }
//     ];
// };

//forma 2 exportar - usando export al final del documento
const nombre = "Kate";
//export de funciones
const obtenerPost = () =>
{
    return [
        {
            title: "Post 1",
            body: "Este es el primer post"
        },
        {
            title: "Post 2",
            body: "Este es el segundo post"
        }
    ];
};

export { nombre, obtenerPost };