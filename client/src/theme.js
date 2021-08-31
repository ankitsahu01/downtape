import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
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
    dark: {
      main: '#212121',
    },
    youtube:{
      main: '#FF0000'
    },
    gradientBg:{
      main: 'linear-gradient( 135deg, #1976d2 10%, #0396FF 100%)',
      light: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(14,174,87,1) 0%, rgba(12,116,117,1) 90% )',
    },
  },
});

export default theme;
