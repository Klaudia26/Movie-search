import React, { Component } from 'react';
import MovieList from '../MovieList/MovieList';
import './WatchlistPage.scss';

class WatchlistPage extends Component {
  render() {
    return (
      <main className="watchList main">
        <h2>Watchlist</h2>
        <MovieList
          searchMovie={this.props.movieWatchList}
          handleClick={() => {}}
        />
      </main>
    );
  }
}

export default WatchlistPage;
