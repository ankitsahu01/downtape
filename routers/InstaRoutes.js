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
        
        InstaClient.authBySessionId('49024374510%3AEqCrXsT2J9WYE1%3A11')
          .then((account) => {
            console.log(account);
            InstaClient.getPost(shortcode).then((post)=>{
              // console.log(post);
              res.status(200).json(post);
            }).catch((err)=>{
              console.log(err);
              res.status(404).json({error:"Something Went Wrong"});
            })
          }).catch(err => console.error(err));

        
        
        // let links = await instagramGetUrl(url);
        // console.log(links)
        // res.json(post);
    }catch(err){
        console.log(err);
        res.status(404).send(err.message);
    }
});

module.exports = router;