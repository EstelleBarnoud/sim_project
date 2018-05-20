import React from 'react';
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