const router = require("express").Router();
const Coverpage = require("../models/Coverpage");

//CREATE Coverpage
router.post("/",async (req, res) => {
  const newCoverpage = new Coverpage(req.body);
  try{
    const saveCoverPage = await newCoverpage.save();
    res.status(200).json(saveCoverPage);
  }
  catch(error){
    res.status(500).json(error);
  }
});

// UPDATE Coverpage
router.put("/:title", async (req, res) => {
  try{
    const coverpage = await Coverpage.findById(req.params.title);
    try{
      const updatedCoverpage = await coverpage.findByIdAndUpdate(req.params.id, {
        $set: req.body
      },
      { new: true });
      res.status(200).json(updatedCoverpage);
    }
    catch(err){
      res.status(500).json(err);
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

// Like an article
router.post("/:_id/like", async (req, res) => {
  try{
    try{
      const type = req.body.type;
      const counter = type === 'like' ? 1:-1;
      const updatedCoverpage = await Coverpage.updateOne({_id:req.params._id},{$inc:{likes_count: counter}},{new:true});
      res.status(200).json(updatedCoverpage);
    }
    catch(err){
      res.status(500).json(err);
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

// GET Article BY IDTITLE
router.get("/:idTitle", async (req,res) => {
  try{
    const coverpage = await Coverpage.find({"idTitle": req.params.idTitle});
    res.status(200).json(coverpage);
  }
  catch(err){
    res.status(500).json(err);
  }
});

//GET ALL Articles
router.get("/", async (req,res) => {
  try{
    const category = req.query.category;
    const idTitle = req.query.idTitle;
    const limit = req.query.limit;
    let coverpages;

    let query = {};

    if(category){
      query.category = req.query.category;
    }
    if(idTitle){
      query.idTitle = req.query.idTitle;
    }

    if(limit){
      coverpages = await Coverpage.find(query).sort({_id:-1}).limit(req.query.limit);
    }
    else{
        coverpages = await Coverpage.find(query).sort({_id:-1});
    }

    res.status(200).json(coverpages);
  }
  catch(err){
    res.status(500).json(err); 
  }
});


module.exports = router;