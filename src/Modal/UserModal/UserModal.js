import React, { Component } from 'react';
import Modal from '../Modal';
import { FaUser } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import './UserModal.scss';
import { Link } from 'react-router-dom';

class UserModal extends Component {
  renderContent = () => {
    return (
      <div className="modal-user__content">
        <div className="modal-top">
          <div className="modal-avatar">
            <FaUser />
          </div>
          <h3 className="modal-name">Chris Martin</h3>
        </div>

        <div className="modal-bottom">
          <ul className="list">
            <li className="list__item">
              <Link to="/" className="list__item-link">
                <span className="list__item-icon">
                  <MdHome />
                </span>
                <p>home</p>
              </Link>
            </li>
            <li className="list__item">
              <Link
                to="/watchlist"
                className="list__item-link"
                onClick={this.props.closeModal}
              >
                <span className="list__item-icon">
                  <MdHome />
                </span>
                <p>Watchlist</p>
              </Link>
            </li>
            <li className="list__item">
              <Link
                to="/signup"
                className="list__item-link"
                onClick={this.props.closeModal}
              >
                <span className="list__item-icon">
                  <MdHome />
                </span>
                <p>Sign up</p>
              </Link>
            </li>
            <li className="list__item">
              <Link to="/" className="list__item-link">
                <span className="list__item-icon">
                  <MdHome />
                </span>
                <p>grate</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  render() {
    return (
      <Modal
        className="modal-user"
        modalContent={this.renderContent()}
        closeModal={this.props.closeModal}
      />
    );
  }
}
export default UserModal;
