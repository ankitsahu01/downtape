import React from "react";
import { makeStyles } from "@material-ui/core";
import { Container, Box, Paper, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { List, ListItem, ListItemText } from "@material-ui/core";
import twitterImg from "../../../img/twitter.jpg";
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
    background: `url(${twitterImg})`,
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
    "Paste URL in the search field and click “Get Video”.",
    "Choose the Video Quality that you want to Download.",
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
          <Box mb={3}>How To Download Twitter Videos?</Box>
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
                    src={twitterImg}
                    alt="twitter"
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

const DowntapeTwitterDownloader = () => {
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
            <Box>DownTape Twitter Downloader</Box>
          </Typography>
          <Typography align="justify">
              DownTape Twitter video downloader provides fastest service to download
              videos in mp4, mp3, SQ, HD, Full HD quality from Twitter! For more
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
      <DowntapeTwitterDownloader />
    </>
  );
};

export default InstagramTextContent;
