//Funcao sem retorno

function imprimirSoma(a,b) {
    console.log(a+b);
}

imprimirSoma(2,3);

//No JS isso funciona, ele pegará o valor do 1° parâmetro e o segundo será undefined e o resultado será NaN
imprimirSoma(2); //NaN


imprimirSoma(2,20,4,5,6,7,8); //Isso tb funciona, ele pegará somente os dois parâmetros e ignorar os outros

imprimirSoma(); //NaN


//Funcao com retorno

function soma(a,b=1) { // b = 1, definindo um valor padrão caso não seja passado nenhum valor no parâmetro 
    return a+b;
}

let resultado = soma(3,4);
console.log(resultado)

console.log(soma(2));
