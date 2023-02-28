const mongoose = require("mongoose");
const Schema  = mongoose.Schema;
const User = new Schema({
  name : {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  image: {
    type: String,
 
  }
});
const Models = mongoose.model("User", User);
module.exports = Models;