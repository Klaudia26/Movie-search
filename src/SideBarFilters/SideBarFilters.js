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
        <h2 className="sideBarFilters__heading">Genre</h2>
        <ul>
          {this.state.genres.map((genre) => {
            return (
              <li key={genre.id} className="list__item">
                <label className="label">
                  <input
                    type="checkbox"
                    checked={this.props.activeFilters.includes(genre.id)}
                    onChange={() => this.props.handelFilter(genre.id)}
                    className="input"
                  />
                  <span class="checkmark"></span>
                  {genre.name}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SideBarFilters;
