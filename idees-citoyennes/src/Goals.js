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
                        <li style={styles.item}>Objectif 1</li>
                        <li style={styles.item}>Objectif 2</li>
                        <li style={styles.item}>Objectif 3</li>
                    </ul> 
                </div>
              );
    }
}

export default Goals;
