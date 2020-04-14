import React, { Component } from 'react';
import * as fetcher from '../fetcher';
import MovieList from '../MovieList/MovieList';
import MovieModal from '../Modal/MovieModal/MovieModal';
import './MovieViews.scss';

class MovieViews extends Component {
  state = {
    searchMovie: [],
    foundMovie: null,
    page: 0,
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

  componentDidUpdate(prevProps) {
    if (this.props.keyword !== prevProps.keyword) {
      this.searchMovie(this.props.keyword);
    }
  }

  async searchMovie(keyword) {
    const resSearchMovie = await fetcher.fetchTvShows(keyword);
    this.setState({
      searchMovie: resSearchMovie.data.results,
      page: this.state.page + 1,
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

  handleLoadMore = async () => {
    const resSearchMovie = await fetcher.fetchTvShows(
      this.props.keyword,
      this.state.page + 1
    );

    this.setState({
      searchMovie: this.state.searchMovie.concat(resSearchMovie.data.results),
      page: this.state.page + 1,
    });
  };

  render() {
    return (
      <main className="tvShowPage main">
        <MovieList
          searchMovie={this.state.searchMovie}
          handleClick={this.handleClick}
          handleLoadMore={this.handleLoadMore}
        />

        {this.state.isModalOpen && (
          <MovieModal
            closeModal={this.closeModal}
            foundMovie={this.state.foundMovie}
            addMovieToWatchMovie={this.props.addMovieToWatchMovie}
          />
        )}
      </main>
    );
  }
}

export default MovieViews;
