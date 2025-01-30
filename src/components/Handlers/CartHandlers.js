const ECartModel = require("../Models/CartModel")

const CreateCartHandler = async(req, res) =>{
    try{
        const bodyDetails = req.body
        const postCart = await ECartModel.create(bodyDetails)
        res.status(200).json({
            status: "success",
            message: `Successfully added the product  ${bodyDetails.product_id} to cart.`
        })
    }catch(err){
        res.status(404).json({
            status: "failure",
            message: err.message
        })
    }
}

const GetCartsHandler = async(req, res) =>{
    try{
        const cartsData = await ECartModel.find()
        res.status(200).json({
            status: "success",
            cartsData
        })
    }catch(err){
        res.status(404).json({
            status: "failure",
            message: err.message
        })
    }
}
const GetCartsHandlerByEmail = async(req, res) =>{
    try{
        const {user_email} = req.params
        const cartData = await ECartModel.findOne({user_email})
        res.status(200).json({
            status: "success",
            cartData
        })
    }catch(err){
        res.status(404).json({
            status: "failure",
            message: err.message
        })
    }
}

const GetCartHandler = async(req, res) =>{
    try{
        const {id} = req.params
        const cartData = await ECartModel.findById(id)
        res.status(200).json({
            status: "success",
            cartData
        })
    }catch(err){
        res.status(404).json({
            status: "failure",
            message: err.message
        })
    }
}
const DeleteCartItemHandler = async(req, res) => {
    try{
        const {id} = req.params
        const deleteCartItem = await ECartModel.findByIdAndDelete(id)
        res.status(200).json({
            status: "success",
            message: `Successfully deleted the item`
        })
    }catch(err){
        res.status(404).json({
            status: "failure",
            message: err.message
        })
    }
}

const EditCartItemHandler = async(req, res) => {
    try{
        const {id} = req.params
        const bodyDetails = req.body
        const updatedCartItem = await ECartModel.findByIdAndUpdate(id, bodyDetails)
        res.status(200).json({
            status: "success",
            message: "Successfully updated the cart item"
        })
    }catch(err){
        res.status(404).json({
            status: "failure",
            message: err.message
        })
    }
}
const CheckDataInCart = async(req, res)=>{
    try{
        const {product_id, user_email} = req.body
        console.log(product_id, user_email)
        const cartItemDetails = await ECartModel.findOne({product_id, user_email})
        console.log(cartItemDetails)
        res.status(200).json({
            status: "success",
            cartItem: cartItemDetails
        })
    }catch(err){
        res.status(404).json({
            status: "failure",
            message: err.message
        })
    }
}
module.exports = {CreateCartHandler, GetCartsHandler, GetCartHandler, DeleteCartItemHandler, EditCartItemHandler, CheckDataInCart, GetCartsHandlerByEmail}