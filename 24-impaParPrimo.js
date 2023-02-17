// Faça um programa onde leia um número e diga se ele é: 
// - ímpar, 
// - par, 
// - é um número primo e impar, 
// - é par e divisível por 5.

function imparParPrimo(num) {
    let divisores = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            divisores++;
        }
    }


    if (num % 2 == 1 && divisores == 2) {
        console.log("Número ímpar e primo");
    } else if (num % 2 == 0 && divisores == 2) {
        console.log("Número primo e par")
    } else if (num % 5 == 0 && num % 2 == 0) {
        console.log("Número par e divisível por 5");
    }
    else if (num % 2 == 1) {
        console.log("Número ímpar");
    } else if (num % 2 == 0) {
        console.log("Número par");
    }
}
imparParPrimo(9)
imparParPrimo(24)
imparParPrimo(7)
imparParPrimo(2) // Só exsite o 2
imparParPrimo(50)
