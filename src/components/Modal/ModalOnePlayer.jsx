import React, { useState } from "react";
import Slider from "react-slick";
import SliderSetings from "../Game/SliderSetings";
import Option from "../Option";
import PossibleCases from "../../PossibleCases";
import "./Modal.css";
import ModalResult from "./ModalResult";

const ModalOnePlayer = (props) => {
  const [modal, setModal] = useState(false);
  const [winner, setWinner] = useState("");
  const [electionPlayer, setElectionPlayer] = useState({});
  const [electionMachine, setElectionMachine] = useState({});

  const toggleModal = (event) => {
    const player = PossibleCases.find(
      (e) => e.choice === event.target.textContent
    );
    setElectionPlayer(player);
    const machine = electionRival();
    if (
      player.choice &&
      machine.choice &&
      player.defeat.includes(machine.choice)
    ) {
      props.addPlayerWinner();
      setWinner("Winner: Player One");
    } else if (
      player.choice &&
      machine.choice &&
      machine.defeat.includes(player.choice)
    ) {
      props.addMachineWinner();
      setWinner(`Winner: CPU`);
    } else if (
      player.choice &&
      machine.choice &&
      player.choice === machine.choice
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
        Select Player One:
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
          secondPlayer="CPU"
          firstElection={electionPlayer.choice}
          secondElection={electionMachine.choice}
        />
      )}
    </div>
  );
};

export default ModalOnePlayer;
