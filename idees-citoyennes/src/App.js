import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyAppBar from './MyAppBar';
import Description from './Description';
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
            <Description />
          </div>
        </div>
      </ MuiThemeProvider>
    );
  }
}

export default App;
