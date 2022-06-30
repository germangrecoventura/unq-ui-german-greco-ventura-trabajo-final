import "./Counter.css";
import ia from "./brain.png"
import user from "./user.png"

const Counter = (props) => {
  const player = props.isMachine ? ia :user;

  return (
    <div className="counter">
      <p>Games won by <img src={user} className="image-count"/>: {props.firstCount}</p>
      <p>
        Games won by <img src={player} className="image-count"/>: {props.secondCount}
      </p>
    </div>
  );
};

export default Counter;
