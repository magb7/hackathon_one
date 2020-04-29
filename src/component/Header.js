import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="Head-departure">
        <img className="Departure" src="/Image/299209.png" />
        <h1>Departure</h1>
      </div>
      <div className="Header-menu">
        <p className="Time">Time</p>
        <p className="Destination">To</p>
        <p className="Gate">Gate</p>
        <p className="Status">Status</p>
        <p className="Button">Button</p>
      </div>
    </div>
  );
};

export default Header;
