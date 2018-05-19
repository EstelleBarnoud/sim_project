import React from 'react';

class Description extends React.Component
{
    render(){
        return(
                <div style={{width: '100%', maxWidth: 700, padding: 25}}>
                    <h2>Enoncé</h2>
                    <p>Décriver votre projet en quelques mots</p>
                </div>
              );
    }
}

export default Description;
