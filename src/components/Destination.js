import "./Destination.scss";
import React from "react";

import { Link } from "react-router-dom";

function Destination({ listCountry }) {
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
            <Link to={`/Country/${item.id}`}>
              <div className="button">
                <img src="/play.png" alt="plane" />
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default Destination;
