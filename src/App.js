import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import HeaderBar from './components/HeaderBar';
import ContentContainer from './components/ContentContainer';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      light: '#7d7d7d',
      main: '#a36416',
      dark: '#292929',
      contrastText: 'ffffff'
    },
    secondary: {
      light: '#ff953e',
      main: '#333333',
      dark: '#b04300',
      contrastText: '#000000'
    },
    text: {
      orange: '#eb6502'
    }
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <div className="Sticky">
            <HeaderBar />
          </div>
          <ContentContainer />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
