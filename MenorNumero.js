//Desafio: Fazer uma função que contenha um array e diga qual menor numero dentro do array
var numbers = [11,2,3,4,5,0]
function valorMin(numbers){
    var min = numbers[0]
    for(var i=0 ; i < numbers.length; i++){
        if(numbers[i] < min){
            min = numbers[i];
        }
    }
    return min;
}
console.log(valorMin(numbers)) //Resulta 0