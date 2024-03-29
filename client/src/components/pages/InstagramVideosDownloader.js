import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LinearProgress from '@material-ui/core/LinearProgress';
import GetAppIcon from '@material-ui/icons/GetApp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DownloaderPageContent from './text_contents/DownloaderPageContent';

const useStyles = makeStyles((theme) => ({
  searchDiv: {
      marginTop: theme.spacing(7),
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
  },
  igTitle: {
    backgroundColor: theme.palette.secondary.main,
    background: theme.palette.instagram.main,
    backgroundSize: '100%',
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },
}));

const InstagramVideosDownloader = () => {
  const [url, setUrl]= useState('');
  const [toggleLoader, setToggleLoader]= useState({ 'display':'none' });
  const classes = useStyles();

  const downloadSteps = [
    "Copy the URL of the video which you need to download.",
    "Paste URL in the search field.",
    "Click the “Download” button to start downloading the file.",
  ];
  const AboutDownloaderDescription=`DownTape Instagram video downloader provides fastest service to download
  videos in mp4, mp3, SQ, HD, Full HD quality from Instagram! For more
  convenient viewing on a large screen video can be saved in high
  quality. To watch videos on Android or iOS phones the medium
  quality will be enough.`;

  const searchVideo= async (e)=>{
    try{
      e.preventDefault();
      if(url === ""){
        toast.error("Please Enter Link!");
        return;
      }
      setToggleLoader({ 'display':'block' });
      const res= await axios(`/api/insta/getLink?url=${url}`);
      let {downloadLink}= res.data;
      downloadLink= encodeURIComponent(downloadLink);
      if(process.env.NODE_ENV==="production"){
        window.location.href=`${window.location.origin}/api/insta/download?url=${downloadLink}`;
      }else{
          window.location.href=`http://localhost:5000/api/insta/download?url=${downloadLink}`;
      }
      setToggleLoader({ 'display':'none' });
      setUrl('');
    }catch(err){
      setToggleLoader({ 'display':'none' });
      toast.error("Something Went Wrong. Try Later!");
      console.log(err.message);
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
            <div className={classes.searchDiv}>
                <Typography component="h1" variant="h4">
                  <span className={classes.igTitle}>Instagram</span> Video Downloader
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
        <DownloaderPageContent
        title="Instagram"
        img="instagram.webp"
        downloadSteps={downloadSteps}
        description={AboutDownloaderDescription}
      />
        <ToastContainer position="top-center" />
    </>
  );
}

export default InstagramVideosDownloader;
