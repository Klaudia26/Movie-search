import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GoDeviceCameraVideo } from 'react-icons/go';
import './TopBar.scss';
class TopBar extends Component {
  render() {
    return (
      <div className="topBar">
        <div className="logo-wrapper">
          <div className="logo-wrapper__logo">
            <GoDeviceCameraVideo />
          </div>
        </div>

        <div className="search-wrapper">
          <input
            onChange={this.props.handleChange}
            value={this.props.keyword}
            name="keyword"
            placeholder="Search any movies or tv shows"
            className="search-wrapper__search"
          />
        </div>

        <div className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/movies">Movies</Link>
            </li>
            <li className="nav__item">
              <Link to="/tvshows">TV Shows</Link>
            </li>
            <li className="nav__item">
              <Link to="/watchlist">Watchlist</Link>
            </li>
            <li className="nav__item">
              <a href="#">
                <img alt="avatar" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TopBar;
