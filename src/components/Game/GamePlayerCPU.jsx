import { useState } from "react";
import Counter from "../Counter";
import "./Game.css";
import Modal from "../Modal/ModalOnePlayer";

const GamePlayerCPU = () => {
  const [playerVictoryCounter, setPlayerAccounter] = useState(0);
  const [machineVictoryCounter, setMachineVictoryCounter] = useState(0);

  return (
    <div className="game">
      <div className="tittle-game">
        <h1> Player VS CPU </h1>
      </div>
      <Counter
        isMachine={true}
        firstCount={playerVictoryCounter}
        secondCount={machineVictoryCounter}
      />
      <Modal
        isMachine={true}
        addPlayerWinner={() => setPlayerAccounter((c) => c + 1)}
        addMachineWinner={() => setMachineVictoryCounter((c) => c + 1)}
      ></Modal>
    </div>
  );
};

export default GamePlayerCPU;
