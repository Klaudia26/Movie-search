import React from 'react';
import ReactDOM from 'react-dom';
import { IoMdClose } from 'react-icons/io';
import './Modal.scss';

const Modal = ({
  closeModal,
  modalHeader,
  modalContent,
  modalActions,
  className,
}) => {
  return ReactDOM.createPortal(
    <div className="dimmer" onClick={closeModal}>
      <div
        className={`modal ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__header">
          <IoMdClose className="close-icon" onClick={closeModal} />
          {modalHeader}
        </div>
        <div className="modal__content">{modalContent}</div>
        <div className="modal__actions">{modalActions}</div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
