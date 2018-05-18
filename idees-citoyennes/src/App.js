import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyAppBar from './MyAppBar'
import Enonce from './Enonce'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header>
            <MyAppBar />
          </header>
          <Enonce />
        </div>
      </ MuiThemeProvider>
    );
  }
}

export default App;
