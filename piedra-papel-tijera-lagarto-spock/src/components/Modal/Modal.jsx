import React, { useState } from "react";
import Slider from "react-slick";
import SliderSetings from "../Game/SliderSetings";
import Option from "../Option";
import PossibleCases from "../Option/PossibleCases";
import "./Modal.css";

function Modal(props) {
  const [modal, setModal] = useState(false);
  const [choicePlayer, setElectionPlayer] = useState({});
  const [electionMachine, setElectionMachine] = useState({});
  const [playerVictoryCounter, setPlayerAccounter] = useState(0);
  const [MachineVictoryCounter, setMachineVictoryCounter] = useState(0);

  const player = props.isMachine ? "CPU" : "Player Two";
  let winner;

  const toggleModal = (event) => {
    const player = PossibleCases.find(
      (e) => e.choice === event.target.textContent
    );
    setElectionPlayer(player);
    electionRival();
    setModal(!modal);
  };

  const electionRival = () => {
    const choice =
      PossibleCases[Math.floor(Math.random() * PossibleCases.length)];
    setElectionMachine(choice);
  };

  const alal = () => {
    setElectionMachine({});
    setElectionPlayer({});
    setModal(!modal);
  };

  if (
    choicePlayer.choice &&
    electionMachine.choice &&
    choicePlayer.defeat.includes(electionMachine.choice)
  ) {
    /* setPlayerAccounter(c => c + 1) */
    winner = <h1>Winner: Player One</h1>;
  } else if (
    choicePlayer.choice &&
    electionMachine.choice &&
    electionMachine.defeat.includes(choicePlayer.choice)
  ) {
    winner = <h1>Winner: {player}</h1>;
  } else if (
    choicePlayer.choice &&
    electionMachine.choice &&
    choicePlayer.choice === electionMachine.choice
  ) {
    winner = <h1>Tie</h1>;
  }

  return (
    <div>
      <div className={`available-options`}>
        <Slider {...SliderSetings}>
          {PossibleCases.map((e, index) => (
            <Option
              choose={toggleModal}
              value={PossibleCases[index]}
              key={index}
            />
          ))}
        </Slider>
      </div>
      {/* <button onClick={toggleModal} className="btn-modal">
        ABRIIIMEEE
      </button> */}

      {modal && (
        <div className="modal">
          <div onClick={alal} className="overlay"></div>
          <div className="modal-content">
            {winner} {/* <h1>Maquina : {electionMachine}</h1> */}
            {/* <h1>Maquina : {choicePlayer}</h1> */}
            <p>Player One a chosen: {choicePlayer.choice}</p>
            <p>
              {player} a chosen: {electionMachine.choice}
            </p>
            <button onClick={alal} className="close-modal">
              Continue Game
            </button>
            <button onClick={alal} className="close-modal">
              Main Menu
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
