import React from 'react';
import ReactDOM from 'react-dom';
import { IoMdClose } from 'react-icons/io';
import './Modal.scss';

const Modal = ({ closeModal, modalContent }) => {
  return ReactDOM.createPortal(
    <div className="dimmer" onClick={closeModal}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <div className="close-icon" onClick={closeModal}>
          <IoMdClose />
        </div>

        <div className="modalContent">{modalContent}</div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
