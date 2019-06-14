import React from "react";

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <p>
        <strong>Height:</strong> {props.height} cm tall
      </p>
      <p>
        <strong>Age:</strong> {props.age} smurf years old
      </p>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
