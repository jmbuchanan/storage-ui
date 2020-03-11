import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
import CssBaseline from '@material-ui/core/CssBaseline';
import './style.css';

import Home from './home/Home';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2a373c'
    },
    secondary: deepOrange
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </MuiThemeProvider>
  );
}

export default App;
