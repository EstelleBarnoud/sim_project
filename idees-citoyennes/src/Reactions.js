import React from 'react';
import Comment from './Comment';

const styles = {
    react: {
        width: '100%',
        maxWidth: 700,
        padding: 25,
        display: "flex"
    },
    comment: {
        paddingLeft: 30
    }
}

class Reactions extends React.Component
{
    render(){
        return(
                <div style={styles.react}>
                    <h2>Commentaires</h2>
                    <div style={styles.comment}>
                        <Comment />
                        <Comment />
                    </div>
                </div>
              );
    }
}

export default Reactions;