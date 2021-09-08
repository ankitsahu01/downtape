import { useReducer } from "react";
import { Helmet } from "react-helmet-async";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initialVideo, reducer } from "../../reducers/VimeoReducer";
import { sToTime } from "../Converters";
import DownloaderPageContent from "./text_contents/DownloaderPageContent";
import TwitterVimeoVideoSearchResult from "./text_contents/TwitterVimeoVideoSearchResult";

const useStyles = makeStyles((theme) => ({
  searchDiv: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  btn: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1.9),
  },
  title: {
    color: theme.palette.primary.light,
  },
}));

const VimeoVideosDownloader = () => {
  const [video, dispatch] = useReducer(reducer, initialVideo);
  const classes = useStyles();

  const downloadSteps = [
    "Copy the URL of the video which you need to download.",
    "Paste URL in the search field and click “Get Video”.",
    "Choose the Video Quality that you want to Download.",
    "Click the “Download” button to start downloading the file.",
  ];
  const AboutDownloaderDescription = `DownTape Vimeo video downloader provides fastest service to download
      videos in mp4, mp3, SQ, HD, Full HD quality from Vimeo! For more
      convenient viewing on a large screen video can be saved in high
      quality. To watch videos on Android or iOS phones the medium
      quality will be enough.`;

  const searchVideo = async (e) => {
    try {
      e.preventDefault();
      if (video.url === "") {
        toast.error("Please Enter Link!");
        return;
      }
      dispatch({ type: "toggleLoader", payload: { display: "block" } });
      const res = await axios.get(`/api/vimeo/info?url=${video.url.trim()}`);
      dispatch({ type: "toggleLoader", payload: { display: "none" } });
      const data = res.data;
      // console.log(data);
      let { title, thumbnail, duration_sec, formats } = data;
      dispatch({
        type: "details",
        payload: { title, thumbnail, duration: sToTime(duration_sec) },
      });
      dispatch({ type: "formats", payload: formats });
      dispatch({ type: "toDownload", payload: { url: formats[0].url } });
    } catch (err) {
      dispatch({ type: "toggleLoader", payload: { display: "none" } });
      if (err.response.status === 404) {
        toast.error(err.response.data);
        // console.log(err.response.data);
      } else {
        toast.error("Something Went Wrong, Try Later.");
      }
    }
  };

  const downloadVideo = async (e) => {
    e.preventDefault();
    if (process.env.NODE_ENV === "production") {
      window.location.href = `${window.location.origin}/api/vimeo/download?url=${video.toDownload.url}&clen=${video.toDownload.contentLength}&title=${video.details.title}`;
    } else {
      window.location.href = `http://localhost:5000/api/vimeo/download?url=${video.toDownload.url}&clen=${video.toDownload.contentLength}&title=${video.details.title}`;
    }
  };
  return (
    <>
      <Helmet>
        <title>
          Vimeo Videos Downloader - DOWNTAPE Free Vimeo Downloader Online
        </title>
        {/* <link rel="canonical" href="https://www.downtape.herokuapp.com/youtube-video-downloader" />
                <meta name="description" content="Download YouTube videos Online Free on DOWNTAPE. We provides you the best YouTube video downloader, In which you can download YouTube videos in mp4"/>
                <meta name="keywords" content="youtube video download, youtube video download online, online youtube video download, free youtube video download, youtube video download by link, youtube video download free, save youtube video download, youtube video download pc, youtube video download link, youtube video download website, how to youtube video download, youtube video download site, youtube video download mp4, youtube video download online free, youtube video downloader, online youtube video downloader, youtube video downloader for pc, youtube video downloader free download, best youtube video downloader, free youtube video downloader, download youtube video, download youtube videos, how to download youtube video, how to download youtube video in laptop, how download youtube video, how to download youtube videos in mobile, download youtube video online, how to download youtube video online, download youtube video online free, how download youtube video online" /> */}
      </Helmet>
      <Container component="main" maxWidth="md">
        <div className={classes.searchDiv}>
          <Typography component="h1" variant="h4">
            <span className={classes.title}>Vimeo</span> Video Downloader
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
                  placeholder="e.g. https://vimeo.com/147697561"
                  value={video.url}
                  onChange={(e) =>
                    dispatch({ type: "url", payload: e.target.value })
                  }
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
        <TwitterVimeoVideoSearchResult
          video={video}
          dispatch={dispatch}
          downloadVideo={downloadVideo}
        />
      <DownloaderPageContent
        title="Vimeo"
        img="vimeo.webp"
        downloadSteps={downloadSteps}
        description={AboutDownloaderDescription}
      />
      <ToastContainer position="top-center" />
    </>
  );
};

export default VimeoVideosDownloader;
