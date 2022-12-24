const router = require("express").Router();
const Certificatepage = require("../models/Certificate");

//CREATE Certificates
router.post("/",async (req, res) => {
  const newCertificatepage = new Certificatepage(req.body);
  try{
    const saveCertificatePage = await newCertificatepage.save();
    res.status(200).json(saveCertificatePage);
  }
  catch(error){
    res.status(500).json(error);
  }
});

// UPDATE Certificates
router.put("/:title", async (req, res) => {
  try{
    const certificatepage = await Certificatepage.findById(req.params.title);
    try{
      const updatedCertificatepage = await certificatepage.findByIdAndUpdate(req.params.id, {
        $set: req.body
      },
      { new: true });
      res.status(200).json(updatedCertificatepage);
    }
    catch(err){
      res.status(500).json(err);
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

// Like a certificate
router.post("/:_id/like", async (req, res) => {
  try{
    try{
      const type = req.body.type;
      const counter = type === 'like' ? 1:-1;
      const updatedCertificatepage = await Certificatepage.updateOne({_id:req.params._id},{$inc:{likes_count: counter}},{new:true});
      res.status(200).json(updatedCertificatepage);
    }
    catch(err){
      res.status(500).json(err);
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

// GET Certificate BY IDTITLE
router.get("/:idTitle", async (req,res) => {
  try{
    const certificatepage = await Certificatepage.find({"idTitle": req.params.idTitle});
    res.status(200).json(certificatepage);
  }
  catch(err){
    res.status(500).json(err);
  }
});

//GET ALL Certificate
router.get("/", async (req,res) => {
  try{
    const category = req.query.category;
    const idTitle = req.query.idTitle;
    const limit = req.query.limit;
    let certificatepages;

    let query = {};

    if(category){
      query.category = req.query.category;
    }
    if(idTitle){
      query.idTitle = req.query.idTitle;
    }

    if(limit){
        certificatepages = await Certificatepage.find(query).sort({buildDate:-1}).limit(req.query.limit);
    }
    else{
        certificatepages = await Certificatepage.find(query).sort({buildDate:-1});
    }

    res.status(200).json(certificatepages);
  }
  catch(err){
    res.status(500).json(err); 
  }
});


module.exports = router;