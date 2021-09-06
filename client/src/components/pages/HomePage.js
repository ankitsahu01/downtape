import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
// import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import LazyLoader from "../LazyLoader";
const OtherVideosDownloader = lazy(() =>
  import("./text_contents/common/OtherVideosDownloaderContent")
);

// const useStyles = makeStyles((theme) => ({
//     changeBg: {
//       color: theme.palette.light.main,
//       background: theme.palette.navGr.main,
//     }
// }));

const HomePage = () => {
  //   const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>DownTape Videos Downloader</title>
      </Helmet>
      <Paper component={Box} square elevation={0} p={4} pt={5}>
        <Container maxWidth="md">
          <Typography component="h1" variant="h4" align="center" gutterBottom>
            <Box>DownTape Videos Downloader</Box>
          </Typography>
          <Typography align="justify">
            DownTape Videos video downloader provides fastest service to
            download videos in mp4, mp3, SQ, HD, Full HD quality from Videos!
            For more convenient viewing on a large screen video can be saved in
            high quality. To watch videos on Android or iOS phones the medium
            quality will be enough.
          </Typography>
        </Container>
      </Paper>

      <Suspense fallback={<LazyLoader />}>
        <OtherVideosDownloader title={"Availabe Videos Downloader"} />
      </Suspense>
    </>
  );
};

export default HomePage;
