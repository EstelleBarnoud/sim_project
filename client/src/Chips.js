import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import SvgIconPeople from 'material-ui/svg-icons/social/people';
import SvgIconPublic from 'material-ui/svg-icons/social/public';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

const styles = {
    chip: {
      margin: 4,
    },
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: 25
    },
  };

class Chips extends React.Component {

    render() {
        return (
            <div style={styles.wrapper}>
                <Chip
                    style={styles.chip}
                >
                    <Avatar color="#444" icon={<SvgIconPublic />} />
                    Environnement
                </Chip>
                <Chip
                    style={styles.chip}
                >
                    <Avatar color="#444" icon={<SvgIconPeople />} />
                    Solidarité
                </Chip>
                <Chip
                    style={styles.chip}
                >
                    <Avatar color="#444" icon={<ActionFavoriteBorder />} />
                    Santé
                </Chip>
            </div>
        );
    }
}

export default Chips;