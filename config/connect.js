const mongoose = require('mongoose')
const connect = async () => {
    console.log('connecting data base')
    await mongoose.connect('mongodb+srv://kumavatyogesh93:ecommerceweb@cluster0.fbmtfud.mongodb.net/?retryWrites=true&w=majority')
    console.log('connected data base')
}


module.exports = connect