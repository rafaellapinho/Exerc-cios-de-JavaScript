//Desafio: Faça com que o comando console.log() imprima um triângulo de '*'. Como o mostrado abaixo.
/*
*
**
***
****
***
**
*
*/ 

for(var i=0; i<10 ; i++){
    var linha = '';
    for(var j = 0; j < i; j++){
        linha += '*';
    }
    console.log(linha);
}

for(var i=10; i>0 ; i--){
    var linha = '';
    for(var j = 0; j < i; j++){
        linha += '*';
    }
    console.log(linha);
}