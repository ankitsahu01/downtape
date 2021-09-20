import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import Fab from "@material-ui/core/Fab";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import "react-toastify/dist/ReactToastify.css";
import { bytesToMb } from "../../Converters";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  btn: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1.9),
  },
  DetailsContainer: {
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

const VideoDetailsContainer = ({ video, dispatch, downloadVideo }) => {
  const classes = useStyles();
  if (!video.formats.length) {
    return "";
  }
  return (
    <>
      <Container component="main" maxWidth="md">
        <div className={classes.DetailsContainer}>
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
            <Grid item xs={12} sm={6} className={classes.downloadDropdownForm}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="quality-dropdown">
                  Video Quality
                </InputLabel>
                <Select
                  labelId="quality-dropdown"
                  value={video.toDownload.itag}
                  label="Video Quality"
                  onChange={(e) =>
                    dispatch({
                      type: "toDownload",
                      payload: { itag: e.target.value },
                    })
                  }
                >
                  {video.formats.map((format, index) => {
                    return (
                      <MenuItem key={index} value={format.itag}>
                        <Box fontFamily="Monospace">
                          {" "}
                          {format.qualityLabel}{" "}
                          {format.contentLength
                            ? ` - ${bytesToMb(format.contentLength)} Mb`
                            : ""}
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

export default VideoDetailsContainer;
