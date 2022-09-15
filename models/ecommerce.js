const mongoose = require('mongoose')

const ProductosSchema = new mongoose.Schema({
    title: {
    type: String,
    required: true,
    trim: true,
    max: 50,
    
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        max: 50,
        
    },
    descripcion: {
        type: String,
        required: true,
        trim: true,
        max: 50,
        
    },
    thumbnail: {
        type: String,
        required: true,
        trim: true,
        max: 50,
        
    },
    stock: {
        type: Number,
        required: true,
        trim: true,
        max: 50,
        
    },
    time: {
        type: Date,
        required: true,
        trim: true,
        max: 50,
    },
})

module.exports = mongoose.model('Productos', ProductosSchema)