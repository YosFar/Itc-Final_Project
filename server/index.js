import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDatabase from "./config/mongodb.js"
import ImportData from "./dataimport.routes.js";
import productRoute from "./routes/product.routes.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(cors());


app.use("/api/import", ImportData);
app.use('/api/products', productRoute)
//load all products
app.get("/api/products",(req,res) =>{
    res.json(products)
})

//load single product
app.get("/api/products/id", (req, res) =>{
    const product = products.find((p)=> p._id === req.params.id)
    res.json(product)
})

app.get('/', (req, res) =>{
    res.send("API is running....")
})

const PORT = process.env.PORT
app.listen(PORT, console.log(`server running on ${PORT}`))