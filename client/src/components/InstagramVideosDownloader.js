import React,{ useState } from 'react';
import {Helmet} from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';
import {Container, Grid} from '@material-ui/core';
import {Button, TextField, Typography} from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import GetAppIcon from '@material-ui/icons/GetApp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

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
  downloadSection:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center'
  },
  seticons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  alignicons: {
    display: 'flex',
    alignItems: 'center',
  }
}));

const InstagramVideosDownloader = () => {
  const [url, setUrl]= useState('');
  const [toggleLoader, setToggleLoader]= useState({ 'display':'none' });
  const classes = useStyles();

  const searchVideo= async (e)=>{
    try{
      e.preventDefault();
      setToggleLoader({ 'display':'block' });
      const res= await axios(`/api/insta/download?url=${url}`);
      const {downloadLink}= res.data;
      let a = document.createElement('a');
      a.href=downloadLink;
      a.target="_blank";
      document.body.appendChild(a);
      setToggleLoader({ 'display':'none' });
      a.click();
      a.remove();
    }catch(err){
      setToggleLoader({ 'display':'none' });
      toast.error("Something Went Wrong. Try Later!");
      console.log(err);
    }
  }

  return (
    <>
      <Helmet>
            <title>Instagram Videos Downloader - DOWNTAPE Free Instagram Downloader Online</title>
            {/* <link rel="canonical" href="https://www.downtape.herokuapp.com/youtube-video-downloader" />
            <meta name="description" content="Download YouTube videos Online Free on DOWNTAPE. We provides you the best YouTube video downloader, In which you can download YouTube videos in mp4"/>
            <meta name="keywords" content="youtube video download, youtube video download online, online youtube video download, free youtube video download, youtube video download by link, youtube video download free, save youtube video download, youtube video download pc, youtube video download link, youtube video download website, how to youtube video download, youtube video download site, youtube video download mp4, youtube video download online free, youtube video downloader, online youtube video downloader, youtube video downloader for pc, youtube video downloader free download, best youtube video downloader, free youtube video downloader, download youtube video, download youtube videos, how to download youtube video, how to download youtube video in laptop, how download youtube video, how to download youtube videos in mobile, download youtube video online, how to download youtube video online, download youtube video online free, how download youtube video online" /> */}
        </Helmet>
        <Container component="main" maxWidth="md">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                Instagram Video Downloader
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
                        placeholder="e.g. https://www.instagram.com/p/CB5d063pwo-/"
                        value={url}
                        onChange={(e)=>setUrl(e.target.value)}
                        />
                         <LinearProgress style={toggleLoader} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.btn}
                        >
                        <GetAppIcon style={{"marginRight":"4px"}}/>
                        Download
                        </Button>
                    </Grid>
                </Grid>
                </form>
            </div>
        </Container>
        <ToastContainer position="top-center" />
    </>
  );
}

export default InstagramVideosDownloader;
