import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import MovieModal from '../Modal/MovieModal/MovieModal';
import * as fetcher from '../fetcher';
import './SideBarNews.scss';
import '../Scroll/scroll.scss';
import MovieList from '../MovieList/MovieList';

class SideBarNews extends Component {
  state = {
    upcomingtMovie: [],
    foundMovie: null,
    isModalOpen: false,
  };

  async componentDidMount() {
    const resupcomingtMovie = await fetcher.fetchUpcomingMovies();

    this.setState({
      upcomingtMovie: resupcomingtMovie.data.results,
    });
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  handleClick = (movieId) => {
    const { upcomingtMovie } = this.state;
    const foundMovie = upcomingtMovie.find((movie) => movie.id === movieId);

    this.setState({
      isModalOpen: true,
      foundMovie,
    });
  };

  render() {
    return (
      <div className="sideBarNews">
        <h2 className="sideBarNews__heading">Upcoming movie</h2>
        <MovieList
          searchMovie={this.state.upcomingtMovie}
          handleClick={this.handleClick}
        />
        {this.state.isModalOpen && (
          <MovieModal
            foundMovie={this.state.foundMovie}
            closeModal={this.closeModal}
          />
        )}
        })}
      </div>
    );
  }
}

export default SideBarNews;
