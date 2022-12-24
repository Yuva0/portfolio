const router = require("express").Router();
const Motto = require("../models/Motto");

//CREATE MOTTO
router.post("/",async (req, res) => {
  const newMotto = new Motto(req.body);
  try{
    const saveMotto = await newMotto.save();
    res.status(200).json(saveMotto);
  }
  catch(error){
    res.status(500).json(error);
  }
});

// UPDATE MOTTO
router.put("/", async (req, res) => {
  try{
    try{
      const updatedMotto = await Motto.find({});
      const saveMotto = await updatedMotto.save();
      res.status(200).json(saveMotto);
    }
    catch(err){
      res.status(500).json(err);
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

// GET MOTTO BY IDTITLE
router.get("/:quote", async (req,res) => {
  try{
    const motto = await Motto.find({"motto": req.params.motto});
    res.status(200).json(motto);
  }
  catch(err){
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try{
    const motto = await Motto.find().sort({_id:-1});
    res.status(200).json(motto);
  }
  catch(err){
    res.status(500).json(err); 
  }
});

module.exports = router;