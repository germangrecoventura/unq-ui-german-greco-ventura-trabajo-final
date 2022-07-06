import React from "react";
import "./Option.css";

const Option = (props) => {
  const color = props.background ? "two" : "";

  return (
    <div className={`option ${color}`} onClick={props.choose}>
      {props.value.choice}
    </div>
  );
};

export default Option;
