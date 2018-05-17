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
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <MyAppBar >
          </MyAppBar>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Enonce ></Enonce>
        </div>
      </ MuiThemeProvider>
    );
  }
}

export default App;
