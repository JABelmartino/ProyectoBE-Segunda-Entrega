var admin = require("firebase-admin");

var serviceAccount = require("../proyecto-back-end-fa201-firebase-adminsdk-iaxun-3d70ac4b4f.json");


const db = admin.firestore()
let  query = db.collection('carritos')
let Cquery = db.collection('productos')

class Contenedor{
  constructor(){
    
  }
  

  async crearCarrito(id){
  try {
    const queryRead = await query.get()
    const respuesta = queryRead.docs.map(document => ({id: document.id, ...document.data()}))
    console.log(respuesta.length)
    let id_carrito = respuesta.length + 2
    const doc = query.doc(`${id_carrito}`)
    await doc.create({
      id_carrito: id_carrito,
      time: new Date(),
      productos: [],
      
    })
    console.log("producto creado")
} catch (error) {
  console.log(error)
}
  }
   //Leer
   async getCarrito(id){
     try{
       const queryRead = await query.get(id)
       const respuesta = queryRead.docs.map(document => ({id: document.id, ...document.data()}))
       console.log(respuesta)
      } catch (error) {
        console.log(error)
      }
    }
    
    //Update
    async updateById(obj){
      try {
        const CqueryRead = await Cquery.get(direcciones.id)
        const respuestaListado = CqueryRead.docs.map(document => ({id: document.id, ...document.data()}))
        const productoAgregado = respuestaListado.find(prod => prod.id == direcciones.id)
        const queryRead = await query.get(direcciones.id_carrito)
        const respuesta = queryRead.docs.map(document => ({id_carrito: document.id_carrito, ...document.data()}))
        const carritoDestino = respuesta.find(cart => cart.id_carrito == direcciones.id_carrito)
        const productos = carritoDestino.productos
        console.log(productos)
        let id = productos.length + 1
        const doc = query.doc(`${id}`)
        await doc.update({
          title: `${productoAgregado.title}`,
          precio: `${productoAgregado.precio}`,
          description: `${productoAgregado.description}`,
          stock: `${productoAgregado.stock}`,
          id: id
        })
  
   console.log("producto creado")
  } catch (error) {
    console.log(error)
  }
  }
  //agregar producto al carrito
  
  async agregarProductoCarrito(direcciones){
    try {
      const CqueryRead = await Cquery.get(direcciones.id)
      const respuestaListado = CqueryRead.docs.map(document => ({id: document.id, ...document.data()}))
      const productoAgregado = respuestaListado.find(prod => prod.id == direcciones.id)
      const queryRead = await query.get(direcciones.id_carrito)
      const respuesta = queryRead.docs.map(document => ({id_carrito: document.id_carrito, ...document.data()}))
      const carritoDestino = respuesta.find(cart => cart.id_carrito == direcciones.id_carrito)
      const productos = carritoDestino.productos
      console.log(productos)
      let id = productos.length + 1
      const doc = query.doc(`${carritoDestino}`)
      await doc.update({
       productos:{
        title: `${productoAgregado.title}`,
        precio: `${productoAgregado.precio}`,
        description: `${productoAgregado.description}`,
        stock: `${productoAgregado.stock}`,
        id: id
      }
      })
      console.log("producto creado")
  } catch (error) {
    console.log(error)
  }
    }
//Delete
async deleteCarrito(id){
  try{  
    console.log(id)
    const doc = query.doc(`${id}`)
    const item =  await doc.delete({id})
    return(`Item eliminado :${id}`)
   

  } catch (error) {
    console.log(error)
  }
}
}
module.exports = Contenedor
