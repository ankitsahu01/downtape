export const initialVideo={
    'url': '',
    'itag':'',
    'details': {},
    'formats':[]
}

export const reducer = (video, action) => {
    if(action.type && action.payload){
        video= { ...video, [action.type]:action.payload };
    }
    return video;
}