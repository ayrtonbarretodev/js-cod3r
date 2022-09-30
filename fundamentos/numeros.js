const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)

//Verificando se as constantes são números inteiros
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

//Simulando nota de um aluno
const prova1 = 9.871
const prova2 = 6.871

const total = prova1 * peso1 + prova2 * peso2
const media = total / (peso1+peso2)

/*toFixed: é usado para formatar um número usando a notação de ponto fixo. 
Ele pode ser usado para formatar um número com um número específico de dígitos à direita do decimal.
*/
console.log(media.toFixed(2)) 


