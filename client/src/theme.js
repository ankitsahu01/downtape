import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    success:{
      main: '#4caf50',
    },
    error: {
      main: red.A400,
    },
    light: {
      main: '#FFFFFF',
    },
    youtube:{
      main: '#FF0000'
    }
  },
});

export default theme;
