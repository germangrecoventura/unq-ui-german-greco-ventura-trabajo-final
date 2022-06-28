const Choice = (props) => {
  let text;

  if (props.isMachine === true) {
    text = "CPU";
  } else {
    text = "Player Two";
  }

  return (
    <div className="choice">
      <p>Player One a chosen: {props.firstEleccion}</p>
      <p>
        {text} a chosen: {props.secondEleccion}
      </p>
    </div>
  );
};

export default Choice;
