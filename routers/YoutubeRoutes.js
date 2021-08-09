const express = require('express');
const router = express.Router();
const ytdl = require('ytdl-core');

router.get('/video-requiredInfo', async (req, res)=>{
    try{
        const url= req.query.url;
        const info= await ytdl.getInfo(url);
        const requiredInfo={
            title: info.videoDetails.title,
            thumbnail: info.videoDetails.thumbnails[info.videoDetails.thumbnails.length-1].url,
            lengthSeconds: info.videoDetails.lengthSeconds,
            links: info.formats.map((ele)=>{
                        return({
                            type:ele.container,
                            qualityLabel: ele.qualityLabel,
                            hasVideo: ele.hasVideo,
                            hasAudio: ele.hasAudio,
                            itag: ele.itag,
                        })
                    }),
        };
        res.status(200).json(requiredInfo);
    }catch(err){
        console.log(err.message);
        res.send(404).send("Something Went Wrong");
    }
});

router.get('/download', (req, res)=>{
    try{
        const url= req.query.url;
        const itag= req.query.itag;
        res.header("Content-Disposition", 'attachment; filename="video.mp4"' );
        ytdl(url,{
            filter: format => format.itag==itag
        }).pipe(res);
    }catch(err){
        console.log(err.message);
        res.send(404).send("Something Went Wrong");
    }
});

module.exports = router;