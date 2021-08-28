const express = require('express');
const router = express.Router();
const axios = require('axios');
// const contentDisposition = require('content-disposition');

router.get('/', async (req, res)=>{
    try{
        const url= "https://www.dailymotion.com/video/x3mgzrl";
        const result= await axios.get(url);
        res.status(200).send(result.data);
    }catch(err){
        console.log(err.message);
        res.status(404).json(err.message);
    }
});


// router.get('/download',(req, res)=>{
//     const {url, clen, title}= req.query;
//     https.get(url, (stream) => {
//         res.header("Content-Disposition", contentDisposition(title+'.mp4'));
//         res.header('Content-Type', 'video/mp4');
//         res.header('Content-Length', clen);
//         stream.pipe(res);
//     });
// });

module.exports = router;