import { useState } from "react";
import Counter from "../Counter";
import "./Game.css";
import ModalTwoPlayers from "../Modal/ModalTwoPlayers";

const GamePlayerPlayerFinal = () => {
  const [playerVictoryCounter, setPlayerAccounter] = useState(0);
  const [MachineVictoryCounter, setMachineVictoryCounter] = useState(0);
  
  return (
    <div className="game">
      <div className="tittle-game">
        <h1> Rock, Paper, Scissors, Lizard, Spock</h1>
        <h1> Player VS Player </h1>
      </div>
      {playerVictoryCounter}
      <Counter
        isMachine={false}
        firstCount={playerVictoryCounter}
        secondCount={MachineVictoryCounter}
      />
      <ModalTwoPlayers
        isMachine={false}
        sumarPlayer={() => setPlayerAccounter((c) => c + 1)}
        sumarMaquina={() => setMachineVictoryCounter((c) => c + 1)}
      ></ModalTwoPlayers>
    </div>
  );
};

export default GamePlayerPlayerFinal;
