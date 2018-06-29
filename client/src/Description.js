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
                    <p>Venez aider à planter toutes sortes de végétaux dans les rues de Paris ! Plantes aromatiques, arbres fruitiers, et légumes au pied de chez vous, c'est possible dans la capitale.</p>
                </div>
              );
    }
}

export default Description;
