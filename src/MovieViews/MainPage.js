import React, { Component } from 'react';
import * as fetcher from '../fetcher';
import MovieList from '../MovieList/MovieList';
import MovieModal from '../Modal/MovieModal/MovieModal';

class MainPage extends Component {
  state = {
    topMovie: [],
    bestMovie: [],
    searchMovieAndTv: [],
    isModalOpen: false,
    isModlUserOpen: false,
    foundMovie: null,
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

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  handleClick = (movieId) => {
    const { searchMovieAndTv, topMovie, bestMovie } = this.state;
    const foundMovie = [...searchMovieAndTv, ...topMovie, ...bestMovie].find(
      (movie) => movie.id === movieId
    );
    this.setState({
      isModalOpen: true,
      foundMovie: foundMovie,
    });
  };

  render() {
    return (
      <div>
        <MovieList
          topMovie={this.state.topMovie}
          bestMovie={this.state.bestMovie}
          searchMovie={this.state.searchMovieAndTv}
          handleClick={this.handleClick}
        />
        {this.state.isModalOpen && (
          <MovieModal
            closeModal={this.closeModal}
            foundMovie={this.state.foundMovie}
          />
        )}
      </div>
    );
  }
}

export default MainPage;
