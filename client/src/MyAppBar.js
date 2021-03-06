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
import SearchBar from 'material-ui-search-bar';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
// import NavigationClose from 'material-ui/svg-icons/navigation/close';
import './App.css';
import {white} from 'material-ui/styles/colors';
import {Link} from 'react-router-dom';

const styles = {
  right: {
    display: "flex"
  },
  log: {
    height: 45, width: '100%',
    paddingRight: 15,
    paddingLeft: 15,
    display: "flex",
  },
  search: {
    margin: '0 auto',
    marginRight: 10,
    maxWidth: 400
  },
  badge: {
    marginTop: -35
  },
  menu: {
    paddingRight: 15
  },
  toggle: {
    margin: 20
  },
  title: {
    color: "currentcolor",
    textDecoration: "none",
    outline: "none",
    fontFamily: "Georgia"
  },
  img: {
    height: 45,
    width: '100%',
    paddingRight: 15,
    paddingLeft: 15
  },
  appbar: {
    maxLength: 64
  }
};

class Login extends Component {
  
  static muiName = 'FlatButton';

  render() {
    return (
      <div style={styles.right}>
        <SearchBar
          onChange={() => console.log('onChange')}
          onRequestSearch={() => console.log('onRequestSearch')}
          style={styles.search}
        />
        <Link to="/signup">
          <FlatButton {...this.props} label="S'inscrire" />
        </Link>
        <Link to="/signin">
          <FlatButton {...this.props} label="Se connecter" />
        </Link>
      </div>
    );
  }
}

function showNotif(){
  console.log("Notification Request");
};

const Logged = (props) => (
  <div style={styles.log}>
      <SearchBar
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
        style={styles.search}
      />
      <Badge
        badgeContent={10}
        secondary={true}
        badgeStyle={{top: 35, right: 22}}
        style={styles.badge}
      >
        <IconMenu
          {...props}
          iconButtonElement={
            <IconButton>
              <IconButton tooltip="Notifications" onClick={showNotif}>
                <NotificationsIcon color={white} />
              </IconButton>
            </IconButton>
          }
          targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          style={styles.menu}
        >
          <MenuItem primaryText="Notification 1" />
          <MenuItem primaryText="Notification 2" />
          <MenuItem primaryText="Notification 3" />
          <MenuItem primaryText="Notification 4" />
        </IconMenu>
      </Badge>
      <IconMenu
        {...props}
        iconButtonElement={
          <IconButton><Account /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        style={styles.menu}
      >
        <Link to="/my-account" style={styles.title}>
          <MenuItem primaryText="Mon compte" />
        </Link>
        <Link to="/settings" style={styles.title}>
          <MenuItem primaryText="Paramètres" />
        </Link>
        <Link to="/about-us" style={styles.title}>
          <MenuItem primaryText="A propos" />
        </Link>
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
          style={styles.toggle}
        />
        <AppBar
          title={<Link to="/" style={styles.title}>Idées Citoyennes</Link>}
          iconElementLeft={<div style={styles.img}><img src={require('./images/icon.png')} alt="" /></div>}
          // onLeftIconButtonTouchTap={this.handleToggle}
          onLeftIconButtonClick={this.handleToggle}
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
          style={styles.appbar}
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
