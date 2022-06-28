const Counter = (props) => {
  const player = props.isMachine ? "CPU" : "Player Two";

  return (
    <div className="counter">
      <p>Games won by Player One: {props.firstCount}</p>
      <p>
        Games won by {player}: {props.secondCount}
      </p>
    </div>
  );
};

export default Counter;
