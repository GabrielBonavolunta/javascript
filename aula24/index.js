/* 
Entre 0 e 11 - Bom dia
Entre 12 e 17 - Boa tarde
Entre 18 e 23 - Boa noite



IF pode ser utilizado sozinho
Sempre que utilizo a palavra else, preciso de um if antes
Eu posso ter vários Else Ifs na checagem
Só posso ter UM Else na checagem
Podemos usar condições sem Else If, utilizando apenas If e Else
*/

const hora = 24;

if(hora >= 0 && hora <= 11){
    console.log("Bom dia!");
} else if(hora >= 12 && hora <= 17){
    console.log("Boa tarde!");
}else if(hora > 18 && hora <= 23){
    console.log("Boa noite!");
} else {
    console.log("Olá");
}


const tenhoGrana = "Gabriel";

if(tenhoGrana){
    console.log("Vou sair de casa.");
} else {
    console.log("Não vou sair de casa.");
}