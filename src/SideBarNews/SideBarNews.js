import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './SideBarNews.scss';

class SideBarNews extends Component {
  render() {
    return (
      <div className="sideBarNews">
        <h2 className="sideBarNews__heading">Upcoming movie</h2>
        <ul className="sideBarNews__list">
          {this.props.movies.map((movie, i) => {
            if (i > 3) {
              return;
            }
            return (
              <MovieItem
                movie={movie}
                release={movie.release_date}
                hideRating
                key={movie.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SideBarNews;
