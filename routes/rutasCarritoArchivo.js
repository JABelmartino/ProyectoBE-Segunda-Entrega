const express = require('express')
const { Router } = express
const DaoCarritoArchivo = require('../daos/daocarritoarchivo.js')
const daoproductoarchivo =  new DaoCarritoArchivo()

const routerCarrito = Router()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));

//

//traer todo lo que hay un carrito
routerCarrito.get('/', async (req, res) => {
    const agregado = await daoproductoarchivo.getCarrito()
    res.render('carrito',{ carritoNuevoExist:true, carritoNuevo:agregado}) 
})
//traer el contenido de un carrito determinado
routerCarrito.get('/:id_carrito/productos', async (req, res) => {
    const {id_carrito} = req.params
    const productos = await daoproductoarchivo.getCarrito(id_carrito)
    if(productos){
     res.json({productos})
    }else{
        return {error:'No existe'}
    }
 })
//Agregar un producto a un carrito determinado
 routerCarrito.post('/:id_carrito/productos/:id', async (req, res) => {
    const {id_carrito, id} = req.params
    const agregado = await daoproductoarchivo.agregarCarrito(id_carrito, id)
    res.render('carrito',{ carritoNuevoExist:true, carritoNuevo:contenedor2}) 
})
//creacion de carritos
routerCarrito.post('/', async (req, res) => {
    const agregado = await daoproductoarchivo.postCarrito()
    res.render('carrito',{ carritoNuevoExist:true, carritoNuevo:contenedor2}) 
})

//borrado de carritos
routerCarrito.delete('/:id_carrito',async (req, res) => {
    const {id_carrito} = req.params
    const borrado = await daoproductoarchivo.deleteCarrito(id_carrito)   
    res.json({
           borrado
        })
})
//borrado de productos dentro de carritos
routerCarrito.delete('/:id_carrito/productos/:id',async (req, res) => {
    const {id_carrito,id} = req.params
    const borrado = await daoproductoarchivo.deleteCarritoID(id_carrito,id)   
    res.json({
           borrado
        })
})
//ruta carrito
module.exports = routerCarrito
