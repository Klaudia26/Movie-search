import React, { Component } from 'react';
import './MovieList.scss';

class MovieList extends Component {
  render() {
    return (
      <div className="movieList">
        <div className="movieList__wrapper">
          <h2 className="movieList__heading">Weekly Top Rated Movies</h2>
          <ul className="movieList__list">
            {this.props.topMovie.map((movie, i) => {
              if (i > 3) {
                return;
              }
              return (
                <li key={movie.id} className="movieList__item">
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt="avatar"
                    />
                  </div>
                  <p>{movie.title}</p>
                  <p>{movie.vote_average}</p>
                </li>
              );
            })}
          </ul>

          <h2 className="movieList__heading">
            Weekly Top Rated Bollywood Movies
          </h2>
          <ul className="movieList__list">
            {this.props.bestMovie.map((movie, i) => {
              if (i > 3) {
                return;
              }
              return (
                <li key={movie.id} className="movieList__item">
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt="avatar"
                    />
                  </div>
                  <p>{movie.title}</p>
                  <p>{movie.vote_average}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default MovieList;
