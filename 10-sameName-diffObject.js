// [ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.

const Eduardo = {
    nome: 'Eduardo',
    idade: 23,
    altura: 1.80,
    peso: 85,
    local: 'Rio de Janeiro'
    }
const Matheus = {
    nome: 'Matheus',
    idade: 25,
    altura: 1.89,
    peso: 95,
    local: 'Bahia'
}

function nomeIgual (pessoa1, pessoa2){
    console.log(pessoa1.nome == pessoa2.nome)
}

nomeIgual(Eduardo, Matheus)
