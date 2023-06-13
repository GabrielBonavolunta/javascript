/*function funcao(){
    let total = 0;
    for(argumento of arguments){
        total += argumento;
    }

    console.log(total);
}

funcao(1,2,3,4,5,6,7);

*/

/*function funcao(a, b, c, d, e, f){
    console.log(a, b, c, d, e, f);
}
funcao(1, 2, 3);
*/

/*function funcao([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3);
}
funcao(["Luiz Otávio", "Miranda", 30])
*/

function conta(operador, acumulador, ...numeros){
    for( let numero of numeros){
        if(operador === "+") acumulador += numero;
        if(operador === "-") acumulador -= numero;
        if(operador === "*") acumulador *= numero;
        if(operador === "/") acumulador /= numero;
    }

    console.log(acumulador);
}

conta("/", 1, 20, 30, 40, 50);