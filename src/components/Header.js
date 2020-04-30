import React from "react";
import "./Header.scss";
import Clock from "./Clock";

const Header = () => {
  return (
    <div className="Header">
      <div className="Head-departure">
        <img className="Departure" src="./299209.png" alt="departure" />
        <h2>Departures</h2>
        <Clock />
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
