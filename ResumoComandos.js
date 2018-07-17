//Resumo Comandos JavaScript

//Operador Spread (...) : é usado para retirar elementos de array facilmente
var myArray1 = [1, 2, 3]
var myArray2 = [4, 5, 6]
console.log([...myArray1,...myArray2]) //Resulta [1,2,3,4,5,6]

//For in - for of :Laços de repetição para arrays e objetos
 var myArray3 = [5, 10, 15, 20]
 for(var a in myArray3){
     console.log(a) //Resulta 0 1 2 3 os indices do array
 }
for(var a in myArray3){
    console.log(myArray3[a]) //Resulta 5 10 15 20 os valores do array
}
var myObj = {
    d: 10,
    e: 20,
    f: 30
}
for(var a in myObj){
    console.log(a) //Resulta d e f os indices do objeto
}
for(var a in myObj){
    console.log(myObj[a]) //Resulta 10 20 30
}
for(var a of myArray3){
    console.log(a) //Resulta 5 10 15 20, com o  of resulta os valores do array
}

//Trabalhando com numeros
//Se colocar Number. aparece várias funcoes prontas
console.log(Number.EPSILON) //é uma constante
console.log(Number.MAX_SAFE_INTEGER) // valor maximo suportado
console.log(Number.isFinite) //para ver se é finito
console.log(Number.isFinite) //para ver se é inteiro
var numTeste = 5.454567
console.log(numTeste.toFixed(2)) // fixa 2 casas apos a virgula

//Math
console.log(Math.pow(2,3))// é 2 elevado a 3 pode usar tb 2 ** 3
console.log(Math.sqrt(9)) // raiz quadrada de 9
console.log(Math.abs(-5.45)) //valor absoluto, retorna valor positivo
console.log(Math.ceil(5.6)) // retorna 6, retorna o inteiro mais alto mais próximo
console.log(Math.floor(5.6)) // retorna 5, arredonda pro inteiro menor
console.log(Math.round(5.7)) //arredonda para o numero mais próximo
console.log(Math.trunc(5.3)) //retorna 5, retorna o valor inteiro usado
console.log(Math.max(5,1,56,34,88)) //retorna o valor maior
console.log(Math.min(1,2,3,4,0)) //retorna o menor numero
//como ver o maior numero dentro de um array?
var myArray4 = [5,3,6,7,2]
console.log(Math.max(...myArray4))
//Random retorna um valor aleatório ele sempre é 0.alguma coisa
console.log(Math.random())
console.log(Math.random()*10)// reotorna valor aleatorio de 0 a 10, exemplo 4,767757474
console.log((Math.random()*10)+1) //retorna valor aleatorio de 1 a 10
console.log(Math.trunc((Math.random()*10)+1)) //retorna valor aleatorio inteiro de 1 a 10
 
//Strings: textos delimitados por '', " ", ` `
var nome = ' Treinaweb'
console.log('Olá' + nome) // Concatenando uma string e uma variavel
console.log(`Olá ${nome}`) //modo mais facil de concatenar, sem precisar do +
console.log('Hello World'.length) //Tamanho da string
console.log('Hello World'[2]) //Mostra a letra l que esta na posição 2
console.log('Hello World'.indexOf('World')) //Mostra o idice que começa a palavra world que é 6 
console.log('Hello World'.lastIndexOf('o')) //Mostra o indice que esta o último o 
console.log('Hello World '.repeat(2)) //repete 2 vezes
console.log('Hello World'.substr(0,5)) //Faz uma string começando do indice zero, e conta 5 indices, então retorna a palavra hello
console.log('Hello World'.substring(2,5))//Faz uma sustring começando da posiçao 2 e indo ate a posição 5, não conta5 indices como a passada anteriormente
console.log('Hello World'.toUpperCase()) //Deixa letras maiusculas
console.log('Hello World'.toLowerCase()) //Deixa minusculo
console.log(' Hello World '.trimLeft()) //Remove espaço a esquerda
console.log(' Hello World '.trimRight()) //Remove espaço a direita
console.log(' Hello World '.trim()) //Remove espaço a esquerda e deireita
console.log('Hello World'.split(' ')) //Separa em arrays apartir do que tem dentro das ''  [ 'Hello', 'World' ]
console.log('H.e.l.l.o.W.o.r.l.d'.split('.')) //Separa em arrays onde tem pontos [ 'H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd' ]
console.log('Hello World'.split('')) //Separa todos caracteres, incluindo o espaço  [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' ]
 //Caracteres especiais
 console.log("\"a\"") //a barra deixa colocar aspas dentro de aspas
 console.log('"a"') //outra maneira
 console.log("\tOi") // \t da um tab
 console.log("\nOi") // \n Troca de linha

