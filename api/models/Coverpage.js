const mongoose = require("mongoose");

const CoverPageSchema = new mongoose.Schema(
  {
    title: {
      type:String,
      required:true,
      unique:true
    },
    idTitle: {
      type:String,
      required:true,
      unique:true
    },
    description: {
      type: String
    },
    content: {
      type:String
    },
    coverImage:{
      type:String
    },
    imageCaption:{
      type:String
    },
    imageAlt:{
      type:String
    },
    videoUrl:{
      type:String
    },
    authors:{
      type:Array
    },
    category:{
      type:Array
    },
    buildDate:{
      type:Date
    },
    // 1 - short, 2 - medium, 3 - detailed
    durationType:{
      type:Number
    },
    duration:{
      type:Number
    },
    likes_count:{
      type:Number
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Coverpage",CoverPageSchema,"Coverpage");