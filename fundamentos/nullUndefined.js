let valor; //não inicializada

//erro: is not defined - é diferente de undefined, pois nesse caso a variável não foi definida no programa
//console.log(valor2) 

//significa que a varável não tem nenhum valor e também não está apontando p/ nenhum endereço de memória
valor = null;
console.log(valor)

/* Boas práticas
    Não devemos usar undefined;
    Utilizar o null quando queremos indicar que determinada variável será "zerada" ou para que não aponte p/ nenhum end de memória.
*/


const produto ={}
console.log(produto) //retorna vazio, visto que o objeto produto está definido
console.log(produto.preco) //retorna undefined, visto que o atributo preco não foi definido no objeto produto


produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco) //false
console.log(produto) //existe o produto, porém o preço está indefinido

//Em vez de utilizar o undefined para retirar o atributo preco do produto, podemos utilizar o delete:
delete produto.preco
console.log(produto)
