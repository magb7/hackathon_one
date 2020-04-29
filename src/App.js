import React, { useState, useEffect } from "react";
import "./App.scss";
import "./reset.css";
import Homepage from "./components/Homepage";
import ExtractApi2 from "./components/ExtractApi2";
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
    <div className="App" >
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
      <ExtractApi2 webcam={webcam} />
         
      <Homepage />
    </div>

  );
}

export default App;
