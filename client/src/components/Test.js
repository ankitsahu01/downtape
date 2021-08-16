import React,{ useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [url, setUrl]= useState('https://www.instagram.com/p/CB5d063pwo-/');
  const [data, setData]= useState({ videoLink: '', imgLink: '', caption: '' });

  const searchVideo= async ()=>{
    try{
      const res= await axios(`/api/insta/info?url=${url}`);
      let {videoLink, imgName, caption}= res.data;
      console.log("IMG Name "+imgName);
      let imgLink= `http://localhost:5000/img/${imgName}`;
      if(process.env.NODE_ENV==="production"){
        imgLink= `https://downtape.herokuapp.com/img/${imgName}`;
      }
      setData({videoLink, imgLink, caption});
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
     <video controls poster="https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/e35/226533970_991515171608290_8124624967778992359_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=XHVBp88-EC8AX__BsGx&edm=AABBvjUBAAAA&ccb=7-4&oh=2e676b12c8551aa25a75c54216fca25c&oe=611C8D9B&_nc_sid=83d603">
       <source src="https://scontent-iad3-1.cdninstagram.com/v/t50.2886-16/10000000_787499208591130_9223319361261511444_n.mp4?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=jAisvksF53EAX-QxCoB&edm=AABBvjUBAAAA&ccb=7-4&oe=611CF10B&oh=e93c55f9a9923216215a98ce49f5683b&_nc_sid=83d603" type="video/mp4" />
     </video>
     <img src="https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/e35/226533970_991515171608290_8124624967778992359_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=XHVBp88-EC8AX__BsGx&edm=AABBvjUBAAAA&ccb=7-4&oh=2e676b12c8551aa25a75c54216fca25c&oe=611C8D9B&_nc_sid=83d603" />
     <br/>
     {
       data.videoLink ? 
        <>
        <img src={data.imgLink} style={{'width':'300px'}} /><br/>
        <p>{data.caption}</p>
        <a href={data.videoLink}>Download</a>
        </>
       : ''
     }
    </>
  );
}

export default Test;
