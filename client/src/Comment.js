import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Account from 'material-ui/svg-icons/action/account-circle';

class Comment extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          expanded: true,
        };
      }
    
      handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
      };
    
      handleToggle = (event, toggle) => {
        this.setState({expanded: toggle});
      };
    
      handleExpand = () => {
        this.setState({expanded: true});
      };
    
      handleReduce = () => {
        this.setState({expanded: false});
      };
    
    render(){
        return(
                <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                    <CardHeader
                        title="Utilisateur"
                        subtitle="Tag"
                        avatar={<Account />}
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText expandable={true}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                </Card>
              );
    }
}

export default Comment;