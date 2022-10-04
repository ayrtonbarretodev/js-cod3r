//Diferentemente de Java, no Javascript, não é necessário informar o tamanho do array ao criá-lo
//No Javascript o array é heterogêneo, ou seja, dentro do array pode ter vários tipos de variáveis
//Apesar do array no JS ser heterogêneo, o ideal é prezar por um array de tipos de dados homogêneos, ou seja, do mesmo tipo

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //Quando a posição não contém valor, o resultado é: undefined

valores[4] = 10
console.log(valores[4])

console.log(valores.length)

//push -> adiciona valores ao array
valores.push(
    {id:3},
    false,
    null,
    'teste'
)

console.log(valores)

//Forma 1
console.log(valores.pop()) //pop -> retira o último valor do array

//Forma 2
delete valores[0]

console.log(typeof valores) //Em JS, arrays são do tipo Object
