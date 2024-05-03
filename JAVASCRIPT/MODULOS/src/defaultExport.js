//Forma 1 - mediante palabras export default
// export default () =>
// {
//     const usuario = {
//         nombre: 'Juan',
//         apellido: 'Perez'
//     }
//     return usuario;
// };

//Forma 2 - export al final del documento
const obtenerUsuario = () =>
{
    const usuario = {
        nombre: 'Juan',
        apellido: 'Perez'
    }
    return usuario;
};
export default obtenerUsuario;