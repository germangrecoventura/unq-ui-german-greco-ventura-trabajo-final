import React from "react";
import "./Option.css";

const Option = (props) => {
  return (
    <div className="option" onClick={props.choose}>
      {props.value.choice}
    </div>
  );
};

export default Option;
