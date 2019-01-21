import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import React, { Component } from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      light: '#7d7d7d',
      main: '#515151',
      dark: '#292929',
      contrastText: 'ffffff'
    },
    secondary: {
      light: '#ff953e',
      main: '#ea6401',
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
          <div>
            <HeaderBar />
          </div>
          <header className="App-header">
            <h1>ozone</h1>
            <p>Snippets and bikes, solve your problems here.</p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
