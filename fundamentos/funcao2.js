//Função anônima - armazenando uma função em uma variável
const imprimirSoma = function (a,b){
    console.log(a + b);
}
imprimirSoma(2,3)

//Armazenando uma função arrow em uma variável
const soma = (a,b) => { //parâmetros + => : a setinha substitui o function
    return a+b;
}
console.log(soma(20,30))


//retorno implícito - geralmente utilizado quando queremos retornar apenas uma linha de código
const subtracao = (a,b) => a-b //parâmetros + => - return - {}
console.log(subtracao(3,2))

const imprimir = a => console.log(a)
imprimir("Ayrton");
