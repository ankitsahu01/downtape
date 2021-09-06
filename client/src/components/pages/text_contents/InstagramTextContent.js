import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import instagramImg from "../../../img/instagram.jpg";
import OtherVideosDownloader from "./common/OtherVideosDownloaderContent";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  changeBg: {
    color: theme.palette.light.main,
    background: theme.palette.navGr.main,
  },
  setImg: {
    background: `url(${instagramImg})`,
    backgroundColor: "#ff0000",
    width: 300,
    height: 200,
    backgroundRepeat: "no-repeat",
  },
}));

const HowToDownload = () => {
  const classes = useStyles();
  const downloadSteps = [
    "Copy the URL of the video which you need to download.",
    "Paste URL in the search field.",
    "Click the “Download” button to start downloading the file.",
  ];
  return (
    <>
      <Paper
        component={Box}
        square
        elevation={0}
        p={4}
        mt={15}
        className={classes.changeBg}
      >
        <Typography component="h2" variant="h5" align="center">
          <Box mb={3}>How To Download Instagram Videos?</Box>
        </Typography>
        <Container maxWidth="md">
          <Grid
            container
            spacing={2}
            className={classes.root}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item sm={12} md={4}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Box className={classes.setImg} />
                  <img
                    style={{ display: "none" }}
                    src={instagramImg}
                    alt="instagram"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={12} md={8}>
              <List >
                {downloadSteps.map((text, index) => {
                  return (
                    <ListItem key={index}>
                      <ListItemText>&#9679; {text}</ListItemText>
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  );
};

const DowntapeInstaDownloader = () => {
  const classes = useStyles();
  return (
    <>
      <Paper
        component={Box}
        square
        elevation={0}
        p={4}
        className={classes.changeBg}
      >
        <Container maxWidth="md">
          <Typography component="h3" variant="h5" align="center" gutterBottom>
            <Box>DownTape Instagram Downloader</Box>
          </Typography>
          <Typography align="justify">
              DownTape Instagram video downloader provides fastest service to download
              videos in mp4, mp3, SQ, HD, Full HD quality from Instagram! For more
              convenient viewing on a large screen video can be saved in high
              quality. To watch videos on Android or iOS phones the medium
              quality will be enough.
          </Typography>
        </Container>
      </Paper>
    </>
  );
};

const InstagramTextContent = () => {
  return (
    <>
      <HowToDownload />
      <OtherVideosDownloader />
      <DowntapeInstaDownloader />
    </>
  );
};

export default InstagramTextContent;
