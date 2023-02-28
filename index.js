const express = require('express')
const multer = require('multer')
const jwt = require('jsonwebtoken')
//const routes = require("./api/routes/auth.routes")
const secKey = 'shhhh'
const app = express("")
app.use(express.json())
// const port = 3000

const user = require('./api/helper/mongoose')
const routes = require('./api/routes/routes')
const connectToMongo = require('./api/helper/mongoose')
connectToMongo()

const cors=require("cors")
const port = 3001;
app.use(cors({
    origin:"http://localhost:3000"
}))


// app.get("/api", (req, res) => {
//     return res.status(200).json({
//       message: "Working",
//     });
//   });



app.use("/api", routes)
app.listen(port, ()=>{
    console.log("Server Working on port", port)
})