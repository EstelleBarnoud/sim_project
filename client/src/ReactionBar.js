import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Loop from 'material-ui/svg-icons/av/loop';
import Share from 'material-ui/svg-icons/social/share';
import Warning from 'material-ui/svg-icons/alert/error-outline';
import './App.css';

const styles = {
  block: {
    maxWidth: 2500,
    paddingRight: 10
  },
  checkbox: {
    marginBottom: 16,
  },
  warning: {
    marginBottom: 16,
    marginLeft: 100
  }
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
        <Checkbox
          checkedIcon={<Warning />}
          uncheckedIcon={<Warning />}
          label="Signaler"
          style={styles.warning}
        />
      </div>
    );
  }
}

export default ReactionBar;