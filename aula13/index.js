//let string = "Um \"texto\""; = Para usar as mesmas aspas mais de uma vez na string

//            01234567


// INDÍCES E CONCATENAÇÃO
let string = "Um texto";


console.log(string[4]);
console.log(string.charAt(4));
console.log(string.concat(" em um lindo dia"));
console.log(string + " em um lindo dia");
console.log (`${string} em um lindo dia`)

// PROCURAR ÍNDICES
console.log(string.indexOf("Um"));
console.log(string.indexOf("o", 3));
console.log(string.lastIndexOf("m", 3));

//FILTROS NA STRING
console.log(string.match(/[a-z]/g));
console.log(string.search(/[x]/g));
console.log(string.replace("Um", "Outro"));

//LARGURA/FATIAR STRING

let string2 = "O rato roeu a roupa do rei de roma"

console.log(string2.length);
console.log(string2.slice(2, 5));
console.log(string2.slice(-5, -1));
console.log(string2.substring(string2.length - 5, string2.length - 1));
console.log(string2.split("r", 3));

//LETRAS MAIÚSCULAS E MINÚSCULAS

console.log(string2.toUpperCase());
console.log(string2.toLowerCase());