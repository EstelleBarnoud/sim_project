import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Filter_1 from 'material-ui/svg-icons/image/filter-1';
import Filter_2 from 'material-ui/svg-icons/image/filter-2';
import Filter_3 from 'material-ui/svg-icons/image/filter-3';
import Filter_4 from 'material-ui/svg-icons/image/filter-4';
import Filter_5 from 'material-ui/svg-icons/image/filter-5';
import styled from "styled-components";

const StyledListItem = styled(ListItem)`
    padding-left: 70 !important;
    padding-right: 70 !important;
    text-align: "center" !important;
    font-weight: "bold" !important;
`;

class Nav extends React.Component
{
    render(){
        return(
                <div>
                    <Paper zDepth={2} style={{marginLeft: -20, marginTop: -20}}>
                        <List>
                            <StyledListItem primaryText="Top 5" />
                            <ListItem primaryText="Projet 1" leftIcon={<Filter_1 />} />
                            <ListItem primaryText="Projet 2" leftIcon={<Filter_2 />} />
                            <ListItem primaryText="Projet 3" leftIcon={<Filter_3 />} />
                            <ListItem primaryText="Projet 4" leftIcon={<Filter_4 />} />
                            <ListItem primaryText="Projet 5" leftIcon={<Filter_5 />} />
                        </List>
                        <Divider />
                        <h3>Nouveau</h3>
                        <List>
                            <ListItem primaryText="Projet 1" leftIcon={<Filter_1 />} />
                            <ListItem primaryText="Projet 2" leftIcon={<Filter_2 />} />
                            <ListItem primaryText="Projet 3" leftIcon={<Filter_3 />} />
                            <ListItem primaryText="Projet 4" leftIcon={<Filter_4 />} />
                            <ListItem primaryText="Projet 5" leftIcon={<Filter_5 />} />
                        </List>
                        <Divider />
                        <h3>Les + inspirants</h3>
                        <List>
                            <ListItem primaryText="Projet 1" leftIcon={<Filter_1 />} />
                            <ListItem primaryText="Projet 2" leftIcon={<Filter_2 />} />
                            <ListItem primaryText="Projet 3" leftIcon={<Filter_3 />} />
                            <ListItem primaryText="Projet 4" leftIcon={<Filter_4 />} />
                            <ListItem primaryText="Projet 5" leftIcon={<Filter_5 />} />
                        </List>
                    </Paper>
                </div>
              );
    }
}

export default Nav;
