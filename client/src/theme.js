import '@fontsource/raleway/500.css';
import red from '@material-ui/core/colors/red';
import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#0396FF',
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
      deep: '#1a1a1a',
    },
    navGr:{
      main: 'linear-gradient( 135deg, #1976d2 10%, #0396FF 100%)',
      light: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(14,174,87,1) 0%, rgba(12,116,117,1) 90% )',
    },
    youtube:{
      main: '#FF0000',
      secondary: '#f50057',
    },
    instagram: {
      main: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
    },
    twitter: {
      main: '#1DA1F2',
    },
  },
  typography: {
    fontFamily: [
      'Raleway',
      'sans-serif',
    ].join(','),
    "fontWeightRegular": 500,
  },
  
});

export default theme;
