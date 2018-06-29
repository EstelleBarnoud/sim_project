import React from 'react';
import Chips from './Chips';

class Title extends React.Component
{
    render(){
        return(
                <div>
                    <h1>Paris, la ville verte !</h1>
                    <Chips />
                </div>
              );
    }
}

export default Title;