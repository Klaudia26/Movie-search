import React, { Component } from 'react';
import * as fetcher from '../fetcher';
import MovieList from '../MovieList/MovieList';
import MovieModal from '../Modal/MovieModal/MovieModal';
import './MovieViews.scss';

class MoviePage extends Component {
  state = {
    searchMovie: [],
    isModalOpen: false,
    foundMovie: null,
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

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  handleClick = (movieId) => {
    const { searchMovie } = this.state;
    const foundMovie = [...searchMovie].find((movie) => movie.id === movieId);
    this.setState({
      isModalOpen: true,
      foundMovie: foundMovie,
    });
  };

  render() {
    return (
      <div>
        <MovieList
          searchMovie={this.state.searchMovie}
          handleClick={this.handleClick}
        />
        {this.state.isModalOpen && (
          <MovieModal
            closeModal={this.closeModal}
            foundMovie={this.state.foundMovie}
            addMovieToWatchMovie={this.props.addMovieToWatchMovie}
          />
        )}
      </div>
    );
  }
}

export default MoviePage;
