import Slider from "react-slick";
import Choice from "../Choice/Choice";
import Counter from "../Counter";
import Option from "../Option";
import possibleCases from "../Option/PossibleCases";
import { useState } from "react";
import Result from "../Result";
import SliderSetings from "./SliderSetings";
import "./Game.css";

const GamePlayerPlayer = () => {
  const [choicePlayer, setElectionPlayer] = useState({});
  const [electionMachine, setElectionMachine] = useState({});
  const [playerVictoryCounter, setPlayerAccounter] = useState(0);
  const [MachineVictoryCounter, setMachineVictoryCounter] = useState(0);

  const chooseOptionPlayer = (event) => {
    const player = possibleCases.find(
      (e) => e.choice === event.target.textContent
    );
    setElectionMachine({});
    setElectionPlayer({});
    setElectionPlayer(player);
  };

  const chooseOptionPlayerTwo = (event) => {
    const player = possibleCases.find(
      (e) => e.choice === event.target.textContent
    );
    setElectionMachine(player);
  };

  return (
    <>
      <div className="tittle-game">
        <h1> Rock, Paper, Scissors, Lizard, Spock</h1>
        <h1> Player VS Player </h1>
      </div>
      <Counter
        isMachine={false}
        firstCount={playerVictoryCounter}
        secondCount={MachineVictoryCounter}
      />
      <Choice
        isMachine={false}
        firstEleccion={choicePlayer.choice}
        secondEleccion={electionMachine.choice}
      />
      <div className="available-options">
        <Slider {...SliderSetings}>
          {possibleCases.map((e, index) => (
            <Option
              choose={chooseOptionPlayer}
              value={possibleCases[index]}
              key={index}
            />
          ))}
        </Slider>
      </div>
      <div className="available-options">
        <Slider {...SliderSetings}>
          {possibleCases.map((e, index) => (
            <Option
              background={"two"}
              choose={chooseOptionPlayerTwo}
              value={possibleCases[index]}
              key={index}
            />
          ))}
        </Slider>
      </div>
      <Result
        isMachine={false}
        firstPlayer={choicePlayer}
        secondPlayer={electionMachine}
      ></Result>
    </>
  );
};

export default GamePlayerPlayer;
