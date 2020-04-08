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
              return (
                <MovieItem
                  movie={movie}
                  key={movie.id}
                  handleClick={this.props.handleClick}
                />
              );
            })}
        </ul>

        {this.props.searchMovie.length === 0 &&
          this.props.topMovie &&
          this.props.bestMovie && (
            <div>
              <h2 className="movieList__heading">topMovie</h2>
              <ul className="movieList__list">
                {this.props.topMovie.map((movie, i) => {
                  if (i > 3) {
                    return;
                  }
                  return (
                    <MovieItem
                      movie={movie}
                      key={movie.id}
                      handleClick={this.props.handleClick}
                    />
                  );
                })}
              </ul>

              <h2 className="movieList__heading">bestMovie</h2>
              <ul className="movieList__list">
                {this.props.bestMovie.map((movie, i) => {
                  if (i > 3) {
                    return;
                  }
                  return (
                    <MovieItem
                      movie={movie}
                      key={movie.id}
                      handleClick={this.props.handleClick}
                    />
                  );
                })}
              </ul>
            </div>
          )}
      </div>
    );
  }
}

export default MovieList;
