import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

function Video() {
  const [country, setCountry] = useState("FR");
  const [webcam, setWebcam] = useState({});

  useEffect(() => {
    getCountry();
    getCountry();
  }, [country]);

  const getCountry = () => {
    axios
      .get(
        `https://api.windy.com/api/webcams/v2/list/country=${country}?key=q7WhxCHqIIMwge4tYv97cddN2NWHHb2p`
      )
      .then((data) => {
        setWebcam(data.data.result.webcams[0].id);
      });
  };

  return (
    <div className="App">
      <Link to={`/Country/${country}`}>
        <button
          onClick={() => {
            setCountry("");
          }}
        >
          New Zealand
        </button>
      </Link>
    </div>
  );
}

export default Video;
