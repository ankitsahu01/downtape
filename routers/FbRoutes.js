const express = require('express');
const router = express.Router();
const fbdl = require("fbdl-core");

const nodeFbLogin = require('node-fb-login');

router.get('/', async (req, res)=>{
    try{
        // const {url}= req.query;
        nodeFbLogin.generateAuthURL({
            fbAppID: "401349464841869",
            redirectURI: "downtape.herokuapp.com",
            scopes:["public_profile","email"]
        }).then(URL=>{
            console.log(URL);
            const url = "https://www.facebook.com/zeemusiccompany/videos/531377684265559";
            fbdl.getInfo(url).then((data)=>{
                console.log(data);
                res.status(200).json(data);
            })
        }).catch(error=>{
            console.log(error);
        })
    }catch(err){
        res.status(404).json({error:err.message});
        console.log({error:err.message});
    }
});


module.exports = router;