import React from "react";
import "./change.scss";

const Change = ({ change }) => {
  return (
    <div className="change">
      <h2>Change</h2>
      <button className="button change__button">Pick up the change</button>
      <span>Change:{change}</span>
    </div>
  );
};

export default Change;
