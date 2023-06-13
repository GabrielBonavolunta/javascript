// Declaração de função (Function Hoisting)
function falaOi(){
    console.log("Oi");
}

falaOi();

// First-class objectos (Objetos de primeira classe)
// Function Expression
const souUmDado = function(){
    console.log("Sou um dado.");
}

function executaFuncao(funcao){
    funcao();
}

executaFuncao(souUmDado);

// Arrow Function

const funcaoArrow = () => {
    console.log("Sou uma Arrow Function.")
}

funcaoArrow();

// Dentro de um objeto
const obj = {
    falar: function () {
        console.log("Estou falando.");
    }
};

obj.falar();