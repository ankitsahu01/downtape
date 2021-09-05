import React, {useReducer} from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Container, Grid} from '@material-ui/core';
import {Button, TextField, Typography} from '@material-ui/core';
import { InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import {ImageList, ImageListItem, ImageListItemBar} from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import Fab from '@material-ui/core/Fab';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { initialVideo, reducer } from '../../reducers/YoutubeReducer';
import { sToTime, bytesToMb } from '../Converters';
import YoutubeTextContent from './text_contents/YoutubeTextContent';

const useStyles = makeStyles((theme) => ({
    searchDiv: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    btn: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(1.9),
    },
    videoDetailsContainer: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(4),
    },
    formControl: {
        margin: theme.spacing(1),
    },
    downloadDropdownForm:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center'
    },
    ytTitle: {
        color: theme.palette.youtube.secondary,
    }
}));

const YoutubeVideosDownloader=()=> {
    const [video, dispatch] = useReducer(reducer, initialVideo);
    const classes = useStyles();

    const searchVideo = async (e)=>{
        try{
            e.preventDefault();
            if(video.url === ""){
                toast.error("Please Enter Link!");
                return;
            }
            dispatch( {type:"toggleLoader", payload:{'display':'block'}} );
            const res= await axios.get(`/api/youtube/info?url=${video.url.trim()}`);
            dispatch( {type:"toggleLoader", payload:{'display':'none'}} );
            const data= res.data;
            // console.log(data);
            let {title, thumbnail, lengthSeconds} = data;
            dispatch( {type:"details", payload:{title, thumbnail, duration:sToTime(lengthSeconds)}} );
            const formats = data.formats.filter(format=>{
                return format.hasVideo && format.hasAudio
            });
            // console.log(formats);
            dispatch( {type:"formats", payload:formats} );
            dispatch( { type:"toDownload", payload:{ 'itag':formats[0].itag } } );
            const sr_anchor= document.querySelector('#search-result');
            sr_anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }catch(err){
            dispatch( {type:"toggleLoader", payload:{'display':'none'}} );
            if(err.response.status===404){
                toast.error(err.response.data);
                // console.log(err.response.data);
            }else{
                toast.error("Something Went Wrong, Try Later.");
            }
        }
    }

    const ShowVideoDetailsContainer=()=>{
        if(!video.formats.length){return ''}
        return(
            <>
            <Container component="main" maxWidth="md" id="search-result">
            <div className={classes.videoDetailsContainer}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                        <ImageList>
                            <ImageListItem style={{'width':'100%'}}>
                                <img src={video.details.thumbnail} alt={video.details.title} />
                                <ImageListItemBar title={video.details.title} subtitle={<span>{video.details.duration}</span>} />
                            </ImageListItem>
                        </ImageList>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.downloadDropdownForm}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="quality-dropdown">Video Quality</InputLabel>
                            <Select
                            labelId="quality-dropdown"
                            value={video.toDownload.itag}
                            label="Video Quality"
                            onChange={e=>dispatch({ type:'toDownload', payload:{'itag':e.target.value} })}
                            >
                            {
                                video.formats.map((format, index)=>{
                                    return(
                                        <MenuItem key={index} value={format.itag}>
                                          <Box fontFamily="Monospace"> {format.qualityLabel} {format.contentLength ? ` - ${bytesToMb(format.contentLength)} Mb` : ''}</Box>
                                        </MenuItem>
                                    )
                                })
                            }
                            </Select>
                        </FormControl>
                        <Fab
                        variant="extended"
                        size="small"
                        color="secondary"
                        aria-label="download"
                        onClick={downloadVideo}
                        className={classes.btn}
                        >
                        <GetAppRoundedIcon className={classes.extendedIcon} />
                        Download
                        </Fab>
                    </Grid>
                </Grid>
            </div>
            </Container>
            </>
        );
    }

    const downloadVideo = async (e)=>{
        e.preventDefault();
        // console.log(video.toDownload.itag);
        if(process.env.NODE_ENV==="production"){
            window.location.href=`${window.location.origin}/api/youtube/download?url=${video.url}&itag=${video.toDownload.itag}&clen=${video.toDownload.contentLength}&title=${video.details.title}`;
        }else{
            window.location.href=`http://localhost:5000/api/youtube/download?url=${video.url}&itag=${video.toDownload.itag}&clen=${video.toDownload.contentLength}&title=${video.details.title}`;
        }
    }
    return (
        <>
            <Helmet>
                <title>YouTube Videos Downloader - DOWNTAPE Free YouTube Downloader Online</title>
                <link rel="canonical" href="https://www.downtape.herokuapp.com/youtube-video-downloader" />
                <meta name="description" content="Download YouTube videos Online Free on DOWNTAPE. We provides you the best YouTube video downloader, In which you can download YouTube videos in mp4"/>
                {/* <meta name="keywords" content="youtube video download, youtube video download online, online youtube video download, free youtube video download, youtube video download by link, youtube video download free, save youtube video download, youtube video download pc, youtube video download link, youtube video download website, how to youtube video download, youtube video download site, youtube video download mp4, youtube video download online free, youtube video downloader, online youtube video downloader, youtube video downloader for pc, youtube video downloader free download, best youtube video downloader, free youtube video downloader, download youtube video, download youtube videos, how to download youtube video, how to download youtube video in laptop, how download youtube video, how to download youtube videos in mobile, download youtube video online, how to download youtube video online, download youtube video online free, how download youtube video online" /> */}
            </Helmet>
            <Container component="main" maxWidth="md">
            <div className={classes.searchDiv}>
                <Typography component="h1" variant="h4">
                  <span className={classes.ytTitle}>YouTube</span> Video Downloader
                </Typography>
                <form className={classes.form} noValidate onSubmit={searchVideo}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={9}>
                        <TextField
                        type="text"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        autoFocus
                        required
                        label="Enter Link"
                        placeholder="e.g. https://www.youtube.com/watch?v=wAD9uO9YAQw"
                        value={video.url}
                        onChange={(e)=>dispatch({type:"url", payload:e.target.value})}
                        />
                         <LinearProgress style={video.toggleLoader} />
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.btn}
                        >
                        Get Video
                        </Button>
                    </Grid>
                </Grid>
                </form>
            </div>
        </Container>
        <ShowVideoDetailsContainer/>
        <YoutubeTextContent/>
        <ToastContainer position="top-center" />
        </>
    );
}

export default YoutubeVideosDownloader;