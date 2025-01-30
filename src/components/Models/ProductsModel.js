const mongoose = require("mongoose")

const ProductsSchema = new mongoose.Schema({
    product_name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    details:{
        type: String,
        required: true
    },
    available:{
        type: Boolean,
        required: true
    },
    category:{
        type: String,
        required: true,
        
    },
    url:{
        type: String,
        required: true
       
    }
})

const ProductsModel = mongoose.model("ProductsModel", ProductsSchema)

module.exports = ProductsModel