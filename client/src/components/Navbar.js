import React from "react";
import NavLink from "react-router-dom/NavLink";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Fab from '@material-ui/core/Fab';
import Slide from '@material-ui/core/Slide';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles((theme) => ({
  scrollTop: {
    zIndex: 2,
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  titlelink: {
    color: theme.palette.light.main,
    textDecoration: "none",
  },
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
      <Fab color="primary" onClick={handleClick} size="small" role="presentation" aria-label="scroll back to top" className={classes.scrollTop}>
          {children}
      </Fab>
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
  
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar className={classes.grbg}>
          <Toolbar>
            <Typography variant="h6" component="h1" className={classes.title}>
              <NavLink to="/" className={classes.titlelink}>
                DOWNTAPE
              </NavLink>
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
          <KeyboardArrowUpIcon />
      </ScrollTop>
    </>
  );
}
export default Navbar;