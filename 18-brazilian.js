// Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO

const Maria = {
    nome: 'Maria',
    idade: 22,
    nacionalidade: 'Brasileira'
}

function brazilizan(pessoa){
    
    if(pessoa.nacionalidade == 'Brasileira'){
        console.log("Esta pessoa é Brasileira")
    }
    else{
        console.log("Esta pessoa não é Brasileira")
    }
}

brazilizan(Maria)