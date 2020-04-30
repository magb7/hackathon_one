import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Country.scss";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

export default function Country() {
  const [webcam, setWebcam] = useState(false);
  const [info, setInfo] = useState(false);

  let { country } = useParams();

  useEffect(() => {
    getCountry();
  }, [country]);

  const getCountry = () => {
    axios
      .get(
        `https://api.windy.com/api/webcams/v2/list/country=${country}/category=beach?key=q7WhxCHqIIMwge4tYv97cddN2NWHHb2p`
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
      {info && info.player.lifetime.embed ? (
        <div>
          <p className="text">
            {info.location.city}, <span>{info.location.country}</span>
          </p>
          {
            <iframe
              width="550"
              height="450"
              alt=""
              src={info.player.lifetime.embed}
            />
          }
        </div>
      ) : (
        <div>
          <img className="loading" src="/loader.gif" />
        </div>
      )}
      <Link to={`/`}>
        <img className="logo-videopage" src="/logo.png" alt="logo" />
      </Link>
    </div>
  );
}
