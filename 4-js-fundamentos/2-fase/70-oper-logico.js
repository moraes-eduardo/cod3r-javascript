/*
trabalhos (t - terça e q - quinta)
t        q
v  and   v  ->  televisão 50
f  and   f  ->  nada
v   or   f  ->  sorvete
v  xor   f  ->  televisão 32
*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // operador bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // xor (ou exclusivo)
    const manterSaudavel = !comprarSorvete // negação lógica com operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

