const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');
const getVideoId = require('get-video-id');
const contentDisposition = require('content-disposition');
const https = require('https');

const getContentLength= (url)=>{
    return new Promise(((resolve, reject) => {
        const request = https.request(url, (response) => {
            const clen= response.headers['content-length'];
            resolve(JSON.parse(clen));
            response.on('error', (error) => {
                throw error;
            });
        });
        request.end();
    }))
}

const getVideoData = (html)=>{
    const info = { 'title':'', 'thumbnail':'', 'duration_sec':'', 'formats':'' };
    const $= cheerio.load(html);

    info.title= $('title').text();
    if(info.title.toLowerCase()==="private video on vimeo"){
        throw new Error("This is a Private video!");
    }
    
    const firstScript= $('body').find('script').first().html();
    let thumbnail= firstScript.substring(firstScript.indexOf('thumb.src'), firstScript.indexOf('?'));
    thumbnail= thumbnail.replace('thumb.src =','');
    thumbnail= thumbnail.replace(/"/g, '');
    info.thumbnail= thumbnail.trim();

    const lastScript= $('body').find('script').last().html();
    let formats= lastScript.substring(lastScript.indexOf('"progressive":[{'), lastScript.indexOf('}]},'));
    formats= formats.replace(`"progressive":`,'');
    formats= formats+"}]";
    info.formats= JSON.parse(formats);

    let duration= lastScript.substring(lastScript.indexOf('"duration"'));
    duration= duration.substring(0, duration.indexOf(','));
    duration= duration.replace(/duration|"|:/g,'');
    info.duration_sec= parseInt(duration);

    return info;
}

router.get('/info', async (req, res)=>{
    try{
        const {url}= req.query;
        const { id } = getVideoId(url);
        const newUrl= "https://player.vimeo.com/video/"+id;
        const html= await axios.get(newUrl);
        const info= getVideoData(html.data);

        info.formats= await Promise.all(info.formats.map( async (format)=>{
            return{
                ...format,
                'contentLength': await getContentLength(format.url)
            }
        }));

        res.status(200).json(info);
    }catch(err){
        if(err.response && err.response.status===404){
            console.log("Not a Valid URL!");
            res.status(404).send("Not a Valid URL!");
        }else{
            console.log(err.message);
            res.status(404).json(err.message);
        }

    }
});

router.get('/download',(req, res)=>{
    const {url, clen, title}= req.query;
    https.get(url, (stream) => {
        res.header("Content-Disposition", contentDisposition(title+'.mp4'));
        res.header('Content-Type', 'video/mp4');
        res.header('Content-Length', clen);
        stream.pipe(res);
    });
});

module.exports = router;