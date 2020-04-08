import React, { Component } from 'react';
import Modal from '../Modal';
import { FaUser } from 'react-icons/fa';
import './UserModal.scss';

class MovieModal extends Component {
  renderContent = () => {
    return (
      <>
        <div className="modalContent-top">
          <div className="modal-avatar">
            <FaUser />
          </div>
          <h3 className="modal-name">Chris Martin</h3>
        </div>

        <div className="modalContent-bottom">
          <ul>
            <li>
              <a>
                <span>ikona</span>
                <p>home</p>
              </a>
            </li>
            <li>
              <a>
                <span>ikona</span>
                <p>profile</p>
              </a>
            </li>
            <li>
              <a>
                <span>ikona</span>
                <p>grateractions</p>
              </a>
            </li>
            <li>
              <a>
                <span>ikona</span>
                <p>grate</p>
              </a>
            </li>
          </ul>

          <div className="modal-action">
            <button className="btn btn-close" onClick={this.props.closeModal}>
              close
            </button>
          </div>
        </div>
      </>
    );
  };

  render() {
    return (
      <Modal
        modalContent={this.renderContent()}
        closeModal={this.props.closeModal}
      />
    );
  }
}
export default MovieModal;
