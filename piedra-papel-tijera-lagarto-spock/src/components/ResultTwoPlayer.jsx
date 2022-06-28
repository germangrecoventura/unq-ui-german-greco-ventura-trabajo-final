import React from "react";

const ResultTwoPlayer = (props) => {
  const player = props.isMachine ? "CPU" : "Player Two";
  let winner;

  if (
    props.firstPlayer.choice && props.secondPlayer.choice &&
    props.firstPlayer.defeat.includes(props.secondPlayer.choice)
  ) {
    /* props.victoriaJugador() */
    winner = <h1>Winner: Player One</h1>;
  } else if (
    props.firstPlayer.choice && props.secondPlayer.choice &&
    props.secondPlayer.defeat.includes(props.firstPlayer.choice)
  ) {
    /* props.victoriaMaquina() */
    winner = <h1>Winner: {player}</h1>;
  } else if (
    props.firstPlayer.choice && props.secondPlayer.choice &&
    props.firstPlayer.choice === props.secondPlayer.choice
  ) {
    winner = <h1>Tie</h1>;
  }

  return <div className="result-game">{winner}</div>;
};

export default ResultTwoPlayer;
