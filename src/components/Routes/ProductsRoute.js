const express = require("express")
const ProductsRouter = express.Router()
const {CreateProductHandler, GetProductsHandler, GetProductHandler, DeleteProduct, EditProduct} = require("../Handlers/ProductsHandlers")


ProductsRouter.post("/addProduct", CreateProductHandler)
ProductsRouter.get("/products", GetProductsHandler)
ProductsRouter.get("/product/:id", GetProductHandler)
ProductsRouter.delete("/product/:id", DeleteProduct)
ProductsRouter.put("/product/:id", EditProduct)

module.exports = ProductsRouter;