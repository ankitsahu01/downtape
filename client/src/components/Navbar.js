import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
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
}));

function ScrollTop(props) {
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

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar(props) {
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">AIOV-Downloader</Typography>
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


// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import Slide from '@material-ui/core/Slide';

// function HideOnScroll(props) {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({ target: window ? window() : undefined });
//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

// export default function Navbar(props) {
//   return (
//     <>
//       <HideOnScroll {...props}>
//         <AppBar>
//           <Toolbar>
//             <Typography variant="h6">Scroll to Hide App Bar</Typography>
//           </Toolbar>
//         </AppBar>
//       </HideOnScroll>
//       <Toolbar />
//     </>
//   );
// }
