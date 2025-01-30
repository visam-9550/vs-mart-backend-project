const express = require("express")
const mongoose = require("mongoose")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")
const {PORT, PASSWORD} = process.env
const CartRouter = require("./src/components/Routes/CartRoute")
const ProductsRouter = require("./src/components/Routes/ProductsRoute")
const UserRouter = require("./src/components/Routes/UserRoutes")
app.use(cors()) // In react having one rule same domain to pass the data through api but in Full stcak project having the two domain frontend and backend to pass the data from backend to frontend
                                            // we require cors 
app.use(express.json()) // convert the data coming from server in JSON parse 
app.use("/", UserRouter)
app.use("/", CartRouter)
app.use("/", ProductsRouter)

mongoose.connect(`mongodb+srv://venkatasai:${PASSWORD}@cluster0.as3no.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(() =>{
    app.listen(PORT, () => {console.log(`Successfully connected the server with PORT ${PORT}`)})
    console.log("Successfully connected the mongoDB")
}).catch((err) =>{
    console.log(err.message)
})


