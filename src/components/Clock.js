import React, { useState, useEffect } from "react";
import "./Clock.scss";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    tick();
  }, []);

  const tick = () => {
    setDate(new Date());
    setTimeout(() => {
      tick();
    }, 1000);
  };

  return (
    <div className="Clock-container">
      <div className="Clock">{date.toLocaleTimeString()}</div>
    </div>
  );
}

export default Clock;
