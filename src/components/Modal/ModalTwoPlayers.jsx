import React, { useState } from "react";
import Slider from "react-slick";
import SliderSetings from "../Game/SliderSetings";
import Option from "../Option";
import PossibleCases from "../Option/PossibleCases";
import "./Modal.css";
import ModalResult from "./ModalResult";

function ModalTwoPlayers(props) {
  const [modal, setModal] = useState(false);
  const [electionPlayerOne, setElectionPlayerOne] = useState({});
  const [electionPlayerTwo, setElectionPlayerTwo] = useState({});
  const [winner, setWinner] = useState("");
  const [hidePlayerOne, setHidePlayerOne] = useState("");
  const [hidePlayerTwo, setHidePlayerTwo] = useState("hide");

  const playerGame = props.isMachine ? "CPU" : "Player Two";

  const toggleModalPlayerOne = (event) => {
    const player = PossibleCases.find(
      (e) => e.choice === event.target.textContent
    );
    setElectionPlayerOne(player);
    setHidePlayerOne("hide");
    setHidePlayerTwo("");
  };

  const toggleModalPlayerTwo = (event) => {
    const playerTwo = PossibleCases.find(
      (e) => e.choice === event.target.textContent
    );
    setElectionPlayerTwo(playerTwo);
    setModal(!modal);
    if (
      electionPlayerOne.choice &&
      playerTwo.choice &&
      electionPlayerOne.defeat.includes(playerTwo.choice)
    ) {
      props.addPlayerOneWinner();
      setWinner("Winner: Player One");
    } else if (
      electionPlayerOne.choice &&
      playerTwo.choice &&
      playerTwo.defeat.includes(electionPlayerOne.choice)
    ) {
      props.addPlayerTwoWinner();
      setWinner(`Winner: ${playerGame}`);
    } else if (
      electionPlayerOne.choice &&
      playerTwo.choice &&
      electionPlayerOne.choice === playerTwo.choice
    ) {
      setWinner("Tie");
    }
  };

  const continueGame = () => {
    setElectionPlayerTwo({});
    setElectionPlayerOne({});
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
          firstElection={electionPlayerOne.choice}
          secondElection={electionPlayerTwo.choice}
        />
      )}
    </div>
  );
}

export default ModalTwoPlayers;
