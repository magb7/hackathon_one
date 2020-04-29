import React from "react";
import Header from "./Header";
import MyDestinations from "./MyDestinations";
import "./Table.scss";

const Table = () => {
  return (
    <div className="table">
      <Header />
      <MyDestinations />
    </div>
  );
};

export default Table;
