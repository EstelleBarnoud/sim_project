import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Account from 'material-ui/svg-icons/action/account-circle';
import Comment from './Comment';

class Reactions extends React.Component
{
    render(){
        return(
                <div style={{width: '100%', maxWidth: 700, padding: 25, display: "flex"}}>
                    <h2>Commentaires</h2>
                    <div style={{paddingLeft: 30}}>
                        <Comment />
                        <Comment />
                    </div>
                </div>
              );
    }
}

export default Reactions;