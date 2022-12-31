// função - verbo - ação
// Receita de bolo
// Função é um bloco de códigos nomeado 
// os blocos contem sentenças
// Recebe parametros - ingredientes
// pode reusar


// Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}
imprimirSoma(2, 3)
imprimirSoma(2) // valor b fica como undefined


// Função com retorno
function soma(a, b = 1){   // b tem um valor padrão
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2)) // como b é zero não dá erro


