import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoutes.js'
dotenv.config()
import cors from "cors"
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

let port = process.env.PORT || 6000

let app = express()
/* ---- 
app.use(express.json()) :- 
this middleware parses incoming requests with JSON payloads makes the data available in req.body
// without it:
if the client sends JSON data (e.g from a frontend fetch( or Axios), req.body will be undefined
*/
/*---
app.use(cookieParser())
This middleware parses cookies attached to  the client request and makes them available in req.cookies
without it: 
if a request contains cookies , you'd have to manually parse the cookie header string
*/
/*
express.json() -> handles request body (mainly for post/put) requests with json data.
cookieParser() -> handles cookies sent in the HTTp request header

cookies are used for thngs like authentication tokens
JSON body is used for user-submitted data(req.body.email, req.body.password)
*/

app.use(express.json())
app.use(cookieParser())
app.use(cors({
 origin:["http://localhost:5173" , "http://localhost:5174"],
 credentials:true
}))

app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/product",productRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api/order",orderRoutes)




app.listen(port,()=>{
    console.log("Hello From Server")
    connectDb()
})


