import React, { Component } from 'react';
import './App.css';
import MyAppBar from './MyAppBar';
import Nav from './Nav';
import Title from './Title';
import Goals from './Goals';
import Description from './Description';
import Progress from './Progress';
import ReactionBar from './ReactionBar';
import Reactions from './Reactions';
import Links from './Links';
import MyTabs from './MyTabs';
import Account from './MyAccount';
import SettingsList from './Settings';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import PasswordForm from './PasswordForm';
import ProjectForm from './ProjectForm';
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

const submit = (values) => {
  // Do something with the form values
  console.log(values);
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
          <Goals />
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
    <SignUpForm mySubmit={submit} />
  </div>
);

const SignIn = () => (
  <div style={styles.form}>
    <p style={styles.content}>Connexion</p>
    <SignInForm mySubmit={submit} />
  </div>
);

const MyAccount = () => (
  <div>
    <Account />
  </div>
);

const Settings = () => (
  <div>
    <SettingsList />
  </div>
);

const AboutUs = () => (
  <div style={styles.content}>
    <h2>A propos</h2>
    <p>Parce que nous pensons que le devoir citoyen ne se limite pas au vote, nous avons décidé de développer un outil numérique accessible à tous.</p>
  </div>
);

const Password = () => (
  <div style={styles.form}>
    <p style={styles.content}>Récupérer votre mot de passe</p>
    <PasswordForm mySubmit={submit} />
  </div>
);

const New = () => (
  <div style={styles.form}>
    <p style={styles.content}>Nouveau Projet</p>
    <ProjectForm mySubmit={submit} />
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
              </header>
              <Route exact path="/" component={Home} />
              <Route path="/project" component={Project} />
              <Route path="/signup" component={SignUp} />
              <Route path="/signin" component={SignIn} />
              <Route path="/my-account" component={MyAccount} />
              <Route path="/settings" component={Settings} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/forgotten-password" component={Password} />
              <Route path="/create-new-project" component={New} />
            </div>
          </Router>
        </div>
      </ MuiThemeProvider>
    );
  }
}

export default App;
