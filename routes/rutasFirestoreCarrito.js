const express = require('express')
const { Router } = express
const Contenedor = require('../contenedores/contenedorFirestoreCarrito.js')
const contenedor = new Contenedor
const app = express()
const routerCarrito = Router()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));

///-Productos-///


    routerCarrito.get('/', async (req, res) => {
        const carrito = await contenedor.getCarrit()
        res.json({ 
        carrito    
        }) 
    })

routerCarrito.get('/:id', async (req, res) => {
    const {id} = req.params
    const elegido = await contenedor.getCarrito(id)
    if(elegido){
     res.json({elegido})
    }else{
        return {error:'No existe'}
    }
})
//Crea Carrito
routerCarrito.post('/', async (req, res) => {
    const {id, id_carrito} = req.params
    const agregado = await contenedor.crearCarrito(id, id_carrito)
    res.json({ 
        agregado
    }) 
})
//Agrega un producto al carrito
routerCarrito.post('/:id_carrito/productos/:id', async (req, res) => {
    const {id, id_carrito} = req.params
    const direcciones = {id, id_carrito}
    const agregado = await contenedor.agregarProductoCarrito(direcciones)
    res.json({ 
        agregado
    }) 
})
//Actualiza producto
routerCarrito.put('/:id', (req, res) => {
    const {id} = req.params
    const {title,price,thumbnail,description,stock} = req.body
    const obj = {id,title,price,thumbnail,description,stock}
    const actualizado = contenedor.updateById(obj)
    res.json({
        actualizado
    })
})

routerCarrito.delete('/:id',async (req, res) => {
    const {id} = req.params
    const borrado = await contenedor.deleteCarrito(id)   
    res.json({
           borrado
        })
})

routerCarrito.delete('/:id_carrito/productos/:id',async (req, res) => {
    const {id, id_carrito} = req.params
    const ids = {id_carrito, id}
    const borrado = await contenedor.deleteProductoCarrito(ids)   
    res.json({
           borrado
        })
})



module.exports = routerCarrito