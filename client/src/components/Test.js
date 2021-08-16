import React,{ useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [url, setUrl]= useState('https://www.instagram.com/p/CB5d063pwo-/');
  const [data, setData]= useState({ videoLink: '', imgLink: '', caption: '' });

  const searchVideo= async ()=>{
    try{
      

      // const res= await axios(`/api/insta/info?url=${url}`);
      // let {videoLink, imgName, caption}= res.data;
      // console.log("IMG Name "+imgName);
      // let imgLink= `http://localhost:5000/img/${imgName}`;
      // if(process.env.NODE_ENV==="production"){
      //   imgLink= `https://downtape.herokuapp.com/img/${imgName}`;
      // }
      // setData({videoLink, imgLink, caption});
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
