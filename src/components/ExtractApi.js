import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ExtractApi() {
  const [country, setCountry] = useState();

  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = () => {
    axios
      .get(
        "https://api.windy.com/api/webcams/v2/list/country=DE?key=q7WhxCHqIIMwge4tYv97cddN2NWHHb2p"
      )

      .then((data) => {
        console.log(data.config.url);
        setCountry(data);
      });
  };
  return (
    <div>
      <iframe src={country} />
    </div>
  );
}

/*const [country, setCountry] = useState([]);

  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = () => {
    axios
      .get(
        "https://api.windy.com/api/webcams/v2/list/country=DE?key=q7WhxCHqIIMwge4tYv97cddN2NWHHb2p"
      )

      .then((data) => {
        console.log(data.data.result.webcams);
        setCountry(data.data.result.webcams);
      });
  };
  return (
    <div>
      {country.map((obj) => {
        return <p key={obj.id}>{obj.title}</p>;
      })}
    </div>
  );
}

"https://api.windy.com/api/webcams/v2/list/category=beach?key=q7WhxCHqIIMwge4tYv97cddN2NWHHb2p"
*/
