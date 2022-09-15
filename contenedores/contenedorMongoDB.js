const Productos = require('../models/ecommerce.js')
const connectionDB = require('../config.js')


connectionDB()

class Contenedor{
    constructor(){
      
    }
    
    async getProductos(){
        try{
            const productos = await Productos.find()
            console.log(productos)

        }catch(error){
            console.log(error)
        }
    }

    /*
    //Agrega un producto al listado
    async postProducto(producto){
        if(administrador == true){
        try{
            const productos = await Productos.find()
            console.log(productos)

            producto.id = dataArchivoParse.length+1
            producto.time = new Date()
            if(dataArchivoParse.length){
            const obj = dataArchivoParse.push(producto)    
            await fs.promises.writeFile(this.ruta, JSON.stringify(dataArchivoParse, null, 1))
            return producto   
            }else{
            await fs.promises.writeFile(this.ruta, JSON.stringify(dataArchivoParse, null, 1))
            }

            console.log(`El archivo tiene el id: ${producto.id}`)
        }catch(error){
            console.log(error)
        }
      
    }else{
        console.log('No tiene autorizacion para esto')
    }
}
  //Actualiza producto
    async updateById(obj){
        if(administrador == true){
        try{
            
            let dataArchivo = await fs.promises.readFile((__dirname,'database/productos.json'), 'utf-8')
            let dataArchivoParse = JSON.parse(dataArchivo)
            const objindex = dataArchivoParse.findIndex(prod => prod.id == obj.id)
            console.log(objindex)
            if(objindex !== 1){
                obj.time = new Date()
                dataArchivoParse[objindex] = obj
                
                await fs.promises.writeFile((__dirname,'database/productos.json'),JSON.stringify(dataArchivoParse, null, 1))
            }else{
                return {error: 'No hay productos con ese Id'}
            }    
           }catch(error){
            console.log(error)
        }
    }else{
        console.log('No tiene autorizacion para esto')
    }
    }
    
    async getId(id){
        try{
            let dataArchivo = await fs.promises.readFile((__dirname,'database/productos.json'), 'utf-8')
            let dataArchivoParse = JSON.parse(dataArchivo)
            console.log(id)
            const objIndex = dataArchivoParse.find(prod => prod.id == id)
            console.log(objIndex)
            if(objIndex){
                return objIndex
            }else{
                return {error: 'No hay productos con ese Id'}
            }    
           }catch(error){
            console.log(error)
        }
    }
    
    async deleteById(id){
        if(administrador == true){
        try{
            let dataArchivo = await fs.promises.readFile((__dirname,'database/productos.json'), 'utf-8')
            console.log(id)
            let dataArchivoParse = JSON.parse(dataArchivo)
            const objindex = dataArchivoParse.findIndex(prod => prod.id == id)
            console.log(objindex)
            if(objindex != -1){
                const borradoFinal = dataArchivoParse.splice(objindex,1)
                await fs.promises.writeFile((__dirname,'database/productos.json'),JSON.stringify(dataArchivoParse))
                return {'id':id}
            }else{
                return {error: 'No hay productos con ese ID'}
            }    
           }catch(error){
            console.log(error)
        }
    }else{
        console.log('No tiene autorizacion para esto')
    }
    }
    async getCarrito(id_carrito){
        try{
            let dataArchivo = await fs.promises.readFile((__dirname,'database/carrito.json'), 'utf-8')
            let dataArchivoParse = JSON.parse(dataArchivo)
            const carrito = dataArchivoParse.find(prod => prod.id_carrito == id_carrito)
            if(carrito){
                return carrito.productos               
            }else{
                console.log('No se encontro')
            }

        }catch(error){
            console.log(error)
        }
    }
    async postCarrito(){
        let dataArchivo  = await fs.promises.readFile((__dirname,'database/carrito.json'), 'utf-8')
        let dataArchivoParse = JSON.parse(dataArchivo)
            let clienteCarrito = Object();
            clienteCarrito.id_carrito = dataArchivoParse.length + 1
            clienteCarrito.time = new Date()
            clienteCarrito.productos = []
            dataArchivoParse.push(clienteCarrito)
            await fs.promises.writeFile((__dirname,'carrito.json'), JSON.stringify(dataArchivoParse, null, 1))
        }
        async agregarCarrito(id_carrito, id){
        try{
           
            let dataArchivo  = await fs.promises.readFile((__dirname,'database/productos.json'), 'utf-8')
            let dataArchivoParse = JSON.parse(dataArchivo)
            let carritoArchivo  = await fs.promises.readFile((__dirname,'database/carrito.json'), 'utf-8')
            let carritoArchivoParse = JSON.parse(carritoArchivo)
            console.log(carritoArchivoParse)
            if(dataArchivoParse.length){
            const objindex = dataArchivoParse.find(prod => prod.id == id)
            const carritoApuntado = carritoArchivoParse.find(prod => prod.id_carrito == id_carrito)
            const carritoDestino = carritoApuntado.productos
            objindex.time = new Date()
            const obj = carritoDestino.push(objindex)  
            await fs.promises.writeFile((__dirname,'database/carrito.json'), JSON.stringify(carritoArchivoParse, null, 1))
            return dataArchivoParse  
            }else{
            const obj = dataArchivoParse.push(objindex)
            await fs.promises.writeFile((__dirname,'database/carrito.json'), JSON.stringify(carritoArchivoParse, null, 1))
            }

            console.log(`El archivo tiene el id: ${objindex.id}`)
        }catch(error){
            console.log(error)
        }
      
    } 
  
    async updateCarritoById(obj){
        try{
            console.log(obj)
            let dataArchivo = await fs.promises.readFile((__dirname,'database/carrito.json'), 'utf-8')
            let dataArchivoParse = JSON.parse(dataArchivo)
            const objindex = dataArchivoParse.findIndex(prod => prod.id == obj.id)
            console.log(objindex)
            if(objindex !== -1){
                dataArchivoParse[objindex] = obj
                await fs.promises.writeFile((__dirname,'database/carrito.json'),JSON.stringify(dataArchivoParse, null, 1))
            }else{
                return {error: 'No hay productos con ese Id'}
            }    
           }catch(error){
            console.log(error)
        }
    }
    
    async getCarritoId(id){
        try{
            let dataArchivo = await fs.promises.readFile((__dirname,'database/carrito.json'), 'utf-8')
            let dataArchivoParse = JSON.parse(dataArchivo)
            console.log(id)
            const objIndex = dataArchivoParse.find(prod => prod.id == id)
            console.log(objIndex)
            if(objIndex){
                return objIndex
            }else{
                return {error: 'No hay productos con ese Id'}
            }    
           }catch(error){
            console.log(error)
        }
    }
    
    async deleteCarrito(id_carrito){
        try{
            let dataArchivo = await fs.promises.readFile((__dirname,'database/carrito.json'), 'utf-8')
            let dataArchivoParse = JSON.parse(dataArchivo)
            console.log(id)
            const objindex = dataArchivoParse.findIndex(prod => prod.id == id_carrito)
            console.log(objindex)
            if(objindex != -1){
                const borradoFinal = dataArchivoParse.splice(objindex,1)
                await fs.promises.writeFile((__dirname,'database/carrito.json'),JSON.stringify(dataArchivoParse, null, 1))
                return {'id':id_carrito}
            }else{
                return {error: 'No hay productos con ese ID'}
            }    
           }catch(error){
            console.log(error)
        }
    }
    async deleteCarritoID(id_carrito, id){
        try{
            let dataArchivo = await fs.promises.readFile((__dirname,'database/carrito.json'), 'utf-8')
            let dataArchivoParse = JSON.parse(dataArchivo)
            const objindex = dataArchivoParse.find(prod => prod.id_carrito == id_carrito)
            const detalle = objindex.productos
            const productoFinal = detalle.findIndex(prod => prod.id == id)
            console.log(productoFinal)
            if(productoFinal != -1){
            const borradoFinal = detalle.splice(productoFinal,1)
            await fs.promises.writeFile((__dirname,'database/carrito.json'),JSON.stringify(dataArchivoParse))
            }else{
                console.log(error)
            }
           }catch(error){
            console.log(error)
        }
    }*/
}

module.exports = Contenedor