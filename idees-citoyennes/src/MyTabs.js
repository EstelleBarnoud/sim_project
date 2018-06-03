import React from 'react';
import Grid from './Grid'
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

const styles = {
  swipe: {
    paddingLeft: 20
  },
  slide: {
    padding: 10
  },
};

class MyTabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          tabItemContainerStyle={{background: "#c7dada"}}
        >
          <Tab label="Les + populaires" value={0} />
          <Tab label="Nouveau" value={1} />
          <Tab label="Projets menés à bien" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
          style={styles.swipe}
        >
          <div style={styles.slides}>
            <Grid />
          </div>
          <div style={styles.slide}>
            <Grid />
          </div>
          <div style={styles.slide}>
            <Grid />
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default MyTabs;
