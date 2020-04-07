import React from 'react';
import './MovieItem.scss';
import { MdStar } from 'react-icons/md';

const MovieItem = (props) => {
  return (
    <li
      key={props.movie.id}
      className="movieList__item"
      onClick={() => props.handleClick(props.movie.id)}
    >
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w200${props.movie.poster_path}`}
          alt="avatar"
          className="movieList__item-image"
        />
      </div>
      <p>{props.movie.title}</p>
      {!props.hideRating && (
        <p>
          <MdStar />
          {props.movie.vote_average}
        </p>
      )}
      <p>{props.release}</p>
    </li>
  );
};

export default MovieItem;
