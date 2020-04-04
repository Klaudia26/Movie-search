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
      {!props.hideRating && <p>{props.movie.vote_average}</p>}
      <p>{props.release}</p>
    </li>
  );
};

export default MovieItem;
