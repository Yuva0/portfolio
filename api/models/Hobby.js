const mongoose = require("mongoose");

const HobbySchema = new mongoose.Schema(
  {
    idTitle: {
      type:String,
      required:true,
      unique:true
    },
    title: {
      type:String,
      required:true,
      unique:true
    },
    //1 - low, 10 - very high
    importance:{
      type:Number
    },
    coverImage: {
      type:String
    },
    imageCaption:{
      type:String
    },
    imageAlt: {
      type: String
    },
    content: {
      type:String
    },
    videoUrl:{
      type:String
    },
    likes_count:{
      type:Number
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hobbies",HobbySchema,"Hobbies");