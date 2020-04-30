import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Country.scss";

export default function Country() {
  const [webcam, setWebcam] = useState({});
  const [info, setInfo] = useState("");

  let { country } = useParams();

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

  useEffect(() => {
    getWebcam();
  }, [webcam]);

  const getWebcam = () => {
    axios
      .get(
        `https://api.windy.com/api/webcams/v2/list/webcam=${webcam}?show=webcams:image,location,player,url&key=q7WhxCHqIIMwge4tYv97cddN2NWHHb2p`
      )
      .then((data) => {
        const player = data.data.result.webcams[0];
        setInfo(player);
      });
  };

  return (
    <div className="Videopage">
      <p className="text">
        {info && info.location.city},{" "}
        <span>{info && info.location.country} !</span>
      </p>
      {info && (
        <iframe
          width="550"
          height="450"
          alt=""
          src={info.player.lifetime.embed}
        />
      )}
      <img className="logo-videopage" src="/logo.png" alt="logo" />
    </div>
  );
}

/*{info && <iframe alt="" src={info.player.lifetime.embed} />}
<p>
Hello {info && info.location.city}, {info && info.location.country} !
</p>*/
