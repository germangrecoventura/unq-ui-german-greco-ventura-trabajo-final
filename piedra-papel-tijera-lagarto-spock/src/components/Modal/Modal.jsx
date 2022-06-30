import React, { useState } from "react";
import "./Modal.css";

function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <button onClick={toggleModal} className="btn-modal">
        ABRIIIMEEE
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Ganador </h2>
            <p>GHpla a todos asmk mndsoadsahjdhsadhasdhasdohasdhnsdan`hssdoh</p>
            <button onClick={toggleModal} className="close-modal">
              Continue Game
            </button>
            <button onClick={toggleModal} className="close-modal">
              Main Menu
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
