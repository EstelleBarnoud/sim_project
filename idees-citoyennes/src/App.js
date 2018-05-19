import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyAppBar from './MyAppBar';
import Title from './Title';
import Description from './Description';
import Progress from './Progress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <header>
            <MyAppBar />
          </header>
          <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
            <Title />
            <Description />
            <Progress />
          </div>
        </div>
      </ MuiThemeProvider>
    );
  }
}

export default App;
