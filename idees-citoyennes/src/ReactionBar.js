import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
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
          checkedIcon={<Visibility />}
          uncheckedIcon={<VisibilityOff />}
          label="Autre action"
          style={styles.checkbox}
        />
        <Checkbox
          label="Action"
          style={styles.checkbox}
        />
      </div>
    );
  }
}

export default ReactionBar;