const express = require('express')
const bodyParser = require('body-parser')

const PORT = 8080

const app = express()

app.use(express.static(__dirname+'/public/'))
app.use(bodyParser.urlencoded({extended: true}))
app.use((req,res,next) => {
    console.log('---------------------------------')
    console.log('FyH', new Date().toLocaleString())
    console.log('---------------------------------')
    console.log('req.query', req.query)
    console.log('req.body', req.body)
    console.log('---------------------------------')

    next()
})

app.use((req,res,next) => {
    console.log('---------------------------------')
    console.log('Timestamp', Date.now())
    console.log('---------------------------------')

    next()
})

/* app.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/index.html')
}) */

app.get('/datos/:numero?', (req, res) => {
    let numero = req.params.numero || "sin datos enviados"
    //console.log(req.query)
    res.send(`RUTA DATOS: ${numero}`)
})

app.post('/datos', (req, res) => {
    //console.log(req.body)
    res.send('Datos Post Recibidos!')
})

app.delete('/datos', (req, res) => {
    res.send('Datos delete Recibidos!')
})

app.put('/datos', (req, res) => {
    res.send('Datos put Recibidos!')
})

app.get("*", (req,res) => {
    res.send("RUTA NO IMPLEMENTADA")
})

app.listen(PORT, err => {
    if(err) return console.log(`Error en servidor: ${err}`)
    console.log(`Servidor express escuchando en el puerto ${PORT}`)
})