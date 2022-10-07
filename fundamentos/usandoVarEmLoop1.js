for (var index = 0; index < 10; index++) {
    console.log(index);
}

//O indez só sai do laço quando passa a ser 10, como o index é um var (escopo global), podemos acessá-lo fora do escopo do for
console.log(index); //10
