const mongoose = require("mongoose");

const MottoSchema = new mongoose.Schema(
  {
    motto: {
      type:String,
      required:true,
      unique:true
    },
    author: {
      type:String,
      required:true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Motto",MottoSchema,"Motto");