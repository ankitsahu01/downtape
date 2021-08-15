const express = require('express');
const router = express.Router();
const axios = require("axios");
const download = require('image-downloader')
const cheerio = require('cheerio');

const { parse } = require("node-html-parser");

const getInfo = async (url) => {
  const html = await axios.get(url);
  const root = parse(html.data);
  // console.log(html);
  

  let caption2=root.querySelector('.Caption')?.text;
  console.log(caption2);

  return html;

  // const $ = cheerio.load(html.data);
  // const videoString = $("meta[property='og:video']").attr("content");
  // const imgString = $("meta[property='og:image']").attr("content");
  // const caption = $("meta[property='og:title']").attr("content");
  // return {videoString, imgString, caption};
};

router.get('/info', async (req, res)=>{
    try{
        let url = req.query.url;
        // url= url.replace('?utm_medium=copy_link','');
        const data = await getInfo(url);
        console.log(data);

        res.json("ok");
    }catch(err){
        console.log(err.message);
        res.status(404).send(err.message);
    }
});

module.exports = router;