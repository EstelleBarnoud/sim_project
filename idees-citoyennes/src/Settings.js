import React from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  paper: {
      marginLeft: 30,
      marginBottom: 40
  }
};

const Settings = () => (
  <div style={styles.root}>
    <Paper style={styles.paper}>
      <List>
        <Subheader>Général</Subheader>
        <ListItem
          primaryText="Paramètre 1"
          secondaryText="Description du paramètre"
        />
        <ListItem
          primaryText="Paramètre 2"
          secondaryText="Description"
        />
      </List>
      <Divider />
      <List>
        <Subheader>Notifications</Subheader>
        <ListItem
          leftCheckbox={<Checkbox />}
          primaryText="Notifications"
          secondaryText="Autoriser les notifications"
        />
        <ListItem
          leftCheckbox={<Checkbox />}
          primaryText="Sons"
          secondaryText="Autoriser les sons"
        />
      </List>
    </Paper>
    <Paper style={styles.paper}>
      <List>
        <ListItem
          primaryText="Autre paramètre"
          secondaryText="Description"
        />
      </List>
      <Divider />
      <List>
        <Subheader>Email</Subheader>
        <ListItem
            primaryText="Recevoir des emails"
            secondaryText="Pas de spams ni de pubs, seulement des infos sur les projets que vous suivez"
            rightToggle={<Toggle />}
        />
        <ListItem primaryText="Paramètre email" rightToggle={<Toggle />} />
        <ListItem primaryText="Paramètre email 2" rightToggle={<Toggle />} />
      </List>
      <Divider />
      <List>
        <Subheader>Autre paramètre</Subheader>
        <ListItem primaryText="Paramètre 1" leftCheckbox={<Checkbox />} />
        <ListItem primaryText="Paramètre 2" leftCheckbox={<Checkbox />} />
        <ListItem primaryText="Paramètre 3" leftCheckbox={<Checkbox />} />
      </List>
    </Paper>
  </div>
);

export default Settings;