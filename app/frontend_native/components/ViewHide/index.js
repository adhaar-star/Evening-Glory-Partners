import React from "react";
import "./style.css";

export const ViewHide = ({ className }) => {
  return (
    <div className={`view-hide ${className}`}>
      <div className="overlap-group">
        <img className="subtract" alt="Subtract" src="/img/subtract-3.svg" />
        <img className="img" alt="Subtract" src="/img/subtract-2.svg" />
        <img className="vector" alt="Vector" src="/img/vector-116-1.svg" />
      </div>
    </div>
  );
};
