//  Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
// Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior 
// de idade e brasileira para ser aprovada.

const candidatos = [
    {
        nome: 'Eduardo',
        idade: 23,
        sexo: 'Masculino',
        profissão: 'Desenvolvedor',
        nacionalidade: 'Brasileiro'
    },

    {
        nome: 'Matheus',
        idade: 25,
        sexo: 'Masculino',
        profissão: 'Cozinheiro',
        nacionalidade: 'Italiano'
    },

    {
        nome: 'Claudio',
        idade: 17,
        sexo: 'Masculino',
        profissão: 'Advogado',
        nacionalidade: 'Estadunidense'
    },

    {
        nome: 'Alberto',
        idade: 43,
        sexo: 'Masculino',
        profissão: 'Designer',
        nacionalidade: 'Brasileiro'
    },

    {
        nome: 'Julio',
        idade: 28,
        sexo: 'Masculino',
        profissão: 'Analista de Dados',
        nacionalidade: 'Espanhol'
    }
]

function processo(pessoa) {

    for (let i = 0; i < pessoa.length; i++) {

        if (pessoa[i].idade > 18 && pessoa[i].nacionalidade == 'Brasileiro') {
            console.log(`Candidato ${pessoa[i].nome} aprovado`)
        }
    }

}

processo(candidatos)