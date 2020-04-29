import React from "react";

const Destination = ({ listCountry }) => {
  return (
    <>
      {listCountry.map((item) => {
        return (
          <div>
            <p>{item.time}</p>
            <p>{item.destination}</p>
            <p>{item.gate}</p>
            <p>{item.remarks}</p>
          </div>
        );
      })}
    </>
  );
};

export default Destination;
