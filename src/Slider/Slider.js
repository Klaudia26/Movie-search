import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Slider.scss';

const Slider = (props) => {
  return (
    <div className="slider">
      <h2 className="slider__heading">{props.heading}</h2>
      <ul className="slider__list">
        {props.movies.map((movie) => {
          return (
            <MovieItem
              movie={movie}
              key={movie.id}
              handleClick={props.handleClick}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Slider;
