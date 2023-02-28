const express = require('express')
const auth=require("../controller/contorl1")
const router=express.Router()

const mideware=require("../middleware/auth")
const upload = require("../middleware/multer")
router.post('/signup',upload.single("images"),auth.signup)
router.post('/login',auth.login)

module.exports=router;