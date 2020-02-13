const mongoose = require('mongoose')
const Schema = mongoose.Schema

// un schema es una interfaz, un formato de objeto con la estructura de datos
const usuarioSchema = new Schema({
    nombre: String,
    edad: Number,
    apellido: String
})

//el modelo se utiliza para buscar, y combina el schema con una conexión
const usuarioModel = mongoose.model('usuarios', usuarioSchema)

mongoose.connect('mongodb+srv://joaquinollo:que11ny23az@clasenodejsmongodb-63fs3.mongodb.net/test?retryWrites=true&w=majority', {
    //mongoose.connect('mongodb://localhost/mibase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) return console.log(`Error en conexión con base de datos: ${err}`)
    console.log('Base de datos conectada!')

    const usuarioNuevo = new usuarioModel({
        nombre: 'Talvin',
        apellido: 'DeMachio',
        edad: '38'
    })
    usuarioNuevo.save(err => {
        if (!err) {
            console.log('Escritura OK!')

            usuarioModel.find({}, (err, usuarios) => {
                if (!err) {
                    usuarios.forEach(usuario => {
                        console.log(usuario)
                    })
                }
            })
        }
    })
})
