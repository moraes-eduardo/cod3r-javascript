// armazenar função anonima em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)


// armazenar função arrow em uma variável
const soma = (a , b) => {
    return a + b
}
console.log(soma(2,3))


// armazenar função arrow em uma variável com retorno implicito (única sentença)
const subtracao = (a , b) => a - b
console.log(subtracao(2,3))


// armazenar função arrow em uma variável com retorno implicito (única sentença) único parâmetro
const imprimir2 = a => console.log(a)
imprimir2(25)