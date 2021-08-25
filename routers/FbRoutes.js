const express = require('express');
const router = express.Router();
const fbvd = require('fb-video-downloader');

router.get('/getInfo', async (req, res)=>{
  try{
    const {url}= req.query;
    const data= await fbvd.getInfo(url);
    // console.log(data);
    const {hd, sd}= data.download;
    const {thumb, title}= data;
    res.status(200).json({hd, sd, thumb, title});
  }catch(err){
    console.log(err);
     res.status(404).json({err})
  }
});


module.exports = router;