const express = require('express');
const router = express.Router();

const fbvid = require('fbvideos');

router.get('/', async (req, res)=>{
    try{
        // const {url}= req.query;
        const video= "https://www.facebook.com/zeemusiccompany/videos/531377684265559";
        const sd= await fbvid.low(video);
        const hd= await fbvid.high(video);
        console.log(sd,hd);
        res.status(200).json({sd:sd.url, hd:hd.url});
    }catch(err){
        res.status(404).json({error:err.message});
        console.log({error:err.message});
    }
});


module.exports = router;