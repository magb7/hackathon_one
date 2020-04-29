import "./Destination.scss";
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

function Destination({ listCountry }) {
  const [country, setCountry] = useState("FR");
  const [webcam, setWebcam] = useState({});

  useEffect(() => {
    getCountry();
    getCountry();
  }, [country]);

  const getCountry = () => {
    axios
      .get(
        `https://api.windy.com/api/webcams/v2/list/country=${ListCountry.id}?key=q7WhxCHqIIMwge4tYv97cddN2NWHHb2p`
      )
      .then((data) => {
        setWebcam(data.data.result.webcams[0].id);
      });
  };

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
              <Link to={`/Country/${ListCountry.id}`}>
                <img
                  src="play.png"
                  alt="play"
                  onClick={() => {
                    setCountry("");
                  }}
                />
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Destination;
