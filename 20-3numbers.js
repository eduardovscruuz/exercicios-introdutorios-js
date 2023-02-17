//  Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

function numbers(arr){

    let maiorNum = 0
    let menorNum = 0

    for (let i = 0; i < arr.length; i++){
        
        menorNum = arr[i]

        if (arr[i]>maiorNum){
            maiorNum = arr[i] 
        }
        else if (arr[i]<menorNum){
            menorNum = arr[i]
        }

    }
    console.log(`Maior número é ${maiorNum}`)
    console.log(`Menor número é ${menorNum}`)
    
}
