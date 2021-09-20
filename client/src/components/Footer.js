import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.dark.deep,
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  navLink: {
    color: theme.palette.primary.light,
    textDecoration: "none",
    "&:hover": {
      borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
  },
  activeNavLink: {
    borderBottom: `1px solid ${theme.palette.primary.main}`,
  },
}));

const Footer = () => {
  const classes = useStyles();
  const downloaders = [
    { name: "YouTube Video Downloader", link: "/youtube-video-downloader" },
    { name: "Instagram Video Downloader", link: "/instagram-video-downloader" },
    { name: "Twitter Video Downloader", link: "/twitter-video-downloader" },
    { name: "Vimeo Video Downloader", link: "/vimeo-video-downloader" },
  ];
  const otherLinks = [
    { name: "FAQ", link: "/frequently-asked-questions" },
    { name: "Contact", link: "/contact" },
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Terms of Service", link: "/terms-of-service" },
  ];
  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Container maxWidth={false}>
          <Toolbar>
            <Grid container spacing={0}>
              <Grid item xs={12} md={6} className={classes.logoContainer}>
                <Container align="center">
                  <NavLink to="/">
                    <img
                      src="/img/downtape_logo.svg"
                      alt="downtape logo"
                      width="190"
                    />
                  </NavLink>
                </Container>
                <Typography paragraph variant="subtitle2" align="center">
                  © 2021 DownTape
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <List dense disablePadding>
                  {downloaders.map((downloader) => {
                    return (
                      <ListItem key={downloader.name}>
                        <ListItemText>
                          <NavLink
                            to={downloader.link}
                            className={classes.navLink}
                            activeClassName={classes.activeNavLink}
                          >
                            {downloader.name}
                          </NavLink>
                        </ListItemText>
                      </ListItem>
                    );
                  })}
                </List>
              </Grid>
              <Grid item xs={12} md={3}>
                <List dense disablePadding>
                  {otherLinks.map((ol) => {
                    return (
                      <ListItem key={ol.name}>
                        <ListItemText>
                          <NavLink
                            to={ol.link}
                            className={classes.navLink}
                            activeClassName={classes.activeNavLink}
                          >
                            {ol.name}
                          </NavLink>
                        </ListItemText>
                      </ListItem>
                    );
                  })}
                </List>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Footer;
