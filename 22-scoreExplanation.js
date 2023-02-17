//  Faça um programa onde os jurados vão dar a explicação para cada
// nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

function mensagem(nota){
    let explicacao = ""

    switch (nota) {
        case 10:
            explicacao = "Parabéns, tirou a maior nota!!"
            break;
        case 9:
            explicacao = "Muito bem, continue assim"
            break;
        case 8:
            explicacao = "Legal, ainda pode melhorar"
            break;
        case 7:
            explicacao = "Nota razoável, precisa estudar mais"
            break;
        case 6:
            explicacao = "Nota baixa, precisa se dedicar mais"
            break;
        case 5:
            explicacao = "Nota muito baixa, precisa de ajuda"
            break;
        case 4:
            explicacao = "Nota insuficiente, precisa de ajuda urgente"
            break;
        case 3:
            explicacao = "Nota péssima, está reprovado"
            break;
        case 2:
            explicacao = "Aparentemente não estudou"
            break;
        case 1:
            explicacao = "Precisamos conversar com seus responsáveis"
            break;
        default:
            explicacao = "Nota não reconhecida"
            break;
    }
    console.log(explicacao)
}

