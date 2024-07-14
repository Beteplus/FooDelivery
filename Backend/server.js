import express from "express"
import cors from "cors"
import { connectDB } from "./Config/db.js"
import foodRouter from "./Routes/FoodRoute.js"

// config
const app = express()
const port = 3000

// middleware
app.use(cors())
app.use(express.json())

//db connection

connectDB();

//api endpoint
app.use("/api/food",foodRouter)
app.use('/images',express.static("uploads"))


app.get("/",(req,res)=>{
res.send("API Working")
})

app.listen(port,()=>{
console.log(`Server is running on http://localhost:${port}`);
})

