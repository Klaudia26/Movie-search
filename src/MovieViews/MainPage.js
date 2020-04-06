import React, { Component } from 'react';
import * as fetcher from '../fetcher';
import MovieList from '../MovieList/MovieList';

class MainPage extends Component {
  state = {
    topMovie: [],
    bestMovie: [],
    searchMovieAndTv: [],
  };

  async componentDidMount() {
    const resTopMovie = await fetcher.fetchTopMovies();
    const resBestMovie = await fetcher.fetchBestMovies();

    this.setState({
      topMovie: resTopMovie.data.results,
      bestMovie: resBestMovie.data.results,
    });
  }

  componentDidUpdate(prevProps) {
    console.log('this.props.keyword', this.props.keyword);
    console.log('prevProps.keyword', prevProps.keyword);

    if (this.props.keyword !== prevProps.keyword) {
      this.fetchAllMoviesAndTvShows(this.props.keyword);
    }
  }

  async fetchAllMoviesAndTvShows(keyword) {
    const resSearchMovie = await fetcher.fetchAllMoviesAndTvShows(keyword);
    this.setState({
      searchMovieAndTv: resSearchMovie.data.results,
    });
  }

  render() {
    return (
      <div>
        <MovieList
          topMovie={this.state.topMovie}
          bestMovie={this.state.bestMovie}
          searchMovie={this.state.searchMovieAndTv}
        />
      </div>
    );
  }
}

export default MainPage;
