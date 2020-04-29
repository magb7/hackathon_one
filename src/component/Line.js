import React from "react";
import "./Line.css";

const Line = () => {
  return (
    <div>
      <div className="Line">
        <div className="Time">
          <p>15:00</p>
        </div>
        <div className="Destination">
          <p>Sweden</p>
        </div>
        <div className="Gate">
          <p>A20</p>
        </div>
        <div className="Status">
          <p>On Time</p>
        </div>
        <div className="Button">
          <p>
            <button>Fly!</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Line;
