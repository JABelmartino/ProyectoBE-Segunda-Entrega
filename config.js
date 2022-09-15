const mongoose = require('mongoose')

const connectionDB = async () => {
    try {
        const url = 'mongodb://localhost:27017/ecommerce'
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (error) {
        console.error(error)
    }
}
module.exports = connectionDB