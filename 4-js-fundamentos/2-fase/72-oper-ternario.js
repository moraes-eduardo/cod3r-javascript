//? se for verdadeiro a expressão relacional "nota >= 7" coloque 'Aprovado'
//: se for falsa a expressão relacional "nota >= 7" coloque 'Reprovado'

//  função arrow
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
console.log(resultado(7.1)) // aprovado
console.log(resultado(6.5)) // reprovado