import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Loop from 'material-ui/svg-icons/av/loop';
import Share from 'material-ui/svg-icons/social/share';
import './App.css';

const styles = {
  block: {
    maxWidth: 2500,
  },
  checkbox: {
    marginBottom: 16,
  },
};

class ReactionBar extends React.Component {
  state = {
    checked: false,
  }

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  render() {
    return (
      <div className="App" style={styles.block}>
        <Checkbox
          checkedIcon={<ActionFavorite />}
          uncheckedIcon={<ActionFavoriteBorder />}
          label="J'aime"
          style={styles.checkbox}
        />
        <Checkbox
          checkedIcon={<Loop />}
          uncheckedIcon={<Loop />}
          label="Suivre"
          style={styles.checkbox}
        />
        <Checkbox
          checkedIcon={<Share />}
          uncheckedIcon={<Share />}
          label="Partager"
          style={styles.checkbox}
        />
      </div>
    );
  }
}

export default ReactionBar;