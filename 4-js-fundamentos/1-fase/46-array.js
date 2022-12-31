// estrutura unidirecional e indexada começando pelo índice zero(0)
// serve para agrupar multivalores de forma linear com um único identificador
// pode ser heterogênio com tipos diferentes
// prezar por tipos homogênios
// em javascript um array é um objeto

const valores = [7.7, 8.9, 6.3, 9.2] //array com 4 posições
console.log(valores[0], valores[3])
console.log(valores[4]) // undefined

valores[4] = 10 // adiciona valor no indice 4
console.log(valores[4])
console.log(valores)

valores.push({id: 3}, false, null, 'teste') // adiciona elementos no final do array
console.log(valores)
console.log(valores.length) // indica a quantidade de elementos

console.log(valores.pop()) // tira o último elemento do array
delete valores[0] // tira o elemento 0 deixando vazio
console.log(valores)
console.log(typeof valores)

delete valores[5]
console.log(valores)
console.log(typeof valores)
