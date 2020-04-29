import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="Head-departure">
        <img className="Departure" src="./299209.png" />
        <h1>Departures</h1>
      </div>
      <div className="Header-menu">
        <p className="Time">Time</p>
        <p className="Destinations">To</p>
        <p className="Gate">Gate</p>
        <p className="Remarks">Remarks</p>
        <p className="Click">Click</p>
      </div>
    </div>
  );
};

export default Header;
