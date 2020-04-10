import React, { Component } from 'react';
import * as fetcher from '../fetcher';
import './SideBarFilters.scss';

class SideBarFilters extends Component {
  state = {
    genres: [],
  };

  async componentDidMount() {
    const resGenre = await fetcher.fetchGenre();

    this.setState({
      genres: resGenre.data.genres,
    });
  }

  render() {
    return (
      <div className="sideBarFilters">
        <h2>Genre</h2>
        <ul>
          {this.state.genres.map((genre) => {
            return (
              <li
                key={genre.id}
                onClick={() => this.props.handelFilter(genre.id)}
              >
                {genre.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SideBarFilters;
