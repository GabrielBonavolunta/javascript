/* const verdadeira = true;

//Let tem escopo de bloco
//Var só tem escopo de função

let nome = "Luiz";
var nome2 = "Luiz";

if(verdadeira){
    let nome = "Outra coisa";
    var nome2 = "Rogério";
    console.log(nome, nome2);
    if(verdadeira){
        let nome= "Ronaldo";
        var nome2 = "Otávio";
        console.log(nome, nome2); // REDECLARADA
    }
}
*/

function falaOi(){
    var nome = "Luiz";
    console.log(nome);
}

falaOi();