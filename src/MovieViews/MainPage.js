import React, { Component } from 'react';
import * as fetcher from '../fetcher';
import MovieList from '../MovieList/MovieList';
import MovieModal from '../Modal/MovieModal/MovieModal';
import Slider from '../Slider/Slider';

class MainPage extends Component {
  state = {
    topMovie: [],
    bestMovie: [],
    searchMovieAndTv: [],
    isModalOpen: false,
    isModlUserOpen: false,
    foundMovie: null,
    page: 0,
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
      page: this.state.page + 1,
    });
  }

  handleLoadMore = async () => {
    const resSearchMovie = await fetcher.fetchAllMoviesAndTvShows(
      this.props.keyword,
      this.state.page + 1
    );

    this.setState({
      searchMovieAndTv: this.state.searchMovieAndTv.concat(
        resSearchMovie.data.results
      ),
      page: this.state.page + 1,
    });
  };

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
    const { activeGeners, activeLanguages } = this.props;
    const { searchMovieAndTv } = this.state;

    let moviesToRender = searchMovieAndTv;

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

    const isAnyActiveFilter = !!activeGeners.length || !!activeLanguages.length;

    return (
      <div>
        {!isAnyActiveFilter && searchMovieAndTv.length === 0 && (
          <>
            <Slider
              handleClick={this.handleClick}
              movies={this.state.topMovie}
              heading="Top Movie"
            />
            <Slider
              handleClick={this.handleClick}
              movies={this.state.bestMovie}
              heading="Best Movie"
            />
          </>
        )}

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
      </div>
    );
  }
}

export default MainPage;
