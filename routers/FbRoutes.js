const express = require('express');
const router = express.Router();
const fbdl = require("fbdl-core");
const axios = require('axios');
const puppeteer = require('puppeteer');

router.get('/', async (req, res)=>{
    try{
        const browser = await puppeteer.launch({
            'args' : [
              '--no-sandbox',
              '--disable-setuid-sandbox'
            ]
        });
        const page = await browser.newPage();
        await page.setViewport({ width: 1024, height: 480 });

        await page.goto('https://www.facebook.com/zeemusiccompany/videos/531377684265559', { 'waitUntil':'load'});
        
        const data = await page.content();
        await browser.close();

        // const {url}= req.query;
        // const url = "https://www.facebook.com/zeemusiccompany/videos/531377684265559";
        // const response = await fbdl.getInfo(url);
		// console.log(response.body);
        // res.status(200).json(response.body);

        res.status(200).json(data);
    }catch(err){
        res.status(404).json({error:err.message});
        console.log({error:err.message});
    }
});

module.exports = router;