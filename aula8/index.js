const nome = "Gabriel";
const sobrenome = "Bonavoluntá";
const idade = 21;
const peso = 80;
const alturaEmM = 1.70;
let imc;
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade;

console.log(`${nome}, ${sobrenome}, tem ${idade} anos pesa ${peso} kg tem ${alturaEmM} de altura e seu IMC é ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);

