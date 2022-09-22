const express = require('express')
const { Router } = express

//Conexion Mongo
/*const connectionDB = require('./config.js')
connectionDB()*/

const app = express()

//Rutas Firebase
const routerProductos = require('./routes/rutasProductosFirebase.js')
const routerCarrito = require('./routes/rutasFirestoreCarrito.js')


//Rutas Mongo
//const routerProductos = require('./routes/rutasProductosMongo.js')
//const routerCarrito = require('./routes/rutasCarritoMongo.js')


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));

app.use('/productos', routerProductos)
app.use('/carrito', routerCarrito)


const server = app.listen(8080, () =>{
    console.log(server.address().port)
})

server.on('error', err => console.log(err))