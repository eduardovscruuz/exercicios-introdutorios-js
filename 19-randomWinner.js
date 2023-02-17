// Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. 
// Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. 
// Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

function verificaGanhador(pessoa) {

    let ganhador = Math.floor(Math.random() * 10) + 1;
    console.log("O número ganhador é:", ganhador);

    let numeroPessoa = Math.floor(Math.random() * 10) + 1;
    console.log("O número da pessoa é:", numeroPessoa);

    if (numeroPessoa === ganhador) {
        console.log(`Parabéns, ${pessoa} você ganhou o prêmio!`);
    } else {
        console.log(`Que pena, ${pessoa} você não ganhou o prêmio.`);
    }
}

verificaGanhador("Eduardo")

