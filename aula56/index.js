function criaPessoa(nome,sobrenome, a, p){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        // Getter
        fala(assunto = "falando sobre NADA"){
            return `${this.nome} está ${assunto}!`
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(" ");
            this.nome = valor.shift();
            console.log(valor);
        
        },
        
        altura: a,
        peso: p,
        //Getter
        get imc(){
            const indice = (this.peso / this.altura) ** 2;
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa("Luiz", "Otávio", 1.80, 80);
const p2 = criaPessoa("Maria", "Joaquina", 1.60, 42);
console.log(p2.fala("falando sobre JS!"));
console.log(p1.imc);
console.log(p2.imc);
console.log(p1.nomeCompleto);
p1.nomeCompleto = "Maria Oliveira Silva"