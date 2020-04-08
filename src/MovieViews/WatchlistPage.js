import React, { Component } from 'react';
import MovieList from '../MovieList/MovieList';
import './WatchlistPage.scss';

class WatchlistPage extends Component {
  render() {
    return (
      <div className="watchList">
        <MovieList
          searchMovie={this.props.movieWatchList}
          handleClick={() => {}}
        />
      </div>
    );
  }
}

export default WatchlistPage;
