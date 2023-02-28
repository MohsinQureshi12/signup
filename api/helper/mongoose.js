const mongoose = require("mongoose");
// const mongodb = require("mongodb").MongoClient;
const mongolink ="mongodb+srv://mohsanqureshi2000:wDkIS9CaNFc8rv1P@cluster0.412o40c.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
const connectToMongo = (req, res) => {
  try {
    mongoose.connect(mongolink, () => {
      console.log("Connected to Mongo Successfully");
    });
  } catch (error) {
    return res.status(404).json({
      message: "Check your internet connection",
    });
  }
};
module.exports = connectToMongo;