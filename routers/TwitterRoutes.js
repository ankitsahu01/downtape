const express = require('express');
const router = express.Router();
const https = require('https');
const contentDisposition = require('content-disposition');
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
    const {url}= req.query;
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
                res.status(200).json(requiredInfo);
            }
        }catch(err){
            console.log(err.message);
            if(err.message==="twitter API error"){
                res.status(404).json("Not a valid twitter URL!");
            }else{
                res.status(404).json(err.message);
            }
        }
    });
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