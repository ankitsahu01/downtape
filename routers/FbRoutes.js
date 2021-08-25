const express = require('express');
const router = express.Router();
const fbdl = require("fbdl-core");
const axios = require('axios');

router.get('/', async (req, res)=>{
    try{
        const tokenUrl="https://graph.facebook.com/oauth/access_token?client_id=401349464841869&client_secret=abffa5a8fcce6c9f5285719511a6c9b6&grant_type=client_credentials";
        const tokenObj= await axios.get(tokenUrl);
        const token= tokenObj.data.access_token;
        console.log(token);

        const scrape = require('scrape-fb-ogcache');
        const url = "https://www.facebook.com/zeemusiccompany/videos/531377684265559";
        scrape(url, token, (resp) => {
            console.log(resp);
            const url = "https://www.facebook.com/zeemusiccompany/videos/531377684265559";
            fbdl.getInfo(url).then((data)=>{
                console.log(data);
                res.status(200).json(data);
            }).catch((err)=>{
                console.log(err);
                res.status(404).json(err);
            })
        });
        // res.status(200).json(token);

        // const {url}= req.query;
        // const url = "https://www.facebook.com/zeemusiccompany/videos/531377684265559";
        // const response = await got(url);
		// console.log(response.body);
        // res.status(200).json(response.body);

    }catch(err){
        res.status(404).json({error:err.message});
        console.log({error:err.message});
    }
});

module.exports = router;