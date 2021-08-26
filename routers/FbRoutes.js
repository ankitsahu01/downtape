const express = require('express');
const router = express.Router();
// const fbdl = require("fbdl-core");

const axios= require('axios');
const cheerio= require('cheerio');

router.get('/', async (req, res)=>{
    try{
        const url = "https://www.facebook.com/zeemusiccompany/videos/531377684265559";
        const html = await axios.get(url);
        const $ = cheerio.load(html.data);
        
        // console.log(html.data);
        const videoString = $("meta[property='og:video']").attr("content");
        res.status(200).json({videoString, hdata:html.data});

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