import { useState } from "react";
import Counter from "../Counter";
import "./Game.css";
import ModalTwoPlayers from "../Modal/ModalTwoPlayers";

const GamePlayerPlayer = () => {
  const [playerOneVictoryCounter, setPlayerOneAccounter] = useState(0);
  const [playerTwoVictoryCounter, setPlayerTwoVictoryCounter] = useState(0);

  return (
    <div className="game">
      <div className="tittle-game">
        <h1> Rock, Paper, Scissors, Lizard, Spock</h1>
        <h1> Player VS Player </h1>
      </div>
      <Counter
        isMachine={false}
        firstCount={playerOneVictoryCounter}
        secondCount={playerTwoVictoryCounter}
      />
      <ModalTwoPlayers
        isMachine={false}
        addPlayerOneWinner={() => setPlayerOneAccounter((c) => c + 1)}
        addPlayerTwoWinner={() => setPlayerTwoVictoryCounter((c) => c + 1)}
      ></ModalTwoPlayers>
    </div>
  );
};

export default GamePlayerPlayer;
