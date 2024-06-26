import express from "express"
import cors from "cors"
import { connectDB } from "./Config/db.js"

// config
const app = express()
const port = 4000

// middleware
app.use(cors())
app.use(express.json())

//db connection

connectDB()

app.get("/",(req,res)=>{
res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost: ${port}`)
})

