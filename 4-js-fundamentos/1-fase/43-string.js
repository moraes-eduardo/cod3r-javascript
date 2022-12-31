const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // retorna vazio
console.log(escola.charCodeAt(3)) // unicode de 3
console.log(escola.indexOf('3'))
console.log(escola.substring(1))
console.log(escola.substring(0, 3)) //do indice zero a indice três sem o tres

console.log('Escola '.concat(escola).concat("!") )
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e')) // troca uma letra da palavra por outra

console.log('Ana,Maria,Pedro'.split(',')) //quebra string em um array com elementos independentes