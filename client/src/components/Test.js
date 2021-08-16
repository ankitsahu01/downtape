import React,{ useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [url, setUrl]= useState('https://www.instagram.com/p/CB5d063pwo-/');
  const [data, setData]= useState({
    caption: '',
    videoLink: '',
    imgPublicLink: '',
    views: '',
    likes: '',
    commentCount: ''
  });

  const searchVideo= async ()=>{
    try{
      const res= await axios(`/api/insta/info?url=${url}`);
      let {caption, videoLink, imgPublicLink, views, likes, commentCount}= res.data;
      setData({caption, videoLink, imgPublicLink, views, likes, commentCount});
    }catch(err){
      console.log(err.message);
    }
  }

  return (
    <>
     <h1>Testing Insta</h1>
     <input type="text" value={url} onChange={(e)=>setUrl(e.target.value)} placeholder="Enter Insta video url" />
     <br/>
     <button onClick={searchVideo}>Search</button>
     <br/>
     {
       data.videoLink ? 
        <>
        <img src={data.imgPublicLink} style={{'width':'300px'}} /><br/>
        <p>{data.caption}</p>
        <p>Views: {data.views}</p>
        <p>Likes: {data.likes}</p>
        <p>Comments: {data.commentCount}</p>
        <a href={data.videoLink}>Download</a>
        </>
       : ''
     }
    </>
  );
}

export default Test;
