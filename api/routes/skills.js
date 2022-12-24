const router = require("express").Router();
const Skill = require("../models/Skill");

//CREATE Skills
router.post("/",async (req, res) => {
  const newSkill = new Skill(req.body);
  try{
    const saveSkill = await newSkill.save();
    res.status(200).json(saveSkill);
  }
  catch(error){
    res.status(500).json(error);
  }
});

// UPDATE Skill
router.put("/:key", async (req, res) => {
  try{
    const skill = await Skill.findById(req.params.key);
    try{
      const updatedSkill = await skill.findByIdAndUpdate(req.params.id, {
        $set: req.body
      },
      { new: true });
      res.status(200).json(updatedSkill);
    }
    catch(err){
      res.status(500).json(err);
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

// Like a Skill
router.post("/:_id/like", async (req, res) => {
  try{
    try{
      const type = req.body.type;
      const counter = type === 'like' ? 1:-1;
      const updatedSkill = await Skill.updateOne({_id:req.params._id},{$inc:{likes_count: counter}},{new:true});
      res.status(200).json(updatedSkill);
    }
    catch(err){
      res.status(500).json(err);
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

// GET Skill BY Key
router.get("/:idTitle", async (req,res) => {
  try{
    const skill = await Skill.find({"idTitle": req.params.idTitle});
    res.status(200).json(skill);
  }
  catch(err){
    res.status(500).json(err);
  }
});

//GET ALL Skills
router.get("/", async (req,res) => {
  try{
    let skills;

    let query = {};

    if(req.query.category){
      query.category = req.query.category;
    }

    if(req.query.limit){
      skills = await Skill.find(query).sort({importance:-1}).limit(req.query.limit);
    }
    else{
      skills = await Skill.find(query).sort({importance:-1});
    }

    res.status(200).json(skills);
  }
  catch(err){
    res.status(500).json(err); 
  }
});


module.exports = router;