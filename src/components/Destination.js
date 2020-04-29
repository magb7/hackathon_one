import React from "react";

const Destination = (props) => {
  console.log(props);
  return (
    <div>
      <p>{props.time}</p>
      <p>{props.destination}</p>
      <p>{props.gate}</p>
      <p>{props.remarks}</p>
    </div>
  );
};

export default Destination;
