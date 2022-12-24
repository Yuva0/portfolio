const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema(
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
    //1 - low
    importance:{
      type:Number
    },
    coverImage: {
      type:String
    },
    rating:{
      type:Number
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
    category: {
      type:Array
    },
    likes_count:{
      type:Number
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Skill",SkillSchema,"Skills");