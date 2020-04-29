import React from "react";
import Destination from "./Destination";
import "./MyDestinations.scss";

const listCountry = [
  {
    id: "ES",
    time: "15:00",
    destination: "Spain",
    gate: "A20",
    remarks: "On Time",
  },
  {
    id: "PT",
    time: "15:20",
    destination: "Portugal",
    gate: "G12",
    remarks: "On Time",
  },
  {
    id: "FR",
    time: "15:40",
    destination: "France",
    gate: "B14",
    remarks: "On Time",
  },
  {
    id: "DE",
    time: "16:00",
    destination: "Germany",
    gate: "C21",
    remarks: "On Time",
  },
  {
    id: "NL",
    time: "16:15",
    destination: "Netherlands",
    gate: "D09",
    remarks: "On Time",
  },
  {
    id: "CA",
    time: "16:30",
    destination: "Canada",
    gate: "A12",
    remarks: "On Time",
  },
  {
    ID: "NO",
    time: "17:00",
    destination: "Norway",
    gate: "E18",
    remarks: "On Time",
  },
  {
    id: "BE",
    time: "17:20",
    destination: "Belgium",
    gate: "C17",
    remarks: "On Time",
  },
  {
    id: "IS",
    time: "17:40",
    destination: "Iceland",
    gate: "B22",
    remarks: "On Time",
  },
  {
    id: "CH",
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
