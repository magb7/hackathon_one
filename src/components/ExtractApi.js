import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ExtractApi() {
  const [country, setCountry] = useState("FR"); //va définir le pays dans lequel on va voir les webcams
  const [webcam, setWebcam] = useState([]); //enregistre dans un tableau les id des webcams
  const [video, setVideo] = useState(false); //enregistre dans un tableau les url liens des webcams

  //va mettre à jour le country selon le clic du client
  //2
  useEffect(() => {
    getCountry();
  }, [country]);
  //va mettre à jour les id des webcams selon le pays choisis.
  //4
  useEffect(() => {
    getWebCam();
  }, [webcam]);

  //va appeler l'api pour un country choisis et va grâce au .map retenir uniquement l'id des webcams
  //1
  const getCountry = () => {
    axios
      .get(
        `https://api.windy.com/api/webcams/v2/list/country=${country}?key=q7WhxCHqIIMwge4tYv97cddN2NWHHb2p`
      )
      .then((data) => {
        // console.log(data.data.result.webcams[0]);
        setWebcam(data.data.result.webcams[0]);
      });
  };

  //pour chaque id de webcam, l'url va aller chercher les url liens des webcams.
  //avec .push on va pousser ces url dans un tableau pour l'exploiter ensuite.
  //3
  const getWebCam = () => {
    //console.log(webcam.id);
    axios
      .get(
        `https://api.windy.com/api/webcams/v2/list/webcam=${webcam.id}?show=webcams:image,location,player&key=q7WhxCHqIIMwge4tYv97cddN2NWHHb2p`
      )
      .then((data) => {
        //console.log(data);
        //console.log(data.data.result.webcams[0].image.current.preview);
        const preview = data.data.result.webcams[0];
        const player = data.data.result.webcams[0];
        console.log(player, preview);
        setVideo(player);
      });
  };
  //console.log(video);
  //5
  return (
    <div>
      <div>{video && <iframe alt="" src={video.player.lifetime.embed} />}</div>
      <div>{video && <img alt="" src={video.image.current.preview} />}</div>
    </div>
  );
}
//return <iframe src={adresse} /> <iframe src={video.player.lifetime.embed} />;;
