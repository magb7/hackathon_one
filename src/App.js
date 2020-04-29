import React, { useState, useEffect } from "react";
import ExtractApi from "./components/ExtractApi";
import axios from "axios";

function App() {
  const [country, setCountry] = useState("FR");
  const [webcam, setWebcam] = useState({});

  useEffect(() => {
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
    <div
      style={{
        margin: "50px auto",
        witdh: "50vw",
      }}
    >
      <button
        onClick={() => {
          setCountry("NZ");
        }}
      >
        New Zealand
      </button>
      <button
        onClick={() => {
          setCountry("CA");
        }}
      >
        Canada
      </button>
      <ExtractApi webcam={webcam} />
    </div>
  );
}

export default App;
