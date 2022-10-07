/*Variável Global
    Vantagem: poder acessar a variável de qualquer lugar do sistema
    
    Desvantagem: qualquer sobrescrita dessa variável, pode gerar um problema muito sério

    Por exemplo:
    
    var numero = 1

    Vem outra pessoa e:

    var numero = 'x'


    'var' possui dois níveis:
        - nível global
        - escopo de função

*/


{
    {
        {
            {
                var sera = 'Será???'; 
                console.log("Dentro do escopo" + sera);
            }
        }
    }
}

console.log("Fora do escopo" + sera);


function teste() {
    var local = 123
    console.log("Dentro do escopo da function" + local)
}

teste()
//console.log("Fora do escopo da function " + local); //Não é visível

