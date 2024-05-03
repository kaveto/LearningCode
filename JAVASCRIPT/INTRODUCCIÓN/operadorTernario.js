const boleto = 'vip';
let codigoDeAcceso;

if (boleto === 'vip')
{
    codigoDeAcceso = 'VIP-123-456';
} else
{
    codigoDeAcceso = 'REGULAR-456-789';
}

console.log('El codigo de acceso del boleto tipo ' + boleto + ' es: ' + codigoDeAcceso);

//usando el operador terneario
//guardará uno de los valores dependiendo de la condición si el boleto es string y su valor es VIP
boleto === 'vip' ? codigoDeAcceso = 'VIP-123-456' : codigoDeAcceso = 'REGULAR-456-789';

const codAcc = boleto === 'vip' ? 'VIP-123-456' : 'REGULAR-456-789';
//ejecutará un codigo deacuerdo a la condición establecida en el operador ternario
boleto === 'vip' ? //si es verdadero
    console.log('Tu boleto es de tipo VIP')
    : //si es falso
    console.log('Tu boleto es de tipo REGULAR');
