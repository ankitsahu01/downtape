import React, {useReducer} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Button, TextField, Typography, Grid} from '@material-ui/core';
import { InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import {ImageList, ImageListItem, ImageListItemBar} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import axios from 'axios';
import { initialVideo, reducer } from '../reducers/YoutubeReducer';
import { sToTime, bytesToMb } from './Converters';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(4),
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
    }
}));

function HomePage() {
    const [video, dispatch] = useReducer(reducer, initialVideo);
    const classes = useStyles();

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
            <Container component="main" maxWidth="md">
            <div className={classes.videoDetailsContainer}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                        <ImageList>
                            <ImageListItem style={{'width':'100%'}}>
                                <img src={video.details.thumbnail} alt={video.details.title} />
                                <ImageListItemBar title={video.details.title} subtitle={<span>Duration: {video.details.duration}</span>} />
                            </ImageListItem>
                        </ImageList>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.downloadDropdownForm}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="quality-dropdown">Quality</InputLabel>
                            <Select
                            labelId="quality-dropdown"
                            value={video.toDownload.itag}
                            label="Quality"
                            onChange={e=>dispatch({ type:'toDownload', payload:{'itag':e.target.value} })}
                            >
                            {
                                video.formats.map((format, index)=>{
                                    return(
                                        <MenuItem key={index} value={format.itag}>
                                            {format.type} - {format.qualityLabel} {format.contentLength ? ` - ${bytesToMb(format.contentLength)} MB` : ''}
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
            window.location.href=`${window.location.href}api/youtube/download?url=${video.url}&itag=${video.toDownload.itag}&clen=${video.toDownload.contentLength}&title=${video.details.title}`;
        }else{
            window.location.href=`http://localhost:5000/api/youtube/download?url=${video.url}&itag=${video.toDownload.itag}&clen=${video.toDownload.contentLength}&title=${video.details.title}`;
        }
    }
    return (
        <>
        <Container component="main" maxWidth="md">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                YouTube Video Downloader
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
                        label="Enter URL"
                        placeholder="e.g. https://www.youtube.com/watch?v=wAD9uO9YAQw"
                        value={video.url}
                        onChange={(e)=>dispatch({type:"url", payload:e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.btn}
                        >
                        Search
                        </Button>
                    </Grid>
                </Grid>
                </form>
            </div>
        </Container>
        <ShowVideoDetailsContainer/>
        </>
    );
}

export default HomePage;