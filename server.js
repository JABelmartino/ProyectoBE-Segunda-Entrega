const express = require('express')
const { Router } = express
const connectionDB = require('./config.js')

connectionDB()

const app = express()
const routerProductos = require('./routes/rutasProductosMongo.js')

const routerCarrito = require('./routes/rutasCarritoArchivo.js')


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));

app.use('/productos', routerProductos)
app.use('/carrito', routerCarrito)


const server = app.listen(8080, () =>{
    console.log(server.address().port)
})

server.on('error', err => console.log(err))