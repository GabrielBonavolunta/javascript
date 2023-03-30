let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A

let temp = varA; // Variável temporária
varA = varB;
varB = varC;
varC = temp

console.log(varA, varB, varC);