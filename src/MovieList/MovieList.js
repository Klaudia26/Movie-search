import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.scss';
import ButtonLoadMore from '../ButtonLoadMore/ButtonLoadMore';

class MovieList extends Component {
  render() {
    return (
      <div className="movieList">
        <ul className="movieList__list">
          {this.props.searchMovie &&
            this.props.searchMovie.map((movie) => {
              return (
                <MovieItem
                  movie={movie}
                  key={movie.id}
                  handleClick={this.props.handleClick}
                />
              );
            })}
        </ul>

        {this.props.searchMovie && this.props.searchMovie.length > 0 && (
          <ButtonLoadMore handleLoadMore={this.props.handleLoadMore} />
        )}
      </div>
    );
  }
}

export default MovieList;
