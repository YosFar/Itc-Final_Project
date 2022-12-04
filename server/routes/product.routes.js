import express from "express";
import asyncHandler from "express-async-handler";

const productRoute = express.Router()

//GET ALL PRODUCTS
productRoute.get('/', asyncHandler(
    async(req, res) =>{
        const products = await Product.find({})
        res.json(products)
    }
))

//GET ONE PRODUCT
productRoute.get('/:id', asyncHandler(
    async(req, res) =>{
        const products = await Product.findById(req.params.id)
        if (product){
            res.json(products)
        } else{
            res.status(404)
            throw new Error("Product not found")
        }
        
    }
))

export default productRoute