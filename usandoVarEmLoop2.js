const funcs = []

for (var index = 0; index < 10; index++) {
    funcs.push(function(){
        console.log(index); //variável index está dentro do escopo de uma function
    })
}

funcs[2]() //10
funcs[8]() //10

//dentro do escopo do for, ela sai como sendo 10, ou seja, 10<10 = false e index vale 10