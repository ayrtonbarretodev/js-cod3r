const escola = "Cod3r"

console.log("charAt()")
console.log(escola.charAt(4)) //retorna a letra na posição 4 da String

console.log()

console.log("charCodeAt()")
console.log(escola.charCodeAt(3)) //Formato da letra de posição 4 na tabela ASC

console.log()

console.log("indexOf()")
console.log(escola.indexOf('o')) //Retorna o Indice do valor passado como parâmerto

console.log()

console.log("substring(start: number, end?: number)")
console.log(escola.substring(2))
console.log(escola.substring(1, 4)) //A posição do 1° parâmetro é incluído, a do último não é incluído

console.log()

console.log("concat()")
console.log(escola.concat(" ").concat('Cursos').concat("!"))
console.log(escola + ' Cursos' + '!')

console.log()

console.log("replace(pos,value)") //Replace -> Substituir
console.log(escola.replace(3,'e'))

console.log()

console.log("split()") //Significa -> Dividir
console.log('Ana,Ayrton,Alana'.split(',')) //retonra um array de Strings

console.log()

console.log("toUpperCase()")
console.log(escola.toUpperCase()) //Transforma a String em Maiúscula

console.log()

console.log("toLowerCase()")
console.log(escola.toLowerCase()) //Transforma a String em Minúscula

console.log()

console.log("length")
console.log(escola.length) //Tamanho da String