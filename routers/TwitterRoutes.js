const express = require('express');
const router = express.Router();
const https = require('https');
const twdl = require('./lib/twitterLib');

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
router.get('/info', (req, res)=>{
    const url= "https://twitter.com/i/status/1430466398069743617";
    twdl.getInfo(url, {}, async(error, info) => {
        try{
            if(error){
                throw error;
            }else{
                const requiredInfo= {
                    title: info.title,
                    thumbnail: info.thumbnail,
                    duration_ms: info.duration_ms,
                    formats: await Promise.all(
                        info.variants.filter((variant)=>{return variant.content_type==="video/mp4"})
                        .map( async (variant)=>{
                            return {
                                'contentLength': await getContentLength(variant.url),
                                ...variant,
                                'quality': variant.url.split('/')[7],
                            }
                        })
                    )
                };
                res.status(200).json({requiredInfo});
            }
        }catch(err){
            res.status(404).json({error:err.message});
            console.log({error:err.message});
        }
    });
});


router.get('/download',(req, res)=>{
    const url= "https://video.twimg.com/ext_tw_video/1430466264145666057/pu/vid/720x1280/sO4MWy-QBeRptEj-.mp4?tag=12"
    https.get(url, async (stream) => {
        const title = "example";
        const clen = await getContentLength(url);
        res.header("Content-Disposition", `attachment; filename="${title}.mp4"` );
        res.header('Content-Type', 'video/mp4');
        res.header('Content-Length', clen);
        stream.pipe(res);
    });
});

module.exports = router;