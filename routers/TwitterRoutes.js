const express = require('express');
const router = express.Router();
const videoUrlLink = require('video-url-link');

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

router.get('/', (req, res)=>{
    const url= "https://twitter.com/i/status/1430466398069743617";
    videoUrlLink.twitter.getInfo(url, {}, async(error, info) => {
        try{
            if(error){
                throw error;
            }else{
                const requiredInfo= {
                    title: info.full_text,
                    formats: await Promise.all(
                        info.variants
                        .filter((variant)=>{return variant.content_type==="video/mp4"})
                        .map( async (variant)=>{
                            return {
                                'contentLength': await getContentLength(variant.url),
                                ...variant
                            }
                        })
                    )
                };
                res.status(200).json({ requiredInfo});
            }
        }catch(err){
            res.status(404).json({error:err.message});
            console.log({error:err.message});
        }
    });
});

module.exports = router;