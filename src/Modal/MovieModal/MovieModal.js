import React, { Component } from 'react';
import { MdStar } from 'react-icons/md';
import Modal from '../Modal';
import './MovieModal.scss';

class MovieModal extends Component {
  renderContent = () => {
    return (
      <>
        <div className="modalContent-left">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w200${this.props.foundMovie.poster_path}`}
              alt="avatar"
              className="modal-avatar"
            />
          </div>
        </div>
        <div className="modalContent-right">
          <h2 className="modal-heading">{this.props.foundMovie.title}</h2>
          <p className="avarage">
            <span>
              <MdStar />
            </span>
            {this.props.foundMovie.vote_average}
          </p>
          <p className="dataOfRelease">{this.props.foundMovie.release_date}</p>
          <p className="description">{this.props.foundMovie.overview}</p>
          <div className="modal-action">
            <button className="btn btn-close" onClick={this.props.closeModal}>
              close
            </button>
            <button className="btn" onClick={this.props.closeModal}>
              watchlist
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
