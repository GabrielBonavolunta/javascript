// IIFE -> Immediately invoked function exporession
(function (idade, peso, altura){
    const sobrenome = "Miranda";
    function falaNome(nome){
        return nome + " " + sobrenome;
    }

    console.log(falaNome("Luiz"));

    console.log(idade, peso, altura);
})(30, 80, 1.80);

const nome = "Qualquer coisa";