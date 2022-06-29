import { useState } from "react";
import Slider from "react-slick";
import Option from "../Option";
import Counter from "../Counter";
import possibleCases from "../Option/PossibleCases";
import Choice from "../Choice/Choice";
import Result from "../Result";
import SliderSetings from "./SliderSetings";
import "./Game.css";

const GamePlayerCPU = () => {
  const [choicePlayer, setElectionPlayer] = useState({});
  const [electionMachine, setElectionMachine] = useState({});
  const [playerVictoryCounter, setPlayerAccounter] = useState(0);
  const [MachineVictoryCounter, setMachineVictoryCounter] = useState(0);

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

  const contabilizarVictoriaJugador = () => {
    /* setContadorDeVictoriasDelJugador(ca => ca + 1) */
    /*     setContadorDeVictoriasDelJugador(contadorDeVictoriasDelJugador + 1);
     */
  };

  const contabilizarVictoriaMaquina = () => {
    /*     setContadorDeVictoriasDeDeLaMaquina(contadorDeVictoriasDeLaMaquina + 1);
     */
  };

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
      <Choice
        isMachine={true}
        firstEleccion={choicePlayer.choice}
        secondEleccion={electionMachine.choice}
      />
      <div className="available-options">
        <Slider {...SliderSetings}>
          {possibleCases.map((e, index) => (
            <Option
              choose={chooseOption}
              value={possibleCases[index]}
              key={index}
            />
          ))}
        </Slider>
      </div>
      <Result
        isMachine={true}
        firstPlayer={choicePlayer}
        secondPlayer={electionMachine}
        /*     victoriaJugador={() =>
          setContadorDeVictoriasDelJugador(contadorDeVictoriasDelJugador + 88)
        }
        victoriaMaquina= {() => setContadorDeVictoriasDeLaMaquina(c => c + 1)} */
      ></Result>
    </>
  );
};

export default GamePlayerCPU;
