import React from "react";
import Table from "./Table";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="Homepage-title">
        <h1>Tired of the Covid Lockdown ?</h1>
        <div className="separation"></div>
        <p>Take a virtual trip with our company !</p>
      </div>
      <Table />
      <img className="logo" src="logo.png" alt="logo" />
    </div>
  );
};
export default Homepage;
