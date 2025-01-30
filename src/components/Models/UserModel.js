const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    user_email:{
        type: String,
        required: true,
        unique: [true, "Email already existed"]
    },
    password:{
        type: String,
        required: true
    }
})

const ECommerceUserModel = mongoose.model("ECommerceUserModel", UserSchema)

module.exports = ECommerceUserModel;