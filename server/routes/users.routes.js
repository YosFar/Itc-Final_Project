import express from "express";
import asyncHandler from "express-async-handler";
import protect from "../Auth.js";
import User from '../schemaModels/userSchema.js'
import generateToken from "../utils/generateToken.js";

const userRouter = express.Router()

//LOGIN
userRouter.post(
    '/login',
    asyncHandler(async (req, res)=>{
        const {email, passsword} = req.body
        const user = await User.findOne({ email })

        if(user && (await user.matchPassword(password))) {
            res.json( {          
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
            createdAt: user.createdAt,
            })
        } else{
            res.status(401)
            throw new Error("Invalid Email or Password")
        }
    })
)

// PROFILE
userRouter.post(
    '/profile',
    protect,
    asyncHandler( async (req, res) => {
        res.send('User Profile')
    })
)

export default userRouter