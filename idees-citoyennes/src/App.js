import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyAppBar from './MyAppBar';
import Enonce from './Enonce';
import Title from './Title';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <header>
            <MyAppBar />
          </header>
          <div className="App">
            <Title />
            <Enonce />
          </div>
        </div>
      </ MuiThemeProvider>
    );
  }
}

export default App;
