import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import SvgIcon from "@material-ui/core/SvgIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navlink: {
    textDecoration: "none",
    "&:hover": {
      borderBottom: "1px solid",
    },
  },
  activeLink: {
    borderBottom: "1px solid",
  },
  secondaryText: {
    color: theme.palette.grey[600],
  },
}));

const OtherVideosDownloader = (props) => {
  const classes = useStyles();
  return (
    <>
      <Paper component={Box} square elevation={0} p={5}>
      <Container maxWidth="md">
        <Typography component="h3" variant="h4" align="center">
          <Box mb={1}>
          {
            props.title || 'Other Videos Downloader'
          }
          </Box>
        </Typography>
        <Typography paragraph align="center" gutterBottom>
          DownTape Video Downloader is a versatile online video Downloader.
          Using it you can easily download other Social Media Videos.
        </Typography>
          <Grid container spacing={2} className={classes.root}>
            <Grid item sm={12} md={6}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar>
                    <YouTubeIcon color="primary" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <NavLink
                      to="/youtube-video-downloader"
                      className={classes.navlink}
                      activeClassName={classes.activeLink}
                    >
                      YouTube Video Downloader
                    </NavLink>
                  }
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.secondaryText}
                    >
                      The service is ideal for downloading from YouTube in HD
                      with no need to install any apps. Just use any web browser
                      you have on your device.
                    </Typography>
                  }
                />
              </ListItem>
            </Grid>
            <Grid item sm={12} md={6}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar>
                    <InstagramIcon color="primary" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <NavLink
                      to="/instagram-video-downloader"
                      className={classes.navlink}
                      activeClassName={classes.activeLink}
                    >
                      Instagram Video Downloader
                    </NavLink>
                  }
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.secondaryText}
                    >
                      Downloading stories and other videos from Instagram is
                      quite possible. DownTape can act as an Instagram
                      Downloader to help you with this.
                    </Typography>
                  }
                />
              </ListItem>
            </Grid>
            <Grid item sm={12} md={6}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar>
                    <TwitterIcon color="primary" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <NavLink
                      to="/twitter-video-downloader"
                      className={classes.navlink}
                      activeClassName={classes.activeLink}
                    >
                      Twitter Video Downloader
                    </NavLink>
                  }
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.secondaryText}
                    >
                      DownTape allows you to download Twitter videos in MP4
                      formats.
                    </Typography>
                  }
                />
              </ListItem>
            </Grid>
            <Grid item sm={12} md={6}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar>
                    <SvgIcon color="primary">
                      <path
                        d="M17.811,2.018c2.017,0.053,3.026,1.198,3.036,3.438c0,0.147-0.005,0.3-0.013,0.457c-0.089,1.899-1.502,4.486-4.245,7.76
                    c-2.829,3.43-5.229,5.147-7.2,5.156c-1.226,0-2.244-1.05-3.061-3.151l-0.858-2.88L4.622,9.922C3.997,7.838,3.329,6.798,2.616,6.798
                    c-0.156,0-0.697,0.304-1.626,0.91L0,6.537l1.536-1.276l1.511-1.263C4.4,2.914,5.429,2.328,6.135,2.241
                    c0.094-0.01,0.188-0.013,0.284-0.013c1.449,0,2.354,1.041,2.709,3.124C9.326,6.54,9.49,7.506,9.623,8.248
                    C9.752,8.992,9.86,9.51,9.946,9.805c0.479,1.97,0.995,2.96,1.55,2.968c0.426,0,1.082-0.642,1.968-1.926
                    c0.866-1.319,1.332-2.296,1.392-2.932c0.019-0.129,0.026-0.25,0.026-0.362c0-0.861-0.474-1.29-1.418-1.29
                    c-0.479,0-0.99,0.102-1.537,0.299c0.98-3.021,2.864-4.534,5.65-4.544C17.655,2.018,17.732,2.018,17.811,2.018z"
                      />
                    </SvgIcon>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <NavLink
                      to="/vimeo-video-downloader"
                      className={classes.navlink}
                      activeClassName={classes.activeLink}
                    >
                      Vimeo Video Downloader
                    </NavLink>
                  }
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.secondaryText}
                    >
                      DownTape allows you to download Vimeo videos with the
                      ability to choose the quality of the video.
                    </Typography>
                  }
                />
              </ListItem>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  );
};

export default OtherVideosDownloader;
