const express = require('express');
const router = express.Router();
const axios = require("axios");
const download = require('image-downloader')
const cheerio = require('cheerio');
const { parse } = require("node-html-parser");

const Insta = require('scraper-instagram');
const InstaClient = new Insta();

// const instagramGetUrl = require("instagram-url-direct")
router.get('/info', async (req, res)=>{
    try{
        let url = req.query.url;
        url= url.replace('?utm_medium=copy_link','');
        let shortcode= url.split('/');
        shortcode= shortcode[shortcode.length-2];
        InstaClient.getPost(shortcode)
          .then(post => console.log(post))
          .catch(err => console.error(err));

        // let links = await instagramGetUrl(url);
        // console.log(links)
        res.json("ok");
    }catch(err){
        console.log(err);
        res.status(404).send(err.message);
    }
});

module.exports = router;