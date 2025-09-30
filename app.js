import express from "express"
import bookRouter from "./routes/bookRoutes.js"
import db_connection from "./database/db_connection.js"
import BookModel from "./models/BookModel.js"
import UserModel from "./models/UserModel.js"
import authRouter from "./routes/authRoutes.js"

export const app = express()
app.get("/", (req, res)=>{
    res.send("Hola API")
})

app.use(express.json())
app.use("/books", bookRouter)
app.use("/auth", authRouter )

try{
    await db_connection.authenticate()
    console.log('conected to database')
    await UserModel.sync()
    console.log('modelo sincronizado correctamente')
    await BookModel.sync()
    console.log('modelo sinconizado correctamente')
    }catch(error){
    console.log(`error:' ${error}`)
    }
     

export const server= app.listen(8000, ()=>{
   console.log('🚀server up in http://localhost:8000/')
})

