import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles((theme) => ({
  scrollTop: {
    zIndex: 2,
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const ScrollTop = (props) => {
  const { children, window, goto } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(goto);
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return (
    <Zoom in={trigger}>
      <Fab
        color="primary"
        onClick={handleClick}
        size="small"
        role="presentation"
        aria-label="scroll back to top"
        className={classes.scrollTop}
      >
        {children}
      </Fab>
    </Zoom>
  );
};

export default ScrollTop;
