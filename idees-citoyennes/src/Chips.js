import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import SvgIconFace from 'material-ui/svg-icons/action/face';

const styles = {
    chip: {
      margin: 4,
    },
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  };
  
function handleReduce() {
    alert('You clicked the delete button.');
}
  
function handleExpand() {
    alert('You clicked the Chip.');
}

class Chips extends React.Component {

    render() {
        return (
            <div style={styles.wrapper}>
                <Chip
                    onRequestDelete={handleReduce}
                    onClick={handleExpand}
                    style={styles.chip}
                >
                    <Avatar color="#444" icon={<SvgIconFace />} />
                    SvgIcon Avatar Chip
                </Chip>
            </div>
        );
    }
}

export default Chips;