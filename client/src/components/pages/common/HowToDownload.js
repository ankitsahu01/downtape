import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  changeBg: {
    color: theme.palette.light.main,
    background: theme.palette.navGr.main,
  },
  setImg: {
    backgroundColor: theme.palette.primary.light,
    width: 300,
    height: 200,
    backgroundRepeat: "no-repeat",
  },
}));

const HowToDownload = (props) => {
  const classes = useStyles();
  return (
    <>
      <Box p={4} mt={15} className={classes.changeBg}>
        <Typography component="h2" variant="h5" align="center">
          <Box mb={3}>How To Download {props.title} Videos?</Box>
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
                  <Box
                    className={classes.setImg}
                    style={{ background: `url(img/${props.img})` }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={12} md={8}>
              <List>
                {props.downloadSteps.map((text, index) => {
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
      </Box>
    </>
  );
};

export default HowToDownload;
