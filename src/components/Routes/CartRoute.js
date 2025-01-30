const express = require("express")
const CartRouter = express.Router()
const {CreateCartHandler, GetCartsHandler, GetCartHandler, DeleteCartItemHandler, EditCartItemHandler, CheckDataInCart, GetCartsHandlerByEmail} = require("../Handlers/CartHandlers")

CartRouter.post("/addCart", CreateCartHandler)
CartRouter.get("/cartItems", GetCartsHandler)
CartRouter.get("/cartItem/:id", GetCartHandler)
CartRouter.delete("/cartItem/:id", DeleteCartItemHandler)
CartRouter.put("/cartItem/:id", EditCartItemHandler)
CartRouter.post("/findCartItem", CheckDataInCart)
CartRouter.get("/cartItems/:user_email", GetCartsHandlerByEmail)
module.exports = CartRouter;