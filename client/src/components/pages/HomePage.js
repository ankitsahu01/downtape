import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import TopBarProgress from "react-topbar-progress-indicator";
const AvailableVideosDownloader = lazy(() =>
  import("./common/AvailableDownloaders")
);

const HomePage = () => {
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

      <Suspense fallback={<TopBarProgress />}>
        <AvailableVideosDownloader />
      </Suspense>
    </>
  );
};

export default HomePage;
