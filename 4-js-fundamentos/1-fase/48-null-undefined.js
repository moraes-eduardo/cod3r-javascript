// atribuição por referência
// dando enter aparecerá undefined
// exibindo a aparecerá o objeto
// fazendo uma cópia o valor será o mesmo
const a = {name: 'Teste'} // tipo objeto
// atribuição por valor
// fazendo uma cópia o valor será diferente
let c = 3  // tipos primitivos


// UNDEFINED - evite atribuir
let valor // não inicializada
console.log(valor) // undefined
// console.log(valor1) // não está definido
const produto = {}
console.log(produto.preco)



// NULL
let valor2 = null    // ausência de valor
console.log(valor2) 
// console.log(valor2.toString()) // não pode acessar algo que é nulo

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)