var a = 110
var b = 7
var c = a + b
console.log(c)

for (let i = 0; i < 5; i++) {
    console.log(i)
}
//console.log(i)

/* function dobleDe(a) {
    return a*2
} */

/* const dobleDe = function (a) {
    return a*2
} */

const dobleDe = a => a*2
const suma = (a,b) => a+b

const imprimirMensaje = mensaje => {
    console.log(mensaje)
}

const getPi = () => Math.PI

var numero = 11

//console.log("El doble de " + numero + " es " + dobleDe(numero))
imprimirMensaje(`El doble de ${numero} es ${dobleDe(numero)}`)
imprimirMensaje(`La suma entre 3 y 4 es ${suma(3,4)}`)
imprimirMensaje(getPi())