import React, { Component } from 'react';
import './TopBar.scss';

class TopBar extends Component {
  render() {
    return (
      <div className="topBar">
        <div className="logo-wrapper">
          <div className="logo-wrapper__logo">Logo</div>
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
              <a href="#">Movies</a>
            </li>
            <li className="nav__item">
              <a href="#">TV Shows</a>
            </li>
            <li className="nav__item">
              <a href="#">Watchlist</a>
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
