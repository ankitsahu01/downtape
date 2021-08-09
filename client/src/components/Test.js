import React,{ useState } from 'react';
import axios from 'axios';

const sToTime=(duration)=> {
    let seconds= parseInt(duration % 60);
    let minutes= duration / 60;
    let hours= parseInt(minutes / 60);
    minutes= parseInt(minutes % 60);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return(hours + ":" + minutes + ":" + seconds);
}

const Test = () => {
    const [videoUrl, setVideoUrl] = useState('');
    const [videoDetails, setVideoDetails] = useState(null);
    const [links, setLinks] = useState(null);
    const [itag, setItag] = useState(null);

    const handleSelectOption=(e)=>{
        const itag= e.target.value;
        setItag(itag);
    }
    
    const searchVideoFormSubmit = async (e)=>{
        e.preventDefault();
        const res= await axios.get(`/api/youtube/video-requiredInfo?url=${videoUrl.trim()}`);
        const data= res.data;
        console.log(data);
        setVideoDetails({ title:data.title, thumbnail:data.thumbnail, duration:sToTime(data.lengthSeconds) });
        setLinks(data.links.filter(link=>{
            return link.type === "mp4" && link.hasVideo && link.hasAudio
        }).map(link=>{
            return({ type:link.type, qualityLabel:link.qualityLabel, itag:link.itag })
        })
        )
        if(links){
            setItag(links[0].itag);
        }
    }

    const DownloadVideoForm=()=>{
        if(!links){return ''}
        return(
            <>
            <h2>{videoDetails.title}</h2>
            <img src={videoDetails.thumbnail} className="thumbnail" alt={videoDetails.title} />
            <p>Duration {videoDetails.duration}</p>
            <form onSubmit={DownloadVideoFormSubmit}>
                <select onChange={e=>handleSelectOption(e)} value={itag} >
                {
                    links.map((link, index)=>{
                        return(
                            <option key={index} value={link.itag}>
                                {link.type} - {link.qualityLabel}
                            </option>
                        )
                    })
                }
                </select>
                <button className="btn green-btn">Download</button>
            </form>
            </>
        )
    }

    const DownloadVideoFormSubmit = async (e)=>{
        e.preventDefault();
        console.log(itag);
        window.location.href=`${window.location.href}/api/youtube/download?url=${videoUrl}&itag=${itag}`;
    }
    
    return (
        <>
         <div className="container hv-center">
            <h1 className="heading">YouTube Video Downloader</h1>
            <form action="" method="POST" className="s-form" onSubmit={searchVideoFormSubmit}>
                <input type="text" className="url-input" required={true}
                    placeholder="Video URL e.g. https://www.youtube.com/watch?v=wAD9uO9YAQw" 
                        value={videoUrl} onChange={(e)=>setVideoUrl(e.target.value)}
                    />
                <button className="btn green-btn">Search</button>
            </form>
        </div>
        <div className="container">
            <DownloadVideoForm/>
        </div>
        </>
    )
}

export default Test;
