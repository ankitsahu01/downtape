const express = require('express');
const router = express.Router();
const twitterGetUrl = require("twitter-url-direct")

router.get('/', async (req, res)=>{
    try{
        const url= "https://twitter.com/i/status/1430466398069743617";
        const result= await twitterGetUrl(url);
		console.log(result);
        res.status(200).json(result);
    }catch(err){
        res.status(404).json({error:err.message});
        console.log({error:err.message});
    }
});

module.exports = router;