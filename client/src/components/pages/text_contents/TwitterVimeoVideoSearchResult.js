import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import Fab from "@material-ui/core/Fab";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import { bytesToMb } from "../../Converters";

const useStyles = makeStyles((theme) => ({
    btn: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(1.9),
    },
    videoDetailsContainer: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(4),
    },
    formControl: {
      margin: theme.spacing(1),
    },
    downloadDropdownForm: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  }));
  

const TwitterVideosDownloader = ({ video, dispatch, downloadVideo }) => {
    const classes = useStyles();
    if (!video.formats.length) {
      return "";
    }
    return (
      <>
        <Container component="main" maxWidth="md">
          <div className={classes.videoDetailsContainer}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <ImageList>
                  <ImageListItem style={{ width: "100%" }}>
                    <img
                      src={video.details.thumbnail}
                      alt={video.details.title}
                    />
                    <ImageListItemBar
                      title={video.details.title}
                      subtitle={<span>{video.details.duration}</span>}
                    />
                  </ImageListItem>
                </ImageList>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                className={classes.downloadDropdownForm}
              >
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="quality-dropdown">
                    Video Quality
                  </InputLabel>
                  <Select
                    labelId="quality-dropdown"
                    value={video.toDownload.url}
                    label="Video Quality"
                    onChange={(e) =>
                      dispatch({
                        type: "toDownload",
                        payload: { url: e.target.value },
                      })
                    }
                  >
                    {video.formats.map((format, index) => {
                      return (
                        <MenuItem key={index} value={format.url}>
                          <Box fontFamily="Monospace">
                            {" "}
                            {format.contentLength
                              ? ` ${bytesToMb(format.contentLength)} Mb`
                              : ""}{" "}
                            &nbsp;&nbsp; {format.quality}{" "}
                          </Box>
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                <Fab
                  variant="extended"
                  size="small"
                  color="secondary"
                  aria-label="download"
                  onClick={downloadVideo}
                  className={classes.btn}
                >
                  <GetAppRoundedIcon className={classes.extendedIcon} />
                  Download
                </Fab>
              </Grid>
            </Grid>
          </div>
        </Container>
      </>
    );
  };

  export default TwitterVideosDownloader;