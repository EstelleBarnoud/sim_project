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
// import NavigationClose from 'material-ui/svg-icons/navigation/close';
import './App.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.signin = this.signin.bind(this)
  }
  
  static muiName = 'FlatButton';

  signin = () => {
    console.log("Connexion Request");
  };

  render() {
    return (
      <FlatButton {...this.props} label="Se connecter" onClick={this.signin} />
    );
  }
}

const Logged = (props) => (
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
  
  redirect = () => console.log("Redirection request");

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
          title="Idées Citoyennes"
          iconElementLeft={<div style={{height: 45, width: '100%', paddingRight: 15, paddingLeft: 15}}><img src={require('./image/icon.png')} alt="" /></div>}
          // onLeftIconButtonTouchTap={this.handleToggle}
          onLeftIconButtonClick={this.handleToggle}
          onTitleClick={this.redirect}
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
      </div>
    );
  }
}

export default MyAppBar;
