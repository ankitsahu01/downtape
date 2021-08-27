const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res)=>{
    const {url}= req.query;
    try{
        const result= await axios.get(url);
        console.log(result.data);
        res.status(200).json(result.data);
        // res.status(200).json("Test Mode");
    }catch(err){
        console.log(err.message);
        res.status(404).json(err.message);
    }
});


module.exports = router;