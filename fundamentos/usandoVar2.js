var numero = 1

{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

//Lembre-se que o var só fica restrito (local) quando está dentro de um bloco {} de uma function, nesse caso acima, a 
//variável do bloco {} é a mesma fora do bloco, pois var é global