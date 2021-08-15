const express = require('express');
const router = express.Router();
const axios = require("axios");
const download = require('image-downloader')
const cheerio = require('cheerio');

const { parse } = require("node-html-parser");

async function getPostLink(url) {
  url = url + 'embed' + '/captioned';
  let res = axios.get(url).then(async (response) => {
    const root = parse(response.data);
    let videoLink = getVideoLinkFromHtml(response.data);
    while (videoLink.search("&amp;") != -1) {
      videoLink = videoLink.replace("&amp;", "&");
    }
    let caption =await getCaptionFromHtml(response.data);
    let img = root.querySelector('img.EmbeddedMediaImage').getAttribute("src");
    return {videoLink, caption, img};
  });
  return res;
}

async function getCaptionFromHtml(html) {
  const root = parse(html);
  let caption=root.querySelector('.Caption')?.text;
  if(caption == undefined)
      caption="No caption";
  caption=caption.replace("view all comments","");
  return caption;
}

function getVideoLinkFromHtml(html) {
  let crop = "{\"" + html.substring(html.search("video_url"), html.search("video_url") + 1000);
  crop = crop.substring(0, crop.search(",")) + "}";
  return JSON.parse(crop).video_url;
}

router.get('/test', async (req, res)=>{
    try{
        let url = req.query.url;
        url= url.replace('?utm_medium=copy_link','');
        const data= await getPostLink(url);
        console.log(data);
        res.json(data);
    }catch(err){
        console.log(err.message);
        res.status(404).send(err.message);
    }
});


const getInfo = async (url) => {
  console.log(url);
  const html = await axios.get(url);
  const $ = cheerio.load(html.data);
  const videoString = $("meta[property='og:video']").attr("content");
  const imgString = $("meta[property='og:image']").attr("content");
  const caption = $("meta[property='og:title']").attr("content");
  return {videoString, imgString, caption};
};

router.get('/info', async (req, res)=>{
    try{
        let url = req.query.url;
        // url= url.replace('?utm_medium=copy_link','');
        url= url + 'embed' + '/captioned';
        const data = await getInfo(url);
        console.log(data);
        res.json(data);
        // const {videoString, imgString, caption} = await getInfo(url);
        // const options= { url: imgString, dest: './backend_img' }
        // const resp= await download.image(options);
        // const imgName= resp.filename.replace('backend_img\\','');
        // if (videoString !== undefined) {
        //   res.status(200).json({ videoLink:videoString, imgName, caption });
        // }else{
        //   res.status(404).json({ error: "Invalid Link!" });
        // }
    }catch(err){
        console.log(err.message);
        res.status(404).send(err.message);
    }
});

module.exports = router;