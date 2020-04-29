import React from "react";
import Destination from "./Destination";

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
    gate: "A20",
    remarks: "On Time",
  },
  {
    time: "15:40",
    destination: "France",
    gate: "A20",
    remarks: "On Time",
  },
  {
    time: "16:00",
    destination: "Germany",
    gate: "A20",
    remarks: "On Time",
  },
  {
    time: "16:15",
    destination: "Netherlands",
    gate: "A20",
    remarks: "On Time",
  },
  {
    time: "16:30",
    destination: "Canada",
    gate: "A20",
    remarks: "On Time",
  },
  {
    time: "17:00",
    destination: "Norway",
    gate: "A20",
    remarks: "On Time",
  },
  {
    time: "17:20",
    destination: "Belgium",
    gate: "A20",
    remarks: "On Time",
  },
  {
    time: "17:40",
    destination: "Iceland",
    gate: "A20",
    remarks: "On Time",
  },
  {
    time: "18:00",
    destination: "Switzerland",
    gate: "A20",
    remarks: "On Time",
  },
];

function MyDestinations() {
  console.log(listCountry);
  return (
    <div>
      <Destination listCountry={listCountry} />
    </div>
  );
}

export default MyDestinations;
