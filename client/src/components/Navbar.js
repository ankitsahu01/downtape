import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ScrollTop from "./ScrollTop";

const useStyles = makeStyles((theme) => ({
  logo: {
    width: 160,
  },
  grbg: {
    background: theme.palette.navGr.main,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.grbg}>
        <Toolbar>
          <NavLink to="/">
            <img
              src="/img/downtape_logo.svg"
              alt="downtape logo"
              style={{width:'200px', marginTop:5}}
            />
          </NavLink>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props} goto="#back-to-top-anchor">
        <KeyboardArrowUpIcon />
      </ScrollTop>
    </>
  );
};
export default Navbar;
