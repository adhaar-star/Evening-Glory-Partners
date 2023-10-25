/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const XHomeindicator = ({ darkTheme, className, homeIndicatorClassName }) => {
  return (
    <div className={`x-homeindicator ${className}`}>
      <div className={`home-indicator dark-theme-${darkTheme} ${homeIndicatorClassName}`} />
    </div>
  );
};

XHomeindicator.propTypes = {
  darkTheme: PropTypes.bool,
};
