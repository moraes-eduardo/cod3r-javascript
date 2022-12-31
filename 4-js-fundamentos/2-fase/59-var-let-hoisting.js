// ocorre apenas com var
console.log('a =', a) // no js não apresenta erro
var a = 2
console.log('a =', a)

function teste(){
    console.log('a =', a) // no js não apresenta erro
    var a = 2
    console.log('a =', a)
}
teste()
console.log('a =', a)



// com let não ocorre o hoisting
// console.log('a =', a) 
let b = 2
console.log('b =', b)



