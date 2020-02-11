const fs = require('fs')

// ---------------------------------------------------
// LECTURA Y ESCRITURA DE ARCHIVOS DE FORMA SINCRÓNICA
// ---------------------------------------------------

console.log('Inicio')
//lectura 1
fs.readFile('../datos.txt', 'utf-8', (err, datos) => {
    console.log('RD1', datos)
    //escritura
    console.log('Escritura')
    fs.writeFile('../datos.txt', new Date().toLocaleString(), (err, datos) => {
        console.log('Lectura 2')
        fs.readFile('../datos.txt', 'utf-8', (err, datos) => {
            console.log('RD2', datos)
            console.log('Fin')
        })
    })
})



