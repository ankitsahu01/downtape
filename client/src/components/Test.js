import React,{ useState } from 'react';
import {Helmet} from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';
import {Container, Grid} from '@material-ui/core';
import {Button, TextField, Typography} from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import GetAppIcon from '@material-ui/icons/GetApp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  paper: {
      marginTop: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  },
  form: {
      width: '100%',
      marginTop: theme.spacing(1),
  },
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
  downloadSection:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center'
  },
  seticons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  alignicons: {
    display: 'flex',
    alignItems: 'center',
  }
}));

const Test = () => {
  const [url, setUrl]= useState('');
  const [toggleLoader, setToggleLoader]= useState({ 'display':'none' });
  const [data, setData]= useState({'hd':'', 'sd':'', 'thumb':'', 'title':''});
  const classes = useStyles();

  const searchVideo= async (e)=>{
    try{
      e.preventDefault();
      setToggleLoader({ 'display':'block' });
      const res= await axios(`/api/fb/getInfo?url=${url}`);
      console.log(res.data);
      setToggleLoader({ 'display':'none' });
      const {hd, sd, thumb, title}= res.data;
      setData({hd, sd, thumb, title});
    }catch(err){
      setToggleLoader({ 'display':'none' });
      toast.error("Something Went Wrong. Try Later!");
      console.log(err);
    }
  }

  return (
    <>
      <Helmet>
            <title>Twitter Videos Downloader - DOWNTAPE Free Twitter Downloader Online</title>
        </Helmet>
        <Container component="main" maxWidth="md">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                Twitter Video Downloader
                </Typography>
                <form className={classes.form} noValidate onSubmit={searchVideo}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={10}>
                        <TextField
                        type="text"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        autoFocus
                        required
                        label="Enter Link"
                        placeholder="e.g. https://twitter.com/i/status/1430466398069743617"
                        value={url}
                        onChange={(e)=>setUrl(e.target.value)}
                        />
                         <LinearProgress style={toggleLoader} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.btn}
                        >
                        <GetAppIcon style={{"marginRight":"4px"}}/>
                        Download
                        </Button>
                    </Grid>
                </Grid>
                </form>
            </div>
        </Container>

        {
          data.hd ? 
          <>
            <p>{data.title}</p>
            {/* <video controls>
              <source src={data.hd} />
            </video> */}
            <video controls>
              <source src={data.sd} poster={data.sd} />
            </video>
          </>
          : ''
        }

        <ToastContainer position="top-center" />
    </>
  );
}

export default Test;
