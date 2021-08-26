const express = require('express');
const router = express.Router();
const videoUrlLink = require('video-url-link');


router.get('/', async (req, res)=>{
    try{
        const url= "https://twitter.com/i/status/1430466398069743617";
        videoUrlLink.twitter.getInfo(url, {}, (error, info) => {
            if (error) {
                console.error(error);
                throw error;
            } else {
                console.log(info.full_text);
                console.log(info.variants);
                res.status(200).json(info);
            }
        });
    }catch(err){
        res.status(404).json({error:err.message});
        console.log({error:err.message});
    }
});

module.exports = router;