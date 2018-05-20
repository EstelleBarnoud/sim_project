import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Filter1 from 'material-ui/svg-icons/image/filter-1';
import Filter2 from 'material-ui/svg-icons/image/filter-2';
import Filter3 from 'material-ui/svg-icons/image/filter-3';
import Filter4 from 'material-ui/svg-icons/image/filter-4';
import Filter5 from 'material-ui/svg-icons/image/filter-5';

const style = {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: "center",
    fontWeight: "bold"
  }  

class Nav extends React.Component
{
    render(){
        return(
                <div>
                    <Paper zDepth={2} style={{marginLeft: -20, marginTop: -20}}>
                        <List>
                            <ListItem primaryText="Top 5" style={style} />
                            <ListItem primaryText="Projet 1" leftIcon={<Filter1 />} />
                            <ListItem primaryText="Projet 2" leftIcon={<Filter2 />} />
                            <ListItem primaryText="Projet 3" leftIcon={<Filter3 />} />
                            <ListItem primaryText="Projet 4" leftIcon={<Filter4 />} />
                            <ListItem primaryText="Projet 5" leftIcon={<Filter5 />} />
                        </List>
                        <Divider />
                        <List>
                            <ListItem primaryText="Nouveau" style={style} />
                            <ListItem primaryText="Projet 1" leftIcon={<Filter1 />} />
                            <ListItem primaryText="Projet 2" leftIcon={<Filter2 />} />
                            <ListItem primaryText="Projet 3" leftIcon={<Filter3 />} />
                            <ListItem primaryText="Projet 4" leftIcon={<Filter4 />} />
                            <ListItem primaryText="Projet 5" leftIcon={<Filter5 />} />
                        </List>
                        <Divider />
                        <List>
                            <ListItem primaryText="Les + inspirants" style={style} />
                            <ListItem primaryText="Projet 1" leftIcon={<Filter1 />} />
                            <ListItem primaryText="Projet 2" leftIcon={<Filter2 />} />
                            <ListItem primaryText="Projet 3" leftIcon={<Filter3 />} />
                            <ListItem primaryText="Projet 4" leftIcon={<Filter4 />} />
                            <ListItem primaryText="Projet 5" leftIcon={<Filter5 />} />
                        </List>
                    </Paper>
                </div>
              );
    }
}

export default Nav;
