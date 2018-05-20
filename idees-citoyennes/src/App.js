import React, { Component } from 'react';
import './App.css';
import MyAppBar from './MyAppBar';
import Nav from './Nav';
import Title from './Title';
import Description from './Description';
import Progress from './Progress';
import ReactionBar from './ReactionBar';
import Reactions from './Reactions';
import Links from './Links';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#86ACA5',
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <header>
            <MyAppBar />
          </header>
          <div className="App">
            <Nav />
            <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
              <Paper zDepth={2} >
                <img src={ require('./image/ravi-roshan-383162-unsplash.jpg') } alt="" />
                <div style={{padding: 50, paddingTop: 20}}>
                  <Title />
                  <Divider />
                  <Description />
                  <Divider />
                  <Progress />
                  <Divider />
                  <ReactionBar />
                  <Divider />
                  <Reactions />
                </div>
              </Paper>
            </div>
            <Links />
          </div>
        </div>
      </ MuiThemeProvider>
    );
  }
}

export default App;
