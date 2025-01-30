const ProductModel = require("../Models/ProductsModel")

const CreateProductHandler = async(req, res) =>{
    try{
        const bodyDetails = req.body
        const product = await ProductModel.create(bodyDetails)
        res.status(200).json({
            status: "success",
            message: `Successfully added the ${bodyDetails.product_name} product.`
        })
    }catch(err){
        res.status(404).json({
            status: "failure",
            message: err.message
        })
    }
}

const GetProductsHandler = async(req, res) =>{
    try{
        const productsData = await ProductModel.find()
        res.status(200).json({
            status: "success",
            productsData
        })
    }catch(err){
        res.status(404).json({
            status: "failure",
            message: err.message
        })
    }
}

const GetProductHandler = async(req, res) =>{
    try{
        const {id} = req.params
        const productData = await ProductModel.findById(id)
        console.log(productData)
        res.status(200).json({
            status: "success",
            productData
        })
    }catch(err){
        res.status(404).json({
            status: "failure",
            message: err.message
        })
    }
}

const DeleteProduct = async(req, res) =>{
    try{
        const {id} = req.params
        const deletedProduct = await ProductModel.findByIdAndDelete(id)
        res.status(200).json({
            status: "success",
            message: `Successfully deleted the product with id ${id}`
        })
    }catch(err){
        res.status(404).json({
            status: "failure",
            message: err.message
        })
    }
}

const EditProduct = async(req, res) =>{
    try{
        const bodyDetails = req.body
        const {id} = req.params
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, bodyDetails)
        res.status(200).json({
            status: "success",
            message: "Successfully updated the product"
        })
    }catch(err){
        res.status(404).json({
            status: "failure",
            message: err.message
        })
    }
}

module.exports = {CreateProductHandler, GetProductsHandler, GetProductHandler, DeleteProduct, EditProduct}