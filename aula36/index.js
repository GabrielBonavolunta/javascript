//for in -> Lê índices

const pessoa = {
    nome: "Luiz",
    sobrenome: "Otávio",
    idade: 30
};

//for(let i = 0; i < frutas.length; i++){
  //  console.log(frutas[i]);
//}

for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}