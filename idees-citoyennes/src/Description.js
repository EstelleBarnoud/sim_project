import React from 'react';

const style = {
    width: '100%',
    maxWidth: 700,
    padding: 25
}

class Description extends React.Component
{
    render(){
        return(
                <div style={style}>
                    <h2>Descriptif</h2>
                    <p>Décriver votre projet en quelques mots</p>
                </div>
              );
    }
}

export default Description;
