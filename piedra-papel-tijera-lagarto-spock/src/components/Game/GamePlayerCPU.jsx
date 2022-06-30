import { useState } from "react";
import Counter from "../Counter";
import "./Game.css";
import Modal from "../Modal/Modal";

const GamePlayerCPU = () => {
  const [playerVictoryCounter, setPlayerAccounter] = useState(0);
  const [MachineVictoryCounter, setMachineVictoryCounter] = useState(0);
  const [modal, setModal] = useState(false);

  return (
    <div className="game">
      <div className="tittle-game">
        <h1> Rock, Paper, Scissors, Lizard, Spock</h1>
        <h1> Player VS CPU </h1>
      </div>
      <Counter
        isMachine={true}
        firstCount={playerVictoryCounter}
        secondCount={MachineVictoryCounter}
      />
      <Modal
        isMachine={true}
        sumarPlayer={() => setPlayerAccounter((c) => c + 1)}
        sumarMaquina={() => setMachineVictoryCounter((c) => c + 1)}
      ></Modal>
    </div>
  );
};

export default GamePlayerCPU;
