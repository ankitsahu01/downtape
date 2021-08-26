const express = require('express');
const router = express.Router();
// const fbdl = require("fbdl-core");

router.get('/', async (req, res)=>{
    try{
        // const {url}= req.query;
        // const url = "https://www.facebook.com/zeemusiccompany/videos/531377684265559";
        // const response = await fbdl.getInfo(url);
		// console.log(response.body);
        // res.status(200).json(response.body);
    }catch(err){
        res.status(404).json({error:err.message});
        console.log({error:err.message});
    }
});

module.exports = router;