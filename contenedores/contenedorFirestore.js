var admin = require("firebase-admin");

var serviceAccount = require("../proyecto-back-end-fa201-firebase-adminsdk-iaxun-3d70ac4b4f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
}); 
console.log('firebase conectado')

const db = admin.firestore()
let  query = db.collection('productos')


class Contenedor{
  constructor(){
    
  }
  

  async crearProducto(producto){
  try {
    const queryRead = await query.get()
    const respuesta = queryRead.docs.map(document => ({id: document.id, ...document.data()}))
    console.log(respuesta.price)
    let id = respuesta.length + 1
   const doc = query.doc(`${id}`)
    await doc.create({
      id: id,
      title: `${producto.title}`,
      precio: `${producto.precio}`,
      description: `${producto.description}`,
      stock: `${producto.stock}`,
   
 })
   console.log("producto creado")
} catch (error) {
  console.log(error)
}
  }
   //Leer
   async leerProducto(){
    try{
   const queryRead = await query.get()
   const respuesta = queryRead.docs.map(document => ({id: document.id, ...document.data()}))
   console.log(respuesta)
  } catch (error) {
    console.log(error)
  }
}
async getById(id){
  try{
 const queryRead = await query.get(`${id}`)
 const respuesta = queryRead.docs.map(document => ({id: document.id, ...document.data()}))
 const elegido = respuesta.find(doc => doc.id == id)
 return(elegido)
} catch (error) {
  console.log(error)
}
}

  //Update
  async updateProducto(obj){
   try {
     const doc = query.doc(`${obj.id}`)
     await doc.update({
      title: `${obj.title}`,
      precio: `${obj.precio}`,
      description: `${obj.description}`,
      stock: `${obj.stock}`,
  
  })
   console.log("producto creado")
  } catch (error) {
    console.log(error)
  }
  }
//Delete
async deleteProducto(id){
  try{  
    const doc = query.doc(`${id}`)
    const item =  await doc.delete({id})
      console.log(`Item eliminado: ${id}`)
    

  } catch (error) {
    console.log(error)
  }
}
}
module.exports = Contenedor
