const express = require('express')
const { Router } = express
const contenedor2 = new Contenedor('./carrito.json')

const routerCarrito = Router()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));


const arrayCarrito = []
//traer todo lo que hay un carrito
routerCarrito.get('/', async (req, res) => {
    const agregado = await contenedor2.getCarrito()
    res.render('carrito',{ carritoNuevoExist:true, carritoNuevo:agregado}) 
})
//traer el contenido de un carrito determinado
routerCarrito.get('/:id_carrito/productos', async (req, res) => {
    const {id_carrito} = req.params
    const productos = await contenedor2.getCarrito(id_carrito)
    if(productos){
     res.json({productos})
    }else{
        return {error:'No existe'}
    }
 })
//Agregar un producto a un carrito determinado
 routerCarrito.post('/:id_carrito/productos/:id', async (req, res) => {
    const {id_carrito, id} = req.params
    const agregado = await contenedor2.agregarCarrito(id_carrito, id)
    res.render('carrito',{ carritoNuevoExist:true, carritoNuevo:contenedor2}) 
})
//creacion de carritos
routerCarrito.post('/', async (req, res) => {
    const agregado = await contenedor2.postCarrito()
    res.render('carrito',{ carritoNuevoExist:true, carritoNuevo:contenedor2}) 
})

//borrado de carritos
routerCarrito.delete('/:id_carrito',async (req, res) => {
    const {id_carrito} = req.params
    const borrado = await contenedor2.deleteCarrito(id_carrito)   
    res.json({
           borrado
        })
})
//borrado de productos dentro de carritos
routerCarrito.delete('/:id_carrito/productos/:id',async (req, res) => {
    const {id_carrito,id} = req.params
    const borrado = await contenedor.deleteCarritoID(id_carrito,id)   
    res.json({
           borrado
        })
})
//ruta carrito
app.use('/carrito', routerCarrito)
