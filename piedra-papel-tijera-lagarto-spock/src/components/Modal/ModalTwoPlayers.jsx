import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import SliderSetings from "../Game/SliderSetings";
import Option from "../Option";
import PossibleCases from "../Option/PossibleCases";
import "./Modal.css";

function ModalTwoPlayers(props) {
  const [modal, setModal] = useState(false);
  const [choicePlayer, setElectionPlayer] = useState({});
  const [electionMachine, setElectionMachine] = useState({});
  const [hidePlayerOne, setHidePlayerOne] = useState("");
  const [hidePlayerTwo, setHidePlayerTwo] = useState("hide");
  const [playerVictoryCounter, setPlayerAccounter] = useState(0);
  const [MachineVictoryCounter, setMachineVictoryCounter] = useState(0);

  const player = props.isMachine ? "CPU" : "Player Two";
  let winner;

  const toggleModalPlayerOne = (event) => {
    const player = PossibleCases.find(
      (e) => e.choice === event.target.textContent
    );
    setElectionPlayer(player);
    setHidePlayerOne("hide")
    setHidePlayerTwo("")
  };

  const toggleModalPlayerTwo = (event) => {
    const player = PossibleCases.find(
      (e) => e.choice === event.target.textContent
    );
    setElectionMachine(player);
    setModal(!modal);
  };

  const electionRival = () => {
    const choice =
      PossibleCases[Math.floor(Math.random() * PossibleCases.length)];
    setElectionMachine(choice);
  };

  const continueGame = () => {
    setElectionMachine({});
    setElectionPlayer({});
    setHidePlayerOne("")
    setHidePlayerTwo("hide")
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
      <div className={`available-options ${hidePlayerOne}` }>
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
        <div className="modal">
          <div onClick={continueGame} className="overlay"></div>
          <div className="modal-content">
            {winner} {/* <h1>Maquina : {electionMachine}</h1> */}
            {/* <h1>Maquina : {choicePlayer}</h1> */}
            <h2>Player One a chosen: {choicePlayer.choice}</h2>
            <h2>
              {player} a chosen: {electionMachine.choice}
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

export default ModalTwoPlayers;
