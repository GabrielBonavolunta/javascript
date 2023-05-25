function maiorNumero(x, y){
    if(x > y){
        return x;
    } else if (y > x){
        return y;
    }
}

const resultado = maiorNumero(2,3);
console.log(resultado)