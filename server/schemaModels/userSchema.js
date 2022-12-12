import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const userSchema = mongoose.Schema({
    name:{
        type: String,
        // require: true
    },
    password:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    isAdmin:{
        type: Boolean,
        // require: true,
        default: false

    }
},
{
    timestamps: true
})

//Login
userSchema.methods.matchPassword = async (enterPassword) =>{
    return await bcrypt.compare(enterPassword, this.password);
};


const User = mongoose.model("User", userSchema)

export default User