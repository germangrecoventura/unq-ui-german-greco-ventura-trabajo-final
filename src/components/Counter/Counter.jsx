import "./Counter.css";
import ia from "./brain.png"
import user from "./user.png"

const Counter = (props) => {
  const player = props.isMachine ? ia :user;

  return (
    <div className="counter">
      <p>Games won by <img src={user} className="image-count" alt="icon-player-one"/>: {props.firstCount}</p>
      <p>
        Games won by <img src={player} className="image-count" alt="icon-player-two-ia"/>: {props.secondCount}
      </p>
    </div>
  );
};

export default Counter;
