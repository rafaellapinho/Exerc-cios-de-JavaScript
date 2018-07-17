//Desafio: Crie uma função que vai receber ano, mês e dia e indica que dia é da semana. Tente fazer isso sem usar if ou switch
function diaDaSemana(ano, mes, dia){ //o mes começa a contagem de 0, por isso soma 1
    var data = (new Date(ano, mes-1, dia)).getDay();
    var dias = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    return dias[data];
}
console.log(diaDaSemana(2018,7,16))
