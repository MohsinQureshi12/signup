
const jwt = require('jsonwebtoken')
const secKey = 'shhhh'
const mongoose = require("mongoose")
const users = require("./../model/schema")
// const Image = require("../model/schema")



exports.signup = async (req, res) => {
    try {
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;
        let user = new users({
            name,
            email,
            password,
            image:req.img,
            
        });
        console.log(user);
        if (user) {
            await user.save();
            res.status(200).json({
                message: "user added",
                user,
            });
        }
    }
    catch {
        res.status(500).json({
            message: "Internal server error",
        });
    }
}



exports.login = async (req, res) =>{
    let email = req.body.email;
    let password = req.body.password;



    let login = await users.findOne({ email });
    if (login === null) {
        res.status(401).json({
            message: "User not found",
        })
    }

    else if (login.email === email && login.password === password) {

        {
            jwt.sign({ id: login.id }, secKey, (err, token) => {
                if (token) {
                    res.status(200).json({
                        message: "Login Successfully!",
                        token,
                    });
                }

                else {
                    res.status(401).json({
                        message: "invalid email or password",
                    });
                    
                }
             } )
        }
    }
  
}


exports.Image = async function(req, res){
    let image = req.file.filename;
    let newImage = new users({
      image
    })
    await newImage.save();
    return res.status(200).json({
      message: 'Image Uploaded Successfully........!!!!!'
    })
  }