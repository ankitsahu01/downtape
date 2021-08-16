import React from 'react';
import {NavLink} from 'react-router-dom';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {Fab, Slide} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navlink: {
    color: theme.palette.light.main,
    textDecoration: 'none',
  },
  activeNavLink: {
    borderBottom: '1px solid #ffffff',
  }
}));

const ScrollTop=(props)=> {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    if(anchor){
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  return (
    <Slide in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root} >
        {children}
      </div>
    </Slide>
  );
}

const HideOnScroll=(props)=> {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar=(props)=> {
  const classes = useStyles();
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="h1" className={classes.title}>
              <NavLink to="/" className={classes.navlink} >DOWNTAPE</NavLink>            
            </Typography>
            <Button color="inherit">
              <NavLink to="/youtube-video-downloader" className={classes.navlink} activeClassName={classes.activeNavLink} >Download Youtube Video</NavLink>
            </Button>
            <Button color="inherit">
              <NavLink to="/instagram-video-downloader" className={classes.navlink} activeClassName={classes.activeNavLink} >Download Instagram Video</NavLink>
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}
export default Navbar;