import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ExtractApi() {
  const [country, setCountry] = useState("FR"); //va définir le pays dans lequel on va voir les webcams
  const [webcam, setWebcam] = useState([]); //enregistre dans un tableau les id des webcams
  const [video, setVideo] = useState([]); //enregistre dans un tableau les url liens des webcams

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
        setWebcam(data.data.result.webcams);
      });
  };

  //pour chaque id de webcam, l'url va aller chercher les url liens des webcams.
  //avec .push on va pousser ces url dans un tableau pour l'exploiter ensuite.
  //3
  const getWebCam = () => {
    webcam.map((obj) => {
      axios
        .get(
          `https://api.windy.com/api/webcams/v2/list/webcam=${obj.id}?show=webcams:image,location,player&key=q7WhxCHqIIMwge4tYv97cddN2NWHHb2p`
        )
        .then((data) => {
          console.log(data.data.result.webcams[0].image.current.preview);
          const preview = data.data.result.webcams[0].image.current.preview;
          const player = data.data.result.webcams[0].player.lifetime.embed;
          //console.log(preview);
          setVideo([...video, preview, player]);
        });
    });
    //console.log(toto);
  };
  //5
  return (
    <div>
      {video.map((adresse) => {
        return <iframe src={adresse} />;
        return <img src={adresse} />;
      })}
    </div>
  );
}
