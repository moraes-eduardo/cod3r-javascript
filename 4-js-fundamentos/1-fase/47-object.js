// javascript é multiparadigma
// object não é a mesma coisa que JSON = java script object notation
// JSON tem formato textual
// Object é uma coleção de pares (chave e valor)

const prod1 = {}
prod1.nome = 'Celular Ultra Mega' // adiciona chave nome
prod1.preco = 4998.90 // adiciona chave preco
prod1['Desconto legal'] = 0.40 // evitar atributo com espaço
console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}
prod2['Desconto legal'] = 0.40
console.log(prod2)




// Exemplo de JSON entre aspas simples
'{ "nome": "Camisa Polo", "preco": 79.90 }'