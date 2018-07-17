//Desafio: Letras do alfabeto que estão faltando em uma frase
function missingLetters(texto){
    var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q','r','s', 't', 'u', 'v', 'w','x','y', 'z']
    texto = texto.toLowerCase();
    var missing = []
    for(let letra of letras){
        if(texto.indexOf(letra) === -1){
            missing.push(letra)
        }
    }
    return missing
}
console.log(missingLetters('aeioueeeadf'))



