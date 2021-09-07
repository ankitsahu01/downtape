import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  changeBg: {
    color: theme.palette.light.main,
    background: theme.palette.navGr.main,
  },
}));

const DowntapeYoutubeDownloader = (props) => {
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
            <Box>DownTape {props.title} Downloader</Box>
          </Typography>
          <Typography align="justify">
            {props.description}
          </Typography>
        </Container>
      </Paper>
    </>
  );
};

export default DowntapeYoutubeDownloader;