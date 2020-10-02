const express = require('express')
const app = express()
const morgan =require('morgan')

const postRoutes = require('./routes/post.js')

const myOwnmiddleware = (req,res,next) =>{
    console.log("middleWare Applied")
    next()
}

app.use(morgan("dev"))
app.use(myOwnmiddleware)

app.use("/", postRoutes);

const port = 3000
app.listen(port)