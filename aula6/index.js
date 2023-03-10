let nome = "João"; // String - Declaração (apenas 1 vez) e inicialização da variável

console.log(nome, "nasceu em 1984.");
console.log("Em 2000", nome, "conheceu Maria.");
console.log(nome, "casou-se com Maria em 2012.");
console.log("Maria teve 1 filho com", nome, "em 2015.");
console.log("O filho de", nome, "se chama Eduardo.");

// Não podemos criar variáveis com palavras reservadas
/*
    Exemplo: let if
*/


// Variáveis precisam ter nomes significativos

/*
    let nomeCliente = "João";
    console.log(nomeCliente);
*/

//Não pode começar o nome de uma varável com um número

/*
    let 1nome; (ERRO)

*/

//Não podem conter espaços ou traços - Utilizamos Camel Case

/*
    let nome Cliente; (ERRO)
    let nomeCliente; (CORRETO)
*/

//Case-sensitive
//Não podemos redeclarar variáveis com LET

let nomeCliente = "Gabriel";
let nomecliente = "Bonavoluntá";

console,log(nomeCliente, nomecliente)

//NÃO UTILIZE VAR, SEMPRE UTILIZE LET.