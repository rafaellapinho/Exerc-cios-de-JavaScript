//Desafio: Faça uma função que recebe um número e indique se é número é primo com true ou false
function numPrimo(num){
    for(var i = 2; i < num; i++){
        if(num % i ===0){
            return false;
        }
    }
    return num !==1;
}
console.log(numPrimo(2))
console.log(numPrimo(1))
console.log(numPrimo(3))
console.log(numPrimo(4))
console.log(numPrimo(5))