//Expressões Regulares (Regexp ou Regex)
var myStr = '05/10/2020'
var myRegex = /\d{2}\/\d{2}\/\d{4}/ //Diz como quero a expressao regular 2digitos/2digitos/4digitos
console.log(myStr.match(myRegex)) //Diz que a expressao regular esta batendo com a string dada
var myRegex2 = /\d{2}\/\d{2}\/\d{5}/
console.log(myStr.match(myRegex2))//reotrna null pq minha string nao confere com o regex
//console.log(/\d{2,5}\//)//entre 2 e 5 digitos

//Trabalhando com datas
var myDate = new Date()
console.log(myDate) //data atual
var myDate2 = new Date('2020-09-21')
console.log(myDate2)
console.log(myDate2.getMonth()) //retorna o mes

//Trabalhando com arrays
var meuArray = [2,4,6,8,10]
console.log(meuArray.length) //tamanho do array
meuArray.every(function(n){ //every faz o teste com todos os elementos do array
    return par = n % 2 === 0
})
console.log(par)
//console.log(meuArray.every(n => n % 2 === 0)) //com arrow function

var meuArray2 = [2,3,4,5,6,7,8,9]
console.log(meuArray2.filter(n => n % 2 !== 0)) //filtra o array conforme a função dada, ou seja retorna os numeros impares nesse caso
console.log(meuArray2.find(n => n > 5)) // find retorna o primeiro que encontrar que satisfaz a função, no caso o primeiro numero maior que 5 do array
console.log(meuArray2.findIndex(n => n > 5)) //retorna a posição do primeiro numero do array maior que 5
console.log(meuArray2.some(n => n % 2 !== 0)) //reotrna se existe pelo menos um numero impar no array
console.log(meuArray2.reduce( (acumulado, atual) => acumulado + atual)) //soma os numeros do array
console.log(meuArray2.sort((a,b) => a > b ? 1 : -1)) //ordena o aaray, porem tem que passar uma função para não dar erro, pois se tiver por exemplo 15 no array ele coloca primeiro pois ele compara o 1 e nao o 15
meuArray2.forEach(n => {
    console.log(n)
}) //para trabalhar com cada elemento do array separadamente
console.log(meuArray2.map(n => n*2)) //retorna o dobro de cada valor, o map é paga pegar cada valor do array e poder fazer alguma funçao com eles
console.log(meuArray2.concat(meuArray)) //concatena(junta) 2 arrays
var meuArray3 = Array(1,2,3,4)
console.log(meuArray3)//Outra maneira de criar array
console.log(meuArray3.includes(2)) //meu array inclui o 2?
console.log(meuArray3.indexOf(2)) //posição do meu numero 2
//console.log(meuArray3.lastindexOf(2)) //posição do ultimo 2 do array
console.log(meuArray3.join('')) //Junta os elementos do array em uma string
console.log(meuArray3.join('-')) //Junta todos na string separando por um traço, posso escolher o separador
console.log(meuArray3.reverse()) //Inverte a ordem
meuArray3.pop()//Retira o ultimo elemento do array
console.log(meuArray3)
meuArray3.push(1) //Acrescenta o ultimo elemento do array
console.log(meuArray3) 
meuArray3.unshift('ab') //Acrescenta no inicio do array
console.log(meuArray3)
meuArray3.shift('ab') //Retira no inicio do array
console.log(meuArray3)
meuArray3.splice(1,1) //remove o numero que esta na posiçao um do array e vai ate 1
console.log(meuArray3)
meuArray3.splice(1,0,5)//na posiçao eu retiro zero elementos e acrescento o 5
console.log(meuArray3)

//Array multidimensional
var meuArray4 = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
] 
console.log(meuArray4)
console.log(meuArray4[1][1]) //linha 1 posicao 1 contando apartir do 0 resulta no 5

//Trabalhando com objetos(Métodos)
var myObj = {
    a: 2,
    b: 4,
    c: 6
}
console.log(Object.keys(myObj)) //retorna um array com as chaves
console.log(Object.values(myObj)) //retorna um aaray com os valores dos objetos
Object.seal(myObj) //Com o seal eu posso alterar o valor das propriedades mas não posso acrescentar nem deletar
Object.freeze(myObj) //Com o freeze eu não posso nem alterar a propriedade
Object.isSealed(myObj) //para saber se o o bjeto esta selado

//Get e set: O get é para quando eu quero pegar um valor e o set e para quando queremos atribuir um valor a uma propriedade
var myObj2 = {
    a: 2,
    get b(){
        return 5
    }
}
console.log(myObj2)
console.log(myObj2.b)























