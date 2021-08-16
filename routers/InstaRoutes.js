const express = require('express');
const router = express.Router();
const axios = require("axios");
const download = require('image-downloader')
const cheerio = require('cheerio');

const { parse } = require("node-html-parser");

const https = require('https');
const getContentLength= (url)=>{
  console.log(url);
  return new Promise(((resolve, reject) => {
      const request = https.request(url, (response) => {
          console.log(response);
          response.setEncoding('utf8');
          // console.log(response);
          response.on('data', (d)=>{
            // console.log(d);
            const clen= response.headers['content-length'];
            console.log(clen);
            resolve(JSON.parse(clen));
          })

          response.on('error', (error) => {
              throw error;
          });
      });
      request.end();
  }))
}

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
        url= url.replace('?utm_medium=copy_link','');
        
        const r= await getContentLength(url);
        // console.log(r);

        // const data = await getInfo(url);
        // console.log(data);
        
        res.json("ok");
    }catch(err){
        console.log(err);
        res.status(404).send(err.message);
    }
});

module.exports = router;