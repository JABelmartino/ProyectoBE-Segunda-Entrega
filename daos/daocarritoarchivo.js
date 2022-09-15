const  ContenedorArchivo  = require('../contenedores/contenedorArchivo.js')

class DaoCarritoArchivo extends ContenedorArchivo {
    constructor(){
        super('./database/carrito.json')
    }
}
module.exports =  DaoCarritoArchivo