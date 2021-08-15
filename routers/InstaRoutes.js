const express = require('express');
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");
const download = require('image-downloader')

const getVideo = async (url) => {
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
        url= url.replace('?utm_medium=copy_link','');
        const {videoString, imgString, caption} = await getVideo(url);
        console.log(videoString, imgString, caption);
        const options= { url: imgString, dest: './backend_img' }
        const resp= await download.image(options);
        const imgName= resp.filename.replace('backend_img\\','');
        if (videoString !== undefined) {
          res.status(200).json({ videoLink:videoString, imgName, caption });
        }else{
          res.status(404).json({ error: "Invalid Link!" });
        }
    }catch(err){
        console.log(err.message);
        res.status(404).send(err.message);
    }
});

module.exports = router;