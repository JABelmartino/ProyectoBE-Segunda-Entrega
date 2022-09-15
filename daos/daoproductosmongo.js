const connectionDB = require('../config.js')
const  ContenedorMongoDB  = require('../contenedores/contenedorMongoDB.js')


class DaoProductoMongo extends ContenedorMongoDB {
    
      connectionDB
    
}
module.exports =  DaoProductoMongo