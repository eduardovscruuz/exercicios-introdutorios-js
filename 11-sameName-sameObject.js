// [ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.
const Pessoas = {
    nome1: 'Eduardo',
    idade: 23,
    nome2: 'Matheus',
    peso: 25,
}

function nomeIgual (object){
    console.log(Pessoas.nome1 == Pessoas.nome2)
}

nomeIgual(Pessoas)