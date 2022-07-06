import React, { useState } from "react";
import Slider from "react-slick";
import SliderSetings from "../Game/SliderSetings";
import Option from "../Option";
import PossibleCases from "../Option/PossibleCases";
import "./Modal.css";
import ModalResult from "./ModalResult";

function ModalTwoPlayers(props) {
  const [modal, setModal] = useState(false);
  const [choicePlayer, setElectionPlayer] = useState({});
  const [electionMachine, setElectionMachine] = useState({});
  const [winner, setWinner] = useState("");
  const [hidePlayerOne, setHidePlayerOne] = useState("");
  const [hidePlayerTwo, setHidePlayerTwo] = useState("hide");

  const playerGame = props.isMachine ? "CPU" : "Player Two";

  const toggleModalPlayerOne = (event) => {
    const player = PossibleCases.find(
      (e) => e.choice === event.target.textContent
    );
    setElectionPlayer(player);
    setHidePlayerOne("hide");
    setHidePlayerTwo("");
  };

  const toggleModalPlayerTwo = (event) => {
    const playerTwo = PossibleCases.find(
      (e) => e.choice === event.target.textContent
    );
    setElectionMachine(playerTwo);
    setModal(!modal);
    if (
      choicePlayer.choice &&
      playerTwo.choice &&
      choicePlayer.defeat.includes(playerTwo.choice)
    ) {
      props.sumarPlayer();
      setWinner("Winner: Player One");
    } else if (
      choicePlayer.choice &&
      playerTwo.choice &&
      playerTwo.defeat.includes(choicePlayer.choice)
    ) {
      props.sumarMaquina();
      setWinner(`Winner: ${playerGame}`);
    } else if (
      choicePlayer.choice &&
      playerTwo.choice &&
      choicePlayer.choice === playerTwo.choice
    ) {
      setWinner("Tie");
    }
  };

  const continueGame = () => {
    setElectionMachine({});
    setElectionPlayer({});
    setHidePlayerOne("");
    setWinner("");
    setHidePlayerTwo("hide");
    setModal(!modal);
  };

  return (
    <div>
      <div className={`available-options ${hidePlayerOne}`}>
        Select Player One:
        <Slider {...SliderSetings}>
          {PossibleCases.map((e, index) => (
            <Option
              choose={toggleModalPlayerOne}
              value={PossibleCases[index]}
              key={index}
            />
          ))}
        </Slider>
      </div>
      <div className={`available-options ${hidePlayerTwo}`}>
        Select Player Two:
        <Slider {...SliderSetings}>
          {PossibleCases.map((e, index) => (
            <Option
              choose={toggleModalPlayerTwo}
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

export default ModalTwoPlayers;
