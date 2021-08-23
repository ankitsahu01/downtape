const express = require('express');
const router = express.Router();
const axios = require('axios');
const base64 = require('node-base64-image');

const Insta = require('scraper-instagram');
const InstaClient = new Insta();

const {Dropbox} = require('dropbox');
const accessToken = 'JtKUGjuCPFsAAAAAAAAAAWbJANG9xElJmywUq2NtkabBf515_gu9ST9uuV7fMB8d';
const dbx = new Dropbox({ accessToken, axios });

const UploadToDbx= (imgPrivateLink)=>{
  return new Promise( async (resolve, reject)=>{
    try{
      const bufferImage = await base64.encode(imgPrivateLink, {buffer: true});
      const imgName= Date.now()+'_'+parseInt(Math.random()*999999)+'.jpg';
      await dbx.filesUpload({
        path: `/${imgName}`,
        contents: bufferImage
      });
      const sharedLinkObj = await dbx.sharingCreateSharedLinkWithSettings({ 
        path: `/${imgName}`,
      });
      const ShareableLink= sharedLinkObj.result.url;
      resolve(ShareableLink);
    }catch(err){
      if(err.status===409 && err.error.error['.tag']==='shared_link_already_exists'){
      const ShareableLink= err.error.error.shared_link_already_exists.metadata.url;
        resolve(ShareableLink);
      }else{
        console.log(err);
        reject(err);
      }
    }
  });
}

router.get('/info', async (req, res)=>{
    try{
      let url = req.query.url;
      url= url.replace('?utm_medium=copy_link','');
      let shortcode= url.split('/');
      shortcode= shortcode[shortcode.length-2];
      await InstaClient.authBySessionId('49024374510%3AEqCrXsT2J9WYE1%3A11');
      const data = await InstaClient.getPost(shortcode);
      
      const videoLink= data.contents[0].url;
      const imgPrivateLink= data.contents[0].thumbnail;
      const views= data.contents[0].views;
      const {likes, caption, commentCount}= data;
      
      let imgPublicLink= await UploadToDbx(imgPrivateLink);
      imgPublicLink= imgPublicLink.replace("?dl=0","?raw=1");

      res.status(200).json({caption, videoLink, imgPublicLink, views, likes, commentCount});
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


const instagramGetUrl = require("instagram-url-direct")
router.get('/test', async (req, res)=>{
  try{
    let url = req.query.url;
    url= url.replace('?utm_medium=copy_link','');
    const links = await instagramGetUrl(url);
    const videoLink= links.url_list[0];
    console.log('--------------',videoLink,'-------------------')
    res.status(200).json({videoLink});
  }
  catch(err){
    console.log(err);
    res.status(404).json(err);
  }
});


module.exports = router;