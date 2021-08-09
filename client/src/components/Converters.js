export const sToTime=(duration)=> {
    let seconds= parseInt(duration % 60);
    let minutes= duration / 60;
    let hours= parseInt(minutes / 60);
    minutes= parseInt(minutes % 60);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return(hours + ":" + minutes + ":" + seconds);
}

export const bytesToMb=(bytes)=>{
    const mb= bytes/1024/1024;
    return mb.toFixed(1);
}