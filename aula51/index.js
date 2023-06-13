/*function soma(a, b){
    return a + b;
}

function soma2(a, b){
    console.log(a + b);
}

console.log(soma(5, 2));
soma2(5,2);
*/

/*function criaPessoa(nome, sobrenome){
    return {
        nome: nome,
        sobrenome: sobrenome
    }
}

const p1 = criaPessoa("Gabriel", "Bonavoluntá");
const p2 = criaPessoa("João", "Oliveira");

*/

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + " " + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase("Olá");
console.log(olaMundo("mundo"));