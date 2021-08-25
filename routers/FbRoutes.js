const express = require('express');
const router = express.Router();
const fbdl = require("fbdl-core");

router.get('/getInfo', async (req, res)=>{
  try{
    const {url}= req.query;
    const result= await fbdl.getInfo(url);
    console.log(result);
    res.status(200).json({result});
  }catch(err){
    res.status(404).json({error:err.message});
    console.log({error:err.message});
  }
});


module.exports = router;