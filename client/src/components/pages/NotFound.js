import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    minHeight: '80vh',
  },
  title: {
    fontSize: theme.spacing(20),
    opacity: 0.2,
  },
  titleText: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    fontSize: theme.spacing(2),
  },
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>Page Not Found - DownTape</title>
        {/* <link rel="canonical" href="https://www.downtape.herokuapp.com/youtube-video-downloader" />
          <meta name="description" content="Download YouTube videos Online Free on DOWNTAPE. We provides you the best YouTube video downloader, In which you can download YouTube videos in mp4"/>
          */}
      </Helmet>
      <Container className={classes.root}>
        <Typography
          variant="h1"
          component="h1"
          color="secondary"
          align="center"
          className={classes.title}
        >
          404
        </Typography>
        <Typography paragraph align="center" className={classes.titleText}>
          We're sorry, the page you requested could not be found.
          <br />
          <br />
          <Button
            component={NavLink}
            to="/"
            startIcon={<KeyboardBackspaceIcon />}
            color="primary"
          >
            Back To Home
          </Button>
        </Typography>
      </Container>
    </>
  );
};

export default NotFound;
