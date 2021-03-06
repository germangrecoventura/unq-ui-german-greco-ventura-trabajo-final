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
        <h1> Player One VS Player Two</h1>
      </div>
      <Counter
        isMachine={false}
        firstCount={playerOneVictoryCounter}
        secondCount={playerTwoVictoryCounter}
      />
      <ModalTwoPlayers
        addPlayerOneWinner={() => setPlayerOneAccounter((c) => c + 1)}
        addPlayerTwoWinner={() => setPlayerTwoVictoryCounter((c) => c + 1)}
      ></ModalTwoPlayers>
    </div>
  );
};

export default GamePlayerPlayer;
