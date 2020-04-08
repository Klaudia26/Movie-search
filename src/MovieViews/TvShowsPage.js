import React, { Component } from 'react';
import * as fetcher from '../fetcher';
import MovieList from '../MovieList/MovieList';
import MovieModal from '../Modal/MovieModal/MovieModal';
import './MovieViews.scss';

class MovieViews extends Component {
  state = {
    searchMovie: [],
    foundMovie: null,
  };
  async componentDidMount() {
    const keyword = this.props.keyword;
    if (!keyword) {
      const resBestMovie = await fetcher.fetchTvPopular();
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
    const resSearchMovie = await fetcher.fetchTvShows(keyword);
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
      <div className="scrollWrapper">
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

export default MovieViews;
