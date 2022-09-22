const express = require('express')
const { Router } = express
const Contenedor = require('../contenedores/contenedorFirestore.js')
const contenedor = new Contenedor
const app = express()
const routerProductos = Router()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));

///-Productos-///

routerProductos.get('/', async (req, res) => {
    const productos = await contenedor.leerProducto()
    res.json({ 
    productos    
    }) 
})

routerProductos.get('/:id', async (req, res) => {
    const {id} = req.params
    const elegido = await contenedor.getById(id)
    if(elegido){
     res.json({elegido})
    }else{
        return {error:'No existe'}
    }
})


//Agrega un producto al listado
routerProductos.post('/', async (req, res) => {
    const {title,price,thumbnail,description,stock} = req.body
    const producto = {title,price,thumbnail,description,stock}
    const agregado = await contenedor.crearProducto(producto)
    res.json({ 
        agregado
    }) 
})
//Actualiza producto
routerProductos.put('/:id', (req, res) => {
    const {id} = req.params
    const {title,price,thumbnail,description,stock} = req.body
    const obj = {title,price,thumbnail,description,stock,id}
    const actualizado = contenedor.updateProducto(obj)
    res.json({
        actualizado
    })
})

routerProductos.delete('/:id',async (req, res) => {
    const {id} = req.params
    const borrado = await contenedor.deleteProducto(id)   
    res.json({
           borrado
        })
})



module.exports = routerProductos