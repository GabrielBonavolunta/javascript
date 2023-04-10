/*
Primitivos (imutáveis) - String, Number, Boolean, Undefined,
Null (Bigint, Symbol) - Valor

Referência (Mutáveis) - Array, Object e Function - Passados pro Referência

let a = "A";
let b = a; // Cópia

console.log(a, b);

a = "Outra coisa";

console.log(a, b);

//////////////////////////////

let a = [1, 2, 3];
let b = [...a];
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b)

a.push("Luiz");
console.log(c);
*/

const a = {
    nome: "Gabriel",
    sobrenome: "Bonavoluntá"
};

const b = a;

a.nome = "João";
console.log(b);

