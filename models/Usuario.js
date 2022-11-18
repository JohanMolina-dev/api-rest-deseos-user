const mongoose = require('mongoose');
const UsuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String ,
        required: true
    },
    encrypt: {
        type: String ,
        required: true
    },
    imagen: {
        type: String ,
        required: true
    },
    isregistro: {
        type: Boolean,
        default: false,
        required: true
    },
    mensaje: {
        type: String,
        required: false,
        
    },
    nombrep:{
        type: String,
        required: false,
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },
  
})
module.exports = mongoose.model('Usuario', UsuarioSchema)