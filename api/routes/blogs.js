const router = require("express").Router();
const Blogpage = require("../models/Blog");

//CREATE Blog
router.post("/",async (req, res) => {
  const newBlogpage = new Blogpage(req.body);
  try{
    const saveBlogPage = await newBlogpage.save();
    res.status(200).json(saveBlogPage);
  }
  catch(error){
    res.status(500).json(error);
  }
});

// UPDATE Blog
router.put("/:title", async (req, res) => {
  try{
    const blogPage = await Blogpage.findById(req.params.title);
    try{
      const updatedBlogpage = await blogPage.findByIdAndUpdate(req.params.id, {
        $set: req.body
      },
      { new: true });
      res.status(200).json(updatedBlogpage);
    }
    catch(err){
      res.status(500).json(err);
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

// Like a blog
router.post("/:_id/like", async (req, res) => {
  try{
    try{
      const type = req.body.type;
      const counter = type === 'like' ? 1:-1;
      const updatedBlogpage = await Blogpage.updateOne({_id:req.params._id},{$inc:{likes_count: counter}},{new:true});
      res.status(200).json(updatedBlogpage);
    }
    catch(err){
      res.status(500).json(err);
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

// GET Blog BY IDTITLE
router.get("/:idTitle", async (req,res) => {
  try{
    const blogpage = await Blogpage.find({"idTitle": req.params.idTitle});
    res.status(200).json(blogpage);
  }
  catch(err){
    res.status(500).json(err);
  }
});

//GET ALL Blog
router.get("/", async (req,res) => {
  try{
    const category = req.query.category;
    const idTitle = req.query.idTitle;
    const limit = req.query.limit;
    let blogpages;

    let query = {};

    if(category){
      query.category = req.query.category;
    }
    if(idTitle){
      query.idTitle = req.query.idTitle;
    }

    if(limit){
        blogpages = await Blogpage.find(query).sort({buildDate:-1}).limit(req.query.limit);
    }
    else{
        blogpages = await Blogpage.find(query).sort({buildDate:-1});
    }

    res.status(200).json(blogpages);
  }
  catch(err){
    res.status(500).json(err); 
  }
});


module.exports = router;