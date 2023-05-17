import React from "react";
import "./ModalYesNo.css";

const ModalYesNo = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) {
      return null;
    }
  
    return (
      <div className="modal-overlay">
        <div className="modal">
          <h2>Удалить?</h2>
          <div className="modal-buttons">
            <button onClick={onConfirm} className="modal-button yes">Да</button>
            <button onClick={onClose} className="modal-button no">Нет</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ModalYesNo;