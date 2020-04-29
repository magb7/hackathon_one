import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ExtractApi2({ webcam }) {
  const [info, setInfo] = useState("");

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
    <div
      style={{
        margin: "30px auto",
      }}
    >
      {info && <iframe alt="" src={info.player.lifetime.embed} />}
      <p>
        Hello {info && info.location.city}, {info && info.location.country} !
      </p>
    </div>
  );
}
