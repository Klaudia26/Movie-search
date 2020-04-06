import React, { Component } from 'react';
import * as fetcher from '../fetcher';
import MovieList from '../MovieList/MovieList';

class MainPage extends Component {
  state = {
    topMovie: [],
    bestMovie: [],
  };

  async componentDidMount() {
    const resTopMovie = await fetcher.fetchTopMovies();
    const resBestMovie = await fetcher.fetchBestMovies();

    this.setState({
      topMovie: resTopMovie.data.results,
      bestMovie: resBestMovie.data.results,
    });
  }

  render() {
    return (
      <div>
        <MovieList
          topMovie={this.state.topMovie}
          bestMovie={this.state.bestMovie}
        />
      </div>
    );
  }
}

export default MainPage;
