import express from 'express'
import User from '../schemaModels/userSchema.js'
import users from '../data/users.js'
import Product from '../schemaModels/productSchema.js'
import products from '../data/products.js'

const ImportData  = express.Router()

ImportData.post('/user', async (req, res) =>{
    await User.remove({})

    const importUser =  await User.insertMany(users/* this needs to be from the database */)
    res.send({importUser})
})

ImportData.post('/product', async (req, res) =>{
    await Product.remove({})

    const importProducts =  await Product.insertMany(products/* this needs to be from the database */)
    res.send({importProducts})
})

export default ImportData