const express = require('express')
const { Router } = express

const app = express()
const routerProductos = require('./routes/rutasProductosArchivo.js')


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));

app.use('./productos', routerProductos)

const server = app.listen(8080, () =>{
    console.log(server.address().port)
})

server.on('error', err => console.log(err))