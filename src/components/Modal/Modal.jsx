import React, { useState } from "react";
import Slider from "react-slick";
import SliderSetings from "../Game/SliderSetings";
import Option from "../Option";
import PossibleCases from "../Option/PossibleCases";
import "./Modal.css";
import ModalResult from "./ModalResult";

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
        <ModalResult
          click={continueGame}
          winner={winner}
          secondPlayer={playerGame}
          firstElection={choicePlayer.choice}
          secondElection={electionMachine.choice}
        />
      )}
    </div>
  );
}

export default Modal;
