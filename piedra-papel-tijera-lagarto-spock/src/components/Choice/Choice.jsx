import "./Choice.css";

const Choice = (props) => {
  const player = props.isMachine ? "CPU" : "Player Two";

  return (
    <div className="choice">
      <p>Player One a chosen: {props.firstEleccion}</p>
      <p>
        {player} a chosen: {props.secondEleccion}
      </p>
    </div>
  );
};

export default Choice;
