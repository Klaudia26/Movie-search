import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const Modal = ({ closeModal, modalContent }) => {
  return ReactDOM.createPortal(
    <div className="dimmer" onClick={closeModal}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <div className="close-icon" onClick={closeModal}></div>

        <div className="modalContent">{modalContent}</div>
        <div className="modal-action"></div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
