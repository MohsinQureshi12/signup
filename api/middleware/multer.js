const express = require("express");
const multer = require("multer");
const path = require("path")
const app = express();
app.use(express.json());
const uploadss = multer({ dest: './uploads' })
app.use(express.static(path.join(__dirname, 'api/uploads')));




const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb( null, './api/uploads');
  },
  filename: function(req, file, cb){
    const i=file.fieldname + "-" + Date.now() + "." + file.originalname+ ".png";
    req.img = i;
    cb( null, file.fieldname + "-" + Date.now() + "." + file.originalname + ".png");
    
  },
})


const uploads = multer({
  storage: storage,
  limits:{
    fieldSize:1024 * 1024 * 3,
  },
})

 module.exports = uploads;