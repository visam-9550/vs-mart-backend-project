const mongoose = require("mongoose")

const ProductCartSchema = new mongoose.Schema({
    product_id:{
        type: String,
        required: true
    },
    user_email:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
})

const ECartModel = mongoose.model("ECartModel", ProductCartSchema)

module.exports = ECartModel;