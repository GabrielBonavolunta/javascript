/*function saudacao(nome){
    return `Bom dia, ${nome}!`;
}

//saudacao("Maria");
//saudacao("Felipe");
const variavel = saudacao("Gabriel");
console.log(variavel)
*/ 

function soma(x = 1, y = 1){
    const resultado = x + y;
    return resultado;
}

console.log(soma());

const raiz = (n) => {
    return n **0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));