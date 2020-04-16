import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
          <NavLink to="/">
            <div className="logo-wrapper__logo">
              <GoDeviceCameraVideo />
            </div>
          </NavLink>
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
              <NavLink to="/movies" activeClassName="active">
                Movies
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/tvshows" activeClassName="active">
                TV Shows
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/watchlist" activeClassName="active">
                Watchlist
              </NavLink>
            </li>
            {this.props.user ? (
              <li className="nav__item" onClick={this.handleClick}>
                <span className="nav__item--user">
                  <FaUser />
                </span>
              </li>
            ) : (
              <li className="nav__item">
                <NavLink to="/signup" activeClassName="active">
                  Signup
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        {this.state.isModalUserOpen && (
          <UserModal closeModal={this.closeModal} name={this.state.user.name} />
        )}
      </div>
    );
  }
}

export default TopBar;
