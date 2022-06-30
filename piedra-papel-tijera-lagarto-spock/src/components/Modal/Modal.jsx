import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import SliderSetings from "../Game/SliderSetings";
import Option from "../Option";
import PossibleCases from "../Option/PossibleCases";
import "./Modal.css";

function Modal(props) {
  const [modal, setModal] = useState(false);
  const [winner, setWinner] = useState("");
  const [choicePlayer, setElectionPlayer] = useState({});
  const [electionMachine, setElectionMachine] = useState({});

  const playerGame = props.isMachine ? "CPU" : "Player Two";

  const toggleModal = (event) => {
    const player = PossibleCases.find(
      (e) => e.choice === event.target.textContent
    );
    setElectionPlayer(player);
    const maquina = electionRival();
    if (
      player.choice &&
      maquina.choice &&
      player.defeat.includes(maquina.choice)
    ) {
      props.sumarPlayer();
      setWinner("Winner: Player One");
    } else if (
      player.choice &&
      maquina.choice &&
      maquina.defeat.includes(player.choice)
    ) {
      props.sumarMaquina();
      setWinner(`Winner: ${playerGame}`);
    } else if (
      player.choice &&
      maquina.choice &&
      player.choice === maquina.choice
    ) {
      setWinner("Tie");
    }
    setModal(!modal);
  };

  const electionRival = () => {
    const choice =
      PossibleCases[Math.floor(Math.random() * PossibleCases.length)];
    setElectionMachine(choice);
    return choice;
  };

  const continueGame = () => {
    setElectionMachine({});
    setElectionPlayer({});
    setWinner("");
    setModal(!modal);
  };

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

      {modal && (
        <div className="modal">
          <div onClick={continueGame} className="overlay"></div>
          <div className="modal-content">
            <h1>{winner}</h1>
            <h2>Player One a chosen: {choicePlayer.choice}</h2>
            <h2>
              {playerGame} a chosen: {electionMachine.choice}
            </h2>
            <button onClick={continueGame} className="close-modal">
              Continue Game
            </button>
            <Link to="/">
              <button className="close-modal">Main Menu</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
