import React, {useReducer} from 'react';
import { Helmet } from "react-helmet-async";
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import LinearProgress from '@material-ui/core/LinearProgress';
import Fab from '@material-ui/core/Fab';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { initialVideo, reducer } from '../../reducers/TwitterReducer';
import { sToTime, bytesToMb } from '../Converters';
import TwitterTextContent from './text_contents/TwitterTextContent'

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
    title:{
        color: theme.palette.twitter.main,
    }
}));

const TwitterVideosDownloader=()=> {
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
            const res= await axios.get(`/api/twitter/info?url=${video.url.trim()}`);
            dispatch( {type:"toggleLoader", payload:{'display':'none'}} );
            const data= res.data;
            // console.log(data);
            let {title, thumbnail, duration_ms, formats} = data;
            dispatch( {type:"details", payload:{title, thumbnail, duration:sToTime(duration_ms/1000)}} );
            dispatch( {type:"formats", payload:formats} );
            dispatch( { type:"toDownload", payload:{ 'url':formats[0].url } } );
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
            <Container component="main" maxWidth="md">
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
                            value={video.toDownload.url}
                            label="Video Quality"
                            onChange={e=>dispatch({ type:'toDownload', payload:{'url':e.target.value} })}
                            >
                            {
                                video.formats.map((format, index)=>{
                                    return(
                                        <MenuItem key={index} value={format.url}>
                                            <Box fontFamily="Monospace">  {format.contentLength ? ` ${bytesToMb(format.contentLength)} Mb` : ''} &nbsp;&nbsp; {format.quality} </Box>
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
        if(process.env.NODE_ENV==="production"){
            window.location.href=`${window.location.origin}/api/twitter/download?url=${video.toDownload.url}&clen=${video.toDownload.contentLength}&title=${video.details.title}`;
        }else{
            window.location.href=`http://localhost:5000/api/twitter/download?url=${video.toDownload.url}&clen=${video.toDownload.contentLength}&title=${video.details.title}`;
        }
    }
    return (
        <>
            <Helmet >
                <title>Twitter Videos Downloader - DOWNTAPE Free Twitter Downloader Online</title>
                {/* <link rel="canonical" href="https://www.downtape.herokuapp.com/youtube-video-downloader" />
                <meta name="description" content="Download YouTube videos Online Free on DOWNTAPE. We provides you the best YouTube video downloader, In which you can download YouTube videos in mp4"/>
                <meta name="keywords" content="youtube video download, youtube video download online, online youtube video download, free youtube video download, youtube video download by link, youtube video download free, save youtube video download, youtube video download pc, youtube video download link, youtube video download website, how to youtube video download, youtube video download site, youtube video download mp4, youtube video download online free, youtube video downloader, online youtube video downloader, youtube video downloader for pc, youtube video downloader free download, best youtube video downloader, free youtube video downloader, download youtube video, download youtube videos, how to download youtube video, how to download youtube video in laptop, how download youtube video, how to download youtube videos in mobile, download youtube video online, how to download youtube video online, download youtube video online free, how download youtube video online" /> */}
            </Helmet>
        <Container component="main" maxWidth="md">
            <div className={classes.searchDiv}>
                <Typography component="h1" variant="h4">
                    <span className={classes.title}>Twitter</span> Video Downloader
                </Typography>
                <form className={classes.form} noValidate onSubmit={searchVideo}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={10}>
                        <TextField
                        type="text"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        autoFocus
                        required
                        label="Enter Link"
                        placeholder="e.g. https://twitter.com/i/status/1430466398069743617"
                        value={video.url}
                        onChange={(e)=>dispatch({type:"url", payload:e.target.value})}
                        />
                         <LinearProgress style={video.toggleLoader} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
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
        <TwitterTextContent/>
        <ToastContainer position="top-center" />
        </>
    );
}

export default TwitterVideosDownloader;