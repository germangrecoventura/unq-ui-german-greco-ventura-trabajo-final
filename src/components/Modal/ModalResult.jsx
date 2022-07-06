import React from "react";
import { Link } from "react-router-dom";
import "./Modal.css";

const ModalResult = (props) => {
  return (
    <div className="modal">
      <div onClick={props.click} className="overlay"></div>
      <div className="modal-content">
        <h1>{props.winner}</h1>
        <h2>Player One a chosen: {props.firstElection}</h2>
        <h2>
          {props.secondPlayer} a chosen: {props.secondElection}
        </h2>
        <button onClick={props.click} className="close-modal">
          Continue Game
        </button>
        <Link to="/">
          <button className="close-modal">Main Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default ModalResult;
