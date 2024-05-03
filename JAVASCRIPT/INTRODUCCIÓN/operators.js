/* 📌 Operadores Aritmeticos
    =	Operador de asignación. Se usa para asignar valores a una variable
    +	Suma
    -	Resta
    *	Multiplicación
    /	Division
    %	Modulo
    ++	Aumento
    --	Disminución
*/

const resultado2 = 10 - 10;
const resultado3 = 10 % 3;
//console.log('10%3', resultado3);

/*📌 Operadores de Asignación
    +=	Suma un numero al valor de una variable.
    -=	Resta un numero al valor de una variable.
    *=	Resta un numero al valor de una variable.
    /=	Resta un numero al valor de una variable.
    %=	Obtiene el sobrante de una division y lo asigna a la variable.
*/
let numero = 1;
numero += 5; //add 5 unit
numero++; //add one unit
numero--; //remove one unit
numero -= numero; //subtract what the var "numero" has
console.log(numero);

/* 📌 Operadores de Comparación:
Nos permiten comparar valores
    ==		Igual que
    ===		Igual en valor y tipo de valor
    !=		Diferente
    !==		Diferente en valor y diferente en typo
    >		Mayor que
    <		Menor que
    >=		Mayor o igual que
    <=		Menor o igual que
    ?		Operador ternario
*/

// const res = 5 > 1; // true
// const res = 20 <= 20; // true
// const res = 10 == 10; // True (Solo compara el valor)
// const res = 10 === '10'; // false (compara si el valor es igual y si el tipo es igual)

//?		Operador ternario: comprobación, guarda en la variable 'res' si  es verdadero o falso el resultado
const res = 7 > 10 ? 'El primer valor es mayor que el segundo' : 'El segundo valor es mayor que el primero';
console.log('resultado', res);