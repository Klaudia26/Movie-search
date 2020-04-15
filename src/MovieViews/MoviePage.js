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
    page: 0,
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

  componentDidUpdate(prevProps) {
    if (this.props.keyword !== prevProps.keyword) {
      this.searchMovie(this.props.keyword);
    }
  }

  async searchMovie(keyword) {
    const resSearchMovie = await fetcher.fetchSearchMovies(keyword);
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
    console.log('ll', this.state.page);
    const resSearchMovie = await fetcher.fetchSearchMovies(
      this.props.keyword,
      this.state.page + 1
    );
    console.log(resSearchMovie);

    this.setState({
      searchMovie: this.state.searchMovie.concat(resSearchMovie.data.results),
      page: this.state.page + 1,
    });
  };

  render() {
    let moviesToRender = this.state.searchMovie;
    const { activeGeners, activeLanguages } = this.props;
    activeGeners.length > 0 &&
      activeGeners.forEach((filterId) => {
        moviesToRender = moviesToRender.filter(
          (movie) =>
            (movie.genre_ids && movie.genre_ids.includes(filterId)) ||
            (movie.genre && movie.genre === filterId)
        );
      });
    activeLanguages.length > 0 &&
      activeLanguages.forEach((filterId) => {
        moviesToRender = moviesToRender.filter(
          (movie) =>
            movie.original_language && movie.original_language === filterId
        );
      });

    return (
      <main className="main">
        <h2>Movies</h2>
        <MovieList
          searchMovie={moviesToRender}
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

export default MoviePage;
