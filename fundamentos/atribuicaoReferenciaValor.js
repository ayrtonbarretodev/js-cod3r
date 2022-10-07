
//Atribuição por referência
const a = {name: 'Teste'}; //Cria um objeto na memória, no qual a 'constante a' aponta para esse endereço
console.log(a);


const b = a; //A 'constante b' aponta para o mesmo endereço de memória da 'constante a'
console.log(b);

b.name = 'Opa'; //moficiando o atributo nome a partir da 'constante b'

console.log(a); //O valor também é modificado na 'constante a', visto que a e b apontam para o mesmo endereço de memória


//Atribuição por valor

let c = 3;

let d = c;

d++;
console.log(c);
console.log(d);

//Valores primitivos da linguagem utilizam a atribuição por valor, ou seja, p valor de uma variável é passada para a outro variável

/*É diferente quando estamos trabalhando com objetos em JS, a passagem/atribuição é feita por referência, ou seja, a variável a e b 
apontam pro mesmo objeto em memória, se ocorrer uma mudança em A, surtirá efeito em B e vice-versa */




