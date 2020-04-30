import React from "react";
import Destination from "./Destination";
import "./MyDestinations.scss";

const listCountry = [
  {
    id: "ZA",
    time: "15:00",
    destination: "South Africa",
    gate: "A20",
    remarks: "On Time",
  },
  {
    id: "NZ",
    time: "15:20",
    destination: "New Zealand",
    gate: "G12",
    remarks: "On Time",
  },
  {
    id: "TH",
    time: "15:40",
    destination: "Thailand",
    gate: "B14",
    remarks: "On Time",
  },
  {
    id: "BR",
    time: "16:00",
    destination: "Brazil",
    gate: "C21",
    remarks: "On Time",
  },
  {
    id: "MV",
    time: "16:15",
    destination: "Maldives",
    gate: "D09",
    remarks: "On Time",
  },
  {
    id: "PH",
    time: "16:30",
    destination: "Philippines",
    gate: "A12",
    remarks: "On Time",
  },

  {
    id: "GR",
    time: "17:20",
    destination: "Greece",
    gate: "C17",
    remarks: "On Time",
  },
  {
    id: "EG",
    time: "17:40",
    destination: "Egypt",
    gate: "B22",
    remarks: "On Time",
  },
  {
    id: "CV",
    time: "18:00",
    destination: "Cape Verde",
    gate: "F16",
    remarks: "On Time",
  },
];

function MyDestinations() {
  return <Destination listCountry={listCountry} />;
}

export default MyDestinations;
