const Counter = (props) => {
  let isMachine;

  if (props.isMachine === true) {
    isMachine = "CPU";
  } else {
    isMachine = "Player Two";
  }
  return (
    <div className="counter">
      <p>Games won by Player One: {props.firstCount}</p>
      <p>
        Games won by {isMachine}: {props.secondCount}
      </p>
    </div>
  );
};

export default Counter;
