// par nome/valor
const saudacao = 'Opa' // contexto léxico 1
console.log(saudacao)

function exec() {
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao
}
console.log(exec())

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}
console.log(cliente)