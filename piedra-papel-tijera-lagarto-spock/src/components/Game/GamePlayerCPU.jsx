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
  const [ver, setVer] = useState(true);

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

  if (
    choicePlayer.choice &&
    electionMachine.choice &&
    choicePlayer.defeat.includes(electionMachine.choice)
  ) {
    /* props.victoriaJugador() */
    setElectionPlayer({});
    setElectionMachine({});
    setVer(false)
    setPlayerAccounter((c) => c + 1);
    winner = <h1>Winner: Player One</h1>;
  } else if (
    choicePlayer.choice &&
    electionMachine.choice &&
    electionMachine.defeat.includes(choicePlayer.choice)
  ) {
    /* props.victoriaMaquina() */
    setVer(false)
    setElectionPlayer({});
    setElectionMachine({});
    setMachineVictoryCounter((c) => c + 1);
    winner = <h1>Winner: Maquina</h1>;
  } else if (
    choicePlayer.choice &&
    electionMachine.choice &&
    choicePlayer.choice === electionMachine.choice
  ) {
    setVer(false)
    setElectionPlayer({});
    setElectionMachine({});
    winner = <h1>Tie</h1>;
  }

  const ala = ver ? "" : "ocultar";

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
      
      <div className={`available-options ${ala}`}>
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
          <Modal></Modal>
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
