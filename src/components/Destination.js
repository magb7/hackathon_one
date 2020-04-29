import React from "react";
import "./Destination.scss";

const Destination = ({ listCountry }) => {
  return (
    <>
      {listCountry.map((item, index) => {
        return (
          <div key={index} className="Line">
            <div className="Time">
              <p>{item.time}</p>
            </div>
            <div className="Destination">
              <p>{item.destination}</p>
            </div>
            <div className="Gate">
              <p>{item.gate}</p>
            </div>
            <div className="Remarks">
              <p>{item.remarks}</p>
            </div>
            <div className="button">
              <img src="play.png" alt="play" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Destination;