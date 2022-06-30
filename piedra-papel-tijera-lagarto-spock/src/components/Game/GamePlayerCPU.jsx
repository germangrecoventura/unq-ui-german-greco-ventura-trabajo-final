import { useState } from "react";
import Slider from "react-slick";
import Option from "../Option";
import Counter from "../Counter";
import possibleCases from "../Option/PossibleCases";
import Choice from "../Choice/Choice";
import Result from "../Result";
import SliderSetings from "./SliderSetings";
import "./Game.css";
import Modal from "../Modal/Modal";

const GamePlayerCPU = () => {
  const [choicePlayer, setElectionPlayer] = useState({});
  const [electionMachine, setElectionMachine] = useState({});
  const [playerVictoryCounter, setPlayerAccounter] = useState(0);
  const [MachineVictoryCounter, setMachineVictoryCounter] = useState(0);
  const [modal, setModal] = useState(false);

  const chooseOption = (event) => {
    const player = possibleCases.find(
      (e) => e.choice === event.target.textContent
    );
    setElectionPlayer(player);
    electionRival();
  };

  const electionRival = () => {
    const choice =
      possibleCases[Math.floor(Math.random() * possibleCases.length)];
    setElectionMachine(choice);
  };

  let winner;

  /* if (
    choicePlayer.choice &&
    electionMachine.choice &&
    choicePlayer.defeat.includes(electionMachine.choice)) {
    setElectionMachine({});
    setElectionPlayer({});
    setPlayerAccounter((y) => y + 1);
    winner = <h1>Winner: Player One</h1>;
  } else if (
    choicePlayer.choice &&
    electionMachine.choice &&
    electionMachine.defeat.includes(choicePlayer.choice)
  ) {
    setElectionMachine({});
    setElectionPlayer({});
    setMachineVictoryCounter(c => c + 1);
    winner = <h1>Winner: Maquina</h1>;
  } else if (
    choicePlayer.choice &&
    electionMachine.choice &&
    choicePlayer.choice === electionMachine.choice) {
      setElectionMachine({});
    setElectionPlayer({});
    winner = <h1>Tie</h1>;
  } */

  return (
    <>
      <div className="tittle-game">
        <h1> Rock, Paper, Scissors, Lizard, Spock</h1>
        <h1> Player VS CPU </h1>
      </div>
      <Counter
        isMachine={true}
        firstCount={playerVictoryCounter}
        secondCount={MachineVictoryCounter}
      />
      {/* <Choice
        isMachine={true}
        firstEleccion={choicePlayer.choice}
        secondEleccion={electionMachine.choice}
      /> */}

      {/* <div className={`available-options`}>
        <Slider {...SliderSetings}>
          {possibleCases.map((e, index) => (
            <Option
              choose={chooseOption}
              value={possibleCases[index]}
              key={index}
            />
          ))}
        </Slider>
      </div> */}
      <Modal
        isMachine={true}
        sumarPlayer={() => setPlayerAccounter((c) => c + 1)}
        sumarMaquina={() => setMachineVictoryCounter((c) => c + 1)}
      ></Modal>
      {/* <Result
        isMachine={true}
        firstPlayer={choicePlayer}
        secondPlayer={electionMachine}
        borrarPlayer={setElectionPlayer}
        borrarMaquina={setElectionMachine}
        sumarPlayer={() => setPlayerAccounter((c) => c + 1)}
        sumarMaquina={() => setMachineVictoryCounter((c) => c + 1)}
      ></Result> */}
    </>
  );
};

export default GamePlayerCPU;
