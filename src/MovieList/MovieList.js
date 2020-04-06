import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.scss';

class MovieList extends Component {
  render() {
    return (
      <div className="movieList">
        <ul className="movieList__list">
          {this.props.searchMovie &&
            this.props.searchMovie.map((movie, i) => {
              return <MovieItem movie={movie} key={movie.id} />;
            })}
        </ul>
        {!this.props.searchMovie && (
          <div className="scrollWrapper">
            <h2 className="movieList__heading">topMovie</h2>
            <ul className="movieList__list">
              {this.props.topMovie &&
                this.props.topMovie.map((movie, i) => {
                  if (i > 3) {
                    return;
                  }
                  return <MovieItem movie={movie} key={movie.id} />;
                })}
            </ul>
            <h2 className="movieList__heading">bestMovie</h2>
            <ul className="movieList__list">
              {this.props.bestMovie &&
                this.props.bestMovie.map((movie, i) => {
                  if (i > 3) {
                    return;
                  }
                  return <MovieItem movie={movie} key={movie.id} />;
                })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default MovieList;
