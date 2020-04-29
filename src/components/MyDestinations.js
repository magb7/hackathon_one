import React from "react";
import Destination from "./Destination";
import "./MyDestinations.scss";

const listCountry = [
  {
    time: "15:00",
    destination: "Spain",
    gate: "A20",
    remarks: "On Time",
  },
  {
    time: "15:20",
    destination: "Portugal",
    gate: "G12",
    remarks: "On Time",
  },
  {
    time: "15:40",
    destination: "France",
    gate: "B14",
    remarks: "On Time",
  },
  {
    time: "16:00",
    destination: "Germany",
    gate: "C21",
    remarks: "On Time",
  },
  {
    time: "16:15",
    destination: "Netherlands",
    gate: "D09",
    remarks: "On Time",
  },
  {
    time: "16:30",
    destination: "Canada",
    gate: "A12",
    remarks: "On Time",
  },
  {
    time: "17:00",
    destination: "Norway",
    gate: "E18",
    remarks: "On Time",
  },
  {
    time: "17:20",
    destination: "Belgium",
    gate: "C17",
    remarks: "On Time",
  },
  {
    time: "17:40",
    destination: "Iceland",
    gate: "B22",
    remarks: "On Time",
  },
  {
    time: "18:00",
    destination: "Switzerland",
    gate: "F16",
    remarks: "On Time",
  },
];

function MyDestinations() {
  return <Destination listCountry={listCountry} />;
}

export default MyDestinations;
