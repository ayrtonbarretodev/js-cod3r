console.log(typeof Object)
console.log(typeof new Object())

const Cliente = function(){}

console.log(typeof Cliente)
console.log(typeof new Cliente()) //instanciando um Cliente

class Produto {} //ES 2015 (ES6)

console.log(typeof Produto) //toda class é um function
console.log(typeof new Produto()) //object