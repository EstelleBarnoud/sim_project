import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Subheader from 'material-ui/Subheader';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: 1100,
    marginTop: 10,
    marginLeft: 72
  },
  gridList: {
    width: '100%',
    overflowY: 'auto'
  },
  img: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    width: "100%"
  },
  checkbox: {
    color: 'white'
  }
};

const tilesData = [
  {
    id: 1,
    img: require('./images/ravi-roshan-383162-unsplash.jpg'),
    title: 'Projet 1',
    author: 'jill111',
  },
  {
    id: 2,
    img: require('./images/tiffany-nutt-400385-unsplash.jpg'),
    title: 'Projet 2',
    author: 'pashminu',
  },
  {
    id: 3,
    img: require('./images/daria-nepriakhina-21928-unsplash.jpg'),
    title: 'Projet 3',
    author: 'Danson67',
  },
  {
    id: 4,
    img: require('./images/markus-spiske-624932-unsplash.jpg'),
    title: 'Projet 4',
    author: 'fancycrave1',
  },
  {
    id: 5,
    img: require('./images/rawpixel-603653-unsplash.jpg'),
    title: 'Projet 5',
    author: 'Hans',
  },
  {
    id: 6,
    img: require('./images/bruce-mars-559226-unsplash.jpg'),
    title: 'Projet 6',
    author: 'fancycravel',
  },
  {
    id: 7,
    img: require('./images/dane-deaner-411531-unsplash.jpg'),
    title: 'Projet 7',
    author: 'jill111',
  },
  {
    id: 8,
    img: require('./images/gary-chan-351213-unsplash.jpg'),
    title: 'Projet 8',
    author: 'BkrmadtyaKarki',
  },
];

const Grid = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={300}
      padding={15}
      style={styles.gridList}
    >
      <Subheader>Spring</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.id}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<Checkbox
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            iconStyle={{fill: 'white'}}
            style={styles.checkbox}
          />}
        >
            <Link to="/project">
                <img src={tile.img} alt="" style={styles.img} />
            </Link>
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default Grid;
