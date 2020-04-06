import React, { Component } from 'react';
import * as fetcher from '../fetcher';
import MovieList from '../MovieList/MovieList';
import './MovieViews.scss';

class MoviePage extends Component {
  state = {
    searchMovie: [],
  };
  async componentDidMount() {
    const keyword = this.props.keyword;
    if (!keyword) {
      const resBestMovie = await fetcher.fetchBestMovies();
      this.setState({
        searchMovie: resBestMovie.data.results,
      });
      return;
    }

    this.searchMovie(keyword);
  }

  componentDidUpdate() {
    this.searchMovie(this.props.keyword);
  }

  async searchMovie(keyword) {
    const resSearchMovie = await fetcher.fetchSearchMovies(keyword);
    this.setState({
      searchMovie: resSearchMovie.data.results,
    });
  }
  render() {
    return (
      <div className="scrollWrapper">
        <MovieList searchMovie={this.state.searchMovie} />
      </div>
    );
  }
}

export default MoviePage;
