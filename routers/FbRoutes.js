const express = require('express');
const router = express.Router();
const fbdl = require("fbdl-core");

router.get('/getInfo', async (req, res)=>{
  try{
    const {url}= req.query;
    fbdl.getInfo(url)
    .then((data)=>{
        console.log(data);
        res.status(200).json({data});
    }).catch((err)=>{
        res.status(200).json("testing123");
    })
  }catch(err){
    console.log(err);
     res.status(404).json({err})
  }
});


module.exports = router;