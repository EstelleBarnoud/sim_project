import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
// import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import Account from 'material-ui/svg-icons/action/account-circle';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
// import NavigationClose from 'material-ui/svg-icons/navigation/close';
import './App.css';
import {white} from 'material-ui/styles/colors';
import { Route, Link } from 'react-router-dom';
import MyTabs from './MyTabs';

const Home = () => (
  <div>
    <p style={{fontSize: "large", padding: 40}}>Bienvenue sur Idées  Citoyennes, la plateforme citoyenne pour vous informer et vous engager</p>
    <MyTabs />
  </div>
);

class Login extends Component {
  constructor(props) {
    super(props);
    this.signin = this.signin.bind(this)
  }
  
  static muiName = 'FlatButton';

  signup = () => {
    console.log("Sign up Request");
  };

  signin = () => {
    console.log("Sign in Request");
  };

  render() {
    return (
      <div>
        <FlatButton {...this.props} label="S'inscrire" onClick={this.signup} />
        <FlatButton {...this.props} label="Se connecter" onClick={this.signin} />
      </div>
    );
  }
}

function showNotif(){
  console.log("Notification Request");
};

const Logged = (props) => (
  <div style={{height: 45, width: '100%', marginTop: -22, paddingRight: 15, paddingLeft: 15}}>
      <Badge
        badgeContent={10}
        secondary={true}
        badgeStyle={{top: 22, right: 22}}
      >
        <IconButton tooltip="Notifications" onClick={showNotif}>
          <NotificationsIcon color={white} />
        </IconButton>
      </Badge>
      <IconMenu
        {...props}
        iconButtonElement={
          <IconButton><Account /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Mon compte" />
        <MenuItem primaryText="Paramètres" />
        <MenuItem primaryText="Aide" />
        <Divider />
        <MenuItem primaryText="Se déconnecter" />
      </IconMenu>
    </div>
);

Logged.muiName = 'IconMenu';

class MyAppBar extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.state = {
      open: false
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  state = {
    logged: true,
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  render() {
    return (
      <div>
        <Toggle
          label="Logged"
          defaultToggled={false}
          onToggle={this.handleChange}
          labelPosition="right"
          style={{margin: 20}}
        />
        <AppBar
          title={<Link to="/" style={{color: white, textDecoration: "none", outline: "none", fontFamily: "Georgia"}}>Idées Citoyennes</Link>}
          iconElementLeft={<div style={{height: 45, width: '100%', paddingRight: 15, paddingLeft: 15}}><img src={require('./image/icon.png')} alt="" /></div>}
          // onLeftIconButtonTouchTap={this.handleToggle}
          onLeftIconButtonClick={this.handleToggle}
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
          style={{maxLength: 64}}
        />
        {/* <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item 1</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer> */}
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default MyAppBar;
