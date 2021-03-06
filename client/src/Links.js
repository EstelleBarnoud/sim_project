import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Link from 'material-ui/svg-icons/content/link';

const styles = {
    list: {
        paddingLeft: 30,
        paddingRight: 30,
        textAlign: "center",
        fontWeight: "bold"
    },
    paper: {
        marginRight: -20,
        marginTop: -20
    }
  }  
class Links extends React.Component
{
    render(){
        return(
                <div>
                    <Paper zDepth={2} style={styles.paper}>
                        <List>
                            <ListItem primaryText="Sources" disabled={true} style={styles.list} />
                            <ListItem primaryText="Article 1" leftIcon={<Link />} />
                            <ListItem primaryText="Article 2" leftIcon={<Link />} />
                            <ListItem primaryText="Article 3" leftIcon={<Link />} />
                            <ListItem primaryText="Article 4" leftIcon={<Link />} />
                            <ListItem primaryText="Article 5" leftIcon={<Link />} />
                        </List>
                        <Divider />
                        <List>
                            <ListItem primaryText="Pour aller plus loin" disabled={true} style={styles.list} />
                            <ListItem primaryText="Article 1" leftIcon={<Link />} />
                            <ListItem primaryText="Article 2" leftIcon={<Link />} />
                            <ListItem primaryText="Article 3" leftIcon={<Link />} />
                            <ListItem primaryText="Article 4" leftIcon={<Link />} />
                            <ListItem primaryText="Article 5" leftIcon={<Link />} />
                        </List>
                    </Paper>
                </div>
              );
    }
}

export default Links;
