export const initialVideo={
    'toggleLoader':{ 'display':'none' },
    'url': '',
    'toDownload': { 'itag':'', 'contentLength':'' },
    'details': {},
    'formats':[]
}

export const reducer = (video, action) => {
    if(action.type && action.type==="toDownload"){
        const itag= parseInt(action.payload.itag);
        const contentLength= video.formats.filter((format)=>{
            return format.itag===itag
        }).map((format)=>{return format.contentLength})[0];
        video= { ...video, [action.type]:{itag, contentLength:parseInt(contentLength)}}
    }else if(action.type){
        video= { ...video, [action.type]:action.payload };
    }
    return video;
}