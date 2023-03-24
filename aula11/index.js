// Operadores aritméticos

/* 
    + (Adição/Concetenação)
    - (Subtração)
    * (Multiplicação)
    ** (Potenciação)
    / (Divisão)
    % (Resto da divisão)

    Precendência dos operadores aritméticos -> (), **, * / %, + -
*/

// Operadores de atribuição
/* 
    +=
    -=
    *=
    /=
    **=

*/
const num1 = 5;
const num2 = 2;
const num3 = 10
const resultado = (num1 + num2) * num3;
console.log(resultado);

//Incremento (++) e Decremento (--)
let contador = 1;
contador++;
++contador;
console.log(contador);
//console.log(++contador (CONTA PRIMEIRO) e contador++ (EXIBIÇÃO PRIMEIRO));
contador--;
contador += 2; //Igual a contador = contador + 2

//NaN -> Not a Number; parseInt (conversão para inteiro), parseFloat (conversão para números decimais), Number (números em geral)
const num4 = 10;
const nome = "Gabriel";
console.log(num4 * nome);
const num5 = Number("5");
console.log(num4 * num5);