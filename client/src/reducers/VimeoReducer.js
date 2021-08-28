export const initialVideo={
    'toggleLoader':{ 'display':'none' },
    'url': '',
    'toDownload': { 'url':'', 'contentLength':'' },
    'details': {},
    'formats':[]
}

export const reducer = (video, action) => {
    if(action.type && action.type==="toDownload"){
        const url= action.payload.url;
        const contentLength= video.formats.filter((format)=>{
            return format.url===url
        }).map((format)=>{return format.contentLength})[0];
        video= { ...video, [action.type]:{url, contentLength:parseInt(contentLength)}}
    }else if(action.type){
        video= { ...video, [action.type]:action.payload };
    }
    return video;
}