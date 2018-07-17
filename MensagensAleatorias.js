//Desafio: Criar função que cada vez que for chamada imprima uma mensagem diferente aleatória
function message(){
    var number = Math.trunc((Math.random()*3)+1)
    switch(number){
        case 1: console.log('ola') 
        break 
        case 2: console.log('oi') 
        break 
        case 3: console.log('hello') 
        break   
    }
}
message()
message()