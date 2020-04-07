import React, { Component } from 'react';
import { IoMdClose } from 'react-icons/io';
import Modal from './Modal';

class MovieModal extends Component {
  renderContent = () => {
    return (
      <div className="modal-wrpper">
        <div className="modalContent-left">
          <div>
            <img src={this.props.img} alt="avatar" className="modal-avatar" />
          </div>
          <div className="modalContent-right">
            <h2 className="modal-heading"></h2>
            <p className="avarage"></p>
            <p className="dataOfRelease"></p>
            <p className="description"></p>
          </div>

          <button className="btn-close" onClick={this.props.closeModal}>
            <IoMdClose />
          </button>
          <button className="btn-close" onClick={this.props.closeModal}>
            watchlist
          </button>
        </div>
      </div>
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
