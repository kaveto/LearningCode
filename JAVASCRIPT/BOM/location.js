// href - Retorna la URL de la página actual o barra de direcciones
//las propiedades de window son locales, por tanto no es necesario usar window.location.href sino solo location.ref
console.log(location.href); //igual que window.location.href

// hostname - Retorna el host de la página actual
console.log(location.hostname);

// pathname - Retorna la ruta y archivo de la pagina actual
console.log(location.pathname);

// procotol - Retorna el protocolo utilizado
console.log(location.protocol);

const cargarDocumento = () => //boton de ir a google
{
	location.assign('https://google.com');
};

const irAdelante = () => //boton de avanzar en el navegador
{
	history.forward();
};

const irAtras = () => //boton de retroceder en el navegador
{
	history.back();
};