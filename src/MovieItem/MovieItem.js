import React from 'react';
import './MovieItem.scss';

const MovieItem = (props) => {
  return (
    <li key={props.movie.id} className="movieList__item">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w200${props.movie.poster_path}`}
          alt="avatar"
        />
      </div>
      <p>{props.movie.title}</p>
      <p>{props.movie.vote_average}</p>
    </li>
  );
};

export default MovieItem;
