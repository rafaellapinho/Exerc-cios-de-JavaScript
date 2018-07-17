//Desafio: Crie um variável que vai receber uma letra e imprimirá no console se ela é uma vogal ou uma consoante.
var letra = 'b',
    vogal = false

switch(letra){
    case 'a': vogal = true 
    break
    case 'e': vogal = true 
    break
    case 'i': vogal = true 
    break
    case 'o': vogal = true 
    break
    case 'u': vogal = true 
    break
}    

if(vogal){
   console.log("A letra é uma vogal!") 
}else{
    console.log('A letra é uma consoante!')
}
