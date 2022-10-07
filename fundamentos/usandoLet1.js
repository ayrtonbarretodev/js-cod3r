/* 

let - podem ser globais, escopo de função ou escopo de bloco
var - podem ser globais ou escopo de função

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