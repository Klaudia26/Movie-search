import React, { Component } from 'react';
import { MdStar } from 'react-icons/md';
import Modal from '../Modal';
import './MovieModal.scss';

class MovieModal extends Component {
  renderHeader = () => (
    <h2 className="modal-heading">{this.props.foundMovie.title}</h2>
  );

  renderContent = () => {
    return (
      <div className="modal-movie__content">
        <div className="modal-movie__content-left">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w200${this.props.foundMovie.poster_path}`}
              alt="avatar"
              className="avatar"
            />
          </div>
        </div>
        <div className="modal-movie__content-right">
          <p className="avarage">
            <MdStar />
            {this.props.foundMovie.vote_average}
          </p>
          <p className="dataOfRelease">{this.props.foundMovie.release_date}</p>
          <p className="description">{this.props.foundMovie.overview}</p>
        </div>
      </div>
    );
  };

  renderActions = () => (
    <div className="modal-movie__actions">
      <button className="btn btn-close" onClick={this.props.closeModal}>
        close
      </button>
      <button className="btn" onClick={this.props.closeModal}>
        watchlist
      </button>
    </div>
  );

  render() {
    return (
      <Modal
        className="modal-movie"
        modalHeader={this.renderHeader()}
        modalContent={this.renderContent()}
        modalActions={this.renderActions()}
        closeModal={this.props.closeModal}
      />
    );
  }
}
export default MovieModal;
