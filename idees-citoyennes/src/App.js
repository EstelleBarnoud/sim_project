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
import { BrowserRouter as Router, Route } from "react-router-dom";

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#86ACA5',
    accent1Color: '#FAB16C'
  },
});

const styles = {
  sheet:{
    width: '100%',
    maxWidth: 700,
    margin: 'auto'
  },
  content:{
    padding: 50,
    paddingTop: 20
  }
}

export const Project = () => (
  <div className="App">
    <Nav />
    <div style={styles.sheet}>
      <Paper zDepth={2} >
        <img src={ require('./images/ravi-roshan-383162-unsplash.jpg') } alt="" />
        <div style={styles.content}>
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
);

const SignUp = () => (
  <div>
    <p style={{fontSize: "large", padding: 20  , paddingLeft: 40}}>Inscription</p>
  </div>
);

const SignIn = () => (
  <div>
    <p style={{fontSize: "large", padding: 20  , paddingLeft: 40}}>Connexion</p>
  </div>
);


class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Router>
            <div>
              <header>
                <MyAppBar />
                <Route path="/project" component={Project} />
              </header>
              <Route path="/signup" component={SignUp} />
              <Route path="/signin" component={SignIn} />
            </div>
          </Router>
        </div>
      </ MuiThemeProvider>
    );
  }
}

export default App;
