const router = require("express").Router();
const Hobbies = require("../models/Hobby");

//CREATE Hobbies
router.post("/",async (req, res) => {
  const newHobby = new Hobbies(req.body);
  try{
    const saveHobby = await newHobby.save();
    res.status(200).json(saveHobby);
  }
  catch(error){
    res.status(500).json(error);
  }
});

// UPDATE Hobbies
router.put("/:key", async (req, res) => {
  try{
    const hobby = await Hobbies.findById(req.params.key);
    try{
      const updatedHobby = await hobby.findByIdAndUpdate(req.params.id, {
        $set: req.body
      },
      { new: true });
      res.status(200).json(updatedHobby);
    }
    catch(err){
      res.status(500).json(err);
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

// Like a Hobbies
router.post("/:_id/like", async (req, res) => {
  try{
    try{
      const type = req.body.type;
      const counter = type === 'like' ? 1:-1;
      const updatedHobby = await Hobbies.updateOne({_id:req.params._id},{$inc:{likes_count: counter}},{new:true});
      res.status(200).json(updatedHobby);
    }
    catch(err){
      res.status(500).json(err);
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

// GET Hobby BY Key
router.get("/:idTitle", async (req,res) => {
  try{
    const hobby = await Hobbies.find({"idTitle": req.params.idTitle});
    res.status(200).json(hobby);
  }
  catch(err){
    res.status(500).json(err);
  }
});

//GET ALL Hobby
router.get("/", async (req,res) => {
  try{
    let hobbies;

    let query = {};

    if(req.query.category){
      query.category = req.query.category;
    }

    if(req.query.limit){
      hobbies = await Hobbies.find(query).sort({importance:-1}).limit(req.query.limit);
    }
    else{
      hobbies = await Hobbies.find(query).sort({importance:-1});
    }

    res.status(200).json(hobbies);
  }
  catch(err){
    res.status(500).json(err); 
  }
});


module.exports = router;