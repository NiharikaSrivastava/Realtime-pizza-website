const mongoose=require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema({
    name: { type: String, required: true},
    ImageData: { type: String, required: true},
    price: { type: Number, required: true},
    SIZE: { type: String, required: true}

})


module.exports =  mongoose.model('menu',menuSchema)