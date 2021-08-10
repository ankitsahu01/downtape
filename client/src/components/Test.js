import React,{ useReducer } from 'react';
import axios from 'axios';
import { initialVideo, reducer } from '../reducers/YoutubeReducer';
import { sToTime, bytesToMb } from './Converters';

const Test = () => {
    const [video, dispatch] = useReducer(reducer, initialVideo);

    const searchVideo = async (e)=>{
        e.preventDefault();
        const res= await axios.get(`/api/youtube/video-requiredInfo?url=${video.url.trim()}`);
        const data= res.data;
        // console.log(data);
        let {title, thumbnail, lengthSeconds} = data;
        dispatch( {type:"details", payload:{title, thumbnail, duration:sToTime(lengthSeconds)}} );
        const formats = data.formats.filter(format=>{
            return format.type === "mp4" && format.hasVideo && format.hasAudio
        });
        // console.log(formats);
        dispatch( {type:"formats", payload:formats} );
        dispatch( { type:"toDownload", payload:{ 'itag':formats[0].itag } } );
    }

    const ShowVideoDetailsContainer=()=>{
        if(!video.formats.length){return ''}
        return(
            <>
            <h2>{video.details.title}</h2>
            <img src={video.details.thumbnail} className="thumbnail" alt={video.details.title} />
            <p>Duration {video.details.duration}</p>
            <form onSubmit={downloadVideo}>
                <select onChange={e=>dispatch({ type:'toDownload', payload:{'itag':e.target.value} })} value={video.toDownload.itag} >
                {
                    video.formats.map((format, index)=>{
                        return(
                            <option key={index} value={format.itag}>
                                {format.type} - {format.qualityLabel} {format.contentLength ? ` - ${bytesToMb(format.contentLength)} MB` : ''}
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

    const downloadVideo = async (e)=>{
        e.preventDefault();
        // console.log(video.toDownload.itag);
        if(process.env.NODE_ENV==="production"){
            window.location.href=`${window.location.href}api/youtube/download?url=${video.url}&itag=${video.toDownload.itag}&clen=${video.toDownload.contentLength}&title=${video.details.title}`;
        }else{
            window.location.href=`http://localhost:5000/api/youtube/download?url=${video.url}&itag=${video.toDownload.itag}&clen=${video.toDownload.contentLength}&title=${video.details.title}`;
        }
    }
    
    return (
        <>
         <div className="container hv-center">
            <h1 className="heading">YouTube Video Downloader</h1>
            <form action="" method="POST" className="s-form" onSubmit={searchVideo}>
                <input type="text" className="url-input" required={true}
                    placeholder="Video URL e.g. https://www.youtube.com/watch?v=wAD9uO9YAQw" 
                        value={video.url} onChange={(e)=>dispatch({type:"url", payload:e.target.value})}
                    />
                <button className="btn green-btn">Search</button>
            </form>
        </div>
        <div className="container">
            <ShowVideoDetailsContainer/>
        </div>
        </>
    )
}

export default Test;
