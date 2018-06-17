import React from 'react';
import Paper from 'material-ui/Paper';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import Account from 'material-ui/svg-icons/action/account-circle';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Link} from 'react-router-dom';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: 20
  },
  paper: {
    marginLeft: 30,
    marginBottom: 40,
  },
  menu: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  item: {
      paddingLeft: 10
  },
  content: {
    paddingLeft: 40
  },
  add: {
    display: 'flex',
    width: 800
  },
  button: {
    padding: 10,
  }
};

const MyAccount = () => (
  <div style={styles.root}>    
    <Paper style={styles.paper}>
        <List>
            <ListItem
                disabled={true}
                leftAvatar={
                    <Avatar icon={<Account />} />
                }
                style={styles.menu}
                >
                Nom utilisateur
            </ListItem>
            <Divider />
            <ListItem style={styles.item} primaryText="Mes Projets" />
            <ListItem style={styles.item} primaryText="Mes coups de coeur" />
            <ListItem style={styles.item} primaryText="Suivis" />
            <ListItem style={styles.item} primaryText="Partagés" />
        </List>
    </Paper>
    <div style={styles.content}>
        <div style={styles.add}>
            <Link to="/create-new-project">
                <RaisedButton
                  target="_blank"
                  label="Ajouter un projet"
                  //style={styles.button}
                  icon={<ContentAdd />}
                />
            </Link>
        </div>
    </div>
  </div>
);

export default MyAccount;