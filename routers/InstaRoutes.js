const express = require('express');
const router = express.Router();
const Insta = require('scraper-instagram');
const InstaClient = new Insta();

router.get('/download', async (req, res)=>{
  try{
    let url = req.query.url;
      url= url.replace('?utm_medium=copy_link','');
      let shortcode= url.split('/');
      shortcode= shortcode[shortcode.length-2];
      await InstaClient.authBySessionId('49024374510%3AEqCrXsT2J9WYE1%3A11');
      const data = await InstaClient.getPost(shortcode);
      const downloadLink= data.contents[0].url;
      res.status(200).json({downloadLink});
  }
  catch(err){
    if(err===401){
      console.log('Invalid Insta SessionId');
      res.status(404).json({error:"Invalid Insta SessionId"});
    } else if(err===429){
      console.log('Too Many Requests');
      res.status(404).json({error:"Too Many Requests"});
    }else{
      console.log(err);
      res.status(404).json(err);
    }
  }
});


module.exports = router;