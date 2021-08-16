const express = require('express');
const router = express.Router();
const axios = require('axios');
const download = require('image-downloader');

const Insta = require('scraper-instagram');
const InstaClient = new Insta();

const {Dropbox} = require('dropbox');
const fs= require('fs');
const accessToken = 'JtKUGjuCPFsAAAAAAAAAAWbJANG9xElJmywUq2NtkabBf515_gu9ST9uuV7fMB8d';
const dbx = new Dropbox({ accessToken, axios });

const UploadToDbx= (imgName)=>{
  return new Promise((resolve, reject)=>{
    fs.readFile(`./backend_img/${imgName}`, async (err, data)=>{
      try{
        await dbx.filesUpload({
          path: `/${imgName}`,
          contents: data
        });
        const shareObj = await dbx.sharingCreateSharedLinkWithSettings({ 
          path: `/${imgName}`,
        });
        const ShareableLink= shareObj.result.url;
        resolve(ShareableLink);
      }catch(err){
        if(err.status===409 && err.error.error['.tag']==='shared_link_already_exists'){
          resolve(err.error.error.shared_link_already_exists.metadata.url);
        }else{
          console.log(err);
          reject(err);
        }
      }
    });
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

      const imgDwnld= await download.image({ url: imgPrivateLink, dest: './backend_img' });
      const imgName= imgDwnld.filename.replace('backend_img\\','');
      
      let imgPublicLink= await UploadToDbx(imgName);
      imgPublicLink= imgPublicLink.replace("?dl=0","?raw=1");

      fs.unlinkSync(`./backend_img/${imgName}`);
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

module.exports = router;