import React from "react";
import "./temp.css";

const Temp = ({ temp, time }) => (
  <div className="temp">
    <div className="current">{temp}°C</div>
    <div className="time">{time}</div>
  </div>
);

export default Temp;
