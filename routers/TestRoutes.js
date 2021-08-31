const express = require('express');
const router = express.Router();
// const contentDisposition = require('content-disposition');
const scdl = require('soundcloud-downloader').default;

router.get('/', async (req, res)=>{
    try{
        const {url}= req.query;
        const result= await scdl.getInfo(url);
        res.status(200).json(result);
        // scdl.download(url).then(stream=>{
        //     // res.header('Content-Type', 'video/mp4');
        //     res.header("Content-Disposition", contentDisposition('sample123.mp3'));
        //     stream.pipe(res);
        // });
    }catch(err){
        console.log(err.message);
        res.status(404).json(err.message);
    }
});

module.exports = router;