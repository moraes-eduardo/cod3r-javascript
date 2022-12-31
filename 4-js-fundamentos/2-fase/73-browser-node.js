// javascript é mais flexível
// precisa conhecer o runtime - onde executa o código

// No console
/*
this === window
true
var a = "Texto"
undefined
a
'Texto'
window.a
'Texto'
var a = 123
undefined
window.a
123
this.a
123
let b = 123
undefined
window.b
undefined
let b = 123
undefined
this.b
undefined
b
123
const c = 456
undefined
window.c
undefined
function f1() { return this === window }
undefined
f1()
    
true
window.f1()
true

let pessoa = {nome: 'Ana', falar: function( ) { return `Eu sou ${this.nome}` }}
undefined
pessoa
{nome: 'Ana', falar: ƒ}
pessoa.falar()
'Eu sou Ana'
// neste caso this se refere a pessoa
undefined
*/
// No node cada arquivo representa um módulo

let a = 3
console.log(this.a)

global.b = 123
console.log(global.b)  // window no node é global

this.c = 456
console.log(this.c) 
console.log(module.exports.c) 
console.log(module.exports === this) 


this.d = false
this.e = 'teste'
console.log(module.exports) 


// criando uma variável maluca: sem var e let
abc = 3 // não faça isso
console.log(global.abc)