import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ScrollTop from "./ScrollTop";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  titlelink: {
    color: theme.palette.light.main,
    textDecoration: "none",
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.grbg}>
        <Toolbar>
          <Typography variant="h6" component="h1" className={classes.title}>
            <NavLink to="/" className={classes.titlelink}>
              DOWNTAPE
            </NavLink>
          </Typography>
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
