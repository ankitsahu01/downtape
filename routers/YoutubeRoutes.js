const express = require('express');
const router = express.Router();
const ytdl = require('ytdl-core');

const https = require('https');
const getContentLength= (url)=>{
    return new Promise(((resolve, reject) => {
        const request = https.request(url, (response) => {
            let clen= response.headers['content-length'];
            resolve(JSON.parse(clen));
            response.on('error', (error) => {
                throw error;
            });
        });
        request.end();
    }))
}

router.get('/video-requiredInfo', async (req, res)=>{
    try{
        const url= req.query.url;
        if( !ytdl.validateURL(url) ){
            return res.status(404).send("Not a valid YouTube URL");    
        }
        const info= await ytdl.getInfo(url);
        const requiredInfo={
            title: info.videoDetails.title,
            thumbnail: info.videoDetails.thumbnails[info.videoDetails.thumbnails.length-1].url,
            lengthSeconds: info.videoDetails.lengthSeconds,
            formats: await Promise.all(info.formats.map(async(format)=>{
                        return {
                            type:format.container,
                            qualityLabel: format.qualityLabel,
                            hasVideo: format.hasVideo,
                            hasAudio: format.hasAudio,
                            itag: format.itag,
                            contentLength: format.contentLength ? format.contentLength : await getContentLength(format.url),
                            url: format.url
                        }
                    })),
        };
        res.status(200).json(requiredInfo);
    }catch(err){
        console.log(err.message);
        res.status(404).send(err.message);
    }
});

router.get('/download', (req, res)=>{
    try{
        const {url,itag, clen}= req.query;
        const title= req.query.title || "video";
        if(!url || !itag){
            return res.status(404).json({error:"Enter URL / Itag"});
        }else if( !ytdl.validateURL(url) ){
            return res.status(404).send("Not a valid YouTube URL");    
        }
        res.header("Content-Disposition", `attachment; filename="${title}.mp4"` );
        res.header('Content-Type', 'video/mp4');
        if(clen){
            res.header('Content-Length', clen);
        }
        ytdl(url,{
            filter: format => format.itag==itag
        }).pipe(res);
    }catch(err){
        console.log(err.message);
        res.status(404).send(err.message);
    }
});

module.exports = router;