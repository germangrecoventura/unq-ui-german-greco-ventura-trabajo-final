import React from "react";

const Result = (props) => {
  let text;

  if (props.isMachine === true) {
    text = "CPU";
  } else {
    text = "Player Two";
  }

  let winner;
  if (
    props.firstPlayer.choice &&
    props.firstPlayer.defeat.includes(props.secondPlayer.choice)
  ) {
    /* props.victoriaJugador() */
    winner = <h1>Winner: Player One</h1>;
  } else if (
    props.firstPlayer.choice &&
    props.secondPlayer.defeat.includes(props.firstPlayer.choice)
  ) {
    /* props.victoriaMaquina() */
    winner = <h1>Winner: {text}</h1>;
  } else if (
    props.firstPlayer.choice &&
    props.firstPlayer.choice === props.secondPlayer.choice
  ) {
    winner = <h1>Tie</h1>;
  }

  return <div className="result-game">{winner}</div>;
};

export default Result;
