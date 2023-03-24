import React from "react";
import Cash from "components/Cash";
import BoughtProducts from "components/BoughtProducts";
import Change from "components/Change";

import "./controlPanel.scss";

const ControlPanel = () => {
  return (
    <div className="controlPanel">
      <Cash />
      <BoughtProducts />
      <Change />
    </div>
  );
};

export default ControlPanel;
