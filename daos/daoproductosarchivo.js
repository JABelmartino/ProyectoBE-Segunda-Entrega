const  ContenedorArchivo  = require('../contenedores/contenedorArchivo.js')

class DaoProductoArchivo extends ContenedorArchivo {
    constructor(){
        super('./database/productos.json')
    }
}
module.exports =  DaoProductoArchivo