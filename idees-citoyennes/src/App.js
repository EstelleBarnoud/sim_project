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
import MyTabs from './MyTabs';
import SettingsList from './Settings';
import Form from './Form';
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
  sheet: {
    width: '100%',
    maxWidth: 700,
    margin: 'auto'
  },
  content: {
    padding: 50,
    paddingTop: 20
  },
  form: {
    padding: 20,
    display: "flex",
    justifyContent: "center"
  },
  welcome: {
    fontSize: "large",
    padding: 20,
    paddingLeft: 40
  }
}

const Home = () => (
  <div>
    <p style={styles.welcome}>Bienvenue sur Idées  Citoyennes, la plateforme citoyenne pour vous informer et vous engager.</p>
    <MyTabs />
  </div>
);

const Project = () => (
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
  <div style={styles.form}>
    <p style={styles.content}>Inscription</p>
    <Form onSubmit={this.submit} />
  </div>
);

const SignIn = () => (
  <div>
    <p style={styles.content}>Connexion</p>
  </div>
);

const MyAccount = () => (
  <div>
    <p style={styles.content}>Mon Compte</p>
  </div>
);

const Settings = () => (
  <div>
    <p style={styles.content}>Paramètres</p>
    <SettingsList />
  </div>
);

const AboutUs = () => (
  <div style={styles.content}>
    <h2>A propos</h2>
    <p>Parce que nous pensons que le devoir citoyen ne se limite pas au vote, nous avons décidé de développer un outil numérique accessible à tous.</p>
  </div>
);

class App extends Component {
  submit = (values) => {
    // Do something with the form values
    console.log(values);
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Router>
            <div>
              <header>
                <MyAppBar />
              </header>
              <Route exact path="/" component={Home} />
              <Route path="/project" component={Project} />
              <Route path="/signup" component={SignUp} />
              <Route path="/signin" component={SignIn} />
              <Route path="/my-account" component={MyAccount} />
              <Route path="/settings" component={Settings} />
              <Route path="/about-us" component={AboutUs} />
            </div>
          </Router>
        </div>
      </ MuiThemeProvider>
    );
  }
}

export default App;
