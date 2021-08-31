import React, { useState, useEffect } from "react";
import {NavLink} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from "@material-ui/core/Drawer";
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {Fab, Slide, Zoom} from '@material-ui/core';
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { SvgIcon } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
    textDecoration: "none",
  },
  activeNavLink: {
    borderBottom: `1px solid ${theme.palette.light.main}`,
  },
  mobileNavlink: {
    color: theme.palette.dark.main,
    textDecoration: "none",
  },
  activeMobileNavLink: {
    borderBottom: `1px solid ${theme.palette.dark.main}`,
  },
  grbg:{
    background: theme.palette.gradientBg.main,
  },
  paper: {
    background: theme.palette.gradientBg.main,
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
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root} >
        {children}
      </div>
    </Zoom>
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
  const [mobileView, setMobileView] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = (updateOpen) => (event) => {
    if ( event.type === "keydown" && (event.key === "Tab" || event.key === "Shift") ) {
      return;
    }
    setOpenDrawer(updateOpen);
  };
  
  useEffect(()=>{
    const setResponsiveness = ()=>{
      window.innerWidth < 900 
        ? setMobileView(true)
        : setMobileView(false)
    };
    setResponsiveness();
    window.addEventListener('resize', ()=>setResponsiveness());
    return ()=>{
      window.removeEventListener('resize', ()=>setResponsiveness());
    }
  },[mobileView]);

  const DesktopDisplay = ()=>{
    return (
      <>
        <Button color="inherit">
          <NavLink
            to="/youtube-video-downloader"
            className={classes.navlink}
            activeClassName={classes.activeNavLink}
          >
            <YouTubeIcon />
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink
            to="/instagram-video-downloader"
            className={classes.navlink}
            activeClassName={classes.activeNavLink}
          >
            <InstagramIcon />
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink
            to="/twitter-video-downloader"
            className={classes.navlink}
            activeClassName={classes.activeNavLink}
          >
            <TwitterIcon />
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink
            to="/vimeo-video-downloader"
            className={classes.navlink}
            activeClassName={classes.activeNavLink}
          >
            <SvgIcon>
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
          </NavLink>
        </Button>
      </>
    );
  };

  const MobileDisplay= ()=>{
    return(
      <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)} classes={{ paper: classes.paper }}>
        <Button onClick={toggleDrawer(false)} >
          <NavLink
            to="/youtube-video-downloader"
            className={classes.navlink}
            activeStyle={{borderBottom:'1px solid #ffffff'}}
          >
            <YouTubeIcon />
          </NavLink>
        </Button>
        <Button onClick={toggleDrawer(false)} >
          <NavLink
            to="/instagram-video-downloader"
            className={classes.navlink}
            activeStyle={{borderBottom:'1px solid #ffffff'}}
          >
            <InstagramIcon />
          </NavLink>
        </Button>
        <Button onClick={toggleDrawer(false)} >
          <NavLink
            to="/twitter-video-downloader"
            className={classes.navlink}
            activeStyle={{borderBottom:'1px solid #ffffff'}}
          >
            <TwitterIcon />
          </NavLink>
        </Button>
        <Button onClick={toggleDrawer(false)} >
          <NavLink
            to="/vimeo-video-downloader"
            className={classes.navlink}
            activeStyle={{borderBottom:'1px solid #ffffff'}}
          >
            <SvgIcon>
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
          </NavLink>
        </Button>
      </Drawer>
    </>
    )
  };

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar className={classes.grbg}>
          <Toolbar>
            <Typography variant="h6" component="h1" className={classes.title}>
              <NavLink to="/" className={classes.navlink}>
                DOWNTAPE
              </NavLink>
            </Typography>
            { mobileView ? <MobileDisplay/> : <DesktopDisplay/> }
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