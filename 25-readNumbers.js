//  Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: - 
// Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. 
// Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.

function readNumbers(n1, n2, n3, n4) {
    if (n1 % 2 == 1 && n2 % 2 == 1 && n3 % 2 == 1 && n4 % 2 == 1) {
        console.log("TODOS OS NÚMEROS SÃO IMPARES");
    } else if (n1 % 2 == 0 && n2 % 2 == 0 && n3 % 2 == 0 && n4 % 2 == 0) {
        console.log("TODOS OS NÚMEROS SÃO PARES");
    } else {
        console.log("Há números pares e ímpares.");
    }
}