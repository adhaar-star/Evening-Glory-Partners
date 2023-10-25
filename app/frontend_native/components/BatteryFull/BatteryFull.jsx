/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const BatteryFull = ({ className }) => {
  return (
    <div className={`battery-full ${className}`}>
      <div className="overlap-group-2">
        <div className="battery-fill" />
        <img className="battery-frame" alt="Battery frame" src="/img/battery-frame-1.svg" />
      </div>
    </div>
  );
};
