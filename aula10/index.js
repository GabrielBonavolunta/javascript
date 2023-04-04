// String, Number, Undefined, Null, Boolean, Symbol

const nome = "Gabriel"; // String
const nome1 = 'Gabriel'; // String
const nome2 = `Gabriel`; // String
const num1 = 10; // Number
const num2 = 10.52; // Number
let nomeAluno; // Undefined = Não aponta em nenhum lugar na memória
const sobrenomeAluno = null; // Null = Não aponta em nenhum lugar na memória
const aprovado = false; // Boolean = True, False (lógico)

console.log(typeof(sobrenomeAluno));

const a = [1, 2];
const b = a;
console.log(a, b);

b.push(3);
console.log(a, b);

