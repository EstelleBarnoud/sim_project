import React from 'react';

const styles = {
    content: {
        width: '100%',
        maxWidth: 700,
        padding: 25,
        display: "flex"
    },
    list: {
        paddingLeft: 70
    },
    item: {
        padding: 10
    }
}

class Goals extends React.Component
{
    render(){
        return(
                <div style={styles.content}>
                    <h2>Objectifs</h2>
                    <ul style={styles.list}>
                        <li style={styles.item}>Purifier l'air de Paris en réduisant l'empreinte carbone</li>
                        <li style={styles.item}>Encourager la culture collective</li>
                        <li style={styles.item}>Aider à manger plus sain et plus abordable</li>
                    </ul> 
                </div>
              );
    }
}

export default Goals;
