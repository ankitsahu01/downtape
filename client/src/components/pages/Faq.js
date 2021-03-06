import { Helmet } from "react-helmet-async";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  secondaryText: {
    color: theme.palette.grey[600],
  },
}));

const Faq = () => {
  const classes = useStyles();
  const faqList1 = [
    {
      Q: "How to download youtube video to a computer?",
      A: "Using Downtape downloader makes it easy to save any video to your PC or mobile device. It takes just several simple steps: 1.Copy the URL of the video you want to download, 2.Insert the link into Search box on the page, 3.Click the Download button.",
    },
    {
      Q: "Is the youtube video downloader free?",
      A: "Yes, the service is absolutely free. The time and number of downloads are unlimited.",
    },
    {
      Q: "Which video quality is supported by the video downloader?",
      A: "The quality of the downloaded video depends entirely on the source. The most common are SD, HD, FullHD, 2K & 4K.",
    },
    {
      Q: "What web browers support Downtape yt downloader?",
      A: "Youtube downloader supports absolutely all modern browsers, such as Google Chrome, Opera, Safari, Mozilla Firefox, and others.",
    },
  ];

  const faqList2 = [
    {
      Q: "How to download youtube video to a computer?",
      A: "Using Downtape downloader makes it easy to save any video to your PC or mobile device. It takes just several simple steps: 1.Copy the URL of the video you want to download, 2.Insert the link into Search box on the page, 3.Click the Download button.",
    },
    {
      Q: "Is the youtube video downloader free?",
      A: "Yes, the service is absolutely free. The time and number of downloads are unlimited.",
    },
    {
      Q: "Which video quality is supported by the video downloader?",
      A: "The quality of the downloaded video depends entirely on the source. The most common are SD, HD, FullHD, 2K & 4K.",
    },
    {
      Q: "What web browers support Downtape yt downloader?",
      A: "Youtube downloader supports absolutely all modern browsers, such as Google Chrome, Opera, Safari, Mozilla Firefox, and others.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - DownTape</title>
      </Helmet>
      <Container className={classes.root}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Grid container>
          <Grid item xs={12} md={6}>
            <List>
              {faqList1.map((faq) => {
                return (
                  <ListItem key={faq.Q}>
                    <ListItemText
                      primary={
                        <Typography variant="h6">Que: {faq.Q}</Typography>
                      }
                      secondary={
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.secondaryText}
                        >
                          Ans: {faq.A}
                        </Typography>
                      }
                    />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <List>
              {faqList2.map((faq) => {
                return (
                  <ListItem key={faq.Q}>
                    <ListItemText
                      primary={
                        <Typography variant="h6">Que: {faq.Q}</Typography>
                      }
                      secondary={
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.secondaryText}
                        >
                          Ans: {faq.A}
                        </Typography>
                      }
                    />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Faq;
