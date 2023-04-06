function criaPessoa(nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa("Gabriel", "Bonavoluntá", 21);
const pessoa2 = criaPessoa("Maria", "Oliveira", 32);
const pessoa3 = criaPessoa("João", "Moreira", 55);
const pessoa4 = criaPessoa("Júnior", "Lara", 44);
const pessoa5 = criaPessoa("João", "Otávio", 69);

console.log(pessoa1.nome, pessoa1.sobrenome);