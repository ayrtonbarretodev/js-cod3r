/* 

let - escopo global, escopo de função e escopo de bloco
var - escopo global e escopo de função

*/

var numero = 1;

{
    let numero = 2;
    console.log('dentro = ', numero); //valor local
}

console.log('fora = ', numero); //valor global




let x = 10;

{
    let y = 20;
    console.log('dentro = ', y);
}
console.log('fora = ', x);