import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { FaUser } from 'react-icons/fa';
import UserModal from '../Modal/UserModal/UserModal';
import './TopBar.scss';
class TopBar extends Component {
  state = {
    isModalUserOpen: false,
  };

  closeModal = () => {
    this.setState({
      isModalUserOpen: false,
    });
  };

  handleClick = () => {
    this.setState({
      isModalUserOpen: true,
    });
  };

  render() {
    return (
      <div className="topBar">
        <div className="logo-wrapper">
          <Link to="/">
            <div className="logo-wrapper__logo">
              <GoDeviceCameraVideo />
            </div>
          </Link>
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
            <li className="nav__item" onClick={this.handleClick}>
              <a href="#" className="nav__item--user">
                <FaUser />
              </a>
            </li>
          </ul>
        </div>

        {this.state.isModalUserOpen && (
          <UserModal closeModal={this.closeModal} />
        )}
      </div>
    );
  }
}

export default TopBar;
