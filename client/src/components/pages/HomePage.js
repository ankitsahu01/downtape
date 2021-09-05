import React from 'react';
// import { makeStyles } from "@material-ui/core";
import OtherVideosDownloader from './text_contents/common/OtherVideosDownloaderContent';
import { Container, Typography, Box, Paper } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//     changeBg: {
//       color: theme.palette.light.main,
//       background: theme.palette.navGr.main,
//     }
// }));

const HomePage=()=> {
//   const classes = useStyles();
    return (
        <>
        <Paper
        component={Box}
        square
        elevation={0}
        p={4}
        pt={5}
      >
        <Container maxWidth="md">
          <Typography component="h1" variant="h4" align="center" gutterBottom>
            <Box>DownTape Videos Downloader</Box>
          </Typography>
          <Typography align="justify">
              DownTape Videos video downloader provides fastest service to download
              videos in mp4, mp3, SQ, HD, Full HD quality from Videos! For more
              convenient viewing on a large screen video can be saved in high
              quality. To watch videos on Android or iOS phones the medium
              quality will be enough.
          </Typography>
        </Container>
        </Paper>
        
         <OtherVideosDownloader title={"Availabe Videos Downloader"} />
        
        </>
    )
}

export default HomePage;
