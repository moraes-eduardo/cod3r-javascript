// function imprimirNomeGritado(obj){
//     console.log(obj.name.toUpperCase() + '!!!')
// }
// const obj = { nome: 'Roberto'}
// imprimirNomeGritado(obj)

// try = tentar (se não tiver erro)
// catch = truque (se tiver erro)
// finally = com erro ou sem erro vai ser chamado o bloco
// throw = lançar

function tratarErroELancar(erro){
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}
const obj = { nome: 'Roberto'} // erro provocado "nome" em vez de "name"
imprimirNomeGritado(obj)